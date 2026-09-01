const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-bold tracking-tight"
        >
          JYOTHIKA<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar