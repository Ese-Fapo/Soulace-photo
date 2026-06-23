import { services } from '../assets/asset'

const Services = () => {
  return (
    <section id="services" className="w-full max-w-full overflow-x-clip bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon

        return (
          <article key={service.id} className="min-w-0 rounded-lg border border-chamegane p-5">
            <Icon className="mb-4 text-2xl text-gold" />
            <h3 className="break-words font-playerfair text-2xl font-bold text-charcoal">{service.title}</h3>
            <p className="mt-3 break-words font-montserrat text-sm leading-6 text-charcoal/75">
              {service.description}
            </p>
          </article>
        )
      })}
      </div>
    </section>
  )
}

export default Services
