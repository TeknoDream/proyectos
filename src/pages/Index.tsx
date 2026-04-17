import { useState, useRef, useMemo } from "react";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { CategoryFilter } from "@/components/portfolio/CategoryFilter";
import { MasonryGrid } from "@/components/portfolio/MasonryGrid";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { projects, type MainCategory, type SubCategory, type Project } from "@/data/projects";
import logoColor from "@/assets/logo-color.png";

const Index = () => {
  const [selectedMain, setSelectedMain] = useState<MainCategory | null>(null);
  const [selectedSub, setSelectedSub] = useState<SubCategory | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const portfolioRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (selectedMain && project.mainCategory !== selectedMain) return false;
      if (selectedSub && project.subCategory !== selectedSub) return false;
      return true;
    });
  }, [selectedMain, selectedSub]);

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

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onExplore={handleExplore} />

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="scroll-mt-0">
        {/* Category Filter */}
        <CategoryFilter
          selectedMain={selectedMain}
          selectedSub={selectedSub}
          onMainChange={setSelectedMain}
          onSubChange={setSelectedSub}
        />

        {/* Projects Grid */}
        <div className="container py-10">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                {selectedMain 
                  ? `Proyectos de ${selectedMain.charAt(0).toUpperCase() + selectedMain.slice(1)}`
                  : "Todos los Proyectos"
                }
              </h2>
              <p className="mt-1 font-sans text-muted-foreground">
                {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? "s" : ""} encontrado{filteredProjects.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <MasonryGrid 
            projects={filteredProjects} 
            onProjectClick={handleProjectClick}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="container text-center">
          <img src={logoColor} alt="Cerámica Italia" className="h-12 w-auto mx-auto" />
          <p className="mt-3 font-sans text-sm text-muted-foreground"> Inspirados en la vida real. Diseño, innovación y calidad desde 1990. </p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="#" className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"> Productos </a>
            <a href="#" className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"> InstaTile </a>
            <a href="#" className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"> Contacto </a>
          </div>
          <p className="mt-8 font-sans text-xs text-muted-foreground"> © 2025 Cerámica Italia. Todos los derechos reservados. </p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
};

export default Index;
