const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-lg font-bold tracking-[0.18em] text-white">
          JYOTHIKA<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar