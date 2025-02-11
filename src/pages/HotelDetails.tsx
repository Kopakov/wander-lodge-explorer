
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar as CalendarIcon, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock data - in a real app this would come from an API
  const hotel = {
    id: 1,
    title: "Stunning Modern Villa with Ocean View",
    location: "Malibu, California",
    price: 850,
    rating: 4.98,
    description: "Experience luxury living in this stunning modern villa overlooking the Pacific Ocean. Features include an infinity pool, private beach access, and state-of-the-art amenities throughout.",
    amenities: ["Pool", "Beach Access", "WiFi", "Kitchen", "Parking", "Air Conditioning"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    ],
  };

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to search
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gallery */}
          <div className="space-y-4">
            {hotel.images.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${hotel.title} - Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotel.title}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  <span>{hotel.rating}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-b py-6">
              <p className="text-gray-600">{hotel.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {hotel.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-airbnb-primary rounded-full" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">${hotel.price}</span>
                <span className="text-gray-600">per night</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Select dates</label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <Button className="w-full bg-airbnb-primary hover:bg-airbnb-primary/90">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
