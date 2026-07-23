import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { LODGE } from '../../data/content'
import { SquareCompass } from '../ui/SquareCompass'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax: el contenido sube y se desvanece al hacer scroll.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const emblemY = useTransform(scrollYProgress, [0, 1], ['0%', '120%'])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-midnight-deep"
    >
      {/* Capas de fondo */}
      <div className="absolute inset-0 bg-stars opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(22,48,80,0.6),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight-deep to-transparent" />

      {/* Emblema de fondo con parallax */}
      <motion.div
        style={{ y: emblemY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="text-gold/10">
          <SquareCompass size={560} animated={false} />
        </div>
      </motion.div>

      {/* Contenido */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8 text-gold"
        >
          <SquareCompass size={120} />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="eyebrow mb-5"
        >
          {LODGE.city} · {LODGE.province}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl md:text-7xl"
        >
          Respetable Logia
          <br />
          <span className="text-gradient-gold">Jorge Washington N° 44</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/70 sm:text-xl"
        >
          {LODGE.motto} Dos siglos de trabajo por la libertad, la igualdad y la
          fraternidad desde el corazón histórico de Entre Ríos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#mensaje"
            className="rounded-full bg-gold px-8 py-3 font-medium text-midnight-deep shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Conocer la Logia
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-cream/25 px-8 py-3 font-medium text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Cómo ingresar
          </a>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#mensaje"
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/50 hover:text-gold"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  )
}
