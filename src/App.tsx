import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Mensaje } from './components/sections/Mensaje'
import { Historia } from './components/sections/Historia'
import { Figuras } from './components/sections/Figuras'
import { Lugar } from './components/sections/Lugar'
import { Recursos } from './components/sections/Recursos'
import { Novedades } from './components/sections/Novedades'
import { Contacto } from './components/sections/Contacto'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mensaje />
        <Historia />
        <Figuras />
        <Lugar />
        <Recursos />
        <Novedades />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
