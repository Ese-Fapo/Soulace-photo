import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useTranslation } from 'react-i18next'

const reviews = [
  { id: 1, name: 'Marina Souza' },
  { id: 2, name: 'Joao Paulo Mendes' },
  { id: 3, name: 'Ana Carolina Ribeiro' },
  { id: 4, name: 'Carlos Henrique Lima' },
  { id: 5, name: 'Fernanda Costa' },
  { id: 6, name: 'Ricardo Barbosa' },
  { id: 7, name: 'Grace Adeyemi' },
  { id: 8, name: 'Daniel Okafor' },
  { id: 9, name: 'Sarah Williams' },
  { id: 10, name: 'Michael Johnson' },
  { id: 11, name: 'Faith Eze' },
  { id: 12, name: 'Peter Collins' },
]

const Testimonials = () => {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const activeReview = reviews[activeIndex]

  const goToReview = (index) => {
    setDirection(index >= activeIndex ? 'next' : 'previous')
    setActiveIndex((index + reviews.length) % reviews.length)
  }

  const showNextReview = () => {
    setDirection('next')
    setActiveIndex((currentIndex) => (currentIndex + 1) % reviews.length)
  }

  const showPreviousReview = () => {
    setDirection('previous')
    setActiveIndex((currentIndex) => (currentIndex - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      showNextReview()
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const previewReviews = [1, 2].map((offset) => reviews[(activeIndex + offset) % reviews.length])

  return (
    <section id="testimonials" className="w-full max-w-full overflow-x-clip bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
          <div data-aos="fade-up" className="min-w-0">
            <p className="font-inter text-xs font-bold uppercase tracking-[0.22em] text-gold">
              {t('testimonials.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-2xl break-words font-roboto text-3xl font-black leading-tight text-charcoal min-[380px]:text-4xl sm:text-5xl">
              {t('testimonials.title')}
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="rounded-lg border border-chamegane bg-cream p-5 shadow-sm shadow-charcoal/5">
            <div className="flex flex-col gap-3 min-[380px]:flex-row min-[380px]:items-center min-[380px]:flex-wrap">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm shadow-charcoal/10">
                <FcGoogle className="text-3xl" />
              </span>
              <div className="min-w-0">
                <p className="font-roboto text-2xl font-black leading-none text-charcoal">5.0</p>
                <div className="mt-1 flex text-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="text-sm" />
                  ))}
                </div>
              </div>
              <p className="min-w-0 font-inter text-sm leading-6 text-charcoal/70">
                {t('testimonials.based')}
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.44fr)] xl:gap-5">
          <article className="relative min-w-0 overflow-hidden rounded-lg border border-chamegane bg-cream p-5 shadow-xl shadow-charcoal/10 sm:p-7 lg:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold"></div>

            <div
              key={activeReview.id}
              aria-live="polite"
              className={`testimonial-slide-${direction}`}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="break-words font-roboto text-2xl font-black leading-tight text-charcoal sm:text-3xl">
                    {activeReview.name}
                  </h3>
                  <p className="mt-2 break-words font-inter text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/58">
                    {t(`testimonials.reviews.${activeReview.id}.role`)} - {t(`testimonials.reviews.${activeReview.id}.date`)} - {t(`testimonials.reviews.${activeReview.id}.location`)}
                  </p>
                </div>
                <FcGoogle className="shrink-0 text-3xl" />
              </div>

              <div className="mt-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar key={starIndex} className="text-base" />
                ))}
              </div>

              <p className="mt-5 break-words font-inter text-base leading-8 text-charcoal/78 sm:text-lg sm:leading-9">
                "{t(`testimonials.reviews.${activeReview.id}.quote`)}"
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                {reviews.map((review, index) => (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => goToReview(index)}
                    aria-label={t('testimonials.goTo', { number: index + 1 })}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'w-8 bg-gradient-gold' : 'w-2.5 bg-charcoal/18 hover:bg-gold/60'
                    }`}
                  ></button>
                ))}
              </div>

              <div className="flex justify-center gap-2 sm:justify-end">
                <button
                  type="button"
                  onClick={showPreviousReview}
                  aria-label={t('testimonials.previous')}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-gold hover:text-white"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={showNextReview}
                  aria-label={t('testimonials.next')}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold text-white shadow-lg shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </article>

          <div className="hidden min-w-0 gap-4 lg:grid">
            {previewReviews.map((review) => (
              <article
                key={review.id}
                className="min-w-0 rounded-lg border border-chamegane bg-white p-5 shadow-sm shadow-charcoal/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="break-words font-roboto text-lg font-black leading-tight text-charcoal">
                      {review.name}
                    </h3>
                    <p className="mt-1 break-words font-inter text-xs font-semibold text-charcoal/60">
                      {t(`testimonials.reviews.${review.id}.location`)}
                    </p>
                  </div>
                  <FcGoogle className="shrink-0 text-2xl" />
                </div>
                <div className="mt-4 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-sm" />
                  ))}
                </div>
                <p className="mt-4 line-clamp-3 break-words font-inter text-sm leading-7 text-charcoal/72">
                  "{t(`testimonials.reviews.${review.id}.quote`)}"
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
