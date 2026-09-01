const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cyan-400 font-medium mb-3">
          GET IN TOUCH
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's connect.
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          I'm currently exploring entry-level opportunities in AI/ML,
          Computer Vision, Data Science, Data Analytics, and Applied AI.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jyothikalal.km@gmail.com"
            className="px-5 py-3 rounded-lg bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
          >
            jyothikalal.km@gmail.com
          </a>

          <a
            href="https://github.com/JyothikaLal"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-slate-700 hover:border-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jyothika-lal-k-m-42b845250/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-slate-700 hover:border-cyan-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact