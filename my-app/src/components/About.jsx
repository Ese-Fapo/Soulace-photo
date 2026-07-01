import images, { assets } from '../assets/asset'

const highlights = [
  { value: '10+', label: 'Years behind the lens' },
  { value: '200+', label: 'Edited galleries delivered' },
  { value: '48h', label: 'Preview turnaround' },
]

const processSteps = [
  'Plan the mood, location, and story before the shoot',
  'Guide natural posing without losing real emotion',
  'Edit every gallery with consistent cinematic color',
]

const About = () => {
  return (
    <section id="about" className="w-full max-w-full overflow-x-clip bg-cream px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
        <div data-aos="fade-right" className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-lg bg-charcoal shadow-2xl shadow-charcoal/15">
            <img
              className="h-full w-full object-cover"
              src={assets.aboutImg}
              alt="Bride portrait from Solace-Foto"
            />
          </div>
          <div className="absolute -bottom-5 right-3 hidden w-44 overflow-hidden rounded-lg border-4 border-cream bg-charcoal shadow-xl shadow-charcoal/20 min-[420px]:block sm:right-8 sm:w-56">
            <img
              className="aspect-[4/3] w-full object-cover"
              src={images.coupleKiss}
              alt="Wedding couple photographed in an intimate moment"
            />
          </div>
        </div>

        <div data-aos="fade-left" className="min-w-0">
          <p className="font-inter text-xs font-bold uppercase tracking-[0.22em] text-gold">
            About Solace-Foto
          </p>
          <h2 className="mt-3 max-w-2xl break-words font-roboto text-4xl font-black leading-tight text-charcoal sm:text-5xl">
            Thoughtful photography for moments that deserve more than a snapshot.
          </h2>
          <p className="mt-5 max-w-2xl font-inter text-sm leading-7 text-charcoal/75 sm:text-base sm:leading-8">
            We create wedding, portrait, event, and commercial images with a calm process and a refined editorial eye. Every session is shaped around honest connection, flattering light, and final galleries that feel polished without losing the feeling of the day.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 min-[460px]:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.label} className="min-w-0 rounded-lg border border-chamegane bg-white px-4 py-4 text-center shadow-sm shadow-charcoal/5">
                <strong className="block font-roboto text-3xl font-black leading-none text-gradient-gold">
                  {item.value}
                </strong>
                <span className="mt-2 block break-words font-inter text-[0.68rem] font-bold uppercase tracking-[0.13em] text-charcoal/65">
                  {item.label}
                </span>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-chamegane bg-white p-5 shadow-sm shadow-charcoal/5 sm:p-6">
            <h3 className="font-roboto text-xl font-black text-charcoal">
              How we work
            </h3>
            <ul className="mt-4 space-y-3">
              {processSteps.map((step) => (
                <li key={step} className="flex gap-3 font-inter text-sm leading-6 text-charcoal/75">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-gold"></span>
                  <span className="min-w-0 break-words">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#portfolio"
              className="rounded-full bg-gradient-gold px-6 py-3 text-center font-inter text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30"
            >
              View the work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gold px-6 py-3 text-center font-inter text-xs font-bold uppercase tracking-[0.12em] text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Start a session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
