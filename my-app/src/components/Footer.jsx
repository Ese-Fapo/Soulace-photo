import { quickLinks, serviceLinks, socialLinks } from '../assets/asset'

const Footer = () => {
  return (
    <footer className="w-full max-w-full overflow-x-clip bg-charcoal px-4 py-8 text-white sm:px-6 sm:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-5">
      {quickLinks.map((link) => (
        <a key={link.id} href={link.href} className="max-w-full break-words text-center font-montserrat text-xs text-white/80 hover:text-gold min-[380px]:text-sm">
          {link.label}
        </a>
      ))}

      {serviceLinks.map((link) => (
        <a key={link.id} href={link.href} className="max-w-full break-words text-center font-montserrat text-xs text-white/80 hover:text-gold min-[380px]:text-sm">
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
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-white"
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
