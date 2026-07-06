import { AmenityCard } from "@/components/home/amenity-card"
import { Waves, Dumbbell, Wine, Utensils, Sparkles, GripVertical, Wifi, Car, Snowflake, Tv, Coffee } from "lucide-react"

const amenities = [
  { icon: Waves, title: "Infinity Pool", description: "Skyline-edge heated pool with panoramic city views and poolside service." },
  { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art gym with personal training, yoga studio, and wellness classes." },
  { icon: Wine, title: "Rooftop Bar", description: "Curated cocktails, fine wines, and breathtaking sunset views from the 40th floor." },
  { icon: Utensils, title: "Fine Dining", description: "Michelin-starred cuisine by world-renowned chefs featuring local and international flavors." },
  { icon: Sparkles, title: "Spa & Wellness", description: "Holistic treatments, sauna, steam room, and relaxation therapies for complete rejuvenation." },
  { icon: GripVertical, title: "Concierge Service", description: "24/7 personalized service — from restaurant reservations to exclusive city tours." },
  { icon: Coffee, title: "Café & Lounge", description: "Artisanal coffee, pastries, and light bites in an elegant lounge setting." },
  { icon: Snowflake, title: "Climate Control", description: "Individually controlled air conditioning and heating in every suite for optimal comfort." },
  { icon: Wifi, title: "High-Speed WiFi", description: "Complimentary gigabit internet throughout the property for work or streaming." },
  { icon: Tv, title: "Entertainment", description: "Smart TVs with streaming services, premium channels, and in-room sound systems." },
  { icon: Car, title: "Valet Parking", description: "Secure valet parking with 24/7 surveillance and electric vehicle charging stations." },
  { icon: Coffee, title: "In-Room Dining", description: "24-hour room service with a curated menu of gourmet dishes and beverages." },
]

export default function AmenitiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">Facilities</p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary font-heading mb-4">Amenities</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            World-class facilities designed to make your stay truly unforgettable.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity) => (
              <AmenityCard key={amenity.title} icon={amenity.icon} title={amenity.title} description={amenity.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
