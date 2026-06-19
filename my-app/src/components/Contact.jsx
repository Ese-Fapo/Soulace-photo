import { contactInfo, socialLinks } from '../assets/asset'

const Contact = () => {
  return (
    <section id="contact">
      {contactInfo.map((item) => {
        const Icon = item.icon

        return (
          <a key={item.id} href={item.href}>
            <Icon />
            <span>{item.value}</span>
          </a>
        )
      })}

      {socialLinks.map((item) => {
        const Icon = item.icon

        return (
          <a key={item.id} href={item.href} aria-label={item.label}>
            <Icon />
          </a>
        )
      })}
    </section>
  )
}

export default Contact
