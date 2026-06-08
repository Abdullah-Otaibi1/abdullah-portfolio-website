import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Globe, Zap, BarChart2, Database, MoreHorizontal, Heart, ChevronDown } from 'lucide-react'
import { skills, softSkills } from '../data/portfolioData'

const categoryIcons = {
  'Web Development': Globe,
  'API & Integration': Zap,
  'Data & Automation': BarChart2,
  Databases: Database,
  'Other Skills': MoreHorizontal,
}

const categoryColors = {
  'Web Development': { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', glow: 'shadow-blue-500/10' },
  'API & Integration': { bg: 'bg-accent/10', border: 'border-accent/20', text: 'text-accent', glow: 'shadow-accent/10' },
  'Data & Automation': { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', glow: 'shadow-purple-500/10' },
  Databases: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', glow: 'shadow-orange-500/10' },
  'Other Skills': { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400', glow: 'shadow-green-500/10' },
}

function SkillCard({ category, items, delay, inView }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = categoryIcons[category] || MoreHorizontal
  const color = categoryColors[category] || categoryColors['Other Skills']
  const SHOW = 5
  const visible = expanded ? items : items.slice(0, SHOW)
  const hasMore = items.length > SHOW

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={`card group hover:shadow-xl ${color.glow}`}
    >
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-transparent ${color.text.replace('text', 'via')} to-transparent opacity-60`} />

      <div className="flex items-center gap-3 mb-5">
        <div className={`w-9 h-9 rounded-xl ${color.bg} border ${color.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon size={15} className={color.text} />
        </div>
        <div>
          <h3 className="text-white font-bold text-sm">{category}</h3>
          <p className={`text-[10px] font-mono ${color.text} opacity-70`}>{items.length} skills</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {visible.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: delay + 0.1 + i * 0.04 }}
            className={`text-[11px] font-mono px-2.5 py-1 rounded-lg ${color.bg} border ${color.border} ${color.text} transition-all hover:scale-105 cursor-default`}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-3 flex items-center gap-1 text-[11px] font-mono ${color.text} opacity-60 hover:opacity-100 transition-opacity`}
        >
          {expanded ? 'Show less' : `+${items.length - SHOW} more`}
          <ChevronDown size={11} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 px-6 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subline">What I work with</p>
          <h2 className="section-heading">Technical Skills</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Skill category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 relative">
          {Object.entries(skills).map(([category, items], ci) => (
            <div key={category} className="relative">
              <SkillCard
                category={category}
                items={items}
                delay={ci * 0.09}
                inView={inView}
              />
            </div>
          ))}
        </div>

        {/* Soft Skills — full width */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="mt-5 card relative"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" />
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
              <Heart size={15} className="text-pink-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Soft Skills</h3>
              <p className="text-[10px] font-mono text-pink-400 opacity-70">{softSkills.length} skills</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.65 + i * 0.05 }}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
