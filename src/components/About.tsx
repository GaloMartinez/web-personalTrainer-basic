import { CheckCircle } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'
import { SectionHeader } from './ui/SectionHeader'
import { coach } from '../data/content'

export function About() {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual */}
          <AnimateIn direction="right">
            <div className="relative">
              {/* Main placeholder */}
              <div className="relative rounded-3xl overflow-hidden bg-dark-700 border border-white/5 aspect-square max-w-lg">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-600 to-dark-800">
                  <div className="text-center px-8">
                    <div className="w-28 h-28 rounded-full bg-brand-500/10 border-2 border-brand-500/20 flex items-center justify-center mx-auto mb-6">
                      <span className="font-display text-4xl font-bold bg-gradient-to-br from-brand-400 to-brand-600 bg-clip-text text-transparent">MH</span>
                    </div>
                    <p className="text-white/50 text-sm">Foto del coach</p>
                  </div>
                </div>
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-900/60 to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-500 rounded-2xl p-5 shadow-2xl shadow-brand-500/30">
                <p className="font-display text-4xl font-bold text-white">8+</p>
                <p className="text-white/80 text-xs mt-1">Años entrenando<br />personas reales</p>
              </div>

              {/* Certifications pill */}
              <div className="absolute -top-4 left-4 bg-dark-700 border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-white/40 text-xs mb-2 uppercase tracking-wider">Certificaciones</p>
                <div className="flex flex-wrap gap-1.5">
                  {coach.certifications.map((cert) => (
                    <span key={cert} className="bg-brand-500/10 text-brand-400 text-xs px-2 py-0.5 rounded-full border border-brand-500/20">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Content */}
          <div>
            <SectionHeader
              tag="Sobre el coach"
              title={<>Hola, soy <span className="gradient-text">{coach.name}</span></>}
              align="left"
            />

            <AnimateIn delay={0.25}>
              <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-6 mt-2">
                {coach.subtitle}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                {coach.bio}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.35}>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                {coach.bio2}
              </p>
            </AnimateIn>

            {/* What you get */}
            <AnimateIn delay={0.4}>
              <div className="space-y-3 mb-10">
                {[
                  'Método probado en +300 clientes reales',
                  'Sin suplementos innecesarios ni promesas vacías',
                  'Entrenamiento adaptado a tu vida, no al revés',
                  'Comunicación directa y sin filtros',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                    <p className="text-white/70 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.45}>
              <a href="#contacto" className="btn-primary">
                Trabajemos juntos
              </a>
            </AnimateIn>
          </div>
        </div>

        {/* Stats row */}
        <AnimateIn delay={0.1} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coach.stats.map((stat) => (
              <div key={stat.label} className="card-dark p-6 text-center">
                <p className="font-display text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
