import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { NAV, LODGE } from '../../data/content'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const SECTION_IDS = NAV.map((item) => item.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-gold/15 bg-midnight-deep/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Marca */}
        <a href="#inicio" onClick={closeMenu} className="group flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gold/40 bg-midnight text-gold transition-colors group-hover:border-gold">
            <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M32 12 L18 46" />
                <path d="M32 12 L46 46" />
                <path d="M14 40 L32 54 L50 40" />
              </g>
              <circle cx="32" cy="12" r="4" fill="currentColor" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-inscription text-sm font-semibold tracking-[0.2em] text-cream">
              JW <span className="text-gold">44</span>
            </span>
            <span className="mt-1 hidden text-[0.6rem] uppercase tracking-[0.25em] text-cream/50 sm:block">
              {LODGE.city}
            </span>
          </span>
        </a>

        {/* Enlaces de escritorio (centrados) */}
        <ul className="absolute left-1/2 top-1/2 hidden w-max -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap lg:flex">
          {NAV.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-gold' : 'text-cream/70 hover:text-cream'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="text-cream lg:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-gold/15 bg-midnight-deep/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className={`block border-b border-white/5 py-3 text-base ${
                      activeId === item.id ? 'text-gold' : 'text-cream/80'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
