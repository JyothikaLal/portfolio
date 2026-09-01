const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="mb-12">
          <p className="text-cyan-400 font-medium mb-2">
            EXPERIENCE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Experience
          </h2>
        </div>

        {/* Experience card */}
        <div className="border border-slate-800 rounded-2xl bg-slate-900/40 overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Experience content */}
            <div className="p-6 md:p-8">

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">
                    AI/ML Intern
                  </h3>

                  <p className="text-cyan-400 mt-1">
                    Heftin AI
                  </p>
                </div>

                <span className="text-sm text-slate-500">
                  July 2026 — Present
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6">
                Contributing to NexGen Athlete, a multi-tenant sports
                management SaaS, with a focus on Performance & Assessment
                Management. Developed the foundational PostgreSQL database
                layer and implemented version-controlled Alembic migrations
                using FastAPI and SQLAlchemy.
              </p>

              {/* Key contributions */}
              <div className="space-y-3 mb-7">

                <div className="flex gap-3">
                  <span className="text-cyan-400 font-mono text-sm">
                    01
                  </span>

                  <p className="text-sm text-slate-400">
                    Developed the foundational PostgreSQL database layer.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-400 font-mono text-sm">
                    02
                  </span>

                  <p className="text-sm text-slate-400">
                    Implemented version-controlled Alembic migrations for
                    Sprint 1 tables.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-400 font-mono text-sm">
                    03
                  </span>

                  <p className="text-sm text-slate-400">
                    Validated migration reliability through upgrade,
                    downgrade, and re-upgrade workflows.
                  </p>
                </div>

              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "SQLAlchemy",
                  "PostgreSQL",
                  "Alembic",
                  "REST APIs",
                  "Git",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-sm text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>

            {/* Architecture image */}
            <div className="relative bg-slate-950 p-5 md:p-7 flex items-center">

              <div className="absolute inset-0 bg-violet-500/5" />

              <div className="relative w-full overflow-hidden rounded-xl border border-slate-800">
                <img
                  src="/images/experience.png"
                  alt="NexGen Athlete system architecture"
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience