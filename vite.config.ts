import { componentTagger } from "lovable-tagger";
import { defineConfig } from "vite";
import react  from "@vitejs/plugin-react-swc";
import path   from "path";

export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: `http://localhost:${process.env.API_PORT || 8787}`,
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  publicDir: 'public',  // Vite usa esto por defecto, asegúrate que exista
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }

}));
