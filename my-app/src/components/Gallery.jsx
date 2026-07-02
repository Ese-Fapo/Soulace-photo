import { useEffect, useMemo, useState } from 'react'
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
  all: 'categories.all',
  Weddings: 'categories.weddings',
  Portraits: 'categories.portraits',
  Events: 'categories.events',
  Fashion: 'categories.fashion',
  'Product Photography': 'categories.productPhotography',
  'Food Photography': 'categories.foodPhotography',
  'Real Estate Photography': 'categories.realEstatePhotography',
}

const getFilterFromRoute = (route) => {
  const query = route.split('?')[1] ?? ''
  const category = new URLSearchParams(query).get('category') ?? 'all'

  return filters.some((item) => item.value === category) ? category : 'all'
}

const getGalleryHref = (category) => `#gallery?category=${encodeURIComponent(category)}`

const Gallery = ({ route }) => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState(() => getFilterFromRoute(route))

  useEffect(() => {
    setFilter(getFilterFromRoute(route))
  }, [route])

  const filteredItems = useMemo(() => {
    if (filter === 'all') {
      return portfolioItems
    }

    return portfolioItems.filter((item) => item.category === filter)
  }, [filter])

  const activeFilter = filters.find((item) => item.value === filter) ?? filters[0]
  const activeLabel = t(activeFilter.labelKey)
  const galleryDescriptionKey = filter === 'all'
    ? 'gallery.description'
    : `portfolio.categoryCards.${filter}.galleryIntro`

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-clip bg-cream px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:pb-20">
      <section className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <a
              href="#portfolio"
              className="font-inter text-xs font-bold uppercase tracking-[0.18em] text-gold transition-colors duration-300 hover:text-rose"
            >
              {t('gallery.back')}
            </a>
            <h1 className="mt-4 break-words font-roboto text-3xl font-black leading-tight text-charcoal min-[380px]:text-4xl sm:text-5xl">
              {filter === 'all' ? (
                <>
                  {t('gallery.titleStart')} <span className="text-gradient-gold">{t('gallery.titleHighlight')}</span>
                </>
              ) : (
                <>
                  {activeLabel} <span className="text-gradient-gold">{t('gallery.titleHighlight')}</span>
                </>
              )}
            </h1>
            <p className="mt-4 max-w-2xl font-inter text-sm leading-7 text-charcoal/75 sm:text-base">
              {t(galleryDescriptionKey)}
            </p>
          </div>

          <p className="font-inter text-sm font-semibold text-charcoal/65">
            {t('gallery.photos', { count: filteredItems.length })}
          </p>
        </div>

        <div className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
          {filters.map((item) => {
            const isActive = filter === item.value

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => {
                  setFilter(item.value)
                  window.location.hash = getGalleryHref(item.value)
                }}
                className={`shrink-0 rounded-full border px-4 py-2 font-inter text-[0.68rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-[380px]:text-xs sm:px-5 ${
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

        <div className="mt-8 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group relative aspect-[4/3] min-w-0 overflow-hidden rounded-lg bg-charcoal shadow-lg shadow-charcoal/10"
            >
              <img
                src={item.image}
                alt={t(`portfolio.items.${item.id}`)}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17090d]/90 via-[#17090d]/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-inter text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#f2b8a0]">
                  {t(categoryLabelKeys[item.category])}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Gallery
