import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ExternalLink, CheckCircle2, Calendar, Layers, Star } from 'lucide-react'
import { projects } from '../data/portfolioData'

const allTypes = ['All', ...Array.from(new Set(projects.map(p => p.type)))]

const TYPE_COLORS = {
  'Graduation Project': 'bg-accent/10 text-accent border-accent/30',
  'Data Analysis': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'Project Management': 'bg-green-500/10 text-green-400 border-green-500/30',
  'Mobile App': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
}

function FeaturedCard({ project }) {
  const [cardRef, cardInView] = useInView()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  }
  const itemLeft = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }
  const itemRight = {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative card-featured p-8 mb-6 group overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/6 rounded-full blur-[60px] pointer-events-none float" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/4 rounded-full blur-[50px] pointer-events-none float-reverse" />

      {/* Top glow line — animates width on enter */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={cardInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent via-cyan-300 to-transparent"
      />

      {/* Left edge glow line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={cardInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 0 }}
        className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate={cardInView ? 'show' : 'hidden'}
        className="relative z-10 grid md:grid-cols-2 gap-10"
      >
        {/* Left */}
        <motion.div variants={itemLeft}>
          {/* Badge */}
          <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <motion.span
              animate={cardInView ? { boxShadow: ['0 0 0px #38BDF800', '0 0 14px #38BDF860', '0 0 0px #38BDF800'] } : {}}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
              className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-mono px-3 py-1.5 rounded-full border border-accent/40"
            >
              <Star size={10} fill="currentColor" className="animate-pulse" />
              Graduation Project
            </motion.span>
          </motion.div>

          {/* Title */}
          <motion.h3
            variants={item}
            className="text-white font-extrabold text-xl sm:text-2xl leading-tight mb-3 group-hover:text-gradient transition-all duration-500"
          >
            {project.name}
          </motion.h3>

          {/* Description */}
          <motion.p variants={item} className="text-[#CBD5E1] text-sm leading-relaxed mb-5">
            {project.description}
          </motion.p>

          {/* Date */}
          <motion.div variants={item} className="flex items-center gap-2 text-xs text-[#CBD5E1]/50 font-mono mb-6">
            <Calendar size={12} /> {project.date}
          </motion.div>

          {project.link && (
            <motion.a
              variants={item}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 btn-primary text-sm px-5 py-2.5"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              View Project <ExternalLink size={14} />
            </motion.a>
          )}
        </motion.div>

        {/* Right */}
        <motion.div variants={itemRight}>
          <motion.p variants={item} className="text-[10px] font-mono text-accent/60 uppercase tracking-widest mb-4">
            Key Highlights
          </motion.p>
          <ul className="space-y-3 mb-6">
            {project.highlights.map((h, i) => (
              <motion.li
                key={h}
                variants={item}
                custom={i}
                className="flex items-start gap-2.5 text-sm text-[#CBD5E1]/90"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={cardInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, type: 'spring', stiffness: 300 }}
                >
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                </motion.span>
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>

          {/* Tech badges — staggered pop-in */}
          <motion.div variants={item} className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.05, type: 'spring', stiffness: 280 }}
                className="badge-sm"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  const typeColor = TYPE_COLORS[project.type] || 'bg-accent/10 text-accent border-accent/30'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="card flex flex-col group relative"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent rounded-full" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <span className={`inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full border mb-2 ${typeColor}`}>
            {project.type}
          </span>
          <h3 className="text-white font-bold text-base leading-snug group-hover:text-accent transition-colors duration-200">
            {project.name}
          </h3>
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="text-[#CBD5E1]/40 hover:text-accent transition-colors shrink-0 mt-1">
            <ExternalLink size={15} />
          </a>
        )}
      </div>

      {/* Date */}
      <div className="flex items-center gap-1.5 text-[11px] text-[#CBD5E1]/50 font-mono mb-3">
        <Calendar size={11} /> {project.date}
      </div>

      {/* Description */}
      <p className="text-[#CBD5E1] text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-5">
        {project.highlights.slice(0, 3).map(h => (
          <li key={h} className="flex items-start gap-2 text-xs text-[#CBD5E1]/80">
            <CheckCircle2 size={12} className="text-accent mt-0.5 shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Tech */}
      <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-[#334155]/60">
        {project.tech.slice(0, 5).map(t => (
          <span key={t} className="badge-sm">{t}</span>
        ))}
        {project.tech.length > 5 && (
          <span className="badge-sm">+{project.tech.length - 5}</span>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [filter, setFilter] = useState('All')

  const featured = projects.find(p => p.featured)
  const others = projects.filter(p => !p.featured)

  // When filter is "All" or matches the featured project type, show featured card
  const showFeatured = filter === 'All' || (featured && filter === featured.type)
  // Grid shows non-featured projects filtered by type, plus featured if its type is selected
  const gridProjects =
    filter === 'All'
      ? others
      : filter === featured?.type
      ? [featured, ...others.filter(p => p.type === filter)]
      : others.filter(p => p.type === filter)

  return (
    <section id="projects" className="py-28 px-6 bg-[#111827] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subline">What I've built</p>
          <h2 className="section-heading">Featured Projects</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Featured card — always shown on "All" or "Graduation Project" filter */}
        {featured && showFeatured && filter === 'All' && (
          <FeaturedCard project={featured} />
        )}

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <span className="flex items-center gap-1.5 text-[#CBD5E1]/50 text-xs font-mono mr-2">
            <Layers size={12} /> Filter:
          </span>
          {allTypes.map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-all duration-200 ${
                filter === type
                  ? 'bg-accent text-[#0F172A] border-accent font-bold'
                  : 'border-[#334155] text-[#CBD5E1] hover:border-accent/40 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {gridProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {gridProjects.length === 0 && (
          <p className="text-center text-[#CBD5E1]/40 font-mono text-sm py-12">
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  )
}
