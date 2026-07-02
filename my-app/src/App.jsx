import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Aos from 'aos'
import Portfolio from './components/Portfolio'
import FloatingWhatsApp from './components/whataspp'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'

const App = () => {
  const [route, setRoute] = useState(window.location.hash)

  // init aos

  useEffect(() => {
    Aos.init({ 
      duration: 1000, 
      once: false,
    offset: true })
  }, [])

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash)

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (route.startsWith('#gallery')) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [route])

  if (route.startsWith('#gallery')) {
    return (
      <div className='w-full max-w-full overflow-x-clip'>
        <Navbar />
        <Gallery route={route} />
        <Footer />
        <FloatingWhatsApp />
      </div>
    )
  }

  return (
    <div className='w-full max-w-full overflow-x-clip'>
      <Navbar />
      <Hero />
      <Stats />
      <Portfolio />
      <About />
      
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
