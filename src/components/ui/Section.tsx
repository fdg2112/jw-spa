import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow?: string
  title?: string
  /** Texto introductorio bajo el título. */
  lead?: string
  children: ReactNode
  className?: string
  /** Alinea el encabezado al centro (por defecto) o a la izquierda. */
  align?: 'center' | 'left'
  /** Fondo alternativo más claro para dar ritmo visual. */
  tone?: 'dark' | 'soft'
}

/**
 * Contenedor estándar de sección con encabezado animado.
 */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = '',
  align = 'center',
  tone = 'dark',
}: SectionProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <section
      id={id}
      className={`section-shell relative px-6 ${tone === 'soft' ? 'bg-midnight-soft/40' : ''} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title || lead) && (
          <Reveal
            className={`flex max-w-3xl flex-col gap-2.5 ${alignment}`}
            style={{ marginBottom: 'clamp(1rem, 3.5vh, 2.25rem)' }}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="section-title font-display font-semibold text-cream">
                {title}
              </h2>
            )}
            {align === 'center' && (
              <div className="rule-gold w-24" />
            )}
            {lead && <p className="text-lg leading-relaxed text-cream/70">{lead}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
