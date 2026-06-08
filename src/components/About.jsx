import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MapPin, GraduationCap, Building2, Star, Briefcase, ArrowRight } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const icons = {
  Location: MapPin,
  Degree: GraduationCap,
  University: Building2,
  GPA: Star,
  'Current Role': Briefcase,
}

const HIGHLIGHTS = [
  { value: 4, suffix: '+', label: 'Projects Completed' },
  { value: 2, suffix: '+', label: 'Years of Learning' },
  { value: 10, suffix: '+', label: 'Technologies Mastered' },
]

function CountUp({ to, suffix, run }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!run) return
    let start = 0
    const step = Math.ceil(to / 30)
    const timer = setInterval(() => {
      start += step
      if (start >= to) { setCount(to); clearInterval(timer) }
      else setCount(start)
    }, 40)
    return () => clearInterval(timer)
  }, [run, to])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-28 px-6 bg-[#111827] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 dot-bg opacity-30 w-full h-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subline">Who I am</p>
          <h2 className="section-heading">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 mt-2">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="space-y-5 mb-8">
              {personalInfo.aboutParagraphs.map((p, i) => (
                <p key={i} className="text-[#CBD5E1] leading-[1.8] text-sm sm:text-base">
                  {p}
                </p>
              ))}
            </div>

            {/* Stat counters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#334155]/60">
              {HIGHLIGHTS.map(item => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-extrabold text-gradient font-mono mb-1">
                    <CountUp to={item.value} suffix={item.suffix} run={inView} />
                  </div>
                  <p className="text-[#CBD5E1]/60 text-[11px] font-mono leading-tight">{item.label}</p>
                </div>
              ))}
            </div>

            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all duration-200 group"
              whileHover={{ x: 4 }}
            >
              See my work <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Quick info cards */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start"
          >
            {personalInfo.quickInfo.map((item, i) => {
              const Icon = icons[item.label] || MapPin
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.32 + i * 0.08 }}
                  className={`card flex items-start gap-4 ${i === 0 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 glow-sm">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#CBD5E1]/50 font-mono uppercase tracking-[0.15em] mb-1">
                      {item.label}
                    </p>
                    <p className="text-white text-sm font-semibold leading-snug">{item.value}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
