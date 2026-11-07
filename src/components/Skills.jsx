import skills from "../data/skills"

const Skills = () => {
  return (
    <section id="skills" className="section-shell px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="eyebrow mb-3">Technical toolkit</p>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="surface-card elevate-tilt rounded-2xl p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-white">{category}</h3>

              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="tech-pill px-3 py-1.5 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills