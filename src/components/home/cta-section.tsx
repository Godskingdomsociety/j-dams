import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/20" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
          Ready for an Unforgettable Stay?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Book your luxury suite today and experience the finest hospitality J-Dams has to offer.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default" size="lg" asChild className="bg-white text-primary hover:bg-white/90">
            <Link href="/booking">Book Your Stay</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
            <Link href="/suites">View Suites</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
