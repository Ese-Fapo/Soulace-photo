import { useMemo, useState } from 'react'
import { portfolioItems } from '../assets/asset'

const filters = [
  { name: 'All', value: 'all' },
  { name: 'Weddings', value: 'Weddings' },
  { name: 'Portraits', value: 'Portraits' },
  { name: 'Events', value: 'Events' },
  { name: 'Fashion', value: 'Fashion' },
  { name: 'Products', value: 'Product Photography' },
  { name: 'Food', value: 'Food Photography' },
  { name: 'Real Estate', value: 'Real Estate Photography' },
]

const Gallery = () => {
  const [filter, setFilter] = useState('all')

  const filteredItems = useMemo(() => {
    if (filter === 'all') {
      return portfolioItems
    }

    return portfolioItems.filter((item) => item.category === filter)
  }, [filter])

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-clip bg-cream px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:pb-20">
      <section className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <a
              href="#portfolio"
              className="font-inter text-xs font-bold uppercase tracking-[0.18em] text-gold transition-colors duration-300 hover:text-rose"
            >
              Back to site
            </a>
            <h1 className="mt-4 break-words font-roboto text-4xl font-black leading-tight text-charcoal sm:text-5xl">
              Full <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="mt-4 max-w-2xl font-inter text-sm leading-7 text-charcoal/75 sm:text-base">
              Browse the complete collection across portraits, weddings, events, fashion, commercial work, food, and real estate.
            </p>
          </div>

          <p className="font-inter text-sm font-semibold text-charcoal/65">
            {filteredItems.length} photos
          </p>
        </div>

        <div className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
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
                {item.name}
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
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17090d]/90 via-[#17090d]/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-inter text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#f2b8a0]">
                  {item.category}
                </p>
                <h2 className="mt-1 break-words font-roboto text-lg font-black leading-tight text-white sm:text-xl">
                  {item.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Gallery
