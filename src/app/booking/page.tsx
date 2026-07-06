"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Check, ArrowLeft, ExternalLink, Home } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_NUMBER = "2349167682920"

const rooms = [
  {
    id: "presidential",
    name: "Presidential Suite",
    price: 450000,
    image: "/images/2024-11-26 (1).jpg",
    details: ["150 sqm", "Private terrace", "Butler service", "Marble bathroom", "Walk-in closet", "Private bar"],
  },
  {
    id: "executive",
    name: "Executive Suite",
    price: 275000,
    image: "/images/2024-11-26 (2).jpg",
    details: ["90 sqm", "City view", "Workstation", "Luxury bedding", "Espresso machine", "Separate living room"],
  },
  {
    id: "deluxe",
    name: "Deluxe Suite",
    price: 175000,
    image: "/images/2024-11-26 (3).jpg",
    details: ["65 sqm", "City view", "Sitting area", "Rain shower", "King-size bed", "Smart TV"],
  },
  {
    id: "junior",
    name: "Junior Suite",
    price: 125000,
    image: "/images/2024-11-26 (9).jpg",
    details: ["45 sqm", "Garden view", "Cozy seating", "Walk-in shower", "Queen-size bed", "Mini bar"],
  },
  {
    id: "penthouse",
    name: "Penthouse Suite",
    price: 650000,
    image: "/images/2024-11-26 (10).jpg",
    details: ["200 sqm", "Wraparound terrace", "Private pool", "Panoramic views", "Chef's kitchen", "Wine cellar"],
  },
  {
    id: "family",
    name: "Family Suite",
    price: 225000,
    image: "/images/2024-12-02.jpg",
    details: ["100 sqm", "Two bedrooms", "Kid-friendly", "Kitchenette", "Living room", "Balcony"],
  },
]

function formatNaira(amount: number) {
  return "₦" + amount.toLocaleString("en-US")
}

function getTomorrow(dateStr: string) {
  const d = new Date(dateStr)
  d.setDate(d.getDate() + 1)
  return d.toISOString().slice(0, 10)
}

