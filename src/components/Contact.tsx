import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Instagram, Mail } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'
import { SectionHeader } from './ui/SectionHeader'
import { contactInfo } from '../data/content'

const contactLinks = [
  {
    icon: <MessageCircle size={18} className="text-brand-400" />,
    label: 'WhatsApp',
    value: contactInfo.phone,
    href: contactInfo.whatsapp,
  },
  {
    icon: <Instagram size={18} className="text-brand-400" />,
    label: 'Instagram',
    value: contactInfo.instagram,
    href: contactInfo.instagramUrl,
  },
  {
    icon: <Mail size={18} className="text-brand-400" />,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
]

const successAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA banner */}
        <AnimateIn className="mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-10 sm:p-16 text-center">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
                Cupos limitados · Solo 3 disponibles
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                ¿Listo para
                <br />
                cambiar tu vida?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                La consulta inicial es 100% gratuita y sin compromiso.
                En 30 minutos sabés exactamente qué necesitás hacer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#formulario"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-8 py-4 rounded-full hover:bg-brand-50 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  Agendá tu consulta gratis
                  <ArrowRight size={18} />
                </a>
                <a
                  href={`${contactInfo.whatsapp}?text=Hola%20Mati!%20Quiero%20empezar`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  WhatsApp directo
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Contact form + info */}
        <div id="formulario" className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <SectionHeader
              tag="Empezá hoy"
              title="Contacto directo"
              description="Completá el formulario y te contacto en menos de 24hs. O si preferís, escribime directo."
              align="left"
            />

            <AnimateIn delay={0.2}>
              <div className="space-y-4 mt-8">
                {contactLinks.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 card-dark hover:border-brand-500/20 hover:bg-dark-600 transition-all duration-300 rounded-xl group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider">{contact.label}</p>
                      <p className="text-white text-sm font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.2} className="lg:col-span-3">
            {submitted ? (
              <motion.div
                {...successAnimation}
                className="card-dark p-10 text-center rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-brand-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎉</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-white/50 text-base">
                  Te contacto en menos de 24hs. ¡Prepará las ganas!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-dark p-7 sm:p-10 rounded-2xl space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-dark-600 border border-white/5 focus:border-brand-500/50 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="+54 9 11..."
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-dark-600 border border-white/5 focus:border-brand-500/50 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-dark-600 border border-white/5 focus:border-brand-500/50 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">
                    ¿Cuál es tu objetivo?
                  </label>
                  <select
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className="w-full bg-dark-600 border border-white/5 focus:border-brand-500/50 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-dark-600">Seleccioná tu objetivo</option>
                    <option value="perder-peso" className="bg-dark-600">Perder peso</option>
                    <option value="ganar-musculo" className="bg-dark-600">Ganar músculo</option>
                    <option value="definicion" className="bg-dark-600">Definición corporal</option>
                    <option value="rendimiento" className="bg-dark-600">Mejorar rendimiento</option>
                    <option value="habitos" className="bg-dark-600">Mejorar hábitos generales</option>
                    <option value="otro" className="bg-dark-600">Otro</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base">
                  Quiero mi consulta gratuita
                  <ArrowRight size={18} />
                </button>

                <p className="text-white/25 text-xs text-center">
                  Tu info está segura. Sin spam, sin grupos de WhatsApp. Prometido.
                </p>
              </form>
            )}
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
