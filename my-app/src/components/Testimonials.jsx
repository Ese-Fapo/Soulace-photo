import { FaStar } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useTranslation } from 'react-i18next'

const reviews = [
  {
    id: 1,
    name: 'Marina Souza',
    role: 'Bride',
    date: 'May 2026',
    quote: 'The team captured every emotional part of our wedding with so much care. The photos feel elegant, natural, and completely us.',
  },
  {
    id: 2,
    name: 'Joao Paulo Mendes',
    role: 'Business owner',
    date: 'April 2026',
    quote: 'Excellent work at our corporate event. Communication was clear, the delivery was fast, and the final gallery looked very professional.',
  },
  {
    id: 3,
    name: 'Ana Carolina Ribeiro',
    role: 'Mother',
    date: 'March 2026',
    quote: 'Our family portraits came out beautiful. Everyone felt comfortable, and the photos captured real smiles instead of stiff poses.',
  },
  {
    id: 4,
    name: 'Carlos Henrique Lima',
    role: 'Restaurant owner',
    date: 'February 2026',
    quote: 'The food photos made our menu look premium. We started using them online immediately and noticed more customer interest.',
  },
  {
    id: 5,
    name: 'Fernanda Costa',
    role: 'Bride',
    date: 'January 2026',
    quote: 'We loved every image. The gallery felt refined and emotional, and it made our day feel even more special when we saw it again.',
  },
  {
    id: 6,
    name: 'Ricardo Barbosa',
    role: 'Real estate broker',
    date: 'December 2025',
    quote: 'The property photos looked bright and spacious. They helped us present the listing with much more confidence.',
  },
]

const Testimonials = () => {
  const { t } = useTranslation()

  return (
    <section id="testimonials" className="w-full max-w-full overflow-x-clip bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
          <div data-aos="fade-up" className="min-w-0">
            <p className="font-inter text-xs font-bold uppercase tracking-[0.22em] text-gold">
              {t('testimonials.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-2xl break-words font-roboto text-4xl font-black leading-tight text-charcoal sm:text-5xl">
            {t('testimonials.title')}
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="rounded-lg border border-chamegane bg-cream p-5 shadow-sm shadow-charcoal/5">
            <div className="flex flex-wrap items-center gap-3">
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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:gap-5">
          {reviews.map((review, index) => (
            <article
              key={review.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="flex min-w-0 flex-col rounded-lg border border-chamegane bg-cream/45 p-5 shadow-sm shadow-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-charcoal/10 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="break-words font-roboto text-lg font-black leading-tight text-charcoal">
                    {review.name}
                  </h3>
                  <p className="mt-1 break-words font-inter text-xs font-semibold text-charcoal/60">
                    {t(`testimonials.reviews.${review.id}.role`)} - {t(`testimonials.reviews.${review.id}.date`)}
                  </p>
                </div>
                <FcGoogle className="shrink-0 text-2xl" />
              </div>

              <div className="mt-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar key={starIndex} className="text-sm" />
                ))}
              </div>

              <p className="mt-4 flex-1 break-words font-inter text-sm leading-7 text-charcoal/75">
                "{t(`testimonials.reviews.${review.id}.quote`)}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
