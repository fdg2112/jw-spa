import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { HISTORIA } from '../../data/content'

export function Historia() {
  return (
    <Section
      id="historia"
      eyebrow={HISTORIA.eyebrow}
      title={HISTORIA.title}
      lead={HISTORIA.lead}
      tone="soft"
    >
      <div className="grid gap-14 lg:grid-cols-2">
        {/* Narrativa */}
        <div className="space-y-5 text-cream/75">
          {HISTORIA.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Línea de tiempo */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />
          <ul className="space-y-8">
            {HISTORIA.milestones.map((m, i) => (
              <Reveal as="li" key={m.year} direction="left" delay={i * 0.1} className="relative pl-10">
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
                  <span className="h-4 w-4 rounded-full border-2 border-gold bg-midnight-deep" />
                  <span className="absolute h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                <span className="font-inscription text-2xl font-semibold text-gold">{m.year}</span>
                <p className="mt-1 leading-relaxed text-cream/70">{m.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
