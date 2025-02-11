
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type PriceRange = "0-100" | "100-200" | "200-500" | "500+";

interface SearchBarProps {
  onLocationChange: (location: string) => void;
  onPriceRangeChange: (range: PriceRange) => void;
}

export const SearchBar = ({ onLocationChange, onPriceRangeChange }: SearchBarProps) => {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              placeholder="Where are you going?"
              className="mt-1"
              onChange={(e) => onLocationChange(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="price">Price Range</Label>
            <Select onValueChange={(value: PriceRange) => onPriceRangeChange(value)}>
              <SelectTrigger id="price" className="mt-1">
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-100">$0 - $100</SelectItem>
                <SelectItem value="100-200">$100 - $200</SelectItem>
                <SelectItem value="200-500">$200 - $500</SelectItem>
                <SelectItem value="500+">$500+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative">
            <Label>&nbsp;</Label>
            <button className="mt-1 w-full px-6 py-2 rounded-lg bg-airbnb-primary text-white hover:bg-airbnb-primary/90 transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
