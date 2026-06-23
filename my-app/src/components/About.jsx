import { assets } from '../assets/asset'

const About = () => {
  return (
    <section id="about" className="w-full max-w-full overflow-x-clip bg-cream px-4 py-16 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 md:flex-row">
        <img
          className="h-auto w-full max-w-md rounded-lg object-cover"
          src={assets.aboutImg}
          alt="Bride portrait"
        />
        <div className="w-full min-w-0 max-w-2xl font-montserrat text-charcoal">About</div>
      </div>
    </section>
  )
}

export default About
