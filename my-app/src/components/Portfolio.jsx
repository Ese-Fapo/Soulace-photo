import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { portfolioItems } from '../assets/asset'

const filters = [
  { labelKey: 'categories.all', value: 'all' },
  { labelKey: 'categories.weddings', value: 'Weddings' },
  { labelKey: 'categories.portraits', value: 'Portraits' },
  { labelKey: 'categories.events', value: 'Events' },
  { labelKey: 'categories.fashion', value: 'Fashion' },
  { labelKey: 'categories.products', value: 'Product Photography' },
  { labelKey: 'categories.food', value: 'Food Photography' },
  { labelKey: 'categories.realEstate', value: 'Real Estate Photography' },
]

const categoryLabelKeys = {
  Weddings: 'categories.weddings',
  Portraits: 'categories.portraits',
  Events: 'categories.events',
  Fashion: 'categories.fashion',
  'Product Photography': 'categories.productPhotography',
  'Food Photography': 'categories.foodPhotography',
  'Real Estate Photography': 'categories.realEstatePhotography',
}

const Portfolio = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')

  const filteredItems = useMemo(() => {
    if (filter === 'all') {
      return portfolioItems
    }

    return portfolioItems.filter((item) => item.category === filter)
  }, [filter])

  const activeFilter = filters.find((item) => item.value === filter) ?? filters[0]
  const activeFilterName = t(activeFilter.labelKey).toLowerCase()

  return (
    <section id="portfolio" className="w-full max-w-full overflow-x-clip bg-cream px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p
            data-aos="fade-up"
            className="font-inter text-xs font-bold uppercase tracking-[0.22em] text-gold"
          >
            {t('portfolio.eyebrow')}
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-3 break-words font-roboto text-4xl font-black leading-tight text-charcoal sm:text-5xl"
          >
            {t('portfolio.titleStart')} <span className="text-gradient-gold">{t('portfolio.titleHighlight')}</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto mt-4 max-w-2xl font-inter text-sm leading-7 text-charcoal/75 sm:text-base"
          >
            {t('portfolio.description')}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="-mx-4 mt-8 flex max-w-none gap-2 overflow-x-auto px-4 pb-2 sm:mx-auto sm:mt-10 sm:max-w-5xl sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {filters.map((item) => {
            const isActive = filter === item.value

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilter(item.value)}
                className={`shrink-0 rounded-full border px-4 py-2 font-inter text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-[380px]:text-xs sm:px-5 ${
                  isActive
                    ? 'border-transparent bg-gradient-gold text-white shadow-lg shadow-gold/25'
                    : 'border-chamegane bg-white text-charcoal/75 hover:-translate-y-0.5 hover:border-gold hover:text-gold'
                }`}
              >
                {t(item.labelKey)}
              </button>
            )
          })}
        </div>

        {filteredItems.length > 0 ? (
          <>
            <div className="mt-7 flex flex-col gap-2 border-y border-chamegane py-4 font-inter text-sm text-charcoal/70 sm:flex-row sm:items-center sm:justify-between">
              <span className="sm:hidden">
                {t('portfolio.showingMobile', { visible: Math.min(filteredItems.length, 5), total: filteredItems.length, category: activeFilterName })}
              </span>
              <span className="hidden sm:inline">
                {t('portfolio.showingDesktop', { total: filteredItems.length, category: activeFilterName })}
              </span>
              <span className="text-charcoal/55">
                {t('portfolio.refine')}
              </span>
            </div>

            <div
              data-aos="fade-up"
              className="mt-8 grid w-full grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredItems.map((item, index) => {
                const isFeatured = index === 0

                return (
                  <article
                  key={item.id}
                  className={`group relative min-w-0 overflow-hidden rounded-lg bg-charcoal shadow-lg shadow-charcoal/10 ${
                    isFeatured
                      ? 'aspect-[4/5] min-[520px]:col-span-2 min-[520px]:aspect-[16/10]'
                      : 'aspect-[4/3]'
                  } ${index >= 5 ? 'hidden sm:block' : ''}`}
                >
                    <img
                      src={item.image}
                      alt={t(`portfolio.items.${item.id}`)}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17090d]/92 via-[#17090d]/18 to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className={`absolute inset-x-0 bottom-0 ${isFeatured ? 'p-5 sm:p-7' : 'p-4'}`}>
                      {isFeatured && (
                        <span className="inline-flex max-w-full rounded-full border border-[#f2b8a0]/35 bg-white/10 px-3 py-1 font-inter text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#f8ece7] backdrop-blur-md min-[380px]:text-[0.66rem]">
                          {t('portfolio.featured')}
                        </span>
                      )}
                      <p className={`${isFeatured ? 'mt-4' : ''} font-inter text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#f2b8a0] min-[380px]:text-[0.65rem]`}>
                        {t(categoryLabelKeys[item.category])}
                      </p>
                      <h3 className={`mt-1 break-words font-roboto font-black leading-tight text-white ${
                        isFeatured ? 'max-w-xl text-2xl sm:text-4xl' : 'text-lg sm:text-xl'
                      }`}>
                        {t(`portfolio.items.${item.id}`)}
                      </h3>
                    </div>
                  </article>
                )
              })}
            </div>

            {filteredItems.length > 5 && (
              <div className="mt-6 text-center sm:hidden">
                <a
                  href="#gallery"
                  className="inline-flex rounded-full bg-gradient-gold px-6 py-3 font-inter text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30"
                >
                  {t('portfolio.more')}
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="mt-10 rounded-lg border border-chamegane bg-white p-8 text-center font-inter text-charcoal/75">
            {t('portfolio.empty')}
          </div>
        )}

        <div className="mt-10 rounded-lg bg-charcoal px-5 py-7 text-center shadow-xl shadow-charcoal/10 sm:px-8">
          <h3 className="font-roboto text-2xl font-black text-white sm:text-3xl">
            {t('portfolio.ctaTitle')}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl font-inter text-sm leading-7 text-white/72 sm:text-base">
            {t('portfolio.ctaText')}
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex rounded-full bg-gradient-gold px-6 py-3 font-inter text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30"
          >
            {t('portfolio.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
