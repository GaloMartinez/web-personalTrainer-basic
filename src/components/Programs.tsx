import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimateIn } from './ui/AnimateIn'
import { SectionHeader } from './ui/SectionHeader'
import { programs } from '../data/content'

const STAGGER_DELAY = 0.1

export function Programs() {
  return (
    <section id="programas" className="py-24 lg:py-32 bg-dark-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            tag="Programas"
            title={<>Elegí el plan que<br /><span className="gradient-text">se adapta a vos</span></>}
            description="Todos los programas incluyen evaluación inicial gratuita y ajustes mensuales."
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {programs.map((program, i) => {
            const isPopular = program.badge === 'Más popular'
            return (
              <AnimateIn key={program.name} delay={i * STAGGER_DELAY}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-2xl p-7 flex flex-col h-full transition-all duration-300 ${
                    isPopular
                      ? 'bg-brand-500 border border-brand-400/50 shadow-2xl shadow-brand-500/20'
                      : 'bg-dark-700 border border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Badge */}
                  {program.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap ${
                      isPopular
                        ? 'bg-white text-brand-600'
                        : 'bg-dark-500 border border-white/20 text-white'
                    }`}>
                      {program.badge}
                    </div>
                  )}

                  {/* Program name */}
                  <div className="mb-6">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                      isPopular ? 'text-white/70' : 'text-brand-400'
                    }`}>
                      {program.duration}
                    </p>
                    <h3 className={`font-display text-2xl font-bold ${
                      isPopular ? 'text-white' : 'text-white'
                    }`}>
                      {program.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`font-display text-4xl font-bold ${
                        isPopular ? 'text-white' : 'text-white'
                      }`}>
                        {program.price}
                      </span>
                      <span className={`text-sm ${isPopular ? 'text-white/70' : 'text-white/40'}`}>
                        {program.priceNote}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-7 ${
                    isPopular ? 'text-white/80' : 'text-white/50'
                  }`}>
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {program.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isPopular ? 'bg-white/20' : 'bg-brand-500/15'
                        }`}>
                          <Check size={11} className={isPopular ? 'text-white' : 'text-brand-400'} strokeWidth={3} />
                        </div>
                        <span className={`text-sm ${isPopular ? 'text-white/90' : 'text-white/60'}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className={`flex items-center justify-center gap-2 font-semibold py-3.5 px-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                      isPopular
                        ? 'bg-white text-brand-600 hover:bg-brand-50 hover:shadow-lg'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-brand-500 hover:border-brand-500'
                    }`}
                  >
                    Empezá ahora
                    <ArrowRight size={16} />
                  </a>
                </motion.div>
              </AnimateIn>
            )
          })}
        </div>

        {/* Note */}
        <AnimateIn delay={0.4}>
          <p className="text-center text-white/30 text-sm mt-8">
            * Precios en ARS. Todos los programas incluyen evaluación inicial gratuita.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
