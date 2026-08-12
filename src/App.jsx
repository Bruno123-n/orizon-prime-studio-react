import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services'
import { Gallery } from './components/Gallery/Gallery'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Footer } from './components/Footer/Footer'


export function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App