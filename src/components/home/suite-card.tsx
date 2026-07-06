import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SuiteCardProps {
  title: string
  description: string
  image: string
  price: string
  features: string[]
}

export function SuiteCard({ title, description, image, price, features }: SuiteCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-primary font-heading">{title}</h3>
          <span className="text-accent font-semibold text-lg">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="text-sm text-foreground/70 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/suites">View Details</Link>
        </Button>
      </div>
    </div>
  )
}
