import { assets } from '../assets/asset'

const About = () => {
  return (
    <section id="about" className="w-full max-w-full overflow-x-clip bg-cream px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 md:flex-row md:items-stretch lg:gap-12">
        <img
          className="aspect-[4/5] w-full max-w-sm rounded-lg object-cover shadow-xl shadow-charcoal/10 sm:max-w-md md:max-w-[22rem] lg:max-w-md"
          src={assets.aboutImg}
          alt="Bride portrait"
        />
        <div className="flex w-full min-w-0 max-w-2xl items-center font-inter text-base leading-7 text-charcoal sm:text-lg md:max-w-none">
          About
        </div>
      </div>
    </section>
  )
}

export default About
