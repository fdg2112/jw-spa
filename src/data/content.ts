// -----------------------------------------------------------------------------
// Contenido migrado del sitio original de la R. L. Jorge Washington N° 44
// (http://www.logiawashington.org.ar/). Los textos conservan el espíritu y las
// palabras del sitio original, reorganizados para una experiencia moderna.
// -----------------------------------------------------------------------------

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
  bio: string[]
}

export const FIGURAS: Figura[] = [
  {
    name: 'Jorge Washington',
    years: '1732 – 1799',
    role: 'Padre fundador · Masón',
    bio: [
      'Nació el 22 de febrero de 1732 en Wakefield, Westmoreland, Virginia, en el seno de una familia acomodada de origen inglés. Huérfano a corta edad, fue amparado por su hermano Lawrence y recibió una educación elemental; a los 14 años reveló interés por la carrera de las armas.',
      'Serio, introvertido y metódico, destacaba por su espíritu decidido. Iniciado Masón en 1752, encarnó como pocos los ideales de la Fraternidad. Elegido general en jefe de los ejércitos rebeldes, condujo la lucha por la independencia y se convirtió en el primer presidente de los Estados Unidos, símbolo universal de la libertad.',
    ],
  },
  {
    name: 'Justo José de Urquiza',
    years: '1801 – 1870',
    role: 'Ilustre Hermano · Primer Presidente Constitucional',
    bio: [
      'Nació en el Talar del Arroyo Largo, Entre Ríos, el 18 de octubre de 1801. Cursó sus estudios primarios en Concepción del Uruguay y los secundarios en el Colegio San Carlos de Buenos Aires. Diputado del Congreso entrerriano desde 1826, se manifestó como un notable parlamentario, favorable al sistema federal y ferviente partidario de la instrucción pública.',
      'Gobernador de Entre Ríos y brigadier general, sus actos de gobierno pusieron en evidencia su enfoque progresista: fomentó la agricultura, estimuló el comercio, promovió industrias y fundó escuelas. Ilustre Hermano de nuestra Logia, su legado sigue inspirando la vocación de servicio a la Nación.',
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
export type Articulo = { title: string; excerpt: string; tag: string }

export const NOVEDADES: Articulo[] = [
  { tag: 'Institucional', title: 'Visita de Estudiantes de la UADER', excerpt: 'Abrimos las puertas de nuestra casa para recibir a estudiantes y docentes de la carrera de Licenciatura en Turismo de la Facultad de Ciencias de la Gestión.' },
  { tag: 'Efemérides', title: 'Las fotos del Bicentenario', excerpt: 'Momentos inolvidables, imágenes imborrables y todos los recuerdos del Bicentenario de nuestra Logia.' },
  { tag: 'Homenaje', title: 'Homenaje a Pablo Schvartzman', excerpt: 'Nuestra sobrina Itatí, escritora, comparte una hermosa pieza literaria que nos acerca aún más a Pablo, figura destacada de la ciudad y hermano entrañable.' },
  { tag: 'Cultura', title: '¿Por qué una Hemeroteca?', excerpt: 'Internet ha modificado de forma abismal el funcionamiento de las hemerotecas: digitalmente ofrecen la posibilidad de consultar cualquier tipo de información.' },
  { tag: 'Filosofía', title: '¿Qué es la Masonería?', excerpt: 'Un libro para descargar, con todas las respuestas que el interesado en ingresar a una logia masónica desea conocer acerca de esta antigua y dinámica Fraternidad.' },
  { tag: 'Historia', title: 'Breve Historia de la Masonería', excerpt: 'Compartimos un interesante audio de National Geographic acerca de los orígenes de esta institución defensora de la dignidad humana y la fraternidad.' },
  { tag: 'Próceres', title: 'Martín Ruíz Moreno', excerpt: 'Un masón imprescindible en la vida institucional de Entre Ríos y de la Nación.' },
  { tag: 'Próceres', title: 'Onésimo Leguizamón, nuestro hermano', excerpt: 'Una mirada amable y sincera sobre un ser extraordinario que dejó huella en la educación argentina.' },
  { tag: 'Espiritualidad', title: '¿Qué es la Espiritualidad Iniciática?', excerpt: '¿A qué nos referimos cuando hablamos de iniciados o de iniciación? ¿Qué es la iluminación? ¿Podemos alcanzarla? Todas las respuestas en un audio.' },
]
