"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send, ExternalLink } from "lucide-react"

const WHATSAPP_NUMBER = "2349167682920"

function formatTimestamp() {
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date())
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const whatsappMessage = [
      "*New Contact Message — J-Dams Luxury Apartment Hotel*",
      "",
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      "",
      "*Message:*",
      message,
      "",
      `Submitted: ${formatTimestamp()}`,
    ].join("\n")

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    )

    setSubmitted(true)
  }

  function handleResend() {
    const whatsappMessage = [
      "*New Contact Message — J-Dams Luxury Apartment Hotel*",
      "",
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      "",
      "*Message:*",
      message,
      "",
      `Submitted: ${formatTimestamp()}`,
    ].join("\n")

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    )
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <Send size={28} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold text-primary font-heading mb-2">Thank You</h3>
        <p className="text-muted-foreground mb-4">
          Your message has been sent via WhatsApp. We&apos;ll get back to you within 24 hours.
        </p>
        <Button variant="outline" size="sm" onClick={handleResend}>
          <ExternalLink size={14} />
          Resend via WhatsApp
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none"
          placeholder="Tell us about your stay preferences..."
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <ExternalLink size={16} />
        Send via WhatsApp
      </Button>
    </form>
  )
}
