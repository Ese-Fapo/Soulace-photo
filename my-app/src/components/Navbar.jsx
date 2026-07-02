
import { useEffect, useState } from 'react'
import { FaBars, FaCamera, FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { navLinks } from '../assets/asset'

const Navbar = () => {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const bookingHref = '#contact'
  const currentLanguage = i18n.resolvedLanguage?.startsWith('pt') ? 'pt-BR' : 'en'
  const languages = [
    { code: 'en', label: 'EN', name: t('language.english') },
    { code: 'pt-BR', label: 'PT', name: t('language.portuguese') },
  ]

  const getNavLabel = (href) => {
    const key = href.replace('#', '')
    return t(`nav.${key}`)
  }

  const closeMenu = () => setIsOpen(false)
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    closeMenu()
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        closeMenu()
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 w-full max-w-full overflow-x-clip bg-white/95 shadow-sm backdrop-blur-sm'>
      <div className='mx-auto w-full max-w-7xl px-3 py-3 min-[380px]:px-4 sm:px-6 lg:py-4'>
        <div className='flex min-w-0 items-center justify-between gap-2 min-[380px]:gap-3'>
          {/* Logo */}
          <a
            href='#home'
            onClick={closeMenu}
            className='flex min-w-0 flex-1 items-center gap-2 font-roboto font-bold text-gradient-gold xl:flex-none'
            aria-label={t('nav.homeLabel')}
          >
            <span className='flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-gold text-xs text-white transition-colors duration-300 hover:bg-gradient-gold-hover min-[380px]:h-9 min-[380px]:w-9 min-[380px]:text-sm sm:h-10 sm:w-10 sm:text-base'>
              <FaCamera />
            </span>
            <span className='truncate text-base text-gradient-gold min-[360px]:text-lg sm:text-2xl lg:text-3xl'>
              SoulAce-Foto
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className='hidden min-w-0 items-center gap-3 xl:flex 2xl:gap-5'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className='nav-link relative whitespace-nowrap font-inter text-xs font-semibold uppercase tracking-wide text-charcoal transition-colors duration-300 hover:text-rose 2xl:text-sm'
              >
                {getNavLabel(link.href)}
              </a>
            ))}
            <div className='flex shrink-0 rounded-full border border-chamegane bg-cream p-1' aria-label={t('language.switchLabel')}>
              {languages.map((language) => (
                <button
                  key={language.code}
                  type='button'
                  onClick={() => changeLanguage(language.code)}
                  aria-label={language.name}
                  className={`rounded-full px-3 py-1.5 font-inter text-[0.65rem] font-bold uppercase tracking-wide transition-colors duration-300 ${
                    currentLanguage === language.code
                      ? 'bg-gradient-gold text-white shadow-sm shadow-gold/20'
                      : 'text-charcoal/70 hover:text-gold'
                  }`}
                >
                  {language.code === 'pt-BR' ? 'PT-BR' : language.label}
                </button>
              ))}
            </div>
            <a
              href={bookingHref}
              className='shrink-0 rounded-full bg-gradient-gold px-4 py-2.5 text-center font-inter text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/40 2xl:px-5 2xl:text-sm'
            >
              {t('nav.book')}
            </a>
          </div>

          <div className='flex shrink-0 items-center gap-1.5 xl:hidden min-[380px]:gap-2'>
            <div className='flex rounded-full border border-chamegane bg-cream p-0.5' aria-label={t('language.switchLabel')}>
              {languages.map((language) => (
                <button
                  key={language.code}
                  type='button'
                  onClick={() => changeLanguage(language.code)}
                  aria-label={language.name}
                  className={`rounded-full px-2 py-1 font-inter text-[0.58rem] font-bold uppercase tracking-wide transition-colors duration-300 min-[380px]:px-2.5 min-[380px]:text-[0.65rem] ${
                    currentLanguage === language.code
                      ? 'bg-gradient-gold text-white shadow-sm shadow-gold/20'
                      : 'text-charcoal/70 hover:text-gold'
                  }`}
                >
                  {language.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type='button'
              className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-transparent text-charcoal transition-colors duration-300 hover:border-chamegane hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-[380px]:h-11 min-[380px]:w-11'
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? t('nav.close') : t('nav.open')}
              aria-expanded={isOpen}
              aria-controls='mobile-navigation'
            >
              {isOpen ? <FaTimes className='text-lg' /> : <FaBars className='text-lg' />}
            </button>
          </div>
        </div>
      </div>

      {/* Small and Medium Navigation */}
      {isOpen && (
        <div
          id='mobile-navigation'
          className='absolute left-0 right-0 top-full max-h-[calc(100vh-4.25rem)] w-full max-w-full overflow-y-auto overflow-x-clip border-t border-chamegane bg-white px-3 py-4 shadow-lg min-[380px]:px-4 xl:hidden'
        >
          <div className='mx-auto grid max-w-7xl grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className='rounded-md px-3 py-3 text-center font-inter text-xs font-semibold uppercase tracking-wide text-charcoal transition-colors duration-300 hover:bg-cream hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-[380px]:text-sm sm:px-4'
              >
                {getNavLabel(link.href)}
              </a>
            ))}
            <a
              href={bookingHref}
              onClick={closeMenu}
              className='rounded-md bg-gradient-gold px-3 py-3 text-center font-inter text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal min-[380px]:text-sm sm:col-span-2 sm:px-4 md:col-span-3'
            >
              {t('nav.book')}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
