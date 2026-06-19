import { services } from '../assets/asset'

const Services = () => {
  return (
    <section id="services">
      {services.map((service) => {
        const Icon = service.icon

        return (
          <article key={service.id}>
            <Icon />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        )
      })}
    </section>
  )
}

export default Services
