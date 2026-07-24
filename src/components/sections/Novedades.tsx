import { ArrowUpRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { NOVEDADES } from '../../data/content'

export function Novedades() {
  return (
    <Section
      id="novedades"
      eyebrow="Actividades y publicaciones"
      title="Novedades"
      lead="Homenajes, efemérides, cultura y documentos que compartimos con la comunidad."
    >
      <div className="grid gap-[clamp(0.9rem,2.5vh,1.5rem)] md:grid-cols-2 lg:grid-cols-3">
        {NOVEDADES.map((articulo, i) => (
          <Reveal as="article" key={articulo.url} delay={(i % 3) * 0.08}>
            <a
              href={articulo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border border-white/5 bg-midnight-soft/40 p-[clamp(1rem,2.4vh,1.5rem)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-gold/30 px-3 py-1 font-inscription text-[0.6rem] uppercase tracking-[0.15em] text-gold">
                  {articulo.tag}
                </span>
                <span className="text-xs text-cream/40">{articulo.date}</span>
              </div>
              <h3 className="font-display text-xl font-semibold leading-snug text-cream transition-colors group-hover:text-gold">
                {articulo.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/60">{articulo.excerpt}</p>
              <span className="mt-5 flex items-center gap-1.5 border-t border-white/5 pt-4 text-xs font-medium text-gold/80">
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                Leer en {articulo.source}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
