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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {NOVEDADES.map((articulo, i) => (
          <Reveal as="article" key={articulo.title} delay={(i % 3) * 0.08}>
            <a
              href="#contacto"
              className="group flex h-full flex-col rounded-xl border border-white/5 bg-midnight-soft/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-gold/30 px-3 py-1 font-inscription text-[0.6rem] uppercase tracking-[0.15em] text-gold">
                  {articulo.tag}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-cream/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                />
              </div>
              <h3 className="font-display text-xl font-semibold leading-snug text-cream transition-colors group-hover:text-gold">
                {articulo.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/60">{articulo.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-gold/80">
                Consultar
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
