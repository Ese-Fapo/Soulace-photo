import images from '../assets/asset'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full max-w-full overflow-x-clip bg-[#12070b] pt-16 sm:pt-20">
      <div className="relative flex min-h-[calc(100svh-4rem)] w-full items-end overflow-hidden sm:min-h-[calc(100svh-5rem)] lg:items-center">
        <div className="absolute inset-0">
          <img
            className="h-full w-full scale-105 object-cover object-center saturate-[0.92] lg:object-[center_45%]"
            src={images.reception}
            alt="Elegant wedding reception venue with warm lighting"
          />
          <div className="absolute inset-0 bg-[#12070b]/45"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,7,11,0.95)_0%,rgba(35,9,15,0.82)_42%,rgba(18,7,11,0.24)_100%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(242,184,160,0.18),transparent_26%),radial-gradient(circle_at_18%_80%,rgba(216,90,74,0.20),transparent_30%)]"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#12070b] via-[#12070b]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end px-4 py-10 sm:px-6 sm:py-14 lg:items-center lg:py-20">
          <div className="min-w-0 text-center lg:text-left">
            <div
              data-aos="fade-up"
              className="mx-auto flex w-fit max-w-full items-center gap-3 border-y border-[#f2b8a0]/35 px-3 py-2 lg:mx-0"
            >
              <span className="h-px w-6 shrink-0 bg-[#f2b8a0] min-[380px]:w-8"></span>
              <p className="font-inter text-[0.63rem] font-bold uppercase tracking-[0.16em] text-[#f2b8a0] min-[380px]:text-xs sm:tracking-[0.24em]">
                Creative photography studio
              </p>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="120"
              className="mx-auto mt-6 max-w-5xl break-words font-roboto text-4xl font-black leading-[1.02] text-white min-[380px]:text-5xl sm:text-6xl md:text-7xl lg:mx-0 xl:text-8xl"
            >
              Photography that turns
              <span className="block text-gradient-gold">moments into lasting stories</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="220"
              className="mx-auto mt-6 max-w-2xl font-inter text-sm leading-7 text-[#f8ece7]/86 sm:text-base sm:leading-8 md:text-lg lg:mx-0"
            >
              Solace-Foto creates refined imagery for portraits, events, products, food, real estate, fashion, and meaningful celebrations, with cinematic color and honest emotion.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="320"
              className="mx-auto mt-8 flex w-full max-w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start"
            >
              <a
                href="#contact"
                className="w-full rounded-full bg-gradient-gold px-6 py-3.5 text-center font-inter text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl shadow-[#7b1324]/35 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#a51d35]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2b8a0] min-[380px]:text-sm sm:w-auto sm:px-8"
              >
                Reserve your date
              </a>
              <a
                href="#portfolio"
                className="w-full rounded-full border border-[#f2b8a0]/60 px-6 py-3.5 text-center font-inter text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f2b8a0] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[380px]:text-sm sm:w-auto sm:px-8"
              >
                See the gallery
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
