
import { useState } from 'react'
import { FaBars, FaCamera, FaTimes } from 'react-icons/fa'
import { navLinks } from '../assets/asset'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className='fixed top-0 left-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-sm'>
      <div className='container mx-auto px-4 py-3 sm:px-6 lg:py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <a
            href='#home'
            onClick={closeMenu}
            className='flex min-w-0 items-center gap-2 font-playerfair font-bold text-gradient-gold'
            aria-label='Solace-Foto home'
          >
            <span className='flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-gold text-base transition-colors duration-300 hover:bg-gradient-gold-hover'>
              <FaCamera />
            </span>
            <span className='truncate text-2xl text-gradient-gold sm:text-3xl'>Solace-Foto</span>
          </a>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-8 xl:flex'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className='nav-link relative font-montserrat text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-300 hover:text-rose'
              >
                {link.id}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type='button'
            className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-charcoal transition-colors duration-300 hover:bg-cream xl:hidden'
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls='mobile-navigation'
          >
            {isOpen ? <FaTimes className='text-lg' /> : <FaBars className='text-lg' />}
          </button>
        </div>
      </div>

      {/* Small and Medium Navigation */}
      {isOpen && (
        <div
          id='mobile-navigation'
          className='max-h-[calc(100vh-4.25rem)] overflow-y-auto border-t border-chamegane bg-white px-4 py-4 shadow-sm xl:hidden'
        >
          <div className='container mx-auto grid gap-2 sm:grid-cols-2 md:grid-cols-3'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className='rounded-md px-4 py-3 text-center font-montserrat text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors duration-300 hover:bg-cream hover:text-rose'
              >
                {link.id}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
