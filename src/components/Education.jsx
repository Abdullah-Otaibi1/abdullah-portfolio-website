import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { GraduationCap, Star, Calendar, BookOpen, Award } from 'lucide-react'
import { education } from '../data/portfolioData'

const highlights = [
  { icon: GraduationCap, label: 'Degree', value: education.degree },
  { icon: Award, label: 'GPA', value: `${education.gpa} — Distinction` },
  { icon: Calendar, label: 'Graduation Year', value: education.year },
  { icon: BookOpen, label: 'Focus Areas', value: 'Software Dev, Data Analysis, System Design' },
]

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="py-28 px-6 bg-[#111827] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subline">Academic background</p>
          <h2 className="section-heading">Education</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="card-featured p-8"
        >
          {/* Top accent */}
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 glow">
              <GraduationCap size={30} className="text-accent" />
            </div>
            <div>
              <h3 className="text-white font-extrabold text-xl sm:text-2xl mb-1">{education.degree}</h3>
              <p className="text-accent font-semibold text-base">{education.university}</p>
            </div>
            <div className="sm:ml-auto flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-2.5 shrink-0 self-start">
              <Star size={14} className="text-yellow-400" fill="currentColor" />
              <div>
                <p className="text-yellow-400 font-bold font-mono text-sm">{education.gpa}</p>
                <p className="text-yellow-400/60 text-[10px] font-mono">GPA Score</p>
              </div>
            </div>
          </div>

          {/* Info grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#0F172A]/50 border border-[#334155]/60"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#CBD5E1]/50 uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <p className="text-[#CBD5E1] text-sm leading-relaxed border-t border-[#334155]/60 pt-5">
            {education.description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