function addDays(dateStr: string, days: number) {
  const d = new Date(dateStr)
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function nightsBetween(a: string, b: string) {
  const diff = new Date(b).getTime() - new Date(a).getTime()
  return Math.max(0, Math.round(diff / 86400000))
}

function formatTimestamp() {
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date())
}

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [confirmed, setConfirmed] = useState(false)
  const [error, setError] = useState("")
  const wizardRef = useRef<HTMLDivElement>(null)

  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2")
  const [selectedRoom, setSelectedRoom] = useState("")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [special, setSpecial] = useState("")

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0
    return nightsBetween(checkIn, checkOut)
  }, [checkIn, checkOut])

  const selectedRoomData = useMemo(
    () => rooms.find((r) => r.id === selectedRoom),
    [selectedRoom]
  )

  const total = useMemo(() => {
    if (!selectedRoomData || nights <= 0) return 0
    return selectedRoomData.price * nights
  }, [selectedRoomData, nights])

  function handleCheckInChange(value: string) {
    setCheckIn(value)
    if (checkOut && value && checkOut <= value) {
      setCheckOut("")
    }
  }

  function scrollToTop() {
    wizardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  function goToStep(s: number) {
    setStep(s)
    setError("")
    setTimeout(scrollToTop, 50)
  }

  function handleStep1Next() {
    if (!checkIn) { setError("Please select a check-in date."); return }
    if (!checkOut) { setError("Please select a check-out date."); return }
    if (!selectedRoom) { setError("Please select a room."); return }
    setError("")
    goToStep(2)
  }

  function handleStep2Next() {
    if (!name.trim()) { setError("Please enter your full name."); return }
    if (!email.trim()) { setError("Please enter your email address."); return }
    if (!phone.trim()) { setError("Please enter your phone number."); return }
    setError("")
    goToStep(3)
  }

  function buildWhatsAppMessage(): string {
    const room = selectedRoomData
    return [
      "*New Booking Request — J-Dams Luxury Apartment Hotel*",
      "",
      "*Guest Information*",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "*Room Details*",
      `Suite: ${room?.name}`,
      `Price: ${formatNaira(room?.price || 0)} / night`,
      "",
      "*Stay Details*",
      `Check-in: ${checkIn}`,
      `Check-out: ${checkOut}`,
      `Nights: ${nights}`,
      `Guests: ${guests}`,
      "",
      "*Pricing Breakdown*",
      `${formatNaira(room?.price || 0)} × ${nights} night${nights > 1 ? "s" : ""} = ${formatNaira(total)}`,
      "",
      special ? `*Special Requests:* ${special}\n` : "",
      `*Total: ${formatNaira(total)}*`,
      "",
      `Submitted: ${formatTimestamp()}`,
    ].filter(Boolean).join("\n")
  }

  function buildReceiptMessage(): string {
    const room = selectedRoomData
    return [
      `*Payment Receipt — J-Dams Luxury Apartment Hotel*`,
      "",
      `Guest: ${name}`,
      `Suite: ${room?.name}`,
      `Amount Paid: ${formatNaira(total)}`,
      "",
      "Please find attached my payment receipt/screenshot for confirmation.",
      "",
      `Submitted: ${formatTimestamp()}`,
    ].join("\n")
  }

  function handleConfirmBooking() {
    const msg = encodeURIComponent(buildWhatsAppMessage())
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank")
    setConfirmed(true)
    scrollToTop()
  }

  function handleResendBooking() {
    const msg = encodeURIComponent(buildWhatsAppMessage())
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank")
  }

  function handleSendReceipt() {
    const msg = encodeURIComponent(buildReceiptMessage())
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank")
  }

  const stepLabels = ["Your Stay", "Your Details", "Review & Book"]

  if (confirmed) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex items-start justify-center">
        <div className="w-full max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-md text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-4">
              Booking Request Received
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-foreground">{name}</span>. A confirmation
              will be sent to <span className="font-semibold text-foreground">{email}</span>.
              Our reservations team will review and confirm your booking within 24 hours.
              <strong className="block mt-2 text-accent">Please await confirmation before making any payment.</strong>
            </p>

            <div className="bg-muted rounded-xl p-6 mb-8 text-left">
              <h3 className="font-bold text-primary font-heading mb-3">Payment Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bank:</span>
                  <span className="font-medium">First National Bank</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account Name:</span>
                  <span className="font-medium">J-Dams Luxury Hotel Ltd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account Number:</span>
                  <span className="font-medium">1234567890</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2 mt-2">
                  <span className="text-muted-foreground">Amount Due:</span>
                  <span className="font-bold text-accent text-lg">{formatNaira(total)}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                * These are placeholder details. Real payment information will be provided upon confirmation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Button variant="default" onClick={handleSendReceipt}>
                <ExternalLink size={16} />
                Send Payment Receipt via WhatsApp
              </Button>
              <Button variant="outline" onClick={handleResendBooking}>
                <ExternalLink size={16} />
                Resend Booking to WhatsApp
              </Button>
            </div>

            <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
              <Home size={16} />
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-3">Reservations</p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary font-heading mb-4">Book Your Stay</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select your dates and suite to begin your luxury experience at J-Dams.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background" ref={wizardRef}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-center gap-0 mb-12">
            {stepLabels.map((label, i) => {
              const s = i + 1
              const isActive = step === s
              const isDone = step > s
              return (
                <div key={s} className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                        isDone && "bg-accent text-white",
                        isActive && "bg-accent text-white ring-4 ring-accent/20",
                        !isDone && !isActive && "bg-muted text-muted-foreground"
                      )}
                    >
                      {isDone ? <Check size={16} /> : s}
                    </div>
                    <span
                      className={cn(
                        "text-sm font-medium hidden sm:inline transition-colors",
                        (isDone || isActive) ? "text-accent" : "text-muted-foreground"
                      )}
                    >
                      {label}
                    </span>
                  </div>
                  {i < stepLabels.length - 1 && (
                    <div
                      className={cn(
                        "w-12 md:w-20 h-0.5 mx-2 transition-colors duration-300",
                        isDone ? "bg-accent" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              )
            })}
          </div>

          {error && (
            <div className="max-w-3xl mx-auto mb-6 bg-destructive/5 border border-destructive/20 rounded-lg px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <div className="bg-white rounded-xl p-6 md:p-10 shadow-md">
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary font-heading mb-1">Your Stay</h2>
                  <p className="text-muted-foreground text-sm">Choose your dates and preferred suite.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Check-In
                    </label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      <input
                        id="checkIn"
                        type="date"
                        min={todayStr()}
                        value={checkIn}
                        onChange={(e) => handleCheckInChange(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Check-Out
                    </label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      <input
                        id="checkOut"
                        type="date"
                        min={checkIn || todayStr()}
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Guests
                    </label>
                    <div className="relative">
                      <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      <select
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {checkIn && checkOut && (
                  <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3 text-sm flex items-center justify-between flex-wrap gap-2">
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">{nights}</span> night{nights > 1 ? "s" : ""}
                    </span>
                    {selectedRoomData && (
                      <span className="font-semibold text-primary">
                        {formatNaira(selectedRoomData.price)} × {nights} = <span className="text-accent">{formatNaira(total)}</span>
                      </span>
                    )}
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-primary font-heading mb-4">Select a Suite</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rooms.map((room) => {
                      const isSelected = selectedRoom === room.id
                      return (
                        <button
                          key={room.id}
                          type="button"
                          onClick={() => setSelectedRoom(room.id)}
                          className={cn(
                            "rounded-xl border-2 overflow-hidden text-left transition-all duration-200 cursor-pointer",
                            isSelected
                              ? "border-accent ring-2 ring-accent/20 shadow-md"
                              : "border-border hover:border-primary/30 shadow-sm"
                          )}
                        >
                          <div className="relative h-40">
                            <Image src={room.image} alt={room.name} fill className="object-cover" />
                            <span className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                              Available
                            </span>
                          </div>
                          <div className="p-3">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-bold text-primary font-heading text-sm">{room.name}</h4>
                              <span className="text-accent font-bold text-sm">{formatNaira(room.price)}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {room.details.slice(0, 3).map((d) => (
                                <span key={d} className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded">
                                  {d}
                                </span>
                              ))}
                            </div>
                            <div
                              className={cn(
                                "w-full text-center text-xs font-semibold py-1.5 rounded-md transition-colors",
                                isSelected
                                  ? "bg-accent text-white"
                                  : "bg-primary/5 text-primary hover:bg-primary/10"
                              )}
                            >
                              {isSelected ? "Selected" : "Select"}
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    type="button"
                    size="lg"
                    onClick={handleStep1Next}
                    disabled={!checkIn || !checkOut || !selectedRoom}
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary font-heading mb-1">Your Details</h2>
                  <p className="text-muted-foreground text-sm">We need a few details to complete your booking.</p>
                </div>

                <div className="space-y-5 max-w-lg">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Phone <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="special" className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Special Requests <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <textarea
                      id="special"
                      rows={3}
                      value={special}
                      onChange={(e) => setSpecial(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Any special requirements for your stay..."
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-2">
                  <Button type="button" variant="outline" size="lg" onClick={() => goToStep(1)}>
                    <ArrowLeft size={16} />
                    Back
                  </Button>
                  <Button type="button" size="lg" onClick={handleStep2Next}>
                    Next Step
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary font-heading mb-1">Review & Book</h2>
                  <p className="text-muted-foreground text-sm">Please review your booking details before confirming.</p>
                </div>

                {selectedRoomData && (
                  <div className="flex items-center gap-4 bg-muted rounded-xl p-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <Image src={selectedRoomData.image} alt={selectedRoomData.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary font-heading">{selectedRoomData.name}</h3>
                      <p className="text-accent font-semibold text-sm">{formatNaira(selectedRoomData.price)} / night</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Check-In</p>
                    <p className="font-medium">{checkIn}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Check-Out</p>
                    <p className="font-medium">{checkOut}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Nights</p>
                    <p className="font-medium">{nights}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Guests</p>
                    <p className="font-medium">{guests}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Price per Night</p>
                    <p className="font-medium">{formatNaira(selectedRoomData?.price || 0)}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Total</p>
                    <p className="font-bold text-accent text-lg">{formatNaira(total)}</p>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <h4 className="font-semibold text-primary font-heading text-sm">Contact Details</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground text-xs block">Name</span>
                      <span className="font-medium">{name}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs block">Email</span>
                      <span className="font-medium">{email}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs block">Phone</span>
                      <span className="font-medium">{phone}</span>
                    </div>
                  </div>
                  {special && (
                    <div className="text-sm">
                      <span className="text-muted-foreground text-xs block">Special Requests</span>
                      <span className="font-medium">{special}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between pt-2">
                  <Button type="button" variant="outline" size="lg" onClick={() => goToStep(2)}>
                    <ArrowLeft size={16} />
                    Back
                  </Button>
                  <Button type="button" size="lg" onClick={handleConfirmBooking}>
                    <ExternalLink size={16} />
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
