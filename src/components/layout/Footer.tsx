import { MapPin, Mail, Clock } from 'lucide-react'
import { LODGE, NAV } from '../../data/content'
import { SquareCompass } from '../ui/SquareCompass'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gold/15 bg-midnight-deep px-6 pb-10 pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        {/* Marca */}
        <div>
          <div className="mb-4 flex items-center gap-3 text-gold">
            <SquareCompass size={44} animated={false} />
            <span className="font-inscription text-lg font-semibold tracking-[0.15em] text-cream">
              JW <span className="text-gold">44</span>
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">
            {LODGE.name} N° {LODGE.number}. {LODGE.motto}
          </p>
          <p className="mt-4 font-inscription text-xs uppercase tracking-[0.25em] text-gold/70">
            {LODGE.tagline}
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="mb-4 font-inscription text-xs uppercase tracking-[0.25em] text-gold">
            Secciones
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-cream/70">
            {NAV.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="mb-4 font-inscription text-xs uppercase tracking-[0.25em] text-gold">
            Dónde estamos
          </h3>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold/70" />
              <span>{LODGE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-gold/70" />
              <a href="#contacto" className="transition-colors hover:text-gold">
                Escribinos desde el formulario
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-gold/70" />
              <span>Tenidas y actividades según calendario</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule-gold mx-auto mt-14 max-w-6xl opacity-40" />

      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-cream/40 sm:flex-row">
        <p>
          © {year} {LODGE.shortName}. Todos los derechos reservados.
        </p>
        <p>
          {LODGE.city}, {LODGE.province}, {LODGE.country}
        </p>
      </div>
    </footer>
  )
}
