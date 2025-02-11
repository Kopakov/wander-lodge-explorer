
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
}

export const PropertyCard = ({ id, image, title, location, price, rating }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Link to={`/hotel/${id}`} className="block">
      <div className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isLiked ? "fill-airbnb-primary stroke-airbnb-primary" : "stroke-airbnb-dark"
              }`}
            />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-airbnb-dark line-clamp-1">{title}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-airbnb-primary stroke-airbnb-primary" />
              <span className="text-sm">{rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-2">{location}</p>
          <p className="font-semibold">
            ${price} <span className="font-normal text-gray-500">night</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
