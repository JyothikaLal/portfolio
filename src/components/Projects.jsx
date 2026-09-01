import projects from "../data/projects"

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="mb-12">
          <p className="text-cyan-400 font-medium mb-2">
            SELECTED WORK
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Projects
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl">
            A selection of AI/ML and data-driven applications I've built,
            combining intelligent models with practical software systems.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-cyan-400/50 transition-all duration-300"
            >

              {/* Project image */}
              <div className="relative overflow-hidden aspect-[16/9] bg-slate-950 border-b border-slate-800">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project content */}
              <div className="p-6">

                {/* Subtitle */}
                <p className="text-sm text-cyan-400 mb-2">
                  {project.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-800 text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
                >
                  View on GitHub
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
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