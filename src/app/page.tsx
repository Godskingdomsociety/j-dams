import { HeroSection } from "@/components/home/hero-section"
import { SuiteCard } from "@/components/home/suite-card"
import { AmenityCard } from "@/components/home/amenity-card"
import { GalleryGrid } from "@/components/home/gallery-grid"
import { ContactForm } from "@/components/home/contact-form"
import { CTASection } from "@/components/home/cta-section"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GripVertical, Dumbbell, Wine, Waves, Utensils, Sparkles, Phone, Mail } from "lucide-react"

const suites = [
  {
    title: "Presidential Suite",
    description: "Our crown jewel featuring panoramic city views, a private terrace, and butler service.",
    image: "/images/2024-11-26 (1).jpg",
    price: "$899/night",
    features: ["150 sqm living space", "Private terrace", "Butler service", "Marble bathroom"],
  },
  {
    title: "Executive Suite",
    description: "Sophisticated living space with modern amenities and dedicated workspace.",
    image: "/images/2024-11-26 (2).jpg",
    price: "$549/night",
    features: ["90 sqm living space", "City view", "Workstation", "Luxury bedding"],
  },
  {
    title: "Deluxe Suite",
    description: "Elegant comfort with premium finishes and serene city views.",
    image: "/images/2024-11-26 (3).jpg",
    price: "$349/night",
    features: ["65 sqm living space", "City view", "Sitting area", "Rain shower"],
  },
]

const amenities = [
  { icon: Waves, title: "Infinity Pool", description: "Skyline pool with heated waters and panoramic city views." },
  { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art gym with personal training options." },
  { icon: Wine, title: "Rooftop Bar", description: "Curated cocktails with breathtaking sunset vistas." },
  { icon: Utensils, title: "Fine Dining", description: "Michelin-starred cuisine by world-renowned chefs." },
  { icon: Sparkles, title: "Spa & Wellness", description: "Holistic treatments and relaxation therapies." },
  { icon: GripVertical, title: "Concierge", description: "24/7 personalized service for every need." },
]

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">About J-Dams</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-6">A New Standard in Luxury Living</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since 2018, J-Dams has been redefining urban hospitality. We blend the space and comfort
                of a private residence with the service of a world-class hotel — creating stays that are
                as memorable as they are effortless.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/booking">Book Your Stay</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/2024-11-26 (9).jpg"
                alt="J-Dams Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="suites" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">Our Suites</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-4">Luxury Living Spaces</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each suite is meticulously designed to provide the ultimate comfort and elegance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suites.map((suite) => (
              <SuiteCard key={suite.title} {...suite} />
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">Amenities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-4">Exceptional Facilities</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              World-class amenities designed to make your stay unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity) => (
              <AmenityCard key={amenity.title} icon={amenity.icon} title={amenity.title} description={amenity.description} />
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">Gallery</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-4">A Glimpse of Paradise</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Browse our collection of stunning interiors and breathtaking views.
            </p>
          </div>
          <GalleryGrid />
        </div>
      </section>

      <CTASection />

      <section id="contact" className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">Contact Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                Ready to book or have questions? Our team is here to help you plan the perfect stay.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+234 916 768 2920</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">reservations@j-dams.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <GripVertical size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">123 Luxury Avenue, Premium District</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
