import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, ChevronRight, Terminal, GitBranch, Wifi } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const TYPED_STRINGS = [
  'API & Integration Developer',
  'Web Developer',
  'Information Systems Specialist',
  'Data Analysis Enthusiast',
]

function useTypingEffect(strings, speed = 65, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[idx]
    let timeout
    if (!deleting) {
      if (charIdx <= current.length) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIdx))
          setCharIdx(c => c + 1)
        }, speed)
      } else {
        timeout = setTimeout(() => setDeleting(true), pause)
      }
    } else {
      if (charIdx >= 0) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIdx))
          setCharIdx(c => c - 1)
        }, speed / 2)
      } else {
        setDeleting(false)
        setIdx(i => (i + 1) % strings.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, idx, strings, speed, pause])

  return display
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const STATS = [
  { value: '4.32', label: 'GPA / 5.0', suffix: '' },
  { value: '4+', label: 'Projects Built', suffix: '' },
  { value: '2+', label: 'Years Learning', suffix: '' },
  { value: '10+', label: 'Technologies', suffix: '' },
]

const CODE_LINES = [
  { indent: 0, color: '#64748b', text: '// Abdullah Masoud Alotaibi' },
  { indent: 0, color: '#38BDF8', text: 'const developer = {' },
  { indent: 1, color: '#94a3b8', text: 'role: ', value: '"Integration Dev"', vcolor: '#a5f3fc' },
  { indent: 1, color: '#94a3b8', text: 'focus: ', value: '"APIs & Web"', vcolor: '#a5f3fc' },
  { indent: 1, color: '#94a3b8', text: 'location: ', value: '"Riyadh, SA"', vcolor: '#a5f3fc' },
  { indent: 1, color: '#94a3b8', text: 'status: ', value: '"open to work ✓"', vcolor: '#4ade80' },
  { indent: 0, color: '#38BDF8', text: '}' },
]

export default function Hero() {
  const typed = useTypingEffect(TYPED_STRINGS)
  const [codeVisible, setCodeVisible] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeVisible(v => {
        if (v < CODE_LINES.length) return v + 1
        clearInterval(interval)
        return v
      })
    }, 220)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-100" />
        {/* Center glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/6 rounded-full blur-[130px]" />
        {/* Side orbs */}
        <div className="absolute top-20 right-1/4 w-48 h-48 bg-cyan-400/5 rounded-full blur-[60px] float" />
        <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] float-reverse" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F172A]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div>
            {/* Status badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 badge mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            >
              Hi, I'm{' '}
              <span className="text-gradient block sm:inline">
                {personalInfo.name.split(' ')[0]}
              </span>{' '}
              <span className="block sm:inline">
                {personalInfo.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            {/* Typing */}
            <motion.div {...fadeUp(0.2)} className="h-8 flex items-center mb-5">
              <span className="text-accent font-mono text-base sm:text-lg font-medium">
                {typed}
                <span className="cursor-blink ml-0.5">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.4)} className="flex flex-col xs:flex-row flex-wrap gap-3 mb-10">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center gap-2 w-full xs:w-auto"
              >
                View My Projects <ChevronRight size={15} />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline flex items-center justify-center gap-2 w-full xs:w-auto"
              >
                <Mail size={15} /> Contact Me
              </button>
              <a href={personalInfo.cvFile} download className="btn-ghost flex items-center justify-center gap-2 w-full xs:w-auto">
                <Download size={15} /> Download CV
              </a>
            </motion.div>

            {/* Tech badges */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-2">
              {personalInfo.heroBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.25 }}
                  className="badge"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right — Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="float relative">
              {/* Glow behind terminal */}
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />

              {/* Terminal */}
              <div className="relative bg-[#0D1526] border border-[#334155]/80 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#334155]/60 bg-[#111827]">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-3 flex items-center gap-2 text-[#64748b] text-xs font-mono">
                    <Terminal size={11} />
                    <span>portfolio.js</span>
                  </div>
                  <div className="ml-auto flex items-center gap-3 text-[#334155] text-xs font-mono">
                    <span className="flex items-center gap-1"><GitBranch size={10} /> main</span>
                    <span className="flex items-center gap-1 text-green-400/70"><Wifi size={10} /> live</span>
                  </div>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-sm leading-7">
                  {CODE_LINES.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={i < codeVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                      transition={{ duration: 0.2 }}
                      style={{ paddingLeft: line.indent * 18 }}
                    >
                      {line.value ? (
                        <span>
                          <span style={{ color: line.color }}>{line.text}</span>
                          <span style={{ color: line.vcolor }}>{line.value}</span>
                          <span style={{ color: '#64748b' }}>,</span>
                        </span>
                      ) : (
                        <span style={{ color: line.color }}>{line.text}</span>
                      )}
                    </motion.div>
                  ))}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: codeVisible >= CODE_LINES.length ? 1 : 0 }}
                    className="cursor-blink text-accent"
                  >
                    █
                  </motion.span>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-4 border-t border-[#334155]/60 bg-[#111827]">
                  {STATS.map(stat => (
                    <div key={stat.label} className="p-3 text-center border-r border-[#334155]/40 last:border-r-0">
                      <p className="text-accent font-bold text-base font-mono">{stat.value}</p>
                      <p className="text-[#64748b] text-[9px] font-mono leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#CBD5E1]/30 text-[10px] font-mono tracking-widest uppercase"
        >
          <span>scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
