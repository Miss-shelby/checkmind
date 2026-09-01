import { useScrollReveal } from '../hooks/useScrollReveal'
import { BookingHero } from '../components/booking/BookingHero'
import { BookingForm } from '../components/booking/BookingForm'

export function Booking() {
  useScrollReveal()

  return (
    <main className="pt-32 pb-24 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <BookingHero />
          <BookingForm />
        </div>
      </div>
    </main>
  )
}
