import { Library, Newspaper, Headphones, Video, ScrollText, Link2, type LucideIcon } from 'lucide-react'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { RECURSOS } from '../../data/content'

const ICON_MAP: Record<string, LucideIcon> = {
  library: Library,
  newspaper: Newspaper,
  headphones: Headphones,
  video: Video,
  scroll: ScrollText,
  link: Link2,
}

export function Recursos() {
  return (
    <Section
      id="recursos"
      eyebrow="Estudios, obras y documentos"
      title="Recursos de la Logia"
      lead="Un patrimonio vivo de biblioteca, hemeroteca y archivos que preserva dos siglos de pensamiento y trabajo."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {RECURSOS.map((recurso, i) => {
          const Icon = ICON_MAP[recurso.icon] ?? Library
          return (
            <Reveal key={recurso.title} delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/5 bg-midnight-soft/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-midnight-deep">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-xl font-semibold text-cream">{recurso.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{recurso.text}</p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
