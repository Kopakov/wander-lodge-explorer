
import { Categories } from "@/components/Categories";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchBar } from "@/components/SearchBar";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    title: "Stunning Modern Villa with Ocean View",
    location: "Malibu, California",
    price: 850,
    rating: 4.98,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "Luxurious Beachfront Paradise",
    location: "Miami Beach, Florida",
    price: 650,
    rating: 4.95,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    title: "Cozy Mountain Retreat",
    location: "Aspen, Colorado",
    price: 450,
    rating: 4.92,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    title: "Elegant Downtown Penthouse",
    location: "New York City, New York",
    price: 950,
    rating: 4.97,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    title: "Modern Urban Loft",
    location: "San Francisco, California",
    price: 550,
    rating: 4.90,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
    title: "Charming Historic Cottage",
    location: "Charleston, South Carolina",
    price: 380,
    rating: 4.93,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-airbnb-light py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-airbnb-dark mb-8 animate-fadeIn">
            Find your next stay
          </h1>
          <SearchBar />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Categories />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
