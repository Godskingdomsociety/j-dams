import Image from "next/image"

const images = [
  "/images/entrance.jpg",
  "/images/2024-11-26 (1).jpg",
  "/images/2024-11-26 (2).jpg",
  "/images/2024-11-26 (3).jpg",
  "/images/2024-11-26 (9).jpg",
  "/images/2024-11-26 (10).jpg",
  "/images/2024-12-02.jpg",
]

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <div
          key={src}
          className={`relative overflow-hidden rounded-xl group cursor-pointer ${
            index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
          }`}
        >
          <div className="aspect-[4/3] relative">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        </div>
      ))}
    </div>
  )
}
