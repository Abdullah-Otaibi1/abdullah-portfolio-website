import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react'
import { personalInfo, contact } from '../data/portfolioData'

const iconMap = { Email: Mail, Phone: Phone, Location: MapPin, Languages: Globe }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Invalid email address'
  if (!form.subject.trim()) errors.subject = 'Subject is required'
  if (!form.message.trim()) errors.message = 'Message is required'
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters'
  return errors
}

function InputField({ name, label, type = 'text', rows, value, onChange, error }) {
  const Tag = rows ? 'textarea' : 'input'
  return (
    <div>
      <label className="block text-xs font-mono text-[#CBD5E1]/60 uppercase tracking-wider mb-2">{label}</label>
      <Tag
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={label}
        className={`input-field ${error ? 'input-error' : ''}`}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 font-mono"
        >
          <AlertCircle size={11} /> {error}
        </motion.p>
      )}
    </div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-28 px-6 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subline">Get in touch</p>
          <h2 className="section-heading">{contact.heading}</h2>
          <div className="section-divider" />
          <p className="text-[#CBD5E1] max-w-lg text-sm leading-relaxed mb-12">
            {contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {contact.items.map((item, i) => {
              const Icon = iconMap[item.label] || Mail
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="card flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-200 glow-sm">
                    <Icon size={17} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#CBD5E1]/50 font-mono uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm font-semibold hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-semibold">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              )
            })}

            {/* Note card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="card bg-accent/5 border-accent/20 mt-2"
            >
              <div className="flex items-start gap-3">
                <MessageSquare size={16} className="text-accent mt-0.5 shrink-0" />
                <p className="text-[#CBD5E1]/80 text-xs leading-relaxed">
                  Typically responds within <span className="text-accent font-semibold">24 hours</span>. Open to full-time roles, freelance projects, and collaborations.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="card-featured p-7">
              <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              <h3 className="text-white font-bold text-base mb-6 flex items-center gap-2">
                <Send size={16} className="text-accent" /> Send a Message
              </h3>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField name="name" label="Your Name" value={form.name} onChange={handleChange} error={errors.name} />
                  <InputField name="email" label="Email Address" type="email" value={form.email} onChange={handleChange} error={errors.email} />
                </div>
                <InputField name="subject" label="Subject" value={form.subject} onChange={handleChange} error={errors.subject} />
                <InputField name="message" label="Your Message" rows={5} value={form.message} onChange={handleChange} error={errors.message} />

                <AnimatePresence>
                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-400 text-sm bg-green-400/8 border border-green-400/20 rounded-xl px-4 py-3 font-mono"
                    >
                      <CheckCircle2 size={15} /> Message sent! Opening your email client...
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send size={15} /> Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
