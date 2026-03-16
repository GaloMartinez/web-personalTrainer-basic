import { motion } from 'framer-motion'
import { AnimateIn } from './ui/AnimateIn'
import { SectionHeader } from './ui/SectionHeader'
import { StarRating } from './ui/StarRating'
import { testimonials } from '../data/content'

const STAGGER_DELAY = 0.08

const socialProofStats = [
  { value: '+300', label: 'Clientes transformados' },
  { value: '4.9★', label: 'Puntuación en Google' },
  { value: '98%', label: 'Recomiendan el programa' },
  { value: '3 años', label: 'Promedio de relación' },
]

export function Testimonials() {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            tag="Resultados reales"
            title={<>Ellos lo hicieron.<br /><span className="gradient-text">Vos también podés.</span></>}
            description="No son fotos de stock. Son personas reales con vidas reales que decidieron cambiar."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * STAGGER_DELAY}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="card-dark p-6 flex flex-col h-full hover:border-white/10 transition-all duration-300"
              >
                <div className="inline-flex self-start bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                  {t.result}
                </div>

                <StarRating className="flex gap-0.5 mb-4" starClassName="text-brand-400 text-sm" />

                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-400 text-xs font-bold">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.age} años · {t.location}</p>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="text-white/30 text-xs">
                    Programa: <span className="text-white/50">{t.program}</span>
                  </span>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.4} className="mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-8 border-y border-white/5">
            {socialProofStats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display text-3xl font-bold gradient-text">{item.value}</p>
                <p className="text-white/40 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
