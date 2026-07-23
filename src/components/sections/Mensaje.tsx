import { HeartHandshake, BookOpen, Sparkles } from 'lucide-react'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { MENSAJE } from '../../data/content'

const ICONS = [HeartHandshake, BookOpen, Sparkles]

export function Mensaje() {
  return (
    <Section id="mensaje" eyebrow={MENSAJE.eyebrow} title={MENSAJE.title} lead={MENSAJE.lead}>
      <div className="grid gap-12 lg:grid-cols-5">
        {/* Texto narrativo */}
        <div className="lg:col-span-3">
          <div className="space-y-5 text-cream/75">
            {MENSAJE.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg leading-relaxed first-letter:font-display first-letter:text-gold">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div className="flex flex-col gap-5 lg:col-span-2">
          {MENSAJE.values.map((value, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={value.title} direction="left" delay={i * 0.1}>
                <div className="group flex gap-4 rounded-xl border border-white/5 bg-midnight-soft/40 p-5 transition-colors hover:border-gold/40">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-cream">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cream/60">{value.text}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
