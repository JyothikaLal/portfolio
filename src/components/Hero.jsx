const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6"
    >
      <div className="hero-orb absolute left-1/3 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="hero-orb absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="reveal order-2 lg:order-1">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 shadow-lg shadow-slate-950/30 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-[0.72rem] font-semibold tracking-[0.15em] text-slate-200 uppercase sm:text-xs">
              AI/ML Engineer
            </span>
          </div>

          <h1 className="mb-5 whitespace-nowrap text-[clamp(2.8rem,4.8vw,6rem)] font-black leading-[0.82] tracking-[-0.07em] text-white">
            <span className="mr-3">Jyothika</span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Lal K M
            </span>
          </h1>

          <p className="lead-copy my-8 max-w-[44rem] text-lg leading-[1.55] text-slate-200 sm:text-xl md:text-[1.65rem] md:leading-[1.35]">
            Building intelligent AI applications across{" "}
            <span className="font-semibold text-violet-300">Computer Vision</span>,{" "}
            <span className="font-semibold text-violet-300">Generative AI</span>, and{" "}
            <span className="font-semibold text-violet-300">Machine Learning</span>.
          </p>

          <p className="mb-10 max-w-[40rem] text-base leading-[1.7] text-slate-400 sm:text-lg">
            B.Tech Computer Science and Engineering graduate specializing in Artificial
            Intelligence and Machine Learning, with hands-on experience building
            computer vision, deep learning, Generative AI, and data-driven
            applications.
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary px-6 py-3 text-sm sm:text-base">
              Explore Projects
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>

            <a
              href="mailto:jyothikalal.km@gmail.com"
              className="btn-secondary px-6 py-3 text-sm sm:text-base"
            >
              jyothikalal.km@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-5 text-sm text-slate-400 sm:gap-7">
            <a
              href="https://github.com/JyothikaLal"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/jyothika-lal-k-m-42b845250/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-10 rounded-full bg-violet-600/10 blur-3xl" />
            <div className="hero-portrait relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900/40 p-3 soft-glow">
              <img
                src="/images/hero.png"
                alt="Illustration of Jyothika working on an AI project"
                className="w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero