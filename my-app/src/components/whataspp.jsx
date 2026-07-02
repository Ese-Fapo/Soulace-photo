import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { contactInfo, socialLinks, whatsappHref } from '../assets/asset'

const FloatingWhatsApp = () => {
  const { t } = useTranslation()
  const whatsAppContact = contactInfo.find((item) => item.label === 'WhatsApp')
  const instagramContact = socialLinks.find((item) => item.label === 'Instagram')
  const whatsAppHref = whatsAppContact?.href ?? whatsappHref
  const instagramHref = instagramContact?.href ?? 'https://www.instagram.com/soulaceimagery/'

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={instagramHref}
        target="_blank"
        rel="noreferrer"
        aria-label={t('contact.instagram')}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white shadow-2xl shadow-charcoal/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E1306C] sm:h-16 sm:w-16"
      >
        <FaInstagram className="text-3xl sm:text-4xl" />
      </a>

      <a
        href={whatsAppHref}
        target="_blank"
        rel="noreferrer"
        aria-label={t('contact.whatsapp')}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-charcoal/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:h-16 sm:w-16"
      >
        <FaWhatsapp className="text-3xl sm:text-4xl" />
        <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-gold"></span>
      </a>
    </div>
  )
}

export default FloatingWhatsApp
