import { Instagram, MessageCircle, Mail, ArrowUpRight } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display font-bold text-2xl tracking-tight mb-4 block">
              <span className="text-white">MH</span>
              <span className="text-brand-500">.</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Personal trainer certificado en Buenos Aires.
              Transformaciones reales para personas reales.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
                {
                  icon: <MessageCircle size={18} />,
                  href: 'https://wa.me/5491112345678',
                  label: 'WhatsApp',
                },
                { icon: <Mail size={18} />, href: 'mailto:hola@matiasherrera.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-500 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">
              Navegación
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Sobre mí', href: '#sobre-mi' },
                { label: 'Programas', href: '#programas' },
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Resultados', href: '#resultados' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">
              Contacto
            </p>
            <ul className="space-y-3">
              <li className="text-white/40 text-sm">Buenos Aires, Argentina</li>
              <li>
                <a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
                >
                  +54 9 11 1234-5678
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@matiasherrera.com"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  hola@matiasherrera.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-brand-400 hover:bg-brand-500 hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300"
              >
                Consulta gratis →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {year} Matías Herrera Personal Trainer. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 hover:text-white/40 text-xs transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-white/20 hover:text-white/40 text-xs transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
