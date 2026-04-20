import fs from "fs";
import path from "path";
import { google } from "googleapis";
import {
  buildWhatsAppUrl,
  normalizeHeader,
  normalizeText,
  slugify,
  toTitleCase,
} from "./utils.js";

const CACHE_TTL_MS = 60_000;

let cache = {
  lastFetchedAt: 0,
  projects: [],
};

const resolveCredentialsPath = () => {
  const credentialsPath = process.env.GOOGLE_CREDENTIALS_PATH;

  if (!credentialsPath) {
    throw new Error("Falta GOOGLE_CREDENTIALS_PATH en variables de entorno.");
  }

  const absolutePath = path.isAbsolute(credentialsPath)
    ? credentialsPath
    : path.resolve(process.cwd(), credentialsPath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`No se encontró el archivo de credenciales en: ${absolutePath}`);
  }

  return absolutePath;
};

const toRowObject = (headers, row) =>
  headers.reduce((acc, header, index) => {
    acc[header] = row[index] ?? "";
    return acc;
  }, {});

const getDriveDirectLink = (url) => {
  if (!url) return '';
  // Extrae el ID del archivo de la URL de Drive
  const match = url.match(/[-\w]{25,}/);
  if (match && url.includes('drive.google.com')) {
    return `https://drive.google.com/uc?export=view&id=${match[0]}`;
    //https://lh3.googleusercontent.com/u/0/d/1ucHOU98kpCMjJAN3qhXKdqbAEPU5CmHp
  }
  return url; // Si no es de Drive, devuelve la original
};

const pickValue = (row, keys) => {
  for (const key of keys) {
    if (row[key]) return row[key].toString().trim();
  }
  return "";
};

const mapMainCategory = (rawLugar) => {
  const normalized = normalizeText(rawLugar);

  if (normalized.includes("oficina")) return "oficina";
  if (normalized.includes("social")) return "social";
  if (normalized.includes("vivienda") || normalized.includes("hogar")) return "vivienda";

  return slugify(rawLugar) || "sin-categoria";
};

const mapSubCategory = (rawArea) => slugify(rawArea) || "sin-subcategoria";

const mapProject = (row, index) => {
  const id = pickValue(row, ["id"]) || `${index + 1}`;
  const title = pickValue(row, ["nombre proyecto", "proyecto", "nombre"]);
  const lugar = pickValue(row, ["lugar", "categoria", "categoría"]);
  const area = pickValue(row, ["area de intervencion", "area de intervención", "subcategoria", "subcategoría"]);
  const ciudad = pickValue(row, ["ciudad"]);
  //const image = getDriveDirectLink(pickValue(row, ["imagen", "url imagen", "imagen url"]));
  const image = getDriveDirectLink(pickValue(row, ["imagen", "url imagen", "imagen url"]));
  const description = pickValue(row, ["descripcion", "descripción"]);
  const constructora = pickValue(row, ["nombre de contructora", "nombre de constructora", "constructora"]);

  const mainCategory = mapMainCategory(lugar);
  const subCategory = mapSubCategory(area);

  return {
    id,
    title: title || `Proyecto ${id}`,
    location: ciudad || "",
    country: process.env.DEFAULT_PROJECT_COUNTRY || "Colombia",
    mainCategory,
    mainCategoryLabel: lugar || toTitleCase(mainCategory.replace(/-/g, " ")),
    subCategory,
    subCategoryLabel: area || toTitleCase(subCategory.replace(/-/g, " ")),
    image,
    aspectRatio: "landscape",
    products: [],
    architect: constructora || undefined,
    description: description || "",
    whatsappUrl: buildWhatsAppUrl(process.env.WHATSAPP_PHONE, title || `Proyecto ${id}`),
  };
};

const createMeta = (projects) => {
  const mainMap = new Map();
  const subMap = {};

  projects.forEach((project) => {
    if (!mainMap.has(project.mainCategory)) {
      mainMap.set(project.mainCategory, project.mainCategoryLabel);
    }

    if (!subMap[project.mainCategory]) {
      subMap[project.mainCategory] = new Map();
    }

    if (!subMap[project.mainCategory].has(project.subCategory)) {
      subMap[project.mainCategory].set(project.subCategory, project.subCategoryLabel);
    }
  });

  const mainCategories = Array.from(mainMap.entries()).map(([id, label]) => ({ id, label }));

  const subCategoriesByMain = Object.fromEntries(
    Object.entries(subMap).map(([main, subs]) => [
      main,
      Array.from(subs.entries()).map(([id, label]) => ({ id, label })),
    ]),
  );

  return {
    total: projects.length,
    mainCategories,
    subCategoriesByMain,
  };
};

export const getPublishedProjects = async () => {
  const now = Date.now();
  if (cache.projects.length > 0 && now - cache.lastFetchedAt < CACHE_TTL_MS) {
    return cache.projects;
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: resolveCredentialsPath(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Datos";

  if (!spreadsheetId) {
    throw new Error("Falta GOOGLE_SHEETS_SPREADSHEET_ID en variables de entorno.");
  }

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A1:Z`,
  });

  const values = response.data.values || [];

  if (values.length < 2) {
    cache = { projects: [], lastFetchedAt: now };
    return [];
  }

  const headers = values[0].map((h) => normalizeHeader(h));

  console.log('====== headers ====== ', headers);

  const rows = values.slice(1).map((row) => toRowObject(headers, row));
  
  const publishedRows = rows.filter((row) => {
    const estado = pickValue(row, ["estado"]);
    return normalizeText(estado) === "publicar";
  });

  const projects = publishedRows
    .map(mapProject)
    .filter((project) => project.image && project.mainCategory && project.subCategory);

  cache = {
    projects,
    lastFetchedAt: now,
  };


  return projects;
};

export const buildProjectsResponse = (projects) => ({
  projects,
  meta: createMeta(projects),
});

export const filterByCategory = (projects, category) => {
  const normalizedCategory = normalizeText(category);
  return projects.filter((project) => normalizeText(project.mainCategory) === normalizedCategory);
};

export const filterBySubcategory = (projects, subcategory, category) => {
  const normalizedSubcategory = normalizeText(subcategory);
  const normalizedCategory = normalizeText(category || "");

  console.log('====== normalizedSubcategory ====== ', subcategory);
  console.log('====== normalizedCategory ====== ', category);

  return projects.filter((project) => {
    const matchesSub = normalizeText(project.subCategory) === normalizedSubcategory;

    if (!normalizedCategory) return matchesSub;

    return matchesSub && normalizeText(project.mainCategory) === normalizedCategory;
  });
};
