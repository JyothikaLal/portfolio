const Contact = () => {
  return (
    <section id="contact" className="section-shell px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-800/80 bg-slate-900/50 p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.6)] backdrop-blur-sm md:p-12">
        <p className="eyebrow mb-3">Get in touch</p>
        <h2 className="mb-6 text-4xl font-bold tracking-[-0.05em] text-white md:text-5xl">
          Let&apos;s connect.
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          I&apos;m currently exploring entry-level opportunities in AI/ML, Computer Vision,
          Data Science, Data Analytics, and Applied AI.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jyothikalal.km@gmail.com"
            className="btn-primary px-6 py-3 text-sm md:text-base"
          >
            jyothikalal.km@gmail.com
          </a>

          <a
            href="https://github.com/JyothikaLal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-6 py-3 text-sm md:text-base"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jyothika-lal-k-m-42b845250/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-6 py-3 text-sm md:text-base"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact