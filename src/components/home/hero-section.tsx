import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/entrance.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-2xl">
          <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-4">
            Luxury Apartment Hotel
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-heading leading-tight mb-6">
            Where Elegance
            <br />
            <span className="text-accent">Meets Comfort</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Experience unparalleled luxury in our premium suites. Every detail crafted for your perfect stay.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="lg" asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
