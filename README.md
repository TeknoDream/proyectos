# 🔴 Cerámica Italia .::. Proyectos

<div align="center">

![Cerámica Italia](https://img.shields.io/badge/Cer%C3%A1mica_Italia-FF0000?style=for-the-badge&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

**Catálogo interactivo de proyectos arquitectónicos con búsqueda semántica impulsada por IA**

[🌐 Ver Demo](https://apps.ceramicaitalia.com/proyectos/) · [📋 Reportar Issue](https://github.com/TeknoDream/proyectos/issues) · [🔧 Solicitar Feature](https://github.com/TeknoDream/proyectos/issues)

</div>

---

## 📑 Tabla de Contenidos

- [🎯 Visión General](#-visión-general)
- [✨ Características](#-características)
- [🏗️ Arquitectura](#️-arquitectura)
- [🚀 Instalación Rápida](#-instalación-rápida)
- [⚙️ Configuración](#️-configuración)
- [🔧 Desarrollo](#-desarrollo)
- [📦 Despliegue con Docker](#-despliegue-con-docker)
- [🔌 Integración con Google Sheets](#-integración-con-google-sheets)
- [🤖 Búsqueda Semántica con IA](#-búsqueda-semántica-con-ia)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔐 Variables de Entorno](#-variables-de-entorno)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📝 Licencia](#-licencia)

---

## 🎯 Visión General

**Cerámica Italia .::. Proyectos** es una aplicación web moderna que presenta el portafolio de proyectos arquitectónicos de Cerámica Italia. Los proyectos se clasifican en tres categorías principales:

| 🏢 **Oficina** | 🎉 **Social** | 🏠 **Hogar** |
|:---:|:---:|:---:|
| Espacios corporativos y comerciales | Áreas recreativas y de esparcimiento | Hogares y residencias |

Cada proyecto incluye:
- 🖼️ Imágenes de alta calidad
- 📝 Descripción detallada
- 📍 Ciudad de instalación
- 🏗️ Constructora responsable
- 💬 Botón de contacto vía WhatsApp

---

## ✨ Características

### 🎨 Frontend
- ⚡ **Vite + React + TypeScript** — Rendimiento óptimo
- 🎨 **Tailwind CSS + shadcn/ui** — Diseño moderno y responsive
- 🖼️ **Masonry Grid** — Visualización tipo Pinterest
- 🔍 **Filtros dinámicos** — Por categoría y subcategoría
- 📱 **Mobile-first** — Experiencia fluida en todos los dispositivos

### 🔧 Backend
- 🚀 **Node.js + Express** — API RESTful
- 📊 **Google Sheets API** — Fuente de datos dinámica
- 🧠 **Embeddings + Vector Search** — Búsqueda semántica con IA
- 🐳 **Docker** — Contenerización completa

### 🤖 Inteligencia Artificial
- 🔤 **Búsqueda en lenguaje natural**
- 🎯 **Resultados relevantes por similitud semántica**
- 📈 **Ranking híbrido** — Combinación de filtros + IA

---

## 🏗️ Arquitectura

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   👤 Usuario    │────▶│  🌐 Frontend    │────▶│  ⚙️ Backend API │
│                 │     │  React + Vite   │     │  Node.js/Express│
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                              ┌──────────────────────────┘
                              ▼
                    ┌─────────────────┐
                    │  🧠 Vector DB   │
                    │  PostgreSQL +   │
                    │  pgvector       │
                    └────────┬────────┘
                             │
                    ┌────────┴────────┐
                    │                 │
                    ▼                 ▼
           ┌─────────────┐   ┌─────────────┐
           │ 📊 Google   │   │ 🤖 Gemini   │
           │   Sheets    │   │ Embeddings  │
           └─────────────┘   └─────────────┘
```

---

## 🚀 Instalación Rápida

### 📋 Prerrequisitos

| Herramienta | Versión | Enlace |
|-------------|---------|--------|
| Node.js | ≥ 18.x | [Descargar](https://nodejs.org/) |
| npm | ≥ 9.x | Incluido con Node.js |
| Docker | ≥ 24.x | [Descargar](https://docs.docker.com/get-docker/) |
| Docker Compose | ≥ 2.x | [Guía](https://docs.docker.com/compose/install/) |

### 🔄 Clonar el repositorio

```bash
# Clonar con HTTPS
git clone https://github.com/TeknoDream/proyectos.git

# O con SSH
git clone git@github.com:TeknoDream/proyectos.git

# Entrar al directorio
cd proyectos
```

### 📦 Instalar dependencias

```bash
# Instalar dependencias del frontend
npm install

# Instalar dependencias CORS para el servidor
npm install cors
npm install -D @types/cors

# Instalar dependencias del backend
cd backend && npm install && cd ..
```

---

## ⚙️ Configuración

### 1️⃣ Crear archivo de entorno

```bash
cp .env.example .env
```

### 2️⃣ Configurar variables (ver sección [Variables de Entorno](#-variables-de-entorno))

### 3️⃣ Configurar Google Sheets API

> 📖 **Guía detallada en:** [🔌 Integración con Google Sheets](#-integración-con-google-sheets)

---

## 🔧 Desarrollo

### 🖥️ Modo desarrollo (con proxy Vite)

```bash
# Terminal 1 — Backend
npm run dev:backend

# Terminal 2 — Frontend
npm run dev
```

El frontend estará en: [http://localhost:8080](http://localhost:8080)  
El backend estará en: [http://localhost:8787](http://localhost:8787)

### 🏗️ Compilar para producción

```bash
# Compilar frontend
npm run build

# Los archivos se generan en /dist
```

### 🧪 Verificar build localmente

```bash
# Servir build estático
npx serve dist
```

---

## 📦 Despliegue con Docker

### 🐳 Construir y levantar

```bash
# Construir imágenes
docker-compose build

# Levantar servicios
docker-compose up -d

# Ver logs
docker-compose logs -f
```

### 🐳 En producción (Rocky Linux)

```bash
# Clonar repositorio
git clone https://github.com/TeknoDream/proyectos.git /opt/proyectos
cd /opt/proyectos

# Configurar variables de entorno
nano .env

# Levantar con Docker Compose
docker-compose -f docker-compose.prod.yml up -d

# Verificar estado
docker-compose ps
```

### 🔧 Comandos útiles de Docker

```bash
# Ver logs
docker-compose logs -f app
docker-compose logs -f backend

# Reiniciar servicios
docker-compose restart

# Actualizar imagen
docker-compose pull && docker-compose up -d

# Entrar al contenedor
docker exec -it proyectos-app sh
docker exec -it proyectos-backend sh
```

---

## 🔌 Integración con Google Sheets

### 📋 Resumen del proceso

Para conectar la aplicación con Google Sheets como fuente de datos, necesitas:

1. ✅ **Proyecto en Google Cloud Console**
2. ✅ **Google Sheets API habilitada**
3. ✅ **Cuenta de servicio (Service Account)**
4. ✅ **Archivo JSON de credenciales**
5. ✅ **Hoja de cálculo compartida**

### 🚀 Guía paso a paso

#### Paso 1: Crear proyecto en Google Cloud

🔹 Ve a: [console.cloud.google.com](https://console.cloud.google.com/)  
🔹 Haz clic en el **selector de proyectos** (arriba a la izquierda)  
🔹 Clic en **"Nuevo proyecto"**  
🔹 Nombre: `Cerámica Italia Proyectos`  
🔹 Clic en **"Crear"**

#### Paso 2: Habilitar Google Sheets API

🔹 Con tu proyecto seleccionado, ve a: [console.cloud.google.com/apis/library](https://console.cloud.google.com/apis/library)  
🔹 Busca **"Google Sheets API"**  
🔹 Haz clic en ella → **"Habilitar"**

#### Paso 3: Crear Service Account

🔹 Ve a: [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)  
🔹 **"Crear credenciales"** → **"Cuenta de servicio"**  
🔹 Nombre: `sheets-reader`  
🔹 **"Crear y continuar"**  
🔹 Rol: **"Editor"** (o vacío)  
🔹 **"Continuar"** → **"Listo"**

#### Paso 4: Descargar JSON de credenciales

🔹 En credenciales, busca tu cuenta de servicio  
🔹 Haz clic en el **email** (ej: `sheets-reader@tu-proyecto.iam.gserviceaccount.com`)  
🔹 Pestaña **"Claves"**  
🔹 **"Agregar clave"** → **"Crear clave nueva"**  
🔹 Selecciona **JSON** → **"Crear"**  
🔹 📥 **Guarda el archivo descargado en un lugar seguro**

#### Paso 5: Compartir tu Google Sheet

🔹 Abre el archivo JSON descargado  
🔹 Copia el valor de **`client_email`**  
🔹 Abre tu Google Sheet con los proyectos  
🔹 Clic en **"Compartir"** (arriba a la derecha)  
🔹 Pega el email del Service Account  
🔹 Permisos: **"Lector"** (o "Editor" para escritura futura)  
🔹 ☐ **Desmarca** "Notificar a las personas"  
🔹 **"Compartir"**

#### Paso 6: Obtener el ID de la hoja

🔹 Abre tu Google Sheet  
🔹 La URL se ve así:
```
https://docs.google.com/spreadsheets/d/1ABC123xyz666/edit
```
🔹 Copia la parte entre **`/d/`** y **`/edit`**  
🔹 Ese es tu **`SHEET_ID`**

### 📊 Estructura esperada de la hoja

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| **Estado** | Visibilidad del proyecto | `Publicar` / `No publicar` |
| **Nombre del proyecto** | Título del proyecto | `Torre Empresarial Norte` |
| **Lugar** | Categoría principal | `Oficina` / `Social` / `Hogar` |
| **Área de intervención** | Subcategoría | `Baño`, `Piscina`, `Sala` |
| **Ciudad** | Ubicación del proyecto | `Bogotá`, `Medellín` |
| **Imagen** | URL de la imagen | `https://drive.google.com/...` |
| **Descripción** | Detalles del proyecto | Texto descriptivo completo |
| **Nombre constructora** | Empresa responsable | `Constructora XYZ` |

---

## 🤖 Búsqueda Semántica con IA

### 🎯 Cómo funciona

```
Usuario escribe: "baños modernos en Medellín para hogar"
         │
         ▼
┌─────────────────┐
│  Generar        │
│  embedding de   │
│  la consulta    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Comparar con   │
│  embeddings de  │
│  500 proyectos  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Filtrar por:   │
│  • Estado =     │
│    "Publicar"   │
│  • Lugar =      │
│    "Hogar"   │
│  • Ciudad =     │
│    "Medellín"   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Ranking        │
│  híbrido        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Mostrar top    │
│  resultados     │
└─────────────────┘
```

### 🔧 Activar búsqueda semántica

1. Configura tu modelo de embeddings en `.env`:
```env
EMBEDDING_MODEL=gemini-embedding-exp-03-07
GEMINI_API_KEY=tu_api_key
```

2. Ejecuta la generación de embeddings:
```bash
npm run generate-embeddings
```

3. La búsqueda automáticamente usará vector search

---

## 📁 Estructura del Proyecto

```
proyectos/
├── 📁 backend/                 # API Node.js/Express
│   ├── 📁 src/
│   │   ├── 📁 config/         # Configuraciones
│   │   ├── 📁 routes/         # Endpoints API
│   │   ├── 📁 services/       # Lógica de negocio
│   │   ├── 📁 models/         # Modelos de datos
│   │   └── 📄 index.ts        # Punto de entrada
│   ├── 📄 package.json
│   └── 📄 Dockerfile
│
├── 📁 src/                     # Frontend React
│   ├── 📁 assets/             # Imágenes, logos
│   ├── 📁 components/         # Componentes UI
│   │   └── 📁 portfolio/      # Componentes del catálogo
│   ├── 📁 data/               # Tipos y datos estáticos
│   ├── 📁 hooks/              # Custom hooks
│   ├── 📁 lib/                # Utilidades (API, etc.)
│   └── 📄 main.tsx            # Punto de entrada
│
├── 📁 public/                  # Assets estáticos
├── 📄 .env                     # Variables de entorno
├── 📄 .env.example             # Plantilla de variables
├── 📄 docker-compose.yml       # Docker desarrollo
├── 📄 docker-compose.prod.yml  # Docker producción
├── 📄 vite.config.ts           # Configuración Vite
├── 📄 tailwind.config.ts       # Configuración Tailwind
├── 📄 package.json
└── 📄 README.md               # ← Este archivo
```

---

## 🔐 Variables de Entorno

### 📄 `.env` — Desarrollo

```env
# ============================================
# 🔧 SERVIDOR
# ============================================
API_PORT=8787

# ============================================
# 📊 GOOGLE SHEETS
# ============================================
GOOGLE_SHEETS_SPREADSHEET_ID=1hCI-sL-PNmG2ZZZZZZZva2IQ5eDyDfpGFgoVwPY
GOOGLE_SHEETS_SHEET_NAME=Datos
GOOGLE_CREDENTIALS_PATH=./proyectos-493622.json

# ============================================
# 🌍 CONFIGURACIÓN GENERAL
# ============================================
DEFAULT_PROJECT_COUNTRY=Colombia
WHATSAPP_PHONE=573001234567

# ============================================
# 🌐 FRONTEND (desarrollo: vacío = proxy Vite)
# ============================================
VITE_API_BASE_URL=
```

### 📄 `.env.production` — Producción

```env
# ============================================
# 🔧 SERVIDOR
# ============================================
API_PORT=8787

# ============================================
# 📊 GOOGLE SHEETS
# ============================================
GOOGLE_SHEETS_SPREADSHEET_ID=1hCI-sL-PNmG2ZZZZZZZva2IQ5eDyDfpGFgoVwPY
GOOGLE_SHEETS_SHEET_NAME=Datos
GOOGLE_CREDENTIALS_PATH=./proyectos-493622.json

# ============================================
# 🌍 CONFIGURACIÓN GENERAL
# ============================================
DEFAULT_PROJECT_COUNTRY=Colombia
WHATSAPP_PHONE=573001234567

# ============================================
# 🌐 FRONTEND (producción: URL completa o ruta)
# ============================================
# Opción A: Mismo dominio, ruta separada
VITE_API_BASE_URL=/proyectos-api

# Opción B: Subdominio propio
# VITE_API_BASE_URL=https://api.ceramicaitalia.com

# Opción C: Dentro de apps.ceramicaitalia.com
# VITE_API_BASE_URL=https://apps.ceramicaitalia.com/proyectos-api
```

### 📄 Variables opcionales para IA

```env
# ============================================
# 🤖 EMBEDDINGS Y BÚSQUEDA SEMÁNTICA
# ============================================
GEMINI_API_KEY=tu_api_key_aqui
EMBEDDING_MODEL=gemini-embedding-exp-03-07

# ============================================
# 🗄️ BASE DE DATOS (para vector search)
# ============================================
DATABASE_URL=postgresql://user:pass@localhost:5432/proyectos
```

---

## 🛠️ Stack Tecnológico

### 🎨 Frontend
| Tecnología | Propósito |
|------------|-----------|
| ⚛️ React 18 | UI declarativa |
| 🔷 TypeScript | Tipado estático |
| ⚡ Vite | Build tool ultrarrápido |
| 🎨 Tailwind CSS | Estilos utilitarios |
| 🧩 shadcn/ui | Componentes accesibles |
| 🔄 React Router | Navegación SPA |

### 🔧 Backend
| Tecnología | Propósito |
|------------|-----------|
| 🟢 Node.js | Runtime JavaScript |
| 🚀 Express.js | Framework web |
| 📊 Google Sheets API | Fuente de datos |
| 🧠 Gemini API | Embeddings para IA |

### 🗄️ Base de Datos
| Tecnología | Propósito |
|------------|-----------|
| 🐘 PostgreSQL | Datos estructurados |
| 📐 pgvector | Búsqueda vectorial |

### 🚀 DevOps
| Tecnología | Propósito |
|------------|-----------|
| 🐳 Docker | Contenerización |
| 🐧 Rocky Linux | Servidor producción |

---

## 📝 Licencia

<div align="center">

Este proyecto es propiedad de **Cerámica Italia**.

🔴 **Uso interno exclusivo.**

</div>

---

<div align="center">

### 🔴 Cerámica Italia

**Inspirados en la vida real. Diseño, innovación y calidad desde 1990.**

[🌐 Web](https://www.ceramicaitalia.com) · [📸 Instagram](https://instagram.com/ceramicaitalia) · [📘 Facebook](https://facebook.com/ceramicaitalia)

</div>
