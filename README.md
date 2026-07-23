# R∴L∴ Jorge Washington N° 44 — Sitio web

SPA moderna que reemplaza el sitio original de la **Respetable Logia Jorge
Washington N° 44** (Concepción del Uruguay, Entre Ríos, Argentina). Conserva
todas las secciones e información del sitio anterior con un diseño responsive,
accesible y animado.

## Stack

| Tecnología | Uso |
|---|---|
| **Vite 6 + React 18 + TypeScript** | Base del proyecto (modo `strict`) |
| **Tailwind CSS v4** | Sistema de diseño (config vía `@theme` en `src/index.css`) |
| **Motion** (Framer Motion) | Animaciones de scroll, parallax y micro-interacciones |
| **@fontsource** | Tipografías self-hosted: Cinzel, Cormorant Garamond, Inter |
| **lucide-react** | Iconografía |

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:5173
npm run build    # typecheck + build de producción (carpeta dist/)
npm run preview  # previsualizar el build de producción
```

> El binario de Node está en `C:\Program Files\nodejs`. Si `node`/`npm` no se
> reconocen en una terminal ya abierta, cerrá y reabrí la terminal (o agregá esa
> ruta al PATH de la sesión).

## Estructura

```
src/
├─ data/content.ts          # Contenido migrado (fuente única de verdad, tipado)
├─ hooks/useScrollSpy.ts    # Resalta la sección activa en el nav
├─ components/
│  ├─ ui/                   # Primitivas: SquareCompass, Reveal, Section
│  ├─ layout/               # Navbar, Footer
│  └─ sections/             # Hero, Mensaje, Historia, Figuras, Lugar,
│                           #   Recursos, Novedades, Contacto
├─ App.tsx                  # Ensamblado de la página
├─ main.tsx                 # Punto de entrada
└─ index.css                # Tema Tailwind v4 + tokens de marca
```

## Secciones migradas

- **Inicio** — Hero con emblema animado (escuadra y compás)
- **Mensaje** — ¿Por qué "Jorge Washington"? + valores de la Fraternidad
- **Historia** — "Río de los pájaros" + línea de tiempo (1783 → 2022)
- **Figuras** — Jorge Washington y Justo José de Urquiza
- **El Lugar** — Edificio Histórico y la ciudad de Concepción del Uruguay
- **Recursos** — Biblioteca, Hemeroteca, Audioteca, Videoteca, Temario, Enlaces
- **Novedades** — Artículos y publicaciones
- **Contacto** — Formulario validado

## Personalización

- **Contenido**: editar `src/data/content.ts`.
- **Colores y tipografías**: bloque `@theme` en `src/index.css`.
- **Email de contacto**: constante `CONTACT_EMAIL` en
  `src/components/sections/Contacto.tsx` (actualmente un placeholder).

## Seguridad

- TypeScript `strict`; sin `any` ni `dangerouslySetInnerHTML`.
- El formulario valida en el cliente e incluye un *honeypot* anti-bot. El envío
  se realiza vía `mailto:` (sin backend). Para producción, se recomienda conectar
  un servicio de formularios (p. ej. Formspree) o un endpoint propio con
  validación también del lado del servidor.
- Fuentes self-hosted: sin llamadas a CDNs de terceros.
- No se incluyen secretos en el repositorio; `.gitignore` cubre `node_modules`,
  `dist` y archivos `*.local`.

---

© Respetable Logia Jorge Washington N° 44 · Concepción del Uruguay, Entre Ríos.
