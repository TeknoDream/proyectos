import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className={cn(
        "group cursor-pointer overflow-hidden rounded-lg bg-card opacity-0 animate-fade-in-up",
        "transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      )}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animationFillMode: "forwards"
      }}
    >
      {/* Image Container */}
      <div 
        className={cn(
          "relative overflow-hidden",
          project.aspectRatio === "portrait" && "aspect-[3/4]",
          project.aspectRatio === "landscape" && "aspect-[4/3]",
          project.aspectRatio === "square" && "aspect-square"
        )}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Content on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="mb-2 inline-block w-fit rounded-full bg-primary/90 px-3 py-1 font-sans text-xs font-medium text-primary-foreground">
            {project.products[0]?.name}
          </span>
          <h3 className="font-heading text-xl font-semibold text-background">
            {project.title}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-background/80">
            <MapPin className="h-3.5 w-3.5" />
            <span className="font-sans text-sm">
              {project.location}, {project.country}
            </span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 backdrop-blur-sm">
          <span className="font-sans text-xs font-medium capitalize text-foreground">
            {project.subCategory}
          </span>
        </div>
      </div>

      {/* Info below image (visible without hover) */}
      <div className="p-4 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-heading text-lg font-semibold text-card-foreground">
          {project.title}
        </h3>
        <p className="mt-1 font-sans text-sm text-muted-foreground">
          {project.location}, {project.country}
        </p>
      </div>
    </article>
  );
}
