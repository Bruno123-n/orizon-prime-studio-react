import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services'
import { Gallery } from './components/Gallery/Gallery'
import { Testimonials } from './components/Testimonials/Testimonials'


export function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
    </div>
  )
}

export default App