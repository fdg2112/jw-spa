import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { FIGURAS } from '../../data/content'

/** Devuelve las iniciales de un nombre para el retrato tipográfico. */
function initials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function Figuras() {
  return (
    <Section
      id="figuras"
      eyebrow="Hermanos ilustres"
      title="Figuras que iluminaron la Logia"
      lead="Por nuestros trabajos transitaron hombres que dieron forma a la libertad y a las instituciones de la Nación."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {FIGURAS.map((figura, i) => (
          <Reveal key={figura.name} delay={i * 0.12}>
            <article className="group h-full overflow-hidden rounded-2xl border border-white/5 bg-midnight-soft/40 transition-all duration-300 hover:border-gold/40 hover:shadow-glow">
              <div className="flex items-center gap-5 border-b border-white/5 bg-gradient-to-r from-navy/40 to-transparent p-6">
                {/* Retrato tipográfico */}
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-2xl font-semibold text-gold">
                  {initials(figura.name)}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-cream">{figura.name}</h3>
                  <p className="font-inscription text-xs uppercase tracking-[0.15em] text-gold/80">
                    {figura.years}
                  </p>
                  <p className="mt-1 text-sm text-cream/60">{figura.role}</p>
                </div>
              </div>
              <div className="space-y-4 p-6 text-cream/70">
                {figura.bio.map((p, j) => (
                  <p key={j} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
