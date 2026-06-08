import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Briefcase, MapPin, CheckCircle2, Building } from 'lucide-react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-28 px-6 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subline">Where I've worked</p>
          <h2 className="section-heading">Professional Experience</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="relative mt-8">
          {/* Gradient timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #38BDF8, #38BDF840, transparent)',
            }}
          />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${i}`}
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-5 -translate-y-1/2">
                  {exp.current ? (
                    <div className="w-5 h-5 rounded-full bg-accent border-2 border-accent timeline-pulse glow" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-[#1E293B] border-2 border-[#334155]" />
                  )}
                </div>

                {/* Card */}
                <div className={`card relative overflow-hidden ${exp.current ? 'border-accent/30 shadow-xl shadow-accent/5' : ''}`}>
                  {exp.current && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                  )}

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Company icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        exp.current ? 'bg-accent/10 border border-accent/30' : 'bg-[#0F172A] border border-[#334155]'
                      }`}>
                        <Building size={20} className={exp.current ? 'text-accent' : 'text-[#CBD5E1]/40'} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <h3 className="text-white font-bold text-base">{exp.role}</h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 badge-sm">
                              <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="text-accent font-semibold flex items-center gap-1.5">
                            <Briefcase size={13} /> {exp.company}
                          </span>
                          <span className="text-[#CBD5E1]/50 text-xs font-mono flex items-center gap-1">
                            <MapPin size={11} /> {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[#CBD5E1]/40 font-mono text-xs bg-[#0F172A] border border-[#334155]/60 px-3 py-1.5 rounded-lg self-start">
                      {exp.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#CBD5E1] text-sm leading-relaxed mb-4 sm:pl-16">{exp.description}</p>

                  {/* Key points */}
                  <ul className="space-y-2 sm:pl-16">
                    {exp.points.map(point => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-[#CBD5E1]/80">
                        <CheckCircle2 size={13} className="text-accent mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
