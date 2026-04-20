import dotenv from "dotenv";
import express from "express";
import {
  buildProjectsResponse,
  filterByCategory,
  filterBySubcategory,
  getPublishedProjects,
} from "./sheetsService.js";

dotenv.config();

const app = express();
const port = Number(process.env.API_PORT || 8787);

app.use(express.json());

app.get("/api/health", (_req, res) => {
   console.log('=================== get ======================', "get");
  res.json({ ok: true });
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

app.listen(port, () => {
  console.log(`======> API de proyectos escuchando en http://localhost:${port}`);
});
