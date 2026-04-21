const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";


const getApiUrl = (path: string) => `${API_BASE_URL}${path}`;

export const api = {
  projects: () => getApiUrl("/api/proyectos"),
  projectsByCategory: (category: string) =>
    getApiUrl(`/api/proyectos/categoria/${encodeURIComponent(category)}`),
  projectsBySubcategory: (subcategory: string, category?: string | null) => {
    const url = new URL(
      getApiUrl(`/api/proyectos/subcategoria/${encodeURIComponent(subcategory)}`),
      window.location.origin,
    );

    if (category) {
      url.searchParams.set("categoria", category);
    }

    return API_BASE_URL ? url.toString() : `${url.pathname}${url.search}`;
  },
};

