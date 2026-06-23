import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Aos from 'aos'

const App = () => {
  // init aos

  useEffect(() => {
    Aos.init({ 
      duration: 1000, 
      once: false,
    offset: true })
  }, [])
  return (
    <div className='w-full max-w-full overflow-x-clip'>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
