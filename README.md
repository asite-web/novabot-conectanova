# novabot-conectanova · VanguardIA

Asistente virtual y consultor organizacional de **Vanguardia Telecom S.A.S.** (empresa ficticia). Explica los **24 cargos** de una compañía de telecomunicaciones, sus funciones, diferencias y relaciones de colaboración, con base en un documento fuente y con trazabilidad de cada respuesta.

> **Alcance.** Vanguardia Telecom es una identidad ficticia con fines educativos. La base de conocimiento es una referencia general del sector, no un organigrama oficial: salarios, requisitos académicos y líneas de reporte **no están especificados** y el agente no los inventa.

## Funcionalidades

| Vista | Descripción |
|---|---|
| Inicio | Presentación, cifras de la base y buscador global |
| Chat | Consulta conversacional con contexto, sugerencias, copiar y limpiar |
| Cargos | Catálogo de 24 cargos en 5 categorías, con filtros y ficha completa |
| Comparador | Dos cargos frente a frente, con similitudes y la diferencia del apartado 3 |
| Casos | 12 casos de prueba del documento con su criterio de respuesta y mapa de colaboración |
| Glosario | 17 términos sectoriales con buscador |
| FAQ | 20 preguntas frecuentes con enlaces a los cargos |
| Evaluación | Cuestionario de opción múltiple generado con las funciones documentadas |

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación y ejecución

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:5173
npm run build      # tsc + build de producción en dist/
npm run preview    # sirve dist/ localmente
```

## Arquitectura

```
src/
├── main.tsx / App.tsx        Punto de entrada y enrutado por estado (sin librería de rutas)
├── index.css                 Tailwind + clases de componente (btn, card, input, tag, note)
├── types.ts                  Tipos Cargo y ViewId
├── components/               Sidebar, Chat, CardCargo
├── views/                    Inicio, Cargos, Comparador, Casos, Glosario, Faq, Evaluacion
├── data/                     cargosData, glosarioData, faqData, casosData, diferenciasData
├── services/rag.ts           Motor conversacional local (RAG ligero)
└── utils/text.ts             Normalización, tokenización y búsqueda
```

### Motor conversacional (RAG ligero, sin API)

`services/rag.ts` no llama a ningún modelo externo ni simula una conexión. Para cada pregunta:

1. Detecta casos especiales: datos ausentes (salarios, requisitos, reporte) y datos personales.
2. Resuelve definiciones con el glosario y comparaciones con la tabla del apartado 3.
3. Busca la mejor coincidencia en FAQ y casos de prueba.
4. Si no hay, recupera el cargo más relevante por título, siglas y funciones.
5. Responde siempre con la **fuente** (ficha o apartado del documento).

Mantiene el último cargo consultado para preguntas de seguimiento («¿y sus indicadores?»).
Para conectar un LLM real, sustituye `reply()` por una llamada a tu backend (nunca expongas una API key en el frontend) y usa estos datos como contexto recuperado.

### Datos

Los archivos de `src/data/` se extrajeron del documento «Base de conocimiento para agente virtual – cargos de telecomunicaciones» (.docx). La asignación de cada cargo a una de las 5 categorías es un criterio de diseño, no viene del documento. Para actualizar la base, edita esos archivos manteniendo los tipos de `types.ts`.

### Diseño

Paleta en `tailwind.config.js`: `navy #0A192F` (navegación), `electric #2563EB` (acciones), `cyan #0EA5E9` (foco y acentos), `mint #14B8A6` (marcadores), `surface #F8FAFC`. Tipografía Inter, diseño responsive y foco visible por teclado.

## Despliegue

`npm run build` genera `dist/`, un sitio estático con rutas relativas (`base: './'`).

- **Vercel / Netlify:** importa el repositorio; comando `npm run build`, directorio de salida `dist`.
- **GitHub Pages:** en `vite.config.ts` usa `base: '/novabot-conectanova/'`, ejecuta `npm run build` y publica `dist/` (por ejemplo con GitHub Actions o la rama `gh-pages`).
- **Cualquier servidor estático:** copia el contenido de `dist/`.

## Pruebas de contenido sugeridas

Verifica en el chat los casos de control del documento: CTO vs CIO, «¿el CIO administra las antenas?», «¿cuánto gana un Director de Redes?», la premisa falsa sobre el CISO, «¿quién se encarga de los clientes?» y la solicitud de datos personales de clientes.

## Subir al repositorio

```bash
git init && git add . && git commit -m "feat: VanguardIA en React + TypeScript + Vite + Tailwind"
git branch -M main
git remote add origin <URL-de-tu-repositorio>/novabot-conectanova.git
git push -u origin main
```
