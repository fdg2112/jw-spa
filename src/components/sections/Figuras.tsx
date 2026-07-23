import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { FIGURAS, type Figura } from '../../data/content'

/** Iniciales (primer y último nombre) para el avatar sin foto. */
function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

function Portrait({ figura }: { figura: Figura }) {
  if (figura.image) {
    return (
      <img
        src={figura.image}
        alt={`Retrato de ${figura.name}`}
        loading="lazy"
        className="max-h-full max-w-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-transform duration-700 group-hover:scale-[1.03]"
      />
    )
  }
  return (
    <span
      aria-label={`Iniciales de ${figura.name}`}
      className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/40 bg-navy/60 font-display text-4xl font-semibold tracking-wide text-gold/70"
    >
      {initials(figura.name)}
    </span>
  )
}

function Card({ figura }: { figura: Figura }) {
  return (
    <article
      data-card
      className="group flex w-[86%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/5 bg-midnight-soft/40 transition-all duration-300 hover:border-gold/40 hover:shadow-glow sm:w-[64%] md:w-[46%]"
    >
      {/* Panel: retrato + encabezado sobre el mismo fondo */}
      <div className="relative overflow-hidden bg-gradient-to-b from-navy/50 via-midnight-deep/60 to-midnight-soft">
        {/* Retrato completo (sin recorte) */}
        <div className="relative flex h-52 items-end justify-center px-6 pt-5 sm:h-60">
          {/* Halo dorado detrás del retrato */}
          <div className="pointer-events-none absolute inset-x-0 top-5 mx-auto h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(201,162,39,0.16),_transparent_70%)] blur-xl" />
          <Portrait figura={figura} />
        </div>
        {/* Encabezado debajo del retrato */}
        <header className="px-5 pb-4 pt-3 text-center">
          <p className="font-inscription text-[0.7rem] uppercase tracking-[0.18em] text-gold">
            {figura.years}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold leading-tight text-cream sm:text-2xl">
            {figura.name}
          </h3>
          <p className="mt-1 text-xs text-cream/60">{figura.role}</p>
        </header>
      </div>
      {/* Biografía */}
      <div className="space-y-2 border-t border-gold/15 p-5 text-sm text-cream/70">
        {figura.bio.map((p, j) => (
          <p key={j} className="text-justify leading-normal">
            {p}
          </p>
        ))}
      </div>
    </article>
  )
}

/** Máscara de degradado en ambos bordes: recorta las cards vecinas. */
const edgeFade =
  'linear-gradient(to right, transparent, black 9%, black 91%, transparent)'

export function Figuras() {
  const scroller = useRef<HTMLDivElement>(null)
  // Evita que el reposicionamiento infinito interrumpa el scroll suave del botón.
  const animating = useRef(false)

  // Triplicamos la lista para simular un carrusel infinito: siempre navegamos
  // por la copia central y reposicionamos sin transición al acercarnos a un borde.
  const items = [...FIGURAS, ...FIGURAS, ...FIGURAS]

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    const third = () => el.scrollWidth / 3
    el.scrollLeft = third()
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (animating.current) return
        const t = third()
        if (el.scrollLeft < t * 0.5) el.scrollLeft += t
        else if (el.scrollLeft > t * 1.5) el.scrollLeft -= t
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const move = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.5
    // Reposiciona a la copia central ANTES de animar, para que el salto infinito
    // sea instantáneo y nunca en medio del scroll suave.
    const t = el.scrollWidth / 3
    if (el.scrollLeft < t * 0.5) el.scrollLeft += t
    else if (el.scrollLeft > t * 1.5) el.scrollLeft -= t
    animating.current = true
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
    window.setTimeout(() => (animating.current = false), 450)
  }

  return (
    <Section
      id="figuras"
      eyebrow="Hermanos ilustres"
      title="Figuras que iluminaron la Logia"
      lead="Por nuestros trabajos transitaron hombres que dieron forma a la libertad y a las instituciones de la Nación."
    >
      <div className="relative">
        {/* Pista */}
        <div
          ref={scroller}
          style={{ maskImage: edgeFade, WebkitMaskImage: edgeFade }}
          className="flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((figura, i) => (
            <Card key={`${figura.name}-${i}`} figura={figura} />
          ))}
        </div>

        {/* Flechas de desplazamiento */}
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Figura anterior"
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cream/15 bg-midnight-deep/70 p-2 text-cream/70 backdrop-blur transition-colors hover:border-gold hover:text-gold sm:left-2"
        >
          <ChevronLeft size={26} />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Figura siguiente"
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cream/15 bg-midnight-deep/70 p-2 text-cream/70 backdrop-blur transition-colors hover:border-gold hover:text-gold sm:right-2"
        >
          <ChevronRight size={26} />
        </button>
      </div>
    </Section>
  )
}
