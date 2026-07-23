// -----------------------------------------------------------------------------
// Contenido migrado del sitio original de la R. L. Jorge Washington N° 44
// (http://www.logiawashington.org.ar/). Los textos conservan el espíritu y las
// palabras del sitio original, reorganizados para una experiencia moderna.
// -----------------------------------------------------------------------------

import zubiaurImg from '../assets/figuras/zubiaur.png'
import urquizaImg from '../assets/figuras/urquiza.png'

export const LODGE = {
  name: 'Respetable Logia Jorge Washington',
  number: '44',
  shortName: 'R∴L∴ Jorge Washington N° 44',
  city: 'Concepción del Uruguay',
  province: 'Entre Ríos',
  country: 'Argentina',
  founded: 1822,
  address: 'Calle 8 de Junio, Concepción del Uruguay, Entre Ríos',
  tagline: 'Libertad · Igualdad · Fraternidad',
  motto: 'El templo masónico más antiguo de la Argentina en actividad.',
}

export type NavItem = { id: string; label: string }

export const NAV: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'mensaje', label: 'Mensaje' },
  { id: 'historia', label: 'Historia' },
  { id: 'figuras', label: 'Figuras' },
  { id: 'lugar', label: 'El Lugar' },
  { id: 'recursos', label: 'Recursos' },
  { id: 'novedades', label: 'Novedades' },
  { id: 'contacto', label: 'Contacto' },
]

// --- Mensaje: ¿Por qué "Jorge Washington"? --------------------------------
export const MENSAJE = {
  eyebrow: 'El nombre de nuestra Logia Madre',
  title: '¿Por qué "Jorge Washington"?',
  lead: 'Todo hombre libre y de buenas costumbres, con inquietudes espirituales y ánimo de ser útil a la sociedad en la que vive, es bienvenido a conocer la Antigua y Honorable Fraternidad de Libres y Aceptados Masones.',
  paragraphs: [
    'George Washington nació en el año 1732 y fue iniciado Masón el 4 de noviembre de 1752, cuando tenía apenas 20 años, en la logia Fredericksburg N° 4 del estado de Virginia. Tuvo el privilegio de encarnar los ideales que dieron nacimiento a una nación fundada sobre la libertad.',
    'Elegido general en jefe de los ejércitos que lucharon por la independencia de las Trece Colonias, condujo la causa que culminó con la "Declaración de la Independencia" el 4 de julio de 1776. Su figura, símbolo del hombre íntegro al servicio del bien común, dio nombre a nuestra Logia.',
    'Por la órbita de la Logia "Jorge Washington" transitaron hombres ilustres que, bajo los principios de la libertad, la igualdad y la fraternidad, propendieron a la organización institucional de la Nación, a la instrucción pública de todos los estratos sociales y a la asistencia médica, sanitaria, social y moral de los ciudadanos de Concepción del Uruguay.',
  ],
  values: [
    { title: 'Filantropía', text: 'La ayuda al prójimo y el compromiso con la comunidad como práctica cotidiana.' },
    { title: 'Filosofía', text: 'La búsqueda constante de la verdad y el perfeccionamiento interior del ser humano.' },
    { title: 'Progreso', text: 'La defensa de la instrucción pública, la ciencia y la dignidad humana.' },
  ],
}

// --- Historia de la ciudad: "Río de los pájaros" ---------------------------
export const HISTORIA = {
  eyebrow: 'Río de los pájaros',
  title: 'Doscientos años de historia',
  lead: 'Fundada en 1822, nuestra Logia acompañó el nacimiento y la consolidación de la Argentina moderna desde el corazón del litoral entrerriano.',
  paragraphs: [
    'Uruguay le llamaron los indígenas; "Río de los Pájaros" tradujo el alma plena de poesía de quienes habitaron sus costas selváticas. En el sureste entrerriano, recostada junto a uno de los riachos que vuelcan sus aguas en el inmenso río, surgió allá por 1783 la villa de Concepción del Uruguay, fundada por don Tomás de Rocamora.',
    'Producida la Revolución de Mayo, fue una de las primeras en adherirse a la noble causa. Sus hombres pelearon tenazmente en las luchas libertarias y trabajaron intensamente en la paz siempre anhelada, ligados a la tierra entrerriana por ese vínculo indestructible que une al hombre con la tierra que puebla, trabaja y defiende.',
    'En 1814 el Director Supremo Gervasio de Posadas fijó a Concepción del Uruguay como capital de la flamante provincia de Entre Ríos. Sobre ese suelo de próceres, la Logia Jorge Washington encendió sus luces y celebró en años recientes su Bicentenario.',
  ],
  milestones: [
    { year: '1783', text: 'Tomás de Rocamora funda la villa de Concepción del Uruguay.' },
    { year: '1814', text: 'La ciudad es designada capital de la provincia de Entre Ríos.' },
    { year: '1822', text: 'Se encienden las luces de la R∴L∴ Jorge Washington N° 44.' },
    { year: '2022', text: 'La Logia celebra su Bicentenario junto a la comunidad.' },
  ],
}

