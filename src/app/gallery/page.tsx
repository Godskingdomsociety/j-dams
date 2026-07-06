import { GalleryGrid } from "@/components/home/gallery-grid"

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">Visual Tour</p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary font-heading mb-4">Gallery</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A visual journey through our luxury spaces — from elegant suites to stunning common areas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryGrid />
        </div>
      </section>
    </>
  )
}
