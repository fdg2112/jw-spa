import { useLayoutEffect, useRef } from 'react'

/**
 * Ajuste tipográfico responsivo de una línea.
 *
 * Cuando el texto no entra en el ancho disponible, aprieta el `letter-spacing`
 * de a pasos para que quepa en una sola línea. Si llega al piso (`floorEm`) y
 * aún no entra, vuelve al spacing normal y deja que el texto envuelva.
 *
 * Reacciona a cambios de ancho del contenedor, resize de ventana y carga de
 * fuentes. Pensado para títulos (respeta los `<br>` internos).
 */
export function useCondenseToFit<T extends HTMLElement>(floorEm = -0.04, stepEm = 0.005) {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const parent = el.parentElement
    if (!parent) return

    // Ancho de texto disponible = ancho interno del contenedor (menos su padding).
    const availWidth = () => {
      const cs = getComputedStyle(parent)
      return parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)
    }
    // Con nowrap la caja se encoge al contenido: scrollWidth = ancho real del texto.
    const fitsAt = (avail: number) => el.scrollWidth <= avail + 0.5

    const fit = () => {
      const avail = availWidth()
      el.style.letterSpacing = '0em'
      el.style.whiteSpace = 'nowrap'
      if (fitsAt(avail)) {
        el.style.whiteSpace = ''
        return
      }
      let ls = 0
      while (ls - stepEm >= floorEm - 1e-9) {
        ls -= stepEm
        el.style.letterSpacing = `${ls.toFixed(4)}em`
        if (fitsAt(avail)) {
          el.style.whiteSpace = ''
          return
        }
      }
      // No entra ni apretando: normal y que envuelva.
      el.style.letterSpacing = ''
      el.style.whiteSpace = ''
    }

    fit()

    // Observa el contenedor (su ancho), no el propio nodo, para no realimentar.
    const ro = new ResizeObserver(fit)
    ro.observe(parent)
    window.addEventListener('resize', fit)
    if (document.fonts?.ready) document.fonts.ready.then(fit)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', fit)
    }
  }, [floorEm, stepEm])

  return ref
}
