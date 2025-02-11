
import { Bed, Home, Mountain, Palmtree, Warehouse } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: 1, name: "All", icon: Home },
  { id: 2, name: "Beach", icon: Palmtree },
  { id: 3, name: "Cabin", icon: Warehouse },
  { id: 4, name: "Mountain", icon: Mountain },
  { id: 5, name: "Rooms", icon: Bed },
];

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="flex gap-8 items-center justify-center py-4 overflow-x-auto scrollbar-none">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
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
