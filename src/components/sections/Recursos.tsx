import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
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
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const timer = useRef<number | undefined>(undefined)

  const flash = (i: number) => {
    window.clearTimeout(timer.current)
    setOpenIdx(i)
    timer.current = window.setTimeout(() => setOpenIdx(null), 2200)
  }

  useEffect(() => () => window.clearTimeout(timer.current), [])

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
              <button
                type="button"
                onClick={() => flash(i)}
                aria-label={`${recurso.title}: disponible próximamente`}
                className="group relative h-full w-full overflow-visible rounded-xl border border-white/5 bg-midnight-soft/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-midnight-deep">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-xl font-semibold text-cream">{recurso.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{recurso.text}</p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-b-xl bg-gradient-to-r from-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />

                {/* Aviso flotante tipo globo de diálogo */}
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.span
                      initial={{ opacity: 0, y: 8, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.9 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gold px-3 py-1.5 font-inscription text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-midnight-deep shadow-glow"
                    >
                      Disponible próximamente
                      <span className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-gold" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
