import { useEffect, useRef, useState } from 'react'
import { stats } from '../assets/asset'

const parseStatNumber = (value) => {
  const match = value.match(/^(\d+)(.*)$/)

  if (!match) {
    return { target: 0, suffix: value }
  }

  return {
    target: Number(match[1]),
    suffix: match[2],
  }
}

const CountUpNumber = ({ value }) => {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const { target, suffix } = parseStatNumber(value)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) {
      return undefined
    }

    let animationFrameId
    const duration = 2500
    const startTime = performance.now()

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setCount(Math.round(target * easedProgress))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [hasStarted, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <section className="relative w-full max-w-full overflow-x-clip border-y border-[#f2b8a0]/15 bg-[#17090d] px-4 py-10 sm:px-6 lg:py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2b8a0]/55 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,90,74,0.16),transparent_62%)]"></div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 min-[520px]:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <article
            key={item.title}
            className="group relative min-w-0 px-5 py-7 text-center transition-colors duration-300 hover:bg-white/[0.06] sm:px-6 lg:px-7"
          >
            {index > 0 && (
              <span className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/12 lg:block"></span>
            )}
            {index > 1 && (
              <span className="absolute inset-x-6 top-0 hidden h-px bg-white/12 min-[520px]:block lg:hidden"></span>
            )}

            <span className="mx-auto mb-4 block h-1 w-10 rounded-full bg-gradient-gold transition-all duration-300 group-hover:w-14"></span>
            <strong className="block font-roboto text-4xl font-black leading-none text-gradient-gold sm:text-5xl">
              <CountUpNumber value={item.number} />
            </strong>
            <span className="mx-auto mt-3 block max-w-[10rem] break-words font-inter text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#f8ece7]/78 min-[380px]:text-xs">
              {item.title}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Stats
