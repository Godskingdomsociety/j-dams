import Link from "next/link"
import { Phone, Mail, MapPin, Globe, Camera, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4">J-Dams</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Experience unparalleled luxury at our premium apartment hotel. Where elegance meets comfort in every detail.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/suites", label: "Suites" },
                { href: "/amenities", label: "Amenities" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin size={16} className="shrink-0" />
                <span>123 Luxury Avenue, Premium District</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={16} className="shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={16} className="shrink-0" />
                <span>reservations@j-dams.com</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <Globe size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
              <Camera size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
              <MessageCircle size={20} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/50 text-xs">
          &copy; {new Date().getFullYear()} J-Dams Luxury Apartment Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
