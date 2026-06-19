import { stats } from '../assets/asset'

const Stats = () => {
  return (
    <section>
      {stats.map((item) => (
        <article key={item.title}>
          <strong>{item.number}</strong>
          <span>{item.title}</span>
        </article>
      ))}
    </section>
  )
}

export default Stats
