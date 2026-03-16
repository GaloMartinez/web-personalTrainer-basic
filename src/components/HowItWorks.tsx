import { AnimateIn } from './ui/AnimateIn'
import { SectionHeader } from './ui/SectionHeader'
import { steps } from '../data/content'
import { ArrowRight } from 'lucide-react'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <SectionHeader
            tag="El proceso"
            title={<>De cero a resultados<br /><span className="gradient-text">en 4 pasos simples</span></>}
            description="Sin complicaciones. Sin burocracia. Arrancás rápido y con todo en orden."
          />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-brand-500/20 via-brand-500/40 to-brand-500/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 0.1}>
                <div className="relative text-center group">
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-900 border border-brand-500/30 mb-6 mx-auto group-hover:border-brand-500 group-hover:bg-brand-500/10 transition-all duration-300">
                    <span className="font-display text-xl font-bold text-brand-500">{step.number}</span>
                    {i < steps.length - 1 && (
                      <ArrowRight
                        size={14}
                        className="absolute -right-8 top-1/2 -translate-y-1/2 text-brand-500/30 hidden lg:block"
                      />
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimateIn delay={0.5} className="text-center mt-16">
          <a href="#contacto" className="btn-primary text-base">
            Agendá tu consulta gratis
            <ArrowRight size={18} />
          </a>
          <p className="text-white/30 text-xs mt-4">
            Sin tarjeta. Sin compromiso. 100% gratuito.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
