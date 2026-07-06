import { ContactForm } from "@/components/home/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactDetails = [
  { icon: Phone, title: "Phone", details: ["+234 916 768 2920"] },
  { icon: Mail, title: "Email", details: ["reservations@j-dams.com", "concierge@j-dams.com"] },
  { icon: MapPin, title: "Address", details: ["123 Luxury Avenue", "Premium District, NY 10001"] },
  { icon: Clock, title: "Front Desk", details: ["24/7 Concierge Service", "Check-in: 3PM | Check-out: 11AM"] },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary font-heading mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We&apos;d love to hear from you. Reach out and let us help plan your perfect stay.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactDetails.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                      <item.icon size={20} />
                    </div>
                    <h3 className="font-bold text-primary font-heading mb-2">{item.title}</h3>
                    {item.details.map((detail) => (
                      <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary font-heading mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
