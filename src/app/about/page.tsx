import Image from "next/image"
import { Award, Building2, Users, Calendar } from "lucide-react"

const stats = [
  { icon: Building2, value: "50+", label: "Luxury Suites" },
  { icon: Users, value: "10K+", label: "Happy Guests" },
  { icon: Award, value: "15+", label: "Industry Awards" },
  { icon: Calendar, value: "8 Years", label: "Of Excellence" },
]

const values = [
  {
    title: "Uncompromising Quality",
    description: "Every detail, from our linens to our service, meets the highest standards of luxury hospitality.",
  },
  {
    title: "Personalized Service",
    description: "Our team anticipates your needs before you ask, ensuring a seamless and memorable stay.",
  },
  {
    title: "Timeless Elegance",
    description: "Architecture and interiors that blend classic sophistication with modern comfort.",
  },
  {
    title: "Sustainability",
    description: "We are committed to eco-friendly practices without compromising on luxury.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary font-heading mb-4">About J-Dams</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover the story behind one of the most distinguished luxury apartment hotels in the city.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/entrance.jpg"
                alt="J-Dams Hotel Entrance"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-6">
                A Legacy of Luxury
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2018, J-Dams Luxury Apartment Hotel was born from a vision to redefine urban hospitality.
                  Nestled in the heart of the Premium District, our property combines the space and comfort of a
                  private residence with the service and amenities of a world-class hotel.
                </p>
                <p>
                  Our architecture draws inspiration from the golden age of grand hotels, reinterpreted through
                  a contemporary lens. Every suite is a sanctuary of calm, designed with meticulous attention
                  to proportion, light, and material.
                </p>
                <p>
                  Over the years, we have welcomed discerning travelers from around the globe — from business
                  executives to celebrated artists — earning a reputation for discretion, excellence, and
                  warm hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <stat.icon size={36} className="mx-auto mb-3 text-accent" />
                <p className="text-4xl font-bold font-heading mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-primary font-heading mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
