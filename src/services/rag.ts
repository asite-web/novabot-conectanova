import type { Cargo } from '../types'
import { faq } from '../data/faqData'
import { casos } from '../data/casosData'
import { glosario } from '../data/glosarioData'
import { diferencias } from '../data/diferenciasData'
import { cite, explicit, find, hit, idx, nm, norm, overlap, tok } from '../utils/text'

export interface Respuesta { body: string; source: string; cargo: Cargo | null }
type Item = [string, string, string]
const SRC = 'Base de conocimiento para agente virtual'
const FIELDS: [RegExp, 'i' | 'k' | 'a' | 'l', string][] = [
  [/indicador|medir|kpi/, 'i', 'Indicadores que podrían utilizarse'],
  [/competenc|conocimiento|habilidad/, 'k', 'Conocimientos y competencias (orientativo)'],
  [/interact|colabor|trabaja con|areas/, 'a', 'Áreas con las que suele interactuar'],
  [/limite|precauc/, 'l', 'Límites y precauciones'],
]

/** Fila del apartado 3 que compara dos cargos, si existe. */
export function diffFor(a: Cargo, b: Cargo) {
  const ks = [a, b].map(c => [...idx(c).ti].filter(w => w.length < 5 || w.startsWith('c')))
  return diferencias.find(r => { const t = norm(r[0]); return ks.every(k => k.some(w => t.includes(w))) })
}
const glosarioHit = (q: string) => glosario.find(g => tok(q).some(w => norm(g[0]).split(/[^a-z0-9]+/).includes(w)))

/** RAG ligero local: recupera fragmentos de la base y cita la fuente. No usa servicios externos. */
export function reply(q: string, last: Cargo | null): Respuesta {
  const n = norm(q), ex = explicit(q)
  if (/salari|sueldo|gana |cuanto gana|requisit|titulo|experiencia|certificac|reporta|jefe/.test(n)) {
    const w = ex[0], que = /reporta|jefe/.test(n) ? 'líneas de reporte' : 'salarios ni requisitos académicos'
    return { cargo: last, body: `El documento no especifica ${que}${w ? ' para ' + nm(w) : ''}, así que no lo voy a inventar. Habría que validar cargo, empresa, ubicación y fecha en una fuente adicional.`, source: `${SRC}, apartados 7 y 8 (manejo de datos ausentes).` }
  }
  if (/datos personales|datos de (los )?clientes/.test(n) && /mostrar|dame|ver|compart/.test(n))
    return { cargo: last, body: 'No puedo mostrar datos personales de clientes. Para analizar churn se deben usar datos autorizados, minimizados y protegidos según las políticas aplicables.', source: `${SRC}, apartado 9 (privacidad de datos).` }
  if (/que es|significa|definicion|que son/.test(n)) {
    const g = glosarioHit(q)
    if (g) return { cargo: last, body: `${g[0]}: ${g[1]}`, source: `${SRC}, apartado 5 (glosario).` }
  }
  if (/diferenc|compar|distingu| vs |versus/.test(n) && ex.length >= 2) {
    const [a, b] = ex, r = diffFor(a, b)
    if (r) return { cargo: a, body: `${r[0]}: ${r[1]}`, source: `${SRC}, apartado 3. El alcance real depende del organigrama de cada empresa.` }
    return { cargo: a, body: `${nm(a)}: ${a.d}\n${nm(b)}: ${b.d}\nNo hay una fila específica en el apartado 3 para este par; usa el Comparador.`, source: `${cite(a)}; ${cite(b)}` }
  }
  let best: Item | null = null, bs = 0
  const pool: Item[] = [...faq.map((x): Item => [x[0], x[1], 'apartado 8']), ...casos.map((x): Item => [x[1], x[2], 'apartado 9 (criterio de evaluación)'])]
  for (const x of pool) { const s = Math.min(overlap(q, x[0]), overlap(x[0], q) + 0.15); if (s > bs) { bs = s; best = x } }
  const fd = FIELDS.find(f => f[0].test(n))
  let c: Cargo | null = ex[0] ?? (fd || /y (sus|su)|ese cargo|el mismo/.test(n) ? last : null)
  if (c && fd) return { cargo: c, body: `${fd[2]} – ${nm(c)}: ${c[fd[1]]}`, source: `Orientación general del sector, no requisito de una empresa. ${cite(c)}` }
  if (best && bs >= 0.6 && !(ex.length && bs < 0.8))
    return { cargo: last, body: (best[2].startsWith('apartado 9') ? 'Criterio de respuesta de la base: ' : '') + best[1], source: `${SRC}, ${best[2]}. Verifica normas y organigrama vigentes antes de tratarlo como regla.` }
  c = c ?? find(q)[0] ?? null
  if (c) {
    const t = tok(q), fs = c.fn.filter(f => t.some(w => hit(w, new Set(tok(f))))), sh = (fs.length ? fs : c.fn).slice(0, fs.length ? 4 : 7)
    return { cargo: c, body: `${c.t}: ${c.d}\nFunciones documentadas:\n${sh.map(f => '• ' + f).join('\n')}`, source: `${cite(c)}. La base no define exclusividad ni línea de reporte.` }
  }
  const g = glosarioHit(q)
  if (g) return { cargo: last, body: `${g[0]}: ${g[1]}`, source: `${SRC}, apartado 5 (glosario).` }
  return { cargo: last, body: 'No encontré ese tema en la base. ¿Puedes indicar el cargo, la actividad o el servicio al que te refieres? Por ejemplo: espectro, NOC, riesgos o ventas.', source: '' }
}
