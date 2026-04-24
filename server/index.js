import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import {
  buildProjectsResponse,
  filterByCategory,
  filterBySubcategory,
  getPublishedProjects,
} from "./sheetsService.js";

dotenv.config();

const app = express();
const port = Number(process.env.API_PORT || 8787);

// ============================================
// 🌐 CORS - Permitir peticiones desde el frontend
// ============================================
const allowedOrigins = [
  "http://localhost:8080",
  "http://localhost:3000",
  "https://apps.ceramicaitalia.com",
  "https://ceramicaitalia.com",
  // Agrega más dominios si es necesario
];
app.use(cors({
  origin: (origin, callback) => {
    // Permitir peticiones sin origin (como desde el mismo servidor)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Origen no permitido: ${origin}`));
    }
  },
  credentials: true,
}));



app.use(express.json());
// ============================================
// 🔥 HEALTH CHECK
// ============================================
app.get("/api/health", (_req, res) => {
  console.log('== 🤖 ==  get ==', "get");
  //res.json({ ok: true });
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.get("/api/proyectos", async (_req, res) => {
  try {
    const projects = await getPublishedProjects();
    res.json(buildProjectsResponse(projects));
  } catch (error) {
    console.error("Error al leer proyectos:", error);
    res.status(500).json({
      error: "No se pudieron obtener los proyectos desde Google Sheets",
      details: error instanceof Error ? error.message : "Error desconocido",
    });
  }
});

app.get("/api/proyectos/categoria/:lugar", async (req, res) => {
  console.log('=================== /api/proyectos/categoria/:lugar ======================', "/api/proyectos/categoria/:lugar");
  try {
    const projects = await getPublishedProjects();
    const filtered = filterByCategory(projects, req.params.lugar);
    res.json(buildProjectsResponse(filtered));
  } catch (error) {
    console.error("Error al filtrar por categoría:", error);
    res.status(500).json({
      error: "No se pudieron filtrar proyectos por categoría",
      details: error instanceof Error ? error.message : "Error desconocido",
    });
  }
});

app.get("/api/proyectos/subcategoria/:area", async (req, res) => {
  try {
    console.log('=================== /api/proyectos/subcategoria/ ======================', "/api/proyectos/subcategoria/:area");
    const projects = await getPublishedProjects();
    const filtered = filterBySubcategory(projects, req.params.area, req.query.categoria?.toString());
    res.json(buildProjectsResponse(filtered));
  } catch (error) {
    console.error("Error al filtrar por subcategoría:", error);
    res.status(500).json({
      error: "No se pudieron filtrar proyectos por subcategoría",
      details: error instanceof Error ? error.message : "Error desconocido",
    });
  }
});

// ============================================
// 🎨 SERVIR FRONTEND ESTÁTICO (producción)
// ============================================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, "../dist");

app.use(express.static(distPath));

// Redirigir todas las rutas al index.html (SPA)
//app.get("/*", (_req, res) => {
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// ============================================
// 🚀 INICIAR SERVIDOR
// ============================================

app.listen(port, () => {
  console.log(`======> API de proyectos escuchando en http://localhost:${port}`);
});
