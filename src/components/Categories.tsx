
import { Bed, Home, Mountain, Palmtree, Warehouse } from "lucide-react";
import { useState } from "react";

export type CategoryType = "All" | "Beach" | "Cabin" | "Mountain" | "Rooms";

const categories = [
  { id: 1, name: "All" as CategoryType, icon: Home },
  { id: 2, name: "Beach" as CategoryType, icon: Palmtree },
  { id: 3, name: "Cabin" as CategoryType, icon: Warehouse },
  { id: 4, name: "Mountain" as CategoryType, icon: Mountain },
  { id: 5, name: "Rooms" as CategoryType, icon: Bed },
];

interface CategoriesProps {
  onCategoryChange: (category: CategoryType) => void;
}

export const Categories = ({ onCategoryChange }: CategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState(1);

  const handleCategoryClick = (id: number, name: CategoryType) => {
    setActiveCategory(id);
    onCategoryChange(name);
  };

  return (
    <div className="flex gap-8 items-center justify-center py-4 overflow-x-auto scrollbar-none">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id, category.name)}
            className={`flex flex-col items-center gap-2 px-4 py-2 transition-all duration-300 border-b-2 min-w-[80px] ${
              activeCategory === category.id
                ? "border-airbnb-primary text-airbnb-primary"
                : "border-transparent text-gray-500 hover:border-gray-200"
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-sm whitespace-nowrap">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};
