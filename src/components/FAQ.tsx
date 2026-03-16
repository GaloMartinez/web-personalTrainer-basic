import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'
import { SectionHeader } from './ui/SectionHeader'
import { faqs, contactInfo } from '../data/content'

const STAGGER_DELAY = 0.06

const accordionAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto' as const, opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.3, ease: 'easeInOut' as const },
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <AnimateIn delay={index * STAGGER_DELAY}>
      <div
        className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
          open
            ? 'bg-dark-700 border-brand-500/30'
            : 'bg-dark-800 border-white/5 hover:border-white/10'
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center justify-between gap-4 p-6">
          <h3 className={`font-semibold text-base leading-snug transition-colors duration-200 ${
            open ? 'text-brand-400' : 'text-white'
          }`}>
            {question}
          </h3>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? 'bg-brand-500' : 'bg-white/5'
          }`}>
            {open
              ? <Minus size={14} className="text-white" />
              : <Plus size={14} className="text-white/60" />
            }
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div {...accordionAnimation}>
              <div className="px-6 pb-6">
                <div className="h-px bg-brand-500/20 mb-4" />
                <p className="text-white/60 text-sm leading-relaxed">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimateIn>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-dark-800 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            tag="Preguntas frecuentes"
            title={<>Todo lo que querés<br /><span className="gradient-text">saber antes de arrancar</span></>}
            description="Si no encontrás lo que buscás, escribime directo."
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>

        <AnimateIn delay={0.4} className="text-center mt-12">
          <p className="text-white/40 text-sm mb-4">¿Tenés otra pregunta?</p>
          <a
            href={`${contactInfo.whatsapp}?text=Hola%20Mati!%20Quiero%20saber%20m%C3%A1s%20sobre%20los%20programas`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm py-3 px-6"
          >
            Escribime por WhatsApp
          </a>
        </AnimateIn>
      </div>
    </section>
  )
}
