import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const faqIndexes = Array.from({ length: 10 }, (_, index) => index)

const Faqs = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="w-full max-w-full overflow-x-clip bg-cream px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-12">
        <div data-aos="fade-up" className="min-w-0">
          <p className="font-inter text-xs font-bold uppercase tracking-[0.22em] text-gold">
            {t('faqs.eyebrow')}
          </p>
          <h2 className="mt-3 max-w-2xl break-words font-roboto text-3xl font-black leading-tight text-charcoal min-[380px]:text-4xl sm:text-5xl">
            {t('faqs.title')}
          </h2>
          <p className="mt-5 max-w-2xl font-inter text-sm leading-7 text-charcoal/75 sm:text-base">
            {t('faqs.description')}
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="120" className="grid min-w-0 gap-3">
          {faqIndexes.map((index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={index}
                className="min-w-0 overflow-hidden rounded-lg border border-chamegane bg-white shadow-sm shadow-charcoal/5"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full min-w-0 items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 break-words font-roboto text-base font-black leading-6 text-charcoal sm:text-lg">
                    {t(`faqs.items.${index}.question`)}
                  </span>
                  <FaChevronDown
                    className={`shrink-0 text-sm text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="border-t border-chamegane px-4 py-4 font-inter text-sm leading-7 text-charcoal/72 sm:px-5 sm:text-base">
                    {t(`faqs.items.${index}.answer`)}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faqs
