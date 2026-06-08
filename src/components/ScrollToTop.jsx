import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-7 right-7 z-50 w-11 h-11 rounded-xl bg-accent text-navy font-bold flex items-center justify-center shadow-lg shadow-accent/30 hover:bg-[#0EA5E9] hover:scale-110 active:scale-90 transition-all duration-200 glow"
          aria-label="Scroll to top"
          whileHover={{ y: -2 }}
        >
          <ArrowUp size={17} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
