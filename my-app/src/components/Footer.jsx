import { quickLinks, serviceLinks, socialLinks } from '../assets/asset'

const Footer = () => {
  return (
    <footer>
      {quickLinks.map((link) => (
        <a key={link.id} href={link.href}>
          {link.label}
        </a>
      ))}

      {serviceLinks.map((link) => (
        <a key={link.id} href={link.href}>
          {link.label}
        </a>
      ))}

      {socialLinks.map((link) => {
        const Icon = link.icon

        return (
          <a key={link.id} href={link.href} aria-label={link.label}>
            <Icon />
          </a>
        )
      })}
    </footer>
  )
}

export default Footer
