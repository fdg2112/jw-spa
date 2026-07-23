import { Landmark, MapPin } from 'lucide-react'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { LUGAR, LODGE } from '../../data/content'
import logiaImg from '../../assets/logia.png'

// Ubicación real del templo: 8 de Junio 720, Concepción del Uruguay, Entre Ríos.
const MAP_QUERY = '8 de Junio 720, Concepción del Uruguay, Entre Ríos, Argentina'
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=16&output=embed`

export function Lugar() {
  return (
    <Section id="lugar" eyebrow={LUGAR.eyebrow} title={LUGAR.title} tone="soft">
      {/* Bleed suave en pantallas grandes para cards un poco más anchas */}
      <div className="grid gap-8 md:grid-cols-2 lg:-mx-12 xl:-mx-20">
        {/* Edificio Histórico — foto de fondo que se funde a la altura del título */}
        <Reveal direction="right">
          <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-midnight-deep">
            {/* Fachada real como fondo del tramo superior */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-60 overflow-hidden">
              <img
                src={logiaImg}
                alt={`Fachada de la ${LODGE.shortName}`}
                loading="lazy"
                className="h-full w-full object-cover object-[center_60%] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Fundido: imagen nítida arriba, sólida justo donde arranca el título */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-midnight-deep/80 via-85% to-midnight-deep" />
            </div>
            {/* Texto: empujado hasta donde termina el fundido */}
            <div className="relative px-8 pb-9 pt-48">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold backdrop-blur-sm">
                <Landmark size={22} />
              </span>
              <h3 className="font-display text-2xl font-semibold text-cream">{LUGAR.building.title}</h3>
              <p className="mt-1 font-inscription text-xs uppercase tracking-[0.15em] text-gold/80">
                {LUGAR.building.subtitle}
              </p>
              <p className="mt-3 leading-relaxed text-cream/70">{LUGAR.building.text}</p>
              <p className="mt-5 flex items-center gap-2 text-sm text-cream/50">
                <span className="h-px w-6 bg-gold/50" />
                {LODGE.address}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Mapa de ubicación */}
        <Reveal direction="left" delay={0.1}>
          <div className="group flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl border border-white/5 bg-midnight-deep">
            <div className="flex items-center gap-3 border-b border-white/5 p-5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <MapPin size={22} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-cream">Cómo llegar</h3>
                <p className="text-sm text-cream/60">
                  {LODGE.address.split(',')[0]} · {LUGAR.city.title}
                </p>
              </div>
            </div>
            <iframe
              title={`Ubicación de la ${LODGE.shortName}`}
              src={MAP_SRC}
              className="w-full flex-1 grayscale-[.35] transition-all duration-500 group-hover:grayscale-0"
              style={{ border: 0, minHeight: 260 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
