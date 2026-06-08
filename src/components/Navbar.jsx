import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = href => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0F172A]/90 backdrop-blur-xl shadow-xl shadow-black/20 border-b border-[#334155]/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/60 transition-all duration-200 glow-sm">
              <Code2 size={15} className="text-accent" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-white text-sm tracking-wide">Abdullah Masoud</span>
              <span className="text-accent/60 font-mono text-[9px] tracking-[0.15em]">PORTFOLIO</span>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.href
                    ? 'text-accent'
                    : 'text-[#CBD5E1] hover:text-white'
                }`}
              >
                {active === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-lg border border-[#334155] flex items-center justify-center text-[#CBD5E1] hover:text-white hover:border-[#CBD5E1]/40 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-[#0F172A]/98 backdrop-blur-xl border-b border-[#334155]/60"
            >
              <nav className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(link.href)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active === link.href
                        ? 'text-accent bg-accent/10 border border-accent/20'
                        : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
