import { motion } from 'framer-motion'
import { Linkedin, Mail, Code2, Heart, ArrowUp } from 'lucide-react'
import { personalInfo, navLinks } from '../data/portfolioData'

export default function Footer() {
  const scroll = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative bg-[#060D1A] border-t border-[#334155]/40 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-accent/5 blur-2xl" />

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => scroll('#home')} className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors glow-sm">
                <Code2 size={16} className="text-accent" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-sm tracking-wide">Abdullah Masoud</span>
              <span className="text-accent/50 font-mono text-[9px] tracking-[0.15em]">PORTFOLIO</span>
              </div>
            </button>
            <p className="text-[#CBD5E1]/60 text-sm leading-relaxed max-w-xs mb-5">
              Information Systems specialist building practical, scalable, and user-focused digital solutions from Riyadh, Saudi Arabia.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {[
                { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#CBD5E1]/60 hover:text-accent hover:border-accent/40 hover:bg-accent/10 transition-colors duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 font-mono uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scroll(link.href)}
                    className="text-[#CBD5E1]/60 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 font-mono uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="text-[#CBD5E1]/60 hover:text-accent text-xs font-mono transition-colors break-all">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="text-[#CBD5E1]/60 hover:text-accent text-xs font-mono transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-[#CBD5E1]/40 text-xs font-mono">{personalInfo.location}</li>
              <li>
                <span className="inline-flex items-center gap-1.5 badge-sm text-green-400 bg-green-400/8 border-green-400/20">
                  <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                  Open to opportunities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#334155]/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#CBD5E1]/30 text-xs font-mono">
            © 2026 Abdullah Masoud Alotaibi. All rights reserved.
          </p>
          <p className="text-[#CBD5E1]/25 text-xs font-mono flex items-center gap-1">
            Built with <Heart size={10} className="text-red-400/60" fill="currentColor" /> React & Tailwind CSS
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#CBD5E1]/30 hover:text-accent text-xs font-mono transition-colors flex items-center gap-1.5"
          >
            Back to top <ArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  )
}
