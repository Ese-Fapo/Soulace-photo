import { contactInfo, socialLinks } from '../assets/asset'

const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-full overflow-x-clip bg-cream px-4 py-16 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
      {contactInfo.map((item) => {
        const Icon = item.icon

        return (
          <a
            key={item.id}
            href={item.href}
            className="flex min-w-0 max-w-full items-center gap-3 rounded-lg bg-white p-4 font-montserrat text-sm text-charcoal shadow-sm"
          >
            <Icon className="shrink-0 text-gold" />
            <span className="min-w-0 break-words">{item.value}</span>
          </a>
        )
      })}
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-7xl flex-wrap justify-center gap-3">
      {socialLinks.map((item) => {
        const Icon = item.icon

        return (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal text-white transition-colors duration-300 hover:bg-rose"
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
