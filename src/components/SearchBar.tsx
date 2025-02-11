
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-airbnb-primary focus:outline-none focus:ring-2 focus:ring-airbnb-primary/20 shadow-sm transition-all duration-300"
        />
        <button className="absolute right-4 p-2 rounded-full bg-airbnb-primary text-white hover:bg-airbnb-primary/90 transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
