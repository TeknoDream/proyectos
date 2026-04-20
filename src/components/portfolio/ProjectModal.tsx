import { X, MapPin, User, Layers, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-card border-border">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur-sm transition-all hover:bg-background"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-video w-full overflow-hidden">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        <div className="px-8 pb-8 -mt-16 relative z-10">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-wider text-primary-foreground mb-4">
            {(project.mainCategoryLabel || project.mainCategory)} · {project.subCategoryLabel || project.subCategory}
          </span>

          <h2 className="font-heading text-3xl font-bold text-card-foreground md:text-4xl">{project.title}</h2>

          <div className="mt-3 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="font-sans text-base">
              {project.location}, {project.country}
            </span>
          </div>

          {project.architect && (
            <div className="mt-2 flex items-center gap-2 text-muted-foreground">
              <User className="h-4 w-4" />
              <span className="font-sans text-base">{project.architect}</span>
            </div>
          )}

          <p className="mt-6 font-sans text-lg leading-relaxed text-card-foreground/80">{project.description}</p>

          {project.products.length > 0 && (
            <div className="mt-8">
              <h3 className="flex items-center gap-2 font-heading text-xl font-semibold text-card-foreground mb-4">
                <Layers className="h-5 w-5 text-primary" />
                Productos Utilizados
              </h3>

              <div className="grid gap-4">
                {project.products.map((product, idx) => (
                  <div key={idx} className="rounded-lg bg-secondary/50 p-5 border border-border">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-heading text-lg font-semibold text-card-foreground">{product.name}</h4>
                        <p className="mt-1 font-sans text-sm text-muted-foreground">
                          Colección {product.collection}
                        </p>
                      </div>
                      <button className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 font-sans text-xs font-medium text-primary transition-colors hover:bg-primary/20">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Ver producto
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div>
                        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                          Formato
                        </span>
                        <p className="mt-0.5 font-sans text-sm font-medium text-card-foreground">
                          {product.format}
                        </p>
                      </div>
                      <div>
                        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                          Acabado
                        </span>
                        <p className="mt-0.5 font-sans text-sm font-medium text-card-foreground">
                          {product.finish}
                        </p>
                      </div>
                      <div>
                        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                          Colección
                        </span>
                        <p className="mt-0.5 font-sans text-sm font-medium text-card-foreground">
                          {product.collection}
                        </p>
                      </div>
                      <div>
                        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                          Origen
                        </span>
                        <p className="mt-0.5 font-sans text-sm font-medium text-card-foreground">
                          {product.origin}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.whatsappUrl || "https://wa.me/"}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-full bg-primary px-6 py-3 text-center font-sans text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg sm:flex-none"
            >
              Solicitar información
            </a>
            <button className="flex-1 rounded-full border border-border bg-transparent px-6 py-3 font-sans text-sm font-medium text-card-foreground transition-all hover:bg-secondary sm:flex-none">
              Ver en InstaTile
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
