import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services'
import { Gallery } from './components/Gallery/Gallery'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Footer } from './components/Footer/Footer'
import { BookingForm } from './components/Booking/BookingForm'
import { useState } from 'react'


export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleOpenBooking = () => setIsBookingOpen(true)
  const handleCloseBooking = () => setIsBookingOpen(false)

  return (
    <div>
      <Header onOpenBooking={handleOpenBooking}/>
      <Hero onOpenBooking={handleOpenBooking}/>
      <Services onOpenBooking={handleOpenBooking}/>
      <Gallery />
      <Testimonials />
      <Footer />
      <BookingForm isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  )
}

export default App