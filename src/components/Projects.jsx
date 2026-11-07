import projects from "../data/projects"

const Projects = () => {
  return (
    <section id="projects" className="section-shell px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className="section-title">Projects</h2>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            A selection of AI/ML and data-driven applications I&apos;ve built,
            combining intelligent models with practical software systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group surface-card elevate-tilt overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-800 bg-slate-950">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-2 text-sm font-medium text-cyan-400">{project.subtitle}</p>
                <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mb-5 text-base leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="tech-pill px-3 py-1.5 text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  View on GitHub
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects