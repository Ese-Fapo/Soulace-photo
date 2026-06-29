import { services } from '../assets/asset'

const Services = () => {
  return (
    <section id="services" className="w-full max-w-full overflow-x-clip bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:gap-6">
      {services.map((service) => {
        const Icon = service.icon

        return (
          <article key={service.id} className="min-w-0 rounded-lg border border-chamegane p-4 sm:p-5 lg:p-6">
            <Icon className="mb-4 text-2xl text-gold" />
            <h3 className="break-words font-playerfair text-xl font-bold leading-tight text-charcoal min-[380px]:text-2xl">{service.title}</h3>
            <p className="mt-3 break-words font-montserrat text-sm leading-6 text-charcoal/75 sm:text-[0.95rem]">
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
