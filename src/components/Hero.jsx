const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-1/3 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT — CONTENT */}
        <div className="order-2 lg:order-1">

          {/* Role */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />

            <span className="text-sm text-slate-300">
              AI/ML Engineer
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8 whitespace-nowrap">
            <span className="text-white">Jyothika </span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Lal K M
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-slate-200 max-w-xl leading-relaxed mb-6">
            Building intelligent AI applications across{" "}
            <span className="text-violet-400">
              Computer Vision
            </span>
            ,{" "}
            <span className="text-violet-400">
              Generative AI
            </span>
            , and{" "}
            <span className="text-violet-400">
              Machine Learning
            </span>
            .
          </p>

          {/* Introduction */}
          <p className="text-slate-400 leading-relaxed max-w-lg mb-10">
            B.Tech Computer Science and Engineering graduate specializing in
            Artificial Intelligence and Machine Learning, with hands-on
            experience building computer vision, deep learning, Generative AI,
            and data-driven applications.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-400 transition"
            >
              Explore Projects

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href="mailto:jyothikalal.km@gmail.com"
              className="inline-flex items-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-violet-400 hover:text-violet-400 transition"
            >
              jyothikalal.km@gmail.com
            </a>

          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 mt-8 text-sm text-slate-500">

            <a
              href="https://github.com/JyothikaLal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/jyothika-lal-k-m-42b845250/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

        {/* RIGHT — HERO IMAGE */}
        <div className="order-1 lg:order-2 flex justify-center">

          <div className="relative w-full max-w-xl">

            {/* Glow behind image */}
            <div className="absolute inset-10 bg-violet-600/10 blur-3xl rounded-full" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-2xl shadow-violet-950/20">

              <img
                src="/images/hero.png"
                alt="Illustration of Jyothika working on an AI project"
                className="w-full h-auto object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero