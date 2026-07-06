"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/suites", label: "Suites" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 h-20">
        <Link href="/" className="text-2xl font-bold tracking-tight text-primary font-heading">
          J-Dams
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" size="sm" asChild>
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="sm" asChild className="mt-2">
            <Link href="/booking" onClick={() => setOpen(false)}>Book Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
