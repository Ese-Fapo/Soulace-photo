import { useTranslation } from 'react-i18next'
import { portfolioItems } from '../assets/asset'

const categoryCards = [
  { labelKey: 'categories.all', value: 'all', imageId: 17 },
  { labelKey: 'categories.weddings', value: 'Weddings', imageId: 1 },
  { labelKey: 'categories.portraits', value: 'Portraits', imageId: 7 },
  { labelKey: 'categories.events', value: 'Events', imageId: 15 },
  { labelKey: 'categories.fashion', value: 'Fashion', imageId: 19 },
  { labelKey: 'categories.products', value: 'Product Photography', imageId: 21 },
  { labelKey: 'categories.food', value: 'Food Photography', imageId: 24 },
  { labelKey: 'categories.realEstate', value: 'Real Estate Photography', imageId: 26 },
]

const getGalleryHref = (category) => `#gallery?category=${encodeURIComponent(category)}`

const Portfolio = () => {
  const { t } = useTranslation()

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
            className="mt-3 break-words font-roboto text-3xl font-black leading-tight text-charcoal min-[380px]:text-4xl sm:text-5xl"
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
          className="mt-10 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5"
        >
          {categoryCards.map((category, index) => {
            const imageItem = portfolioItems.find((item) => item.id === category.imageId) ?? portfolioItems[0]
            const total = category.value === 'all'
              ? portfolioItems.length
              : portfolioItems.filter((item) => item.category === category.value).length

            return (
              <article
                key={category.value}
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 80}
                className="group flex min-h-full min-w-0 flex-col overflow-hidden rounded-lg border border-chamegane bg-white shadow-sm shadow-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-charcoal/10"
              >
                <a
                  href={getGalleryHref(category.value)}
                  className="relative block aspect-[4/3] overflow-hidden bg-charcoal"
                >
                  <img
                    src={imageItem.image}
                    alt={t(category.labelKey)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17090d]/82 via-[#17090d]/12 to-transparent"></div>
                  <span className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full border border-[#f2b8a0]/40 bg-white/10 px-3 py-1 font-inter text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#f8ece7] backdrop-blur-md sm:bottom-4 sm:left-4">
                    {t('portfolio.photoCount', { count: total })}
                  </span>
                </a>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="break-words font-roboto text-xl font-black leading-tight text-charcoal sm:text-2xl">
                    {t(category.labelKey)}
                  </h3>
                  <p className="mt-3 flex-1 break-words font-inter text-sm leading-6 text-charcoal/72">
                    {t(`portfolio.categoryCards.${category.value}.description`)}
                  </p>
                  <a
                    href={getGalleryHref(category.value)}
                    className="mt-5 inline-flex w-full justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-center font-inter text-xs font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30 sm:w-fit"
                  >
                    {t('portfolio.viewMore')}
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 rounded-lg bg-charcoal px-5 py-7 text-center shadow-xl shadow-charcoal/10 sm:px-8">
          <h3 className="font-roboto text-2xl font-black text-white sm:text-3xl">
            {t('portfolio.ctaTitle')}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl font-inter text-sm leading-7 text-white/72 sm:text-base">
            {t('portfolio.ctaText')}
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex rounded-full bg-gradient-gold px-6 py-3 text-center font-inter text-xs font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30"
          >
            {t('portfolio.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
