import { motion } from 'motion/react'

type SquareCompassProps = {
  /** Tamaño en px del lado del SVG. */
  size?: number
  /** Si es true, los trazos se dibujan animados al montar. */
  animated?: boolean
  className?: string
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.35, duration: 1.6, ease: 'easeInOut' as const },
      opacity: { delay: i * 0.35, duration: 0.4 },
    },
  }),
}

/**
 * Emblema de la Escuadra y el Compás con la letra "G".
 * Símbolo tradicional de la Masonería, dibujado como SVG vectorial.
 */
export function SquareCompass({ size = 200, animated = true, className }: SquareCompassProps) {
  const strokeProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Escuadra y compás, emblema masónico"
      initial={animated ? 'hidden' : false}
      animate={animated ? 'visible' : false}
    >
      {/* Compás (V invertida sobre la escuadra) */}
      <motion.path d="M100 26 L54 150" variants={draw} custom={0} {...strokeProps} />
      <motion.path d="M100 26 L146 150" variants={draw} custom={0.4} {...strokeProps} />
      {/* Bisagra del compás */}
      <motion.circle cx="100" cy="26" r="7" variants={draw} custom={0} fill="currentColor" stroke="none" />
      {/* Puntas del compás */}
      <motion.path d="M54 150 l-6 12 M146 150 l6 12" variants={draw} custom={0.8} {...strokeProps} />

      {/* Escuadra (ángulo recto abierto hacia arriba) */}
      <motion.path d="M44 120 L100 168 L156 120" variants={draw} custom={1.1} {...strokeProps} />

      {/* Letra G central: círculo abierto arriba-derecha + barra que nace
          del borde derecho hacia el centro (trazo continuo, estilo geométrico). */}
      <motion.path
        d="M108 100.5 A14 14 0 1 0 114 112 L101 112"
        variants={draw}
        custom={1.6}
        {...strokeProps}
        strokeWidth={4}
      />
    </motion.svg>
  )
}
