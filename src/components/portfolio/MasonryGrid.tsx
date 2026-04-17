import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

interface MasonryGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export function MasonryGrid({ projects, onProjectClick }: MasonryGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
          No hay proyectos
        </h3>
        <p className="font-sans text-muted-foreground text-center max-w-md">
          No encontramos proyectos con los filtros seleccionados. 
          Prueba seleccionando otra categoría.
        </p>
      </div>
    );
  }

  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>article]:mb-5">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
          index={index}
        />
      ))}
    </div>
  );
}
