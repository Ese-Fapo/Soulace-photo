import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { services } from '../assets/asset'

const serviceFilters = [
  { labelKey: 'categories.all', value: 'all' },
  { labelKey: 'categories.peopleEvents', value: 'People & Events' },
  { labelKey: 'categories.commercial', value: 'Business & Commercial' },
  { labelKey: 'categories.outdoor', value: 'Outdoor & Adventure' },
]

const categoryLabelKeys = {
  'People & Events': 'categories.peopleEvents',
  'Business & Commercial': 'categories.businessCommercial',
  'Outdoor & Adventure': 'categories.outdoorAdventure',
}

const Services = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')

  const visibleServices = useMemo(() => {
    if (activeCategory === 'all') {
      return services
    }

    return services.filter((service) => service.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="services" className="w-full max-w-full overflow-x-clip bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-end">
          <div data-aos="fade-up" className="min-w-0">
            <p className="font-inter text-xs font-bold uppercase tracking-[0.22em] text-gold">
              {t('services.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-2xl break-words font-roboto text-3xl font-black leading-tight text-charcoal min-[380px]:text-4xl sm:text-5xl">
              {t('services.title')}
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="100" className="max-w-2xl font-inter text-sm leading-7 text-charcoal/75 sm:text-base lg:ml-auto">
            {t('services.description')}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0"
        >
          {serviceFilters.map((item) => {
            const isActive = activeCategory === item.value

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setActiveCategory(item.value)}
                className={`shrink-0 rounded-full border px-4 py-2 font-inter text-[0.68rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-[380px]:text-xs sm:px-5 ${
                  isActive
                    ? 'border-transparent bg-gradient-gold text-white shadow-lg shadow-gold/25'
                    : 'border-chamegane bg-cream text-charcoal/75 hover:-translate-y-0.5 hover:border-gold hover:text-gold'
                }`}
              >
                {t(item.labelKey)}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
          {visibleServices.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className="group flex min-w-0 flex-col rounded-lg border border-chamegane bg-cream/40 p-5 shadow-sm shadow-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white hover:shadow-xl hover:shadow-charcoal/10 sm:p-6"
              >
                <div className="flex flex-col gap-4 min-[380px]:flex-row min-[380px]:items-start min-[380px]:justify-between">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-white shadow-lg shadow-gold/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="text-lg" />
                  </span>
                  <span className="min-w-0 rounded-full border border-chamegane bg-white px-3 py-1 text-left font-inter text-[0.62rem] font-bold uppercase tracking-[0.1em] text-charcoal/60 min-[380px]:text-right">
                    {t(categoryLabelKeys[service.category])}
                  </span>
                </div>

                <h3 className="mt-5 break-words font-roboto text-2xl font-black leading-tight text-charcoal">
                  {t(`services.items.${service.id}.title`)}
                </h3>
                <p className="mt-3 break-words font-inter text-sm leading-6 text-charcoal/75">
                  {t(`services.items.${service.id}.description`)}
                </p>

                <ul className="mt-5 space-y-2">
                  {t(`services.items.${service.id}.features`, { returnObjects: true }).map((feature) => (
                    <li key={feature} className="flex gap-2 font-inter text-sm leading-6 text-charcoal/70">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>
                      <span className="min-w-0 break-words">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full justify-center rounded-full border border-gold px-4 py-2 text-center font-inter text-xs font-bold uppercase tracking-[0.1em] text-gold transition-all duration-300 hover:bg-gradient-gold hover:text-white min-[420px]:w-fit"
                >
                  {t('services.ask')}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
