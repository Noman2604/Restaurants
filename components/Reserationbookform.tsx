"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

// Simulated data for available time slots
const timeSlots = [
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM","10:00 PM","11:00 PM",
]

type Booking = {
  date: Date
  time: string
  name: string
  guests: number
}

export default function ReservationsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [guests, setGuests] = useState(1)
  const [bookings, setBookings] = useState<Booking[]>([])

  const handleBooking = () => {
    if (selectedDate && selectedTime && name) {
      const newBooking: Booking = {
        date: selectedDate,
        time: selectedTime,
        name,
        guests
      }
      setBookings([...bookings, newBooking])
      setSelectedTime(null)
      setName("")
      setGuests(1)
    }
  }

  const isTimeSlotBooked = (date: Date, time: string) => {
    return bookings.some(booking => 
      booking.date.toDateString() === date.toDateString() && booking.time === time
    )
  }

  const isPastDate = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurant Reservations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-slate-700 dark:border-slate-300 ">
          <CardHeader>
            <CardTitle>Select a Date</CardTitle>
          </CardHeader>
          <CardContent >
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border border-slate-700 dark:border-slate-300"
              disabled={isPastDate}
              initialFocus
            />
          </CardContent>
        </Card>
        <Card className="border-slate-700 dark:border-slate-300">
          <CardHeader>
            <CardTitle>Available Time Slots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <Button
                  className="border-slate-700 dark:border-slate-300"
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  disabled={!selectedDate || isTimeSlotBooked(selectedDate, time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-slate-700 dark:border-slate-300">
          <CardHeader>
            <CardTitle>Book a Table</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="border-slate-700 dark:border-slate-300"
                />
              </div>
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  value={guests}
                  className="border-slate-700 dark:border-slate-300"
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  min={1}
                  max={10}
                />
              </div>
              <Button onClick={handleBooking} disabled={!selectedDate || !selectedTime || !name}>
                Book Table
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card className="border-slate-700 dark:border-slate-300">
          <CardHeader>
            <CardTitle>All Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              {bookings.map((booking, index) => (
                <div key={index} className="mb-2 p-2 border rounded">
                  <p><strong>Date:</strong> {booking.date.toDateString()}</p>
                  <p><strong>Time:</strong> {booking.time}</p>
                  <p><strong>Name:</strong> {booking.name}</p>
                  <p><strong>Guests:</strong> {booking.guests}</p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}