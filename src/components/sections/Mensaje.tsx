import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { MENSAJE } from '../../data/content'
import jwImg from '../../assets/figuras/jw.png'

export function Mensaje() {
  return (
    <Section id="mensaje" eyebrow={MENSAJE.eyebrow} title={MENSAJE.title} lead={MENSAJE.lead}>
      <div className="grid items-stretch gap-12 lg:grid-cols-5">
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

        {/* Retrato de George Washington */}
        <div className="relative min-h-[420px] lg:col-span-2">
          <Reveal direction="left" className="absolute inset-0">
            <figure className="group relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-midnight-deep transition-colors hover:border-gold/40">
              {/* Halo dorado sutil detrás del retrato */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
              <img
                src={jwImg}
                alt="Retrato de George Washington"
                loading="lazy"
                className="h-full max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Fundido inferior para asentar el epígrafe */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-midnight-deep via-midnight-deep/60 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <span className="mb-2 block h-px w-8 bg-gold/60" />
                <p className="font-display text-2xl font-semibold text-cream">George Washington</p>
                <p className="mt-1 font-inscription text-xs uppercase tracking-[0.15em] text-gold/80">
                  1732 — 1799 · Iniciado Masón en 1752
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
