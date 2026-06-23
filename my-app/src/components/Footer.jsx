import { quickLinks, serviceLinks, socialLinks } from '../assets/asset'

const Footer = () => {
  return (
    <footer className="w-full max-w-full overflow-x-clip bg-charcoal px-4 py-8 text-white sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3">
      {quickLinks.map((link) => (
        <a key={link.id} href={link.href} className="max-w-full break-words font-montserrat text-sm text-white/80 hover:text-gold">
          {link.label}
        </a>
      ))}

      {serviceLinks.map((link) => (
        <a key={link.id} href={link.href} className="max-w-full break-words font-montserrat text-sm text-white/80 hover:text-gold">
          {link.label}
        </a>
      ))}

      {socialLinks.map((link) => {
        const Icon = link.icon

        return (
          <a
            key={link.id}
            href={link.href}
            aria-label={link.label}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-charcoal"
          >
            <Icon className="max-w-full" />
          </a>
        )
      })}
      </div>
    </footer>
  )
}

export default Footer
