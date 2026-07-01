import { FaWhatsapp } from 'react-icons/fa'
import { contactInfo } from '../assets/asset'

const FloatingWhatsApp = () => {
  const whatsAppContact = contactInfo.find((item) => item.label === 'WhatsApp')
  const href = whatsAppContact?.href ?? 'https://wa.me/2349025246915'

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-charcoal/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <FaWhatsapp className="text-3xl sm:text-4xl" />
      <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-gold"></span>
    </a>
  )
}

export default FloatingWhatsApp
