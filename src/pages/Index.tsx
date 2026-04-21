import { useEffect, useMemo, useRef, useState } from "react";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { CategoryFilter } from "@/components/portfolio/CategoryFilter";
import { MasonryGrid } from "@/components/portfolio/MasonryGrid";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { type MainCategory, type SubCategory, type Project } from "@/data/projects";
import { api } from "@/lib/api";
import logoColor from "@/assets/logo-color.png";

interface CategoryOption {
  id: string;
  label: string;
}

interface ProjectsApiResponse {
  projects: Project[];
  meta?: {
    total: number;
    mainCategories: CategoryOption[];
    subCategoriesByMain: Record<string, CategoryOption[]>;
  };
}

const Index = () => {
  const [selectedMain, setSelectedMain] = useState<MainCategory | null>(null);
  const [selectedSub, setSelectedSub] = useState<SubCategory | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [catalog, setCatalog] = useState<{
    mainCategories: CategoryOption[];
    subCategoriesByMain: Record<string, CategoryOption[]>;
  }>({
    mainCategories: [],
    subCategoriesByMain: {},
  });

  const portfolioRef = useRef<HTMLDivElement>(null);

  const fetchProjects = async (endpoint: string) => {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    const payload: ProjectsApiResponse = await response.json();
    return payload;
  };

  useEffect(() => {
    const loadCatalog = async () => {
      try 
      {
        setIsLoading(true);
        setError(null);

        const payload = await fetchProjects(api.projects());

        setProjects(payload.projects || []);

        if (payload.meta) {
          setCatalog({
            mainCategories: payload.meta.mainCategories || [],
            subCategoriesByMain: payload.meta.subCategoriesByMain || {},
          });
        }
      } // Try
      catch (err) 
      {
        console.error("Error cargando proyectos:", err);
        setError("No pudimos cargar los proyectos. Intenta nuevamente.");
      } finally {
        setIsLoading(false);
      }
    };

    loadCatalog();
  }, []);

  useEffect(() => {
    if (!selectedMain && !selectedSub) return;

    const loadFilteredProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);

        let endpoint = api.projects();

        if (selectedSub) {
          endpoint = api.projectsBySubcategory(selectedSub, selectedMain);
        } else if (selectedMain) {
          endpoint = api.projectsByCategory(selectedMain);
        }

        const payload = await fetchProjects(endpoint);
        setProjects(payload.projects || []);
      } catch (err) {
        console.error("Error filtrando proyectos:", err);
        setError("No pudimos aplicar ese filtro. Intenta nuevamente.");
      } finally {
        setIsLoading(false);
      }
    };

    loadFilteredProjects();
  }, [selectedMain, selectedSub]);

  const filteredProjects = useMemo(() => projects, [projects]);

  const selectedMainLabel = useMemo(() => {
    if (!selectedMain) return null;
    return catalog.mainCategories.find((c) => c.id === selectedMain)?.label || selectedMain;
  }, [catalog.mainCategories, selectedMain]);

  const handleExplore = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleMainChange = (main: MainCategory | null) => {
    setSelectedMain(main);
    if (!main) {
      setSelectedSub(null);
      setIsLoading(true);
      fetchProjects(api.projects())
        .then((payload) => {
          setProjects(payload.projects || []);
        })
        .catch((err) => {
          console.error("Error reestableciendo proyectos:", err);
          setError("No pudimos recargar los proyectos.");
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onExplore={handleExplore} />

      <section ref={portfolioRef} className="scroll-mt-0">
        <CategoryFilter
          selectedMain={selectedMain}
          selectedSub={selectedSub}
          mainCategories={catalog.mainCategories}
          subCategoriesByMain={catalog.subCategoriesByMain}
          onMainChange={handleMainChange}
          onSubChange={setSelectedSub}
        />

        <div className="container py-10">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                {selectedMainLabel ? `Proyectos de ${selectedMainLabel}` : "Todos los Proyectos"}
              </h2>
              <p className="mt-1 font-sans text-muted-foreground">
                {isLoading
                  ? "Cargando proyectos..."
                  : `${filteredProjects.length} proyecto${filteredProjects.length !== 1 ? "s" : ""} encontrado${filteredProjects.length !== 1 ? "s" : ""}`}
              </p>
              {error && <span className="mt-2 block text-sm text-destructive">{error}</span>}
            </div>
          </div>

          <MasonryGrid projects={filteredProjects} onProjectClick={handleProjectClick} />
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="container text-center">
          <img src={logoColor} alt="Cerámica Italia" className="h-12 w-auto mx-auto" />
          <p className="mt-3 font-sans text-sm text-muted-foreground">
            Inspirados en la vida real. Diseño, innovación y calidad desde 1990.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="#" className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary">
              Productos
            </a>
            <a href="#" className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary">
              InstaTile
            </a>
            <a href="#" className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary">
              Contacto
            </a>
          </div>
          <p className="mt-8 font-sans text-xs text-muted-foreground">
            © 2025 Cerámica Italia. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default Index;
