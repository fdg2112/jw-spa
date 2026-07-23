// -----------------------------------------------------------------------------
// Contenido migrado del sitio original de la R. L. Jorge Washington N° 44
// (http://www.logiawashington.org.ar/). Los textos conservan el espíritu y las
// palabras del sitio original, reorganizados para una experiencia moderna.
// -----------------------------------------------------------------------------

import agreloImg from '../assets/figuras/agrelo.webp'
import urquizaImg from '../assets/figuras/urquiza.webp'
import souriguesImg from '../assets/figuras/sourigues.webp'
import morenoImg from '../assets/figuras/moreno.webp'
import seguiImg from '../assets/figuras/seguí.webp'
import peyretImg from '../assets/figuras/peyret.webp'
import leguizamonImg from '../assets/figuras/leguizamón.webp'
import zubiaurImg from '../assets/figuras/zubiaur.webp'
import scelziImg from '../assets/figuras/scelzi.webp'
import martinezImg from '../assets/figuras/martinez.webp'
import panizzaImg from '../assets/figuras/panizza.webp'

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
  /** Retrato opcional; si falta se muestra un círculo con las iniciales. */
  image?: string
  bio: string[]
}

// Orden narrativo, del más antiguo en la Logia al más reciente.
export const FIGURAS: Figura[] = [
  {
    name: 'Pedro José Agrelo',
    years: '1776 – 1846',
    role: 'Ilustre Hermano · Jurista, periodista y patriota',
    image: agreloImg,
    bio: [
      'Nació en Buenos Aires en 1776. Jurista, periodista, docente y político, participó activamente en el proceso revolucionario iniciado en mayo de 1810. Fue fiscal, diputado, profesor de Economía Política y redactor de importantes publicaciones vinculadas con la independencia y la organización institucional de las Provincias Unidas.',
      'Su nombre aparece relacionado con los primeros antecedentes de la masonería organizada en Concepción del Uruguay y con la fundación de la Logia en 1822. Su trayectoria representa el espíritu ilustrado y republicano de una generación que trabajó por la emancipación, la educación y la construcción de nuevas instituciones americanas.',
    ],
  },
  {
    name: 'Justo José de Urquiza',
    years: '1801 – 1870',
    role: 'Ilustre Hermano · Primer Presidente Constitucional de la Confederación Argentina',
    image: urquizaImg,
    bio: [
      'Nació en el Talar de Arroyo Largo, Entre Ríos, el 18 de octubre de 1801. Militar, gobernador y estadista, promovió el desarrollo económico, la colonización agrícola, la educación y la organización institucional de la provincia. Su liderazgo resultó decisivo para la sanción de la Constitución Nacional de 1853.',
      'Fue gobernador de Entre Ríos y primer presidente constitucional de la Confederación Argentina. Iniciado en nuestra Logia en 1847, llegó a ejercer como Venerable Maestro y contribuyó al sostenimiento del taller. Su legado permanece unido a la construcción de la Nación, la educación pública y la consolidación del sistema republicano.',
    ],
  },
  {
    name: 'Carlos Tomás Sourigues',
    years: '1805 – 1870',
    role: 'Ilustre Hermano · Educador, científico y agrimensor',
    image: souriguesImg,
    bio: [
      'Nació en Bayona, Francia, en 1805. Educador, agrimensor, ingeniero y naturalista, desarrolló una extensa actividad científica y docente en Entre Ríos. Enseñó matemáticas y francés en el Colegio del Uruguay y participó en el trazado de poblaciones, colonias agrícolas y obras fundamentales para el desarrollo provincial.',
      'Se afilió a nuestra Logia en 1863 y posteriormente presidió la Logia Abraham Lincoln de Gualeguay. Murió el 12 de julio de 1870 mientras colaboraba en la defensa de Concepción del Uruguay durante un ataque armado. Su vida estuvo marcada por el conocimiento, el servicio público y el valor puesto al servicio de la comunidad.',
    ],
  },
  {
    name: 'Martín Ruiz Moreno',
    years: '1833 – 1919',
    role: 'Ilustre Hermano · Jurista, magistrado e historiador',
    image: morenoImg,
    bio: [
      'Nació en Paraná, Entre Ríos, en 1833. Abogado, político, magistrado e historiador, ocupó diversos cargos públicos y dedicó una parte fundamental de su obra al estudio de la historia entrerriana y de la organización nacional. Sus investigaciones constituyen una referencia para comprender las luchas políticas y militares del siglo XIX.',
      'Fue iniciado en nuestra Logia en 1857. Desde ella participó en iniciativas destinadas a favorecer el entendimiento entre la Confederación Argentina y el Estado de Buenos Aires. Su trayectoria combinó el servicio público, la investigación histórica y la defensa de los principios republicanos, dejando una valiosa obra para la memoria de Entre Ríos.',
    ],
  },
  {
    name: 'Juan Francisco Seguí',
    years: '1822 – 1863',
    role: 'Ilustre Hermano · Jurista, periodista y hombre público',
    image: seguiImg,
    bio: [
      'Nació en Santa Fe en 1822. Abogado, periodista y político, fue secretario y colaborador cercano del general Justo José de Urquiza. Se le atribuye la redacción del Pronunciamiento del 1º de mayo de 1851, documento mediante el cual Entre Ríos reasumió sus facultades soberanas y abrió el proceso político que conduciría a la caída de Juan Manuel de Rosas.',
      'Fue iniciado en nuestra Logia en 1859 y participó también en talleres masónicos de Santa Fe y Rosario. Su breve pero intensa vida estuvo consagrada a la organización constitucional, la libertad de expresión y la construcción de un orden republicano. Su labor permanece ligada a uno de los momentos decisivos de la historia argentina.',
    ],
  },
  {
    name: 'Alejo Peyret',
    years: '1826 – 1902',
    role: 'Ilustre Hermano · Educador, pensador y colonizador',
    image: peyretImg,
    bio: [
      'Nació en Serres-Castet, Francia, en 1826. Educador, periodista, agrónomo y pensador social, llegó a la Argentina en 1852 y desarrolló una extensa labor intelectual y política. Vinculado al proyecto modernizador de Justo José de Urquiza, administró la Colonia San José y promovió el desarrollo agrícola, la inmigración y la organización comunitaria.',
      'Ejerció la docencia en el Colegio del Uruguay y difundió ideas progresistas sobre educación, libertad de conciencia y justicia social. Ingresó en nuestra Logia en 1864 y desempeñando diversos cargos. Participó activamente en la creación de la Biblioteca Popular El Porvenir y de la Asociación Educacionista La Fraternidad. Su legado representa la unión entre conocimiento, trabajo y compromiso social.',
    ],
  },
  {
    name: 'Onésimo Leguizamón',
    years: '1839 – 1886',
    role: 'Ilustre Hermano · Jurista, periodista y educador',
    image: leguizamonImg,
    bio: [
      'Nació en Gualeguay, Entre Ríos, en 1839. Abogado, magistrado, periodista y hombre de Estado, desarrolló una destacada trayectoria en la vida pública argentina. Fue diputado nacional, ministro de Justicia e Instrucción Pública y presidente de la Suprema Corte de Justicia de la provincia de Buenos Aires.',
      'Defendió la educación pública, el fortalecimiento institucional y la difusión de las ideas republicanas. Fue iniciado en nuestra Logia en 1863 y la presidió durante los años 1865 y 1866. Su labor masónica continuó posteriormente en otros talleres y en la Gran Logia de la Argentina. Su vida expresa una firme vocación por la justicia, la educación y el progreso cívico.',
    ],
  },
  {
    name: 'José Benjamín Zubiaur',
    years: '1856 – 1921',
    role: 'Ilustre Hermano · Educador y promotor del olimpismo',
    image: zubiaurImg,
    bio: [
      'Nació en Paraná, Entre Ríos, en 1856. Jurista y pedagogo, fue una de las grandes figuras de la educación argentina. Formado en el histórico Colegio del Uruguay, del que llegó a ser rector, dedicó su vida a modernizar y humanizar la enseñanza, promoviendo una educación pública, práctica e inclusiva.',
      'Introdujo las excursiones escolares, el trabajo manual y la educación física como herramientas formativas. Fue primer presidente de la Asociación Educacionista La Fraternidad e integró el primer Comité Olímpico Internacional. Iniciado en nuestra Logia en 1878, su ejemplo de compromiso con la educación, la fraternidad y el desarrollo humano mantiene plena vigencia.',
    ],
  },
  {
    name: 'José Scelzi',
    years: '1844 – 1932',
    role: 'Ilustre Hermano · Jurista, magistrado y servidor público',
    image: scelziImg,
    bio: [
      'Abogado, docente y magistrado, José Scelzi desempeñó importantes responsabilidades en la vida institucional de Concepción del Uruguay. Ejerció funciones judiciales y municipales, y participó activamente en organizaciones civiles dedicadas al progreso social y a la asistencia mutua.',
      'Fue iniciado en nuestra Logia en 1872 y ejerció como Venerable Maestro entre 1894 y 1897, y nuevamente entre 1899 y 1900. También fue uno de los fundadores de la Sociedad Italiana de Socorros Mutuos La Benevolenza. Su trayectoria refleja el compromiso de la masonería uruguayense con la justicia, el mutualismo y el servicio a la comunidad.',
    ],
  },
  {
    name: 'Benigno Teijeiro Martínez',
    years: '1846 – 1925',
    role: 'Ilustre Hermano · Historiador, docente y escritor',
    image: martinezImg,
    bio: [
      'Nació en Galicia, España, en 1846, y desarrolló gran parte de su labor intelectual en Entre Ríos. Docente, escritor, periodista, agrimensor e historiador, produjo una extensa obra dedicada a la educación, la geografía y la historia argentina, con especial atención al pasado entrerriano.',
      'Integró nuestra Logia y ejerció el cargo de Orador durante la última década del siglo XIX. Fue miembro de instituciones científicas e históricas nacionales y participó activamente en la vida cultural de Concepción del Uruguay. Su obra constituye un valioso aporte a la preservación de la memoria regional y a la difusión del conocimiento.',
    ],
  },
  {
    name: 'Delio Panizza',
    years: '1887 – 1965',
    role: 'Ilustre Hermano · Poeta, historiador y escritor',
    image: panizzaImg,
    bio: [
      'Nació en Rosario del Tala, Entre Ríos, en 1887. Abogado, poeta, escritor e historiador, desarrolló una extensa obra inspirada en la historia, las tradiciones y los paisajes entrerrianos. Radicado en Concepción del Uruguay, convirtió su hogar en un espacio de encuentro cultural y de preservación de documentos, libros y objetos históricos.',
      'Vinculado a nuestra Logia, investigó sus orígenes y contribuyó a conservar parte de su patrimonio y su memoria institucional. Su residencia es actualmente el Museo Municipal Casa de Delio Panizza. Su obra representa una profunda defensa de la identidad entrerriana, la cultura y la transmisión de la memoria entre generaciones.',
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
    text: 'Ubicada en el corazón de la Ciudad Histórica de Concepción del Uruguay, se muestra orgullosa la Respetable Logia Jorge Washington, la que supo albergar a ciudadanos ilustres de nuestro país. Su portón de reja y su templo conservan intacta la memoria de dos siglos de trabajo masónico.',
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
