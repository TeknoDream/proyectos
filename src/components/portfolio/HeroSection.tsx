import { ArrowDown } from "lucide-react";
import { BkPortada } from "@/data/projects";
import logoWhite from "@/assets/logo-white.png";

interface HeroSectionProps {
  onExplore: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BkPortada}
          alt="Diseño de interiores con cerámica premium"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span 
          className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/80 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Portafolio de Proyectos
        </span>
        
        <h1 
          className="mb-6 font-heading text-5xl font-semibold leading-tight text-primary-foreground opacity-0 animate-fade-in-up md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.4s" }}
        >
          Inspirados en<br />
          <span className="italic">la vida real</span>
        </h1>
        
        <p 
          className="mb-10 max-w-xl font-sans text-lg text-primary-foreground/90 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Descubre cómo nuestras cerámicas transforman espacios en obras de arte. 
          Diseño, innovación y calidad en cada proyecto.
        </p>

        <button
          onClick={onExplore}
          className="group flex flex-col items-center gap-3 opacity-0 animate-fade-in transition-all hover:scale-105"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="font-sans text-sm font-medium uppercase tracking-wider text-primary-foreground/90">
            Explora nuestros proyectos
          </span>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/30 transition-all group-hover:border-primary-foreground/60 group-hover:bg-primary-foreground/10">
            <ArrowDown className="h-5 w-5 text-primary-foreground animate-bounce" />
          </div>
        </button>
      </div>

      {/* Brand */}
      <div className="absolute left-6 top-6 z-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <img 
          src={logoWhite} 
          alt="Cerámica Italia" 
          className="h-10 md:h-12 w-auto"
        />
      </div>
    </section>
  );
}
