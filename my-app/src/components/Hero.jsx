import { assets } from '../assets/asset'

const Hero = () => {
  return (
    <section id='home' className='clip-path hero relative min-h-[100svh] pt-16 sm:pt-20'>
      <div className='relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden sm:min-h-[calc(100svh-5rem)]'>
        <div className='absolute inset-0 z-0 hero-bg'>
          <img
            className='h-full w-full object-cover object-center sm:object-center lg:object-[center_45%]'
            src={assets.bgImg}
            alt='Elegant event hall prepared for a photography session'
          />
          <div className='absolute inset-0 bg-charcoal/70 sm:bg-gradient-to-r sm:from-charcoal/85 sm:via-charcoal/60 sm:to-charcoal/35'></div>
          <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/70 to-transparent'></div>
        </div>

        <div className='relative z-10 mx-auto flex w-full max-w-7xl justify-center px-4 sm:px-6 md:px-8 lg:justify-start'>
          <div className='w-full max-w-3xl py-14 text-center sm:py-20 md:py-24 lg:py-28 lg:text-left'>
            <p className='mx-auto mb-4 max-w-[18rem] font-montserrat text-xs font-bold uppercase tracking-[0.22em] text-gold sm:max-w-none sm:text-sm sm:tracking-[0.28em] lg:mx-0'>
              Photography for timeless celebrations
            </p>
            <h1 className='mx-auto mb-5 max-w-[20rem] font-playerfair text-4xl font-bold leading-tight text-white min-[380px]:max-w-[24rem] min-[380px]:text-5xl sm:max-w-2xl sm:text-6xl md:text-7xl lg:mx-0 lg:max-w-3xl'>
              Capturing your
              <span className='block text-gradient-gold'>precious moments</span>
            </h1>
            <p className='mx-auto max-w-xl font-montserrat text-sm leading-7 text-white/85 sm:text-base sm:leading-8 md:text-lg lg:mx-0 lg:max-w-2xl'>
              At Solace-Foto, we preserve the emotion, beauty, and quiet details
              of your day with polished photography made to feel personal,
              elegant, and alive.
            </p>

            <div className='mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start'>
              <a
                href='#contact'
                className='rounded-full bg-gradient-gold px-6 py-3 text-center font-montserrat text-sm font-bold uppercase tracking-wide text-charcoal shadow-lg shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:px-7'
              >
                Book a Section
              </a>
              <a
                href='#portfolio'
                className='rounded-full border border-white/60 px-6 py-3 text-center font-montserrat text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7'
              >
                View Portfolio
              </a>
            </div>

            <div className='mx-auto mt-8 grid max-w-sm grid-cols-3 gap-2 border-t border-white/20 pt-5 text-white sm:mt-10 sm:max-w-xl sm:gap-6 sm:pt-6 lg:mx-0'>
              <div>
                <p className='font-playerfair text-2xl font-bold text-gold sm:text-3xl'>10+</p>
                <p className='mt-1 font-montserrat text-[0.68rem] uppercase tracking-wide text-white/75 sm:text-xs'>
                  Years
                </p>
              </div>
              <div>
                <p className='font-playerfair text-2xl font-bold text-gold sm:text-3xl'>100+</p>
                <p className='mt-1 font-montserrat text-[0.68rem] uppercase tracking-wide text-white/75 sm:text-xs'>
                  Clients
                </p>
              </div>
              <div>
                <p className='font-playerfair text-2xl font-bold text-gold sm:text-3xl'>200+</p>
                <p className='mt-1 font-montserrat text-[0.68rem] uppercase tracking-wide text-white/75 sm:text-xs'>
                  Stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
