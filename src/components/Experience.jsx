const Experience = () => {
  return (
    <section id="experience" className="section-shell px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="surface-card overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 md:p-8">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Intern</h3>
                  <p className="mt-1 text-base font-medium text-cyan-400">Heftin AI</p>
                </div>

                <span className="inline-flex rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-400">
                  July 2026 — Present
                </span>
              </div>

              <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-400">
                Contributing to NexGen Athlete, a multi-tenant sports management SaaS,
                with a focus on Performance & Assessment Management. Developed the
                foundational PostgreSQL database layer and implemented version-controlled
                Alembic migrations using FastAPI and SQLAlchemy.
              </p>

              <div className="mb-7 space-y-3">
                {[
                  "Developed the foundational PostgreSQL database layer.",
                  "Implemented version-controlled Alembic migrations for Sprint 1 tables.",
                  "Validated migration reliability through upgrade, downgrade, and re-upgrade workflows.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <span className="font-mono text-sm font-semibold text-cyan-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-400">{item}</p>
                  </div>
                ))}
              </div>

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
                  <span key={technology} className="tech-pill px-3 py-1.5 text-sm">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex items-center bg-slate-950/80 p-5 md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),_transparent_30%)]" />
              <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                <img
                  src="/images/experience.png"
                  alt="NexGen Athlete system architecture"
                  className="h-full w-full object-cover"
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