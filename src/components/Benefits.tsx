import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'

const STAGGER_DELAY = 0.08

// Shared gradient style — used for headline accents
const gradientTextStyle: React.CSSProperties = {
  background: 'linear-gradient(to right, var(--color-brand-400), var(--color-brand-600))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const personalItems = [
  'Tu biotipo y composición corporal',
  'Tus objetivos concretos y plazos',
  'Tu historial, lesiones y limitaciones',
  'Tu rutina real de vida',
]

const notificationMock = {
  time: 'hace 2 min',
  message: '¿Cómo estuvo la sesión de hoy? Mandame la foto del registro.',
  sender: 'Mati H.',
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FeaturedCard() {
  return (
    <AnimateIn delay={0} className="md:col-span-2 md:row-span-2">
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="relative h-full min-h-72 rounded-2xl overflow-hidden bg-dark-700 border border-white/5 hover:border-brand-500/20 transition-colors duration-300 p-8 flex flex-col justify-between group"
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Glow bottom-left */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-600/25 transition-colors duration-500" />

        <div className="relative">
          <span className="inline-block text-brand-400 text-xs font-semibold uppercase tracking-widest mb-5">
            01 · Fundamento
          </span>
          <h3
            className="font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Hecho para vos.
            <br />
            <span style={gradientTextStyle}>
              No para la media.
            </span>
          </h3>
          <p className="text-white/50 text-base leading-relaxed max-w-sm mb-8">
            Ningún plan tuyo es igual al del cliente de al lado.
            Empezamos desde cero, desde vos.
          </p>
        </div>

        <div className="relative space-y-3">
          {personalItems.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-500/15 flex items-center justify-center flex-shrink-0">
                <Check size={11} className="text-brand-400" strokeWidth={3} />
              </div>
              <span className="text-white/60 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimateIn>
  )
}

function StatCard() {
  return (
    <AnimateIn delay={STAGGER_DELAY}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="relative h-full min-h-44 rounded-2xl overflow-hidden bg-dark-900 border border-white/5 hover:border-brand-500/30 transition-colors duration-300 p-7 flex flex-col justify-between group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/8 to-transparent pointer-events-none" />
        <div className="relative">
          <p
            className="font-display font-bold leading-none mb-3"
            style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', ...gradientTextStyle }}
          >
            80%
          </p>
          <p className="text-white/50 text-sm leading-snug">
            abandona antes de los 3 meses.
          </p>
        </div>
        <p className="relative text-white/30 text-xs leading-relaxed mt-4 border-t border-white/5 pt-4">
          Vos no vas a ser parte de esa estadística.
        </p>
      </motion.div>
    </AnimateIn>
  )
}

function SupportCard() {
  return (
    <AnimateIn delay={STAGGER_DELAY * 2}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="relative h-full min-h-44 rounded-2xl overflow-hidden bg-dark-700 border border-white/5 hover:border-brand-500/20 transition-colors duration-300 p-7 flex flex-col justify-between"
      >
        <div>
          <span className="text-white/30 text-xs font-semibold uppercase tracking-widest block mb-4">
            02 · Soporte
          </span>
          <h3 className="font-display text-2xl font-bold text-white leading-tight mb-2">
            Nunca entrenás solo.
          </h3>
          <p className="text-white/45 text-sm">
            WhatsApp directo. Respuesta en el día.
          </p>
        </div>

        {/* Mock notification */}
        <div className="mt-5 bg-dark-900/80 rounded-xl p-3 border border-white/5">
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-brand-400 text-xs font-bold">MH</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-white text-xs font-semibold">{notificationMock.sender}</span>
                <span className="text-white/25 text-xs flex-shrink-0">{notificationMock.time}</span>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">{notificationMock.message}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimateIn>
  )
}

interface SmallCardProps {
  index: number
  label: string
  title: string
  body: string
  accentDelay: number
}

function SmallCard({ index, label, title, body, accentDelay }: SmallCardProps) {
  return (
    <AnimateIn delay={accentDelay}>
      <motion.div
        whileHover={{ scale: 1.02, borderColor: 'rgba(249, 115, 22, 0.2)' }}
        transition={{ duration: 0.25 }}
        className="relative h-full min-h-40 rounded-2xl bg-dark-700 border border-white/5 p-6 flex flex-col justify-between group cursor-default"
      >
        <span className="text-white/20 text-xs font-semibold uppercase tracking-widest block mb-4">
          {String(index).padStart(2, '0')} · {label}
        </span>
        <div>
          <h3 className="font-display text-xl font-bold text-white leading-tight mb-2 group-hover:text-brand-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed">
            {body}
          </p>
        </div>
      </motion.div>
    </AnimateIn>
  )
}

// ── Main section ──────────────────────────────────────────────────────────────

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--color-dark-800)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.3), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <AnimateIn>
            <span className="section-tag">
              <span className="w-4 h-px" style={{ backgroundColor: 'var(--color-brand-500)' }} />
              Por qué funciona
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="section-title text-white max-w-xl" style={{ letterSpacing: '-0.02em' }}>
              Lo que separa a los
              <br />
              <span style={gradientTextStyle}>
                que llegan
              </span>
              {' '}del resto.
            </h2>
          </AnimateIn>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[minmax(180px,auto)]">

          {/* Row 1+2 left: FEATURED */}
          <FeaturedCard />

          {/* Row 1 right: Stat */}
          <StatCard />

          {/* Row 2 right: Support */}
          <SupportCard />

          {/* Row 3: 3 small cards */}
          <SmallCard
            index={3}
            label="Nutrición"
            title="Come bien. Entrenate mejor."
            body="Los dos trabajan juntos. Siempre. Sin uno, el otro no alcanza."
            accentDelay={STAGGER_DELAY * 3}
          />
          <SmallCard
            index={4}
            label="Mentalidad"
            title="La cabeza primero."
            body="El mayor obstáculo siempre está adentro. Lo trabajamos también."
            accentDelay={STAGGER_DELAY * 4}
          />
          <SmallCard
            index={5}
            label="Progreso"
            title="Los números no mienten."
            body="Mediciones reales cada dos semanas. Ves exactamente cómo avanzás."
            accentDelay={STAGGER_DELAY * 5}
          />
        </div>

      </div>
    </section>
  )
}
