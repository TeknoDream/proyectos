import { cn } from "@/lib/utils";
import type { MainCategory, SubCategory } from "@/data/projects";

interface CategoryOption {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  selectedMain: MainCategory | null;
  selectedSub: SubCategory | null;
  mainCategories: CategoryOption[];
  subCategoriesByMain: Record<string, CategoryOption[]>;
  onMainChange: (category: MainCategory | null) => void;
  onSubChange: (category: SubCategory | null) => void;
}

export function CategoryFilter({
  selectedMain,
  selectedSub,
  mainCategories,
  subCategoriesByMain,
  onMainChange,
  onSubChange,
}: CategoryFilterProps) {
  const handleMainClick = (category: MainCategory) => {
    if (selectedMain === category) {
      onMainChange(null);
      onSubChange(null);
    } else {
      onMainChange(category);
      onSubChange(null);
    }
  };

  const handleSubClick = (category: SubCategory) => {
    if (selectedSub === category) {
      onSubChange(null);
    } else {
      onSubChange(category);
    }
  };

  const availableSubcategories = selectedMain ? subCategoriesByMain[selectedMain] || [] : [];

  return (
    <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container py-6">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <button
            onClick={() => {
              onMainChange(null);
              onSubChange(null);
            }}
            className={cn(
              "px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300",
              !selectedMain
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-accent",
            )}
          >
            Todos
          </button>

          {mainCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleMainClick(category.id)}
              className={cn(
                "px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 flex items-center gap-2",
                selectedMain === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-accent",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {selectedMain && availableSubcategories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 animate-fade-in">
            {availableSubcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => handleSubClick(sub.id)}
                className={cn(
                  "px-4 py-2 rounded-full font-sans text-xs font-medium transition-all duration-300",
                  selectedSub === sub.id
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