// --- Figuras / Próceres -----------------------------------------------------
export type Figura = {
  name: string
  years: string
  role: string
  image: string
  bio: string[]
}

export const FIGURAS: Figura[] = [
  {
    name: 'José Benjamín Zubiaur',
    years: '1856 – 1921',
    role: 'Ilustre Hermano · Educador y pedagogo',
    image: zubiaurImg,
    bio: [
      'Nació en Paraná, Entre Ríos, en 1856. Jurista y pedagogo, fue una de las grandes figuras de la educación argentina. Formado en el histórico Colegio del Uruguay, del que llegó a ser rector, dedicó su vida a modernizar y humanizar la enseñanza.',
      'Introdujo en el país las excursiones escolares y el trabajo manual como herramientas formativas, impulsó la educación integral y representó a la Argentina en congresos y exposiciones pedagógicas internacionales. Hermano de nuestra Logia, su ejemplo de compromiso con la instrucción pública sigue vigente.',
    ],
  },
  {
    name: 'Justo José de Urquiza',
    years: '1801 – 1870',
    role: 'Ilustre Hermano · Primer Presidente Constitucional',
    image: urquizaImg,
    bio: [
      'Nació en el Talar del Arroyo Largo, Entre Ríos, el 18 de octubre de 1801. Cursó sus estudios primarios en Concepción del Uruguay y los secundarios en el Colegio San Carlos de Buenos Aires. Diputado del Congreso entrerriano desde 1826, se manifestó como un notable parlamentario, favorable al sistema federal y ferviente partidario de la instrucción pública.',
      'Gobernador de Entre Ríos y brigadier general, sus actos de gobierno pusieron en evidencia su enfoque progresista: fomentó la agricultura, estimuló el comercio, promovió industrias y fundó escuelas. Iniciado en nuestra Logia en 1847, llegó a ser Venerable Maestro y alcanzó el grado 33. Su legado sigue inspirando la vocación de servicio a la Nación.',
    ],
  },
]

// --- El Lugar: Edificio + Ciudad --------------------------------------------
export const LUGAR = {
  eyebrow: 'La Histórica',
  title: 'El Lugar',
  building: {
    title: 'Edificio Histórico',
    subtitle: 'La Logia del Primer Presidente Argentino',
    text: 'Ubicada en la calle 8 de Junio, en el corazón de la Ciudad Histórica de Concepción del Uruguay, se muestra orgullosa la Respetable Logia Jorge Washington, la que supo albergar a ciudadanos ilustres de nuestro país. Su portón de reja y su templo conservan intacta la memoria de dos siglos de trabajo masónico.',
  },
  city: {
    title: 'Concepción del Uruguay',
    text: 'Ubicada al este de Entre Ríos sobre las costas del Río Uruguay, la ciudad integra el grupo de provincias del Litoral Argentino. Surcada por numerosos ríos y arroyos que explican su nombre, está conectada con la República Oriental del Uruguay por los puentes "Gral. San Martín" y "Gral. José G. Artigas", intensificando relaciones culturales y comerciales históricas entre ambas orillas.',
  },
}

// --- Recursos: Estudios, obras y documentos ---------------------------------
export type Recurso = { title: string; text: string; icon: string }

export const RECURSOS: Recurso[] = [
  { icon: 'library', title: 'Biblioteca', text: 'Obras escogidas sobre masonería, historia y filosofía, seleccionadas para el estudio y la reflexión.' },
  { icon: 'newspaper', title: 'Hemeroteca', text: 'Publicaciones periódicas digitalizadas que preservan la memoria documental de la Logia y la región.' },
  { icon: 'headphones', title: 'Audioteca', text: 'Conferencias y documentos sonoros sobre los orígenes de la Fraternidad y la espiritualidad iniciática.' },
  { icon: 'video', title: 'Videoteca', text: 'Material audiovisual con la historia, los homenajes y las actividades de la Logia.' },
  { icon: 'scroll', title: 'Temario', text: 'Índice de estudios, trabajos y documentos producidos por los hermanos de la Logia.' },
  { icon: 'link', title: 'Enlaces de interés', text: 'Vínculos a otras obediencias, logias hermanas e instituciones masónicas de la Argentina y el mundo.' },
]

// --- Novedades / Artículos --------------------------------------------------
// Noticias reales sobre la institución, con enlace a la fuente publicada.
export type Articulo = {
  title: string
  excerpt: string
  tag: string
  source: string
  date: string
  url: string
}

export const NOVEDADES: Articulo[] = [
  {
    tag: 'Evento',
    date: '2025',
    source: 'La Prensa Federal',
    title: 'La Gran Logia de la Argentina visita Concepción del Uruguay',
    excerpt:
      'En mayo de 2025 la Gran Logia se presentó ante la ciudad con una charla libre, gratuita y abierta a todo público, y un recorrido por sitios históricos vinculados a la masonería local.',
    url: 'https://www.laprensafederal.com.ar/la-gran-logia-de-la-argentina-visitara-concepcion-del-uruguay/',
  },
  {
    tag: 'Bicentenario',
    date: '2022',
    source: 'El Miércoles Digital',
    title: 'La logia masónica cumple doscientos años',
    excerpt:
      'A 200 años de su fundación en 1822, un repaso por la historia de la Jorge Washington N° 44 y su influencia en las instituciones de Concepción del Uruguay.',
    url: 'https://www.elmiercolesdigital.com.ar/?p=96844',
  },
  {
    tag: 'Efeméride',
    date: '1822',
    source: 'Revista La Ciudad',
    title: '29 de agosto de 1822: se funda la Logia Jorge Washington',
    excerpt:
      'El coronel Juan Florencio Perea funda la logia, hoy la más antigua del país en actividad, que llegaría a contar entre sus miembros a Justo José de Urquiza.',
    url: 'https://laciudadrevista.com/el-29-de-agosto-de-1822-se-funda-en-concepcion-del-uruguay-la-logia-masonica-jorge-washington/',
  },
  {
    tag: 'Patrimonio',
    date: '1878',
    source: 'Concepción, historia y turismo',
    title: 'El Templo Masónico de Concepción del Uruguay',
    excerpt:
      'Construido en 1878 por los arquitectos y hermanos Pedro Riva y Luis Conturbi, el edificio de calle 8 de Junio es un emblema patrimonial de la ciudad.',
    url: 'https://concepcionhistoriayturismo.com/2018/04/12/templo-masonico-de-concepcion-del-uruguay/',
  },
  {
    tag: 'Institucional',
    date: 'Historia',
    source: 'Revista La Ciudad',
    title: 'La Logia Jorge Washington de Concepción del Uruguay',
    excerpt:
      'La historia de la institución: sus persecuciones, la pérdida y posterior recuperación de su archivo y el legado de sus miembros más destacados.',
    url: 'https://laciudadrevista.com/logia-masonica-jorge-washington-de-concepcion-del-uruguay/',
  },
  {
    tag: 'Historia',
    date: '1874',
    source: 'Concepción, historia y turismo',
    title: 'La colonia Caseros y la Logia Jorge Washington',
    excerpt:
      'El rol de los hermanos de la logia —la más antigua de Entre Ríos— en la organización de la colonia Caseros, fundada en 1874.',
    url: 'https://concepcionhistoriayturismo.com/2019/03/24/la-colonia-caseros-y-la-logia-jorge-washington-de-concepcion-del-uruguay/',
  },
]
