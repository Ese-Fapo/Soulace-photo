import images, { assets } from '../assets/asset'

const Hero = () => {
  const heroHighlights = ['Weddings', 'Portraits', 'Events']

  return (
    <section id='home' className='clip-path hero relative min-h-[100svh] w-full max-w-full overflow-x-clip bg-[#18090d] pt-16 sm:pt-20'>
      <div className='relative flex min-h-[calc(100svh-4rem)] w-full max-w-full items-center overflow-hidden sm:min-h-[calc(100svh-5rem)]'>
        <div className='absolute inset-0 z-0 max-w-full overflow-hidden hero-bg'>
          <img
            className='h-full w-full max-w-full scale-105 object-cover object-center saturate-[0.85] sm:object-center lg:object-[center_45%]'
            src={assets.bgImg}
            alt='Elegant event hall prepared for a photography session'
          />
          <div className='absolute inset-0 bg-[#17070c]/80 mix-blend-multiply'></div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(190,45,67,0.42),transparent_32%),linear-gradient(115deg,rgba(15,6,9,0.96)_0%,rgba(42,11,18,0.82)_44%,rgba(90,20,31,0.34)_100%)]'></div>
          <div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#18090d] via-[#18090d]/72 to-transparent'></div>
        </div>

        <div className='relative z-10 mx-auto grid min-w-0 w-full max-w-7xl items-center gap-8 px-4 py-10 min-[380px]:py-12 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:gap-12 lg:py-20 xl:grid-cols-[minmax(0,1.05fr)_minmax(25rem,32rem)] xl:gap-14'>
          <div className='min-w-0 text-center lg:text-left'>
            <div className='mx-auto mb-4 flex w-fit max-w-full items-center gap-2 border-y border-[#eac1b2]/30 px-2.5 py-2 min-[380px]:gap-3 min-[380px]:px-3 sm:mb-5 lg:mx-0'>
              <span className='h-px w-5 shrink-0 bg-[#e66f64] min-[380px]:w-8'></span>
              <p className='font-inter text-[0.63rem] font-bold uppercase tracking-[0.14em] text-[#f2b8a0] min-[380px]:text-[0.68rem] min-[380px]:tracking-[0.2em] sm:text-xs sm:tracking-[0.26em]'>
                Luxury photography studio
              </p>
            </div>

            <h1 className='mx-auto max-w-full break-words font-roboto text-4xl font-bold leading-[1.02] text-white min-[380px]:max-w-[25rem] min-[380px]:text-5xl sm:max-w-2xl sm:text-6xl sm:leading-[0.98] md:text-7xl lg:mx-0 lg:max-w-3xl xl:text-8xl'>
              Images that feel
              <span className='block text-gradient-gold'>cinematic and intimate</span>
            </h1>

            <p className='mx-auto mt-6 max-w-full font-inter text-sm leading-7 text-[#f8ece7]/86 sm:max-w-xl sm:text-base sm:leading-8 md:text-lg lg:mx-0 lg:max-w-2xl'>
              Solace-Foto creates refined wedding, portrait, and event imagery with
              dramatic color, honest emotion, and careful attention to every quiet
              detail.
            </p>

            <div className='mx-auto mt-7 flex w-full max-w-full flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start'>
              <a
                href='#contact'
                className='w-full max-w-full rounded-full bg-gradient-gold px-5 py-3.5 text-center font-inter text-xs font-bold uppercase tracking-wide text-white shadow-xl shadow-[#7b1324]/35 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#a51d35]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2b8a0] min-[380px]:text-sm sm:w-auto sm:px-7'
              >
                Book a Session
              </a>
              <a
                href='#portfolio'
                className='w-full max-w-full rounded-full border border-[#f2b8a0]/55 px-5 py-3.5 text-center font-inter text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f2b8a0] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[380px]:text-sm sm:w-auto sm:px-7'
              >
                View Portfolio
              </a>
            </div>

            <div className='mx-auto mt-7 flex max-w-full flex-wrap justify-center gap-2 border-t border-[#f2b8a0]/20 pt-5 sm:mt-10 lg:mx-0 lg:justify-start'>
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-[#f2b8a0]/25 bg-white/[0.06] px-3 py-2 font-inter text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-[#f8ece7]/82 min-[380px]:px-4 min-[380px]:text-xs min-[380px]:tracking-[0.18em]'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className='hidden min-w-0 md:block'>
            <div className='relative ml-auto aspect-[4/5] w-full max-w-[30rem]'>
              <div className='absolute -left-5 top-10 h-36 w-28 overflow-hidden rounded-t-full border border-[#f2b8a0]/30 shadow-2xl shadow-black/35 lg:-left-8 lg:h-44 lg:w-32 xl:-left-12 xl:h-52 xl:w-40'>
                <img
                  className='h-full w-full object-cover'
                  src={images.coupleKiss}
                  alt='Couple photographed during an intimate wedding moment'
                />
              </div>
              <div className='absolute inset-y-0 right-0 w-[82%] overflow-hidden rounded-t-full border border-[#f2b8a0]/35 bg-[#2a0b12] shadow-2xl shadow-black/45'>
                <img
                  className='h-full w-full object-cover object-center'
                  src={images.bride}
                  alt='Bride portrait with elegant styling'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#18090d]/76 via-transparent to-transparent'></div>
              </div>
              <div className='absolute bottom-6 left-0 max-w-[14rem] border-l-2 border-[#e66f64] bg-[#18090d]/76 p-4 text-left shadow-xl shadow-black/30 backdrop-blur-md lg:bottom-8 lg:max-w-[16rem] lg:p-5'>
                <p className='font-roboto text-3xl font-bold leading-none text-[#f2b8a0] lg:text-4xl'>10+</p>
                <p className='mt-2 font-inter text-xs font-semibold uppercase tracking-[0.18em] text-white/76'>
                  Years preserving elegant stories
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
