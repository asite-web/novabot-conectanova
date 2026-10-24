import type { Cargo } from '../types'

export const categorias = [
 "Dirección y Estrategia",
 "Tecnología y Redes",
 "Seguridad, Datos y Proyectos",
 "Negocio y Clientes",
 "Gestión Corporativa y Cumplimiento"
]

/** Fuente: «Base de conocimiento para agente virtual», sección 2. */
export const cargos: Cargo[] = [
 {
  "n": 1,
  "t": "Presidente / CEO – Chief Executive Officer",
  "c": 0,
  "fn": [
   "Definir la estrategia general de la empresa.",
   "Establecer objetivos de crecimiento, rentabilidad y participación de mercado.",
   "Representar a la compañía ante accionistas, gobierno, reguladores y otros actores.",
   "Aprobar grandes inversiones en infraestructura, tecnología y expansión.",
   "Coordinar a vicepresidentes y directores de las diferentes áreas.",
   "Tomar decisiones sobre adquisiciones, alianzas y proyectos estratégicos.",
   "Responder ante la junta directiva por los resultados de la compañía."
  ],
  "q": [
   "¿Qué decisiones estratégicas corresponden al CEO?",
   "¿Cómo se diferencia la responsabilidad del CEO de la del COO?"
  ],
  "s": "CEO",
  "f": "Archivo original «Cargos.docx», apartado 1, páginas 1.",
  "d": "Definir rumbo, prioridades y resultados globales de la organización.",
  "k": "Gobierno corporativo, estrategia, liderazgo ejecutivo, asignación de capital y gestión de partes interesadas.",
  "a": "Junta directiva, COO, CFO, CTO, CIO, CISO, líderes comerciales, jurídicos y regulatorios.",
  "i": "Cumplimiento de objetivos estratégicos, crecimiento, rentabilidad, flujo de caja, satisfacción del cliente y resiliencia del negocio.",
  "l": "No sustituye las responsabilidades de la junta directiva ni debe intervenir necesariamente en cada decisión operativa."
 },
 {
  "n": 2,
  "t": "Presidente / Director de Operaciones – COO",
  "c": 0,
  "fn": [
   "Supervisar las operaciones de telecomunicaciones.",
   "Coordinar la prestación de servicios móviles, internet, telefonía y televisión.",
   "Controlar indicadores de calidad y disponibilidad.",
   "Gestionar procesos operativos y centros de atención.",
   "Coordinar áreas técnicas, de servicio y operaciones.",
   "Mejorar eficiencia y productividad.",
   "Garantizar el cumplimiento de los niveles de servicio."
  ],
  "q": [
   "¿Qué indicadores permiten evaluar la operación diaria?",
   "¿Cómo coordina el COO a las áreas técnicas y de servicio?"
  ],
  "s": "COO",
  "f": "Archivo original «Cargos.docx», apartado 2, páginas 1–2.",
  "d": "Convertir la estrategia en una operación estable, eficiente y medible.",
  "k": "Gestión de operaciones, continuidad del servicio, calidad, productividad, procesos y coordinación transversal.",
  "a": "CEO, redes, tecnología, experiencia de cliente, infraestructura, proyectos y proveedores.",
  "i": "Disponibilidad de servicios, cumplimiento de SLA, tiempos de resolución, productividad, costos operativos y satisfacción.",
  "l": "No necesariamente define por sí solo la arquitectura tecnológica ni la estrategia corporativa."
 },
 {
  "n": 3,
  "t": "Vicepresidente / Director de Tecnología – CTO",
  "c": 1,
  "fn": [
   "Definir la estrategia tecnológica.",
   "Dirigir la evolución de las redes móviles y fijas.",
   "Planificar la implementación de tecnologías como 4G, 5G, fibra óptica y nube.",
   "Evaluar nuevas soluciones tecnológicas.",
   "Supervisar arquitectura de redes y plataformas.",
   "Coordinar proyectos de modernización tecnológica.",
   "Gestionar proveedores tecnológicos.",
   "Garantizar disponibilidad y desempeño de plataformas."
  ],
  "q": [
   "¿Qué decisiones tecnológicas suelen recaer en el CTO?",
   "¿Cómo se diferencia el CTO del CIO y del Director de Redes?"
  ],
  "s": "CTO",
  "f": "Archivo original «Cargos.docx», apartado 3, páginas 2.",
  "d": "Definir la dirección tecnológica y asegurar que las plataformas y redes evolucionen de forma sostenible.",
  "k": "Arquitectura tecnológica, evaluación de tecnologías, gestión de proveedores, modernización, capacidad y desempeño.",
  "a": "Director de Redes, Ingeniería y Planificación, CIO, CISO, PMO, Compras y Operaciones.",
  "i": "Cumplimiento de hoja de ruta tecnológica, disponibilidad, desempeño, modernización, costo total de propiedad y adopción tecnológica.",
  "l": "En algunas empresas CTO y Director de Redes pueden tener alcances distintos o combinarse; confirmar el organigrama real."
 },
 {
  "n": 4,
  "t": "Vicepresidente / Director de Redes – Network Director",
  "c": 1,
  "fn": [
   "Administrar la red móvil.",
   "Administrar redes de fibra óptica y redes de acceso.",
   "Supervisar antenas, estaciones base y nodos.",
   "Gestionar el core de la red.",
   "Supervisar capacidad y cobertura.",
   "Planificar ampliaciones de infraestructura.",
   "Coordinar mantenimiento preventivo y correctivo.",
   "Gestionar incidentes y fallas críticas.",
   "Garantizar disponibilidad y calidad de la red."
  ],
  "q": [
   "¿Quién se ocupa de la disponibilidad y calidad de la red?",
   "¿Qué diferencia hay entre operar una red y planificar su expansión?"
  ],
  "s": "Network Director",
  "f": "Archivo original «Cargos.docx», apartado 4, páginas 2–3.",
  "d": "Mantener la infraestructura de red disponible, segura, con capacidad y cobertura adecuadas.",
  "k": "Operación de red, capacidad, mantenimiento, incidentes críticos, disponibilidad y coordinación de equipos técnicos.",
  "a": "CTO, Ingeniería y Planificación, Operación y Mantenimiento, Infraestructura, proveedores y regulatorio.",
  "i": "Disponibilidad de red, cobertura, tasa de fallas, tiempo medio de reparación, congestión e incidentes repetidos.",
  "l": "Se enfoca en la infraestructura existente y su operación; la planificación futura puede estar asignada a otra dirección."
 },
 {
  "n": 5,
  "t": "Director / Vicepresidente de Ingeniería y Planificación de Red",
  "c": 1,
  "fn": [
   "Diseñar la arquitectura futura de la red.",
   "Determinar dónde construir nuevas estaciones.",
   "Dimensionar capacidad.",
   "Planificar ampliaciones de cobertura.",
   "Analizar tráfico y consumo de los usuarios.",
   "Realizar estudios de factibilidad.",
   "Definir tecnologías y equipos.",
   "Elaborar presupuestos de expansión."
  ],
  "q": [
   "¿Cómo se decide dónde ampliar cobertura?",
   "¿Qué información se necesita para dimensionar capacidad?"
  ],
  "s": "Director de Ingeniería y Planificación de Red",
  "f": "Archivo original «Cargos.docx», apartado 5, páginas 3.",
  "d": "Planificar la evolución y expansión de la red con base en demanda, capacidad, cobertura y viabilidad.",
  "k": "Modelado de tráfico, diseño de arquitectura, estudios de factibilidad, dimensionamiento y planificación de inversión.",
  "a": "Director de Redes, CTO, Finanzas, Infraestructura, Gestión de Espectro, PMO y Comercial.",
  "i": "Precisión de previsiones, utilización de capacidad, cobertura planificada, costo por sitio y cumplimiento de planes de expansión.",
  "l": "Diseñar o recomendar una ampliación no equivale necesariamente a aprobar presupuesto ni ejecutar la obra."
 },
 {
  "n": 6,
  "t": "Director de Seguridad de la Información – CISO",
  "c": 2,
  "fn": [
   "Proteger redes y sistemas contra ataques.",
   "Administrar políticas de ciberseguridad.",
   "Detectar y responder ante incidentes.",
   "Proteger información de clientes.",
   "Supervisar centros de operaciones de seguridad.",
   "Gestionar vulnerabilidades.",
   "Coordinar pruebas de seguridad.",
   "Implementar controles de acceso.",
   "Gestionar riesgos de ciberseguridad."
  ],
  "q": [
   "¿Qué tareas corresponden a la gestión de ciberseguridad?",
   "¿Qué debe hacer el agente si le preguntan por un incidente real?"
  ],
  "s": "CISO",
  "f": "Archivo original «Cargos.docx», apartado 6, páginas 4.",
  "d": "Reducir riesgos de seguridad de la información y coordinar la respuesta a amenazas cibernéticas.",
  "k": "Gobierno de seguridad, riesgos, controles, vulnerabilidades, incidentes, accesos y concienciación.",
  "a": "CIO, CTO, Redes, Riesgos, Jurídica, Privacidad/Datos, Auditoría y Operaciones.",
  "i": "Tiempo de detección y respuesta, vulnerabilidades críticas pendientes, cumplimiento de controles e incidentes.",
  "l": "La responsabilidad de seguridad se comparte con las áreas dueñas de sistemas y procesos; el CISO no elimina por sí solo todo riesgo."
 },
 {
  "n": 7,
  "t": "Director de Tecnología de Información – CIO",
  "c": 1,
  "fn": [
   "Administrar sistemas corporativos.",
   "Dirigir aplicaciones empresariales.",
   "Gestionar ERP, CRM y plataformas internas.",
   "Administrar infraestructura tecnológica corporativa.",
   "Liderar transformación digital.",
   "Automatizar procesos.",
   "Gestionar bases de datos.",
   "Implementar soluciones de inteligencia artificial y analítica.",
   "Garantizar continuidad de los sistemas de información."
  ],
  "q": [
   "¿Qué sistemas corporativos suele administrar el CIO?",
   "¿En qué se diferencia la TI corporativa de la tecnología de red?"
  ],
  "s": "CIO",
  "f": "Archivo original «Cargos.docx», apartado 7, páginas 4–5.",
  "d": "Asegurar que los sistemas de información corporativos apoyen los procesos y objetivos del negocio.",
  "k": "Aplicaciones empresariales, infraestructura TI, datos operativos, continuidad, automatización y transformación digital.",
  "a": "CTO, CISO, Chief Data Officer, áreas usuarias, PMO, Compras y proveedores.",
  "i": "Disponibilidad de aplicaciones, incidentes, satisfacción de usuarios, entregas de proyectos, costos y continuidad.",
  "l": "El CIO suele centrarse en TI corporativa; el CTO suele centrarse en tecnología de producto o redes, aunque las estructuras varían."
 },
 {
  "n": 8,
  "t": "Vicepresidente / Director Comercial",
  "c": 3,
  "fn": [
   "Definir objetivos comerciales.",
   "Diseñar estrategias de ventas.",
   "Administrar canales comerciales.",
   "Gestionar distribuidores y tiendas.",
   "Definir ofertas y promociones en coordinación con las áreas pertinentes.",
   "Analizar comportamiento de clientes.",
   "Incrementar adquisición de nuevos clientes.",
   "Reducir la pérdida de clientes.",
   "Coordinar equipos comerciales."
  ],
  "q": [
   "¿Quién define las metas y los canales de venta?",
   "¿Cómo se relacionan Comercial, Marketing y Producto?"
  ],
  "s": "VP Comercial",
  "f": "Archivo original «Cargos.docx», apartado 8, páginas 5–6.",
  "d": "Convertir la propuesta comercial en ventas, ingresos y relaciones rentables con clientes.",
  "k": "Canales, metas, equipos de venta, distribución, ofertas, adquisición, retención y desempeño comercial.",
  "a": "Marketing, Producto, B2B, Experiencia del Cliente, Finanzas y Operaciones.",
  "i": "Ingresos, ventas netas, conversión, altas, costo de adquisición, retención y cumplimiento de metas.",
  "l": "No debe prometer condiciones que no hayan sido aprobadas por las áreas responsables."
 },
 {
  "n": 9,
  "t": "Director de Marketing",
  "c": 3,
  "fn": [
   "Diseñar campañas publicitarias.",
   "Analizar tendencias del mercado.",
   "Definir posicionamiento de productos.",
   "Estudiar competidores.",
   "Diseñar promociones.",
   "Administrar la marca.",
   "Segmentar clientes.",
   "Analizar comportamiento de consumidores.",
   "Coordinar lanzamientos de nuevos productos."
  ],
  "q": [
   "¿Qué responsabilidades tiene Marketing en el posicionamiento?",
   "¿Quién define las características técnicas de una oferta?"
  ],
  "s": "Director de Marketing",
  "f": "Archivo original «Cargos.docx», apartado 9, páginas 6.",
  "d": "Entender el mercado y posicionar la marca y las ofertas ante segmentos de clientes.",
  "k": "Investigación de mercado, marca, campañas, segmentación, comunicación y análisis competitivo.",
  "a": "Comercial, Producto, Experiencia del Cliente, Datos, Jurídica y agencias/proveedores.",
  "i": "Alcance, conversión, costo por adquisición, retorno de campañas, reconocimiento de marca y contribución comercial.",
  "l": "Marketing comunica y posiciona ofertas; la definición técnica y económica del producto puede corresponder a Producto y Finanzas."
 },
 {
  "n": 10,
  "t": "Director de Experiencia y Servicio al Cliente",
  "c": 3,
  "fn": [
   "Supervisar centros de atención.",
   "Administrar canales telefónicos y digitales.",
   "Controlar tiempos de respuesta.",
   "Analizar reclamaciones.",
   "Reducir problemas recurrentes.",
   "Medir satisfacción del cliente.",
   "Diseñar procesos de autoservicio.",
   "Coordinar estrategias de fidelización."
  ],
  "q": [
   "¿Qué indicadores se utilizan para evaluar la experiencia del cliente?",
   "¿Quién resuelve una falla técnica que genera reclamaciones?"
  ],
  "s": "Director de Experiencia y Servicio al Cliente",
  "f": "Archivo original «Cargos.docx», apartado 10, páginas 7.",
  "d": "Diseñar y mejorar la experiencia completa del cliente a través de los canales de atención.",
  "k": "Atención, reclamaciones, autoservicio, análisis de causas, calidad de servicio, fidelización y medición.",
  "a": "Comercial, Operaciones, Producto, TI, Redes, Datos y Jurídica/Regulatorio.",
  "i": "NPS, satisfacción, resolución en primer contacto, tiempos de respuesta, repetición de contactos y abandono.",
  "l": "Puede coordinar la solución de problemas, pero la corrección técnica o comercial puede depender de otra área."
 },
 {
  "n": 11,
  "t": "Director de Producto – Product Director",
  "c": 3,
  "fn": [
   "Crear nuevos productos.",
   "Diseñar planes móviles y de internet.",
   "Definir características y beneficios.",
   "Analizar rentabilidad.",
   "Estudiar necesidades de los clientes.",
   "Coordinar lanzamientos.",
   "Trabajar con tecnología, marketing y ventas.",
   "Analizar el ciclo de vida de los productos."
  ],
  "q": [
   "¿Qué actividades comprende el ciclo de vida de un producto?",
   "¿Cómo se coordina Producto con Marketing, Tecnología y Ventas?"
  ],
  "s": "Product Director",
  "f": "Archivo original «Cargos.docx», apartado 11, páginas 7–8.",
  "d": "Administrar el ciclo de vida de productos y ofertas para responder a necesidades del mercado y objetivos del negocio.",
  "k": "Diseño de propuesta de valor, requisitos, rentabilidad, priorización, lanzamiento y seguimiento del producto.",
  "a": "Marketing, Comercial, Tecnología, Finanzas, Operaciones, Jurídica y Experiencia del Cliente.",
  "i": "Ingresos y margen por producto, adopción, cancelaciones, satisfacción, cumplimiento del lanzamiento y rentabilidad.",
  "l": "La dirección de producto coordina la oferta; no necesariamente ejecuta por sí sola redes, campañas o ventas."
 },
 {
  "n": 12,
  "t": "Director de Finanzas – CFO",
  "c": 4,
  "fn": [
   "Elaborar presupuestos.",
   "Controlar ingresos y gastos.",
   "Administrar flujo de caja.",
   "Analizar rentabilidad.",
   "Gestionar deuda y financiación.",
   "Evaluar inversiones.",
   "Elaborar estados financieros.",
   "Controlar costos.",
   "Analizar retorno de inversiones en infraestructura."
  ],
  "q": [
   "¿Cómo evalúa Finanzas una inversión de red?",
   "¿Qué diferencia hay entre presupuesto, flujo de caja y rentabilidad?"
  ],
  "s": "CFO",
  "f": "Archivo original «Cargos.docx», apartado 12, páginas 8.",
  "d": "Proteger la sostenibilidad financiera y apoyar decisiones de asignación de recursos.",
  "k": "Presupuestos, contabilidad, tesorería, análisis financiero, financiación, costos y evaluación de inversiones.",
  "a": "CEO, todas las áreas presupuestales, Compras, PMO, Auditoría y Riesgos.",
  "i": "Rentabilidad, flujo de caja, desviación presupuestal, deuda, costos y retorno de inversión.",
  "l": "El análisis financiero informa decisiones; la aprobación final depende de las atribuciones de gobierno y delegación."
 },
 {
  "n": 13,
  "t": "Director de Compras y Abastecimiento – Procurement",
  "c": 4,
  "fn": [
   "Negociar con proveedores.",
   "Comprar equipos de telecomunicaciones.",
   "Gestionar contratos.",
   "Administrar licitaciones.",
   "Negociar precios y condiciones.",
   "Evaluar proveedores.",
   "Controlar costos.",
   "Gestionar compras de equipos de red, software, infraestructura y servicios."
  ],
  "q": [
   "¿Qué pasos de adquisición y evaluación de proveedores se contemplan?",
   "¿Por qué Compras debe coordinarse con Jurídica y el área solicitante?"
  ],
  "s": "Procurement",
  "f": "Archivo original «Cargos.docx», apartado 13, páginas 8–9.",
  "d": "Adquirir bienes y servicios necesarios con condiciones adecuadas, transparencia y control.",
  "k": "Estrategia de compras, negociación, licitaciones, contratos, evaluación de proveedores y control de gasto.",
  "a": "Áreas solicitantes, Jurídica, Finanzas, Tecnología, Redes, Seguridad y Auditoría.",
  "i": "Ahorros validados, tiempo de compra, cumplimiento contractual, calidad de proveedor y riesgos de suministro.",
  "l": "No debe seleccionar proveedores ignorando políticas de contratación, conflictos de interés o controles internos."
 },
 {
  "n": 14,
  "t": "Director Jurídico – General Counsel",
  "c": 4,
  "fn": [
   "Asesorar jurídicamente a la organización.",
   "Revisar contratos.",
   "Gestionar litigios.",
   "Analizar normas.",
   "Coordinar asuntos regulatorios.",
   "Asesorar operaciones corporativas.",
   "Revisar fusiones, adquisiciones y alianzas.",
   "Gestionar propiedad intelectual."
  ],
  "q": [
   "¿Qué asuntos debe escalarse al área jurídica?",
   "¿Qué diferencia existe entre asesoría jurídica y gestión regulatoria?"
  ],
  "s": "General Counsel",
  "f": "Archivo original «Cargos.docx», apartado 14, páginas 9.",
  "d": "Gestionar la exposición legal y asesorar a la organización sobre sus derechos y obligaciones.",
  "k": "Revisión contractual, litigios, gobierno corporativo, propiedad intelectual, transacciones y asesoría legal.",
  "a": "CEO, Regulatorio, Compras, Recursos Humanos, Finanzas, Riesgos y Auditoría.",
  "i": "Tiempos de revisión, contingencias legales, cumplimiento de hitos y gestión de litigios.",
  "l": "La asesoría debe basarse en la jurisdicción y los hechos concretos; el agente no debe presentarse como abogado ni reemplazar asesoría legal."
 },
 {
  "n": 15,
  "t": "Director de Asuntos Regulatorios",
  "c": 4,
  "fn": [
   "Analizar regulación del sector.",
   "Mantener relaciones con entidades regulatorias.",
   "Preparar respuestas a consultas regulatorias.",
   "Gestionar obligaciones de la compañía.",
   "Analizar cambios normativos.",
   "Participar en discusiones regulatorias.",
   "Coordinar temas relacionados con espectro radioeléctrico.",
   "Evaluar impactos de nuevas regulaciones."
  ],
  "q": [
   "¿Cómo se evalúa el impacto de una nueva regulación?",
   "¿Cuándo debe comprobarse una obligación en fuentes oficiales?"
  ],
  "s": "Director de Asuntos Regulatorios",
  "f": "Archivo original «Cargos.docx», apartado 15, páginas 9–10.",
  "d": "Interpretar obligaciones regulatorias y coordinar respuestas y cumplimiento sectorial.",
  "k": "Seguimiento normativo, análisis de impacto, reportes, consultas y coordinación con autoridades.",
  "a": "Jurídica, Gestión de Espectro, Redes, Comercial, Experiencia del Cliente, Seguridad y Dirección.",
  "i": "Entregas regulatorias a tiempo, hallazgos, obligaciones implementadas y riesgos de incumplimiento.",
  "l": "Las obligaciones dependen de la regulación vigente, la licencia, el servicio y el operador; verificar fuentes oficiales actuales."
 },
 {
  "n": 16,
  "t": "Director de Gestión de Espectro",
  "c": 1,
  "fn": [
   "Administrar el espectro radioeléctrico asignado.",
   "Analizar necesidades futuras de espectro.",
   "Participar en procesos de asignación.",
   "Coordinar aspectos técnicos del uso de frecuencias.",
   "Optimizar utilización del espectro.",
   "Analizar nuevas bandas para tecnologías futuras.",
   "Coordinar aspectos regulatorios relacionados con espectro."
  ],
  "q": [
   "¿Qué es el espectro radioeléctrico y por qué es importante?",
   "¿Cómo se relaciona la gestión de espectro con Ingeniería y Regulación?"
  ],
  "s": "Director de Gestión de Espectro",
  "f": "Archivo original «Cargos.docx», apartado 16, páginas 10.",
  "d": "Gestionar el uso eficiente y conforme del espectro radioeléctrico asignado o disponible.",
  "k": "Planificación de frecuencias, necesidades futuras, análisis técnico, coordinación regulatoria y optimización.",
  "a": "Regulatorio, Redes, Ingeniería, CTO, Finanzas y autoridades competentes.",
  "i": "Eficiencia espectral, capacidad habilitada, interferencias y cumplimiento de condiciones de asignación.",
  "l": "No debe afirmarse que una banda está asignada o disponible sin verificar la información oficial vigente."
 },
 {
  "n": 17,
  "t": "Director de Analítica y Datos – Chief Data Officer",
  "c": 2,
  "fn": [
   "Administrar datos corporativos.",
   "Desarrollar modelos predictivos.",
   "Analizar comportamiento de clientes.",
   "Identificar oportunidades comerciales.",
   "Predecir cancelaciones o churn.",
   "Analizar tráfico de red.",
   "Apoyar decisiones mediante inteligencia artificial.",
   "Gestionar gobierno y calidad de datos."
  ],
  "q": [
   "¿Cómo se usa la analítica para anticipar cancelaciones?",
   "¿Qué precauciones deben tenerse al usar datos de clientes?"
  ],
  "s": "Chief Data Officer",
  "f": "Archivo original «Cargos.docx», apartado 17, páginas 10–11.",
  "d": "Convertir datos confiables en información y modelos que apoyen decisiones empresariales.",
  "k": "Gobierno y calidad de datos, analítica, modelos predictivos, medición, IA y acceso responsable a datos.",
  "a": "CIO, CISO, Comercial, Marketing, Redes, Finanzas, Jurídica y responsables de datos.",
  "i": "Calidad y disponibilidad de datos, adopción de modelos, desempeño predictivo y valor generado.",
  "l": "Los análisis deben respetar privacidad, seguridad, permisos, calidad de datos y límites metodológicos."
 },
 {
  "n": 18,
  "t": "Director de Recursos Humanos – CHRO",
  "c": 4,
  "fn": [
   "Gestionar contratación y selección.",
   "Promover desarrollo profesional.",
   "Coordinar capacitación.",
   "Administrar salarios y compensación.",
   "Evaluar desempeño.",
   "Gestionar cultura organizacional.",
   "Atender relaciones laborales.",
   "Planificar sucesión.",
   "Promover bienestar de empleados."
  ],
  "q": [
   "¿Qué procesos de talento humano cubre el CHRO?",
   "¿Qué información laboral debe validarse con las políticas de la empresa?"
  ],
  "s": "CHRO",
  "f": "Archivo original «Cargos.docx», apartado 18, páginas 11.",
  "d": "Atraer, desarrollar y retener talento, promoviendo condiciones laborales y cultura organizacional adecuadas.",
  "k": "Selección, capacitación, compensación, desempeño, relaciones laborales, bienestar y sucesión.",
  "a": "Dirección, líderes de área, Jurídica, Finanzas, Seguridad y empleados.",
  "i": "Tiempo de contratación, rotación, retención, capacitación, clima laboral y cumplimiento de procesos.",
  "l": "Requisitos laborales y decisiones de personal deben validarse con políticas internas y normativa aplicable."
 },
 {
  "n": 19,
  "t": "Director de Empresas / B2B",
  "c": 3,
  "fn": [
   "Gestionar clientes empresariales.",
   "Diseñar soluciones de telecomunicaciones para empresas.",
   "Administrar grandes cuentas.",
   "Desarrollar servicios de conectividad.",
   "Vender soluciones de nube.",
   "Ofrecer soluciones de ciberseguridad.",
   "Desarrollar soluciones IoT.",
   "Administrar soluciones de comunicaciones unificadas.",
   "Gestionar contratos corporativos."
  ],
  "q": [
   "¿Qué diferencia el negocio B2B del mercado de consumidores?",
   "¿Qué áreas deben validar una solución empresarial antes de ofertarla?"
  ],
  "s": "Director B2B",
  "f": "Archivo original «Cargos.docx», apartado 19, páginas 11–12.",
  "d": "Desarrollar el negocio de soluciones de telecomunicaciones para clientes empresariales.",
  "k": "Gestión de cuentas, venta consultiva, soluciones de conectividad, nube, IoT, ciberseguridad y contratos.",
  "a": "Comercial, Producto, Tecnología, Redes, Seguridad, Jurídica, Finanzas y Operaciones.",
  "i": "Ingresos B2B, margen, renovación de contratos, satisfacción, crecimiento de cuentas y cumplimiento de SLA.",
  "l": "La solución ofertada debe ser técnicamente viable, estar autorizada y cumplir los compromisos contractuales."
 },
 {
  "n": 20,
  "t": "Director de Infraestructura y Construcción",
  "c": 1,
  "fn": [
   "Coordinar construcción de estaciones base.",
   "Supervisar despliegue de fibra óptica.",
   "Coordinar construcción de nodos.",
   "Gestionar contratistas.",
   "Obtener y administrar permisos.",
   "Supervisar obras.",
   "Controlar presupuesto.",
   "Cumplir cronogramas."
  ],
  "q": [
   "¿Qué factores se controlan durante el despliegue de infraestructura?",
   "¿Por qué los permisos y la seguridad de obra son relevantes?"
  ],
  "s": "Director de Infraestructura y Construcción",
  "f": "Archivo original «Cargos.docx», apartado 20, páginas 12.",
  "d": "Planificar y ejecutar obras de despliegue o ampliación de infraestructura.",
  "k": "Diseño de obra, permisos, contratistas, cronogramas, seguridad de obra, presupuesto y aceptación técnica.",
  "a": "Redes, Ingeniería, PMO, Compras, Jurídica, autoridades y proveedores.",
  "i": "Cumplimiento de cronograma y presupuesto, calidad, seguridad, permisos y entrega aceptada.",
  "l": "La ejecución debe respetar permisos, requisitos técnicos, ambientales, de seguridad y acuerdos con propietarios."
 },
 {
  "n": 21,
  "t": "Director de Operación y Mantenimiento de Red",
  "c": 1,
  "fn": [
   "Monitorear redes 24/7.",
   "Atender fallas.",
   "Coordinar técnicos de campo.",
   "Realizar mantenimiento preventivo.",
   "Ejecutar mantenimiento correctivo.",
   "Administrar centros de operación de red.",
   "Coordinar atención de emergencias.",
   "Controlar disponibilidad de servicios."
  ],
  "q": [
   "¿Qué diferencia hay entre mantenimiento preventivo y correctivo?",
   "¿Qué significan MTTR y disponibilidad en la operación de red?"
  ],
  "s": "Director de Operación y Mantenimiento de Red",
  "f": "Archivo original «Cargos.docx», apartado 21, páginas 13.",
  "d": "Mantener la infraestructura y restablecer el servicio ante fallas.",
  "k": "Monitoreo, diagnóstico, escalamiento, mantenimiento preventivo/correctivo y coordinación de campo.",
  "a": "Director de Redes, NOC, Ingeniería, Infraestructura, proveedores y Servicio al Cliente.",
  "i": "Disponibilidad, MTTR, MTBF, reincidencia, mantenimiento planificado y cumplimiento de SLA.",
  "l": "La prioridad de incidentes debe seguir los procedimientos y niveles de criticidad definidos por la empresa."
 },
 {
  "n": 22,
  "t": "Director de Gestión de Proyectos – PMO",
  "c": 2,
  "fn": [
   "Administrar proyectos estratégicos.",
   "Controlar presupuesto.",
   "Controlar cronogramas.",
   "Administrar riesgos.",
   "Coordinar diferentes áreas.",
   "Presentar avances a la alta dirección.",
   "Asegurar cumplimiento de objetivos."
  ],
  "q": [
   "¿Qué controla una PMO en un proyecto estratégico?",
   "¿Cómo se reportan desviaciones de presupuesto o cronograma?"
  ],
  "s": "PMO",
  "f": "Archivo original «Cargos.docx», apartado 22, páginas 13–14.",
  "d": "Asegurar que los proyectos se entreguen con alcance, tiempo, costo, calidad y beneficios controlados.",
  "k": "Gobernanza de proyectos, cronogramas, presupuesto, riesgos, dependencias, reportes y gestión de cambios.",
  "a": "Patrocinadores ejecutivos, áreas técnicas, Finanzas, Compras, proveedores y equipos de proyecto.",
  "i": "Hitos cumplidos, desviaciones, riesgos abiertos, beneficios realizados y entregables aceptados.",
  "l": "La PMO gobierna o coordina según su mandato; no necesariamente es dueña de todas las decisiones de negocio."
 },
 {
  "n": 23,
  "t": "Director de Riesgos – CRO",
  "c": 2,
  "fn": [
   "Identificar riesgos.",
   "Medir riesgos financieros y operativos.",
   "Diseñar controles.",
   "Supervisar continuidad del negocio.",
   "Administrar riesgos tecnológicos.",
   "Analizar riesgos regulatorios.",
   "Coordinar planes de contingencia."
  ],
  "q": [
   "¿Cómo se identifican y priorizan riesgos empresariales?",
   "¿Qué diferencia existe entre gestionar riesgos y auditar controles?"
  ],
  "s": "CRO",
  "f": "Archivo original «Cargos.docx», apartado 23, páginas 14.",
  "d": "Identificar, evaluar y coordinar la gestión de riesgos empresariales.",
  "k": "Marcos de riesgo, apetito de riesgo, controles, continuidad, escenarios y reportes.",
  "a": "CEO, Finanzas, CISO, CIO, Jurídica, Operaciones, Auditoría y responsables de proceso.",
  "i": "Riesgos críticos tratados, efectividad de controles, planes probados y pérdidas/incidentes.",
  "l": "La gestión del riesgo corresponde también a los responsables operativos; Riesgos facilita y supervisa según el modelo de gobierno."
 },
 {
  "n": 24,
  "t": "Director de Auditoría Interna",
  "c": 4,
  "fn": [
   "Auditar procesos.",
   "Revisar controles internos.",
   "Detectar riesgos.",
   "Investigar irregularidades según mandato y procedimiento.",
   "Evaluar cumplimiento de políticas.",
   "Presentar informes a la junta directiva o comité de auditoría."
  ],
  "q": [
   "¿Qué hace Auditoría Interna para evaluar controles?",
   "¿Por qué debe conservar independencia frente a las áreas auditadas?"
  ],
  "s": "Director de Auditoría Interna",
  "f": "Archivo original «Cargos.docx», apartado 24, páginas 14–15.",
  "d": "Evaluar de forma independiente los controles y procesos y reportar hallazgos.",
  "k": "Planes de auditoría, pruebas, evidencia, hallazgos, recomendaciones y seguimiento.",
  "a": "Comité de auditoría/junta, dirección y responsables de procesos, preservando independencia.",
  "i": "Cobertura del plan, hallazgos de alto riesgo, acciones correctivas cerradas y calidad de auditoría.",
  "l": "Auditoría evalúa y recomienda; no debería asumir la operación de los controles que luego audita."
 }
]
