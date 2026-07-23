import { Landmark, Waves } from 'lucide-react'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { LUGAR, LODGE } from '../../data/content'

export function Lugar() {
  return (
    <Section id="lugar" eyebrow={LUGAR.eyebrow} title={LUGAR.title} tone="soft">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Edificio Histórico */}
        <Reveal direction="right">
          <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-midnight-deep p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 text-gold/5 transition-transform duration-500 group-hover:scale-110">
              <Landmark size={200} strokeWidth={1} />
            </div>
            <div className="relative">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <Landmark size={24} />
              </span>
              <h3 className="font-display text-2xl font-semibold text-cream">{LUGAR.building.title}</h3>
              <p className="mt-1 font-inscription text-xs uppercase tracking-[0.15em] text-gold/80">
                {LUGAR.building.subtitle}
              </p>
              <p className="mt-4 leading-relaxed text-cream/70">{LUGAR.building.text}</p>
              <p className="mt-6 flex items-center gap-2 text-sm text-cream/50">
                <span className="h-px w-6 bg-gold/50" />
                {LODGE.address}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Ciudad */}
        <Reveal direction="left" delay={0.1}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-midnight-deep p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 text-gold/5 transition-transform duration-500 group-hover:scale-110">
              <Waves size={200} strokeWidth={1} />
            </div>
            <div className="relative">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <Waves size={24} />
              </span>
              <h3 className="font-display text-2xl font-semibold text-cream">{LUGAR.city.title}</h3>
              <p className="mt-1 font-inscription text-xs uppercase tracking-[0.15em] text-gold/80">
                {LODGE.province} · {LODGE.country}
              </p>
              <p className="mt-4 leading-relaxed text-cream/70">{LUGAR.city.text}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
