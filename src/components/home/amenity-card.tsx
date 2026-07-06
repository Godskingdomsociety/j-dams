import type { LucideIcon } from "lucide-react"

interface AmenityCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function AmenityCard({ icon: Icon, title, description }: AmenityCardProps) {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/5 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-lg font-bold text-primary font-heading mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}
