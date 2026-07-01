import { contactInfo, socialLinks } from '../assets/asset'

const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-full overflow-x-clip bg-cream px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      {contactInfo.map((item) => {
        const Icon = item.icon

        return (
          <a
            key={item.id}
            href={item.href}
            className="flex min-w-0 max-w-full items-center gap-3 rounded-lg bg-white p-4 font-inter text-sm text-charcoal shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:min-h-20"
          >
            <Icon className="shrink-0 text-base text-gold sm:text-lg" />
            <span className="min-w-0 overflow-hidden break-words leading-6">{item.value}</span>
          </a>
        )
      })}
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-7xl flex-wrap justify-center gap-3 sm:mt-8">
      {socialLinks.map((item) => {
        const Icon = item.icon

        return (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal text-white transition-colors duration-300 hover:bg-rose sm:h-12 sm:w-12"
          >
            <Icon className="max-w-full" />
          </a>
        )
      })}
      </div>
    </section>
  )
}

export default Contact
