import { stats } from '../assets/asset'

const Stats = () => {
  return (
    <section className="w-full max-w-full overflow-x-clip bg-charcoal px-4 py-10 sm:px-6">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((item) => (
        <article key={item.title} className="min-w-0 text-center">
          <strong className="block font-playerfair text-3xl text-gold sm:text-4xl">{item.number}</strong>
          <span className="mt-1 block break-words font-montserrat text-xs uppercase tracking-wide text-white/80 sm:text-sm">
            {item.title}
          </span>
        </article>
      ))}
      </div>
    </section>
  )
}

export default Stats
