# Portafolio de Proyectos - Cerámica Italia

Aplicación React + Vite con API Node/Express para leer proyectos desde Google Sheets.

## Requisitos

- Node.js 18+
- npm
- Archivo de credenciales de Google Service Account

## Configuración

### 1) Clonar e instalar

```bash
git clone https://github.com/TeknoDream/proyectos
cd proyectos
npm install
```

### 2) Variables de entorno

Copia el ejemplo:

```bash
cp .env.example .env
```

Edita `.env` con tus valores. Variables principales:

- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `GOOGLE_SHEETS_SHEET_NAME` (por defecto `Datos`)
- `GOOGLE_CREDENTIALS_PATH`

### 3) Credenciales de Google Sheets

1. Crea/usa una **Service Account** en Google Cloud.
2. Descarga el JSON de credenciales.
3. Coloca el archivo JSON en la **raíz del proyecto** (ejemplo: `./proyectos-493622.json`).
4. Asegúrate de que `.env` tenga:

```env
GOOGLE_CREDENTIALS_PATH=./proyectos-493622.json
```

5. Comparte la hoja con el email de la Service Account (permiso de lectura).

> ⚠️ El JSON de credenciales está ignorado en git y no debe subirse al repositorio.

## Ejecutar en desarrollo

```bash
npm run dev
```

Este comando levanta:

- Frontend Vite (puerto 8080)
- API Express (puerto 8787 por defecto)

## Endpoints API

- `GET /api/proyectos`
  - Retorna solo proyectos con `Estado = Publicar`
- `GET /api/proyectos/categoria/:lugar`
  - Filtra por `Lugar`
- `GET /api/proyectos/subcategoria/:area?categoria=<lugar>`
  - Filtra por `Area de intervencion`
  - `categoria` es opcional para combinar filtros

## Estructura de datos esperada (hoja `Datos`)

Columnas usadas:

- `ID`
- `Estado`
- `Nombre proyecto`
- `Lugar`
- `Area de intervencion`
- `Ciudad`
- `Imagen`
- `Descripcion`
- `Nombre de Contructora`

## Build

```bash
npm run build
npm run preview
```
