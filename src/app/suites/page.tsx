import { SuiteCard } from "@/components/home/suite-card"

const suites = [
  {
    title: "Presidential Suite",
    description: "Our crown jewel featuring panoramic city views, a private terrace, and dedicated butler service.",
    image: "/images/2024-11-26 (1).jpg",
    price: "$899/night",
    features: ["150 sqm living space", "Private terrace", "Butler service", "Marble bathroom", "Walk-in closet", "Private bar"],
  },
  {
    title: "Executive Suite",
    description: "Sophisticated living space with modern amenities and a dedicated workspace area.",
    image: "/images/2024-11-26 (2).jpg",
    price: "$549/night",
    features: ["90 sqm living space", "City view", "Workstation", "Luxury bedding", "Espresso machine", "Separate living room"],
  },
  {
    title: "Deluxe Suite",
    description: "Elegant comfort with premium finishes and serene city views.",
    image: "/images/2024-11-26 (3).jpg",
    price: "$349/night",
    features: ["65 sqm living space", "City view", "Sitting area", "Rain shower", "King-size bed", "Smart TV"],
  },
  {
    title: "Junior Suite",
    description: "Perfect for short stays with all the essential luxury touches.",
    image: "/images/2024-11-26 (9).jpg",
    price: "$249/night",
    features: ["45 sqm living space", "Garden view", "Cozy seating", "Walk-in shower", "Queen-size bed", "Mini bar"],
  },
  {
    title: "Penthouse Suite",
    description: "Top-floor exclusivity with wraparound terrace and skyline vistas.",
    image: "/images/2024-11-26 (10).jpg",
    price: "$1,299/night",
    features: ["200 sqm living space", "Wraparound terrace", "Private pool", "Panoramic views", "Chef's kitchen", "Wine cellar"],
  },
  {
    title: "Family Suite",
    description: "Spacious interconnected rooms designed for families traveling together.",
    image: "/images/2024-12-02.jpg",
    price: "$449/night",
    features: ["100 sqm living space", "Two bedrooms", "Kid-friendly amenities", "Kitchenette", "Living room", "Balcony"],
  },
]

export default function SuitesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">Accommodation</p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary font-heading mb-4">Our Suites</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover our range of meticulously designed suites, each offering a unique blend of luxury and comfort.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suites.map((suite) => (
              <SuiteCard key={suite.title} {...suite} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
