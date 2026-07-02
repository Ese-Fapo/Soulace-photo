import { useTranslation } from 'react-i18next'
import { contactInfo, quickLinks, serviceLinks, socialLinks } from '../assets/asset'

const socialBrandClasses = {
  Instagram: 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white hover:shadow-[#E1306C]/30',
  Facebook: 'bg-[#1877F2] text-white hover:shadow-[#1877F2]/30',
  LinkedIn: 'bg-[#0A66C2] text-white hover:shadow-[#0A66C2]/30',
  WhatsApp: 'bg-[#25D366] text-white hover:shadow-[#25D366]/30',
}

const Footer = () => {
  const { t } = useTranslation()
  const phone = contactInfo.find((item) => item.href.startsWith('tel:'))
  const email = contactInfo.find((item) => item.href.startsWith('mailto:'))
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full max-w-full overflow-x-clip bg-[#17090d] px-4 pt-12 text-white sm:px-6 sm:pt-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2b8a0]/55 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(216,90,74,0.14),transparent_34%),radial-gradient(circle_at_84%_35%,rgba(143,29,44,0.18),transparent_32%)]"></div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)_minmax(0,0.75fr)_minmax(0,0.9fr)] lg:gap-10">
          <div className="min-w-0">
            <a href="#home" className="inline-flex min-w-0 items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-gold font-roboto text-sm font-black text-white shadow-lg shadow-gold/25">
                SF
              </span>
              <span className="min-w-0 break-words font-roboto text-xl font-black text-gradient-gold sm:text-2xl">
                SoulAce-Foto
              </span>
            </a>
            <p className="mt-5 max-w-md font-inter text-sm leading-7 text-white/68">
              {t('footer.description')}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    aria-label={link.label}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl ${socialBrandClasses[link.label] ?? 'bg-white/[0.06] hover:bg-gradient-gold'}`}
                  >
                    <Icon className="max-w-full text-lg" />
                  </a>
                )
              })}
            </div>
          </div>

          <nav aria-label="Footer quick links" className="min-w-0">
            <h2 className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#f2b8a0]">
              {t('footer.explore')}
            </h2>
            <div className="mt-4 grid gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="w-fit max-w-full break-words font-inter text-sm text-white/72 transition-colors duration-300 hover:text-[#f2b8a0]"
                >
                  {t(`nav.${link.href.replace('#', '')}`)}
                </a>
              ))}
            </div>
          </nav>

          <nav aria-label="Footer service links" className="min-w-0">
            <h2 className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#f2b8a0]">
              {t('footer.services')}
            </h2>
            <div className="mt-4 grid gap-2">
              {serviceLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="w-fit max-w-full break-words font-inter text-sm text-white/72 transition-colors duration-300 hover:text-[#f2b8a0]"
                >
                  {t(`services.links.${index}`)}
                </a>
              ))}
            </div>
          </nav>

          <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.05] p-5">
            <h2 className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#f2b8a0]">
              {t('footer.book')}
            </h2>
            <p className="mt-4 font-inter text-sm leading-7 text-white/68">
              {t('footer.bookText')}
            </p>

            <div className="mt-5 grid gap-3">
              {phone && (
                <a href={phone.href} className="break-words font-inter text-sm font-semibold text-white transition-colors duration-300 hover:text-[#f2b8a0]">
                  {phone.value}
                </a>
              )}
              {email && (
                <a href={email.href} className="break-words font-inter text-sm font-semibold text-white transition-colors duration-300 hover:text-[#f2b8a0]">
                  {email.value}
                </a>
              )}
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-gradient-gold px-5 py-3 text-center font-inter text-xs font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30"
            >
              {t('footer.contact')}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-5 text-center font-inter text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>{t('footer.rights', { year: currentYear })}</p>
          <p>{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
