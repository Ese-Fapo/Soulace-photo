import { stats } from '../assets/asset'

const Stats = () => {
  return (
    <section className="w-full max-w-full overflow-x-clip bg-charcoal px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:grid-cols-4 sm:gap-4">
      {stats.map((item) => (
        <article key={item.title} className="min-w-0 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-4 text-center sm:border-0 sm:bg-transparent sm:px-2 sm:py-0">
          <strong className="block font-playerfair text-3xl text-gold sm:text-4xl">{item.number}</strong>
          <span className="mx-auto mt-1 block max-w-[9rem] break-words font-montserrat text-[0.68rem] uppercase tracking-wide text-white/80 min-[380px]:text-xs sm:text-sm">
            {item.title}
          </span>
        </article>
      ))}
      </div>
    </section>
  )
}

export default Stats
