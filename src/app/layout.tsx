import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"

export const metadata: Metadata = {
  title: "J-Dams | Luxury Apartment Hotel",
  description: "Experience unparalleled luxury at J-Dams premium apartment hotel. Where elegance meets comfort in every detail.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
