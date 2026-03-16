import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { StarRating } from './ui/StarRating'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-800/15 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              3 cupos disponibles para Mayo
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Tu mejor
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 bg-clip-text text-transparent">
                versión
              </span>
              <br />
              empieza acá.
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
            >
              Entrenamiento personalizado, nutrición real y seguimiento diario.
              Sin fórmulas genéricas — solo resultados que duran.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a href="#contacto" className="btn-primary text-base">
                Consulta gratuita
                <ArrowRight size={18} />
              </a>
              <a href="#resultados" className="btn-outline text-base">
                <Play size={16} className="fill-white" />
                Ver resultados
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-8 pt-8 border-t border-white/5"
            >
              {[
                { value: '300+', label: 'Clientes' },
                { value: '8 años', label: 'Experiencia' },
                { value: '98%', label: 'Satisfacción' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden bg-dark-700 border border-white/5 aspect-[3/4] max-w-md mx-auto">
              {/* Placeholder image area */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-600 via-dark-700 to-dark-800">
                {/* Abstract fitness visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-4">
                      <span className="font-display text-5xl font-bold gradient-text">MH</span>
                    </div>
                    <p className="text-white/30 text-sm">Matías Herrera</p>
                    <p className="text-white/20 text-xs mt-1">Personal Trainer</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              </div>

              {/* Floating card: next session */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-400 text-lg">🔥</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Próxima sesión</p>
                      <p className="text-white/50 text-xs">Lunes 7:00 AM · Fuerza + Cardio</p>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                        Confirmada
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge: result */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -right-4 top-1/4 bg-dark-700 border border-white/10 rounded-2xl p-4 shadow-2xl"
            >
              <p className="text-white/50 text-xs mb-1">Resultado promedio</p>
              <p className="font-display text-2xl font-bold gradient-text">-11kg</p>
              <p className="text-white/30 text-xs mt-0.5">en 12 semanas</p>
            </motion.div>

            {/* Floating badge: rating */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -left-4 top-1/3 bg-dark-700 border border-white/10 rounded-2xl p-3 shadow-2xl"
            >
              <StarRating className="flex items-center gap-1 mb-1" />
              <p className="text-white text-xs font-semibold">4.9 / 5.0</p>
              <p className="text-white/30 text-xs">+300 reseñas</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
