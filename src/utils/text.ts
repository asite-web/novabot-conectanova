import type { Cargo } from '../types'
import { cargos } from '../data/cargosData'

const STOP = new Set('director vicepresidente presidente quien cargo cual como para esta hace entre diferencia sobre donde cuando segun tiene puede cuales pregunta tambien'.split(' '))
const KEEP = new Set('ceo coo cto cio ciso cfo cro chro cdo pmo b2b noc soc sla nps erp crm iot'.split(' '))

export const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
export const tok = (s: string) => norm(s).split(/[^a-z0-9]+/).filter(w => (w.length > 3 || KEEP.has(w)) && !STOP.has(w))
export const hit = (w: string, set: Set<string>) =>
  set.has(w) || (w.length > 4 && [...set].some(x => x.length > 4 && x.slice(0, 5) === w.slice(0, 5)))
export const nm = (c: Cargo) => c.t.split(' – ')[0]
export const byN = (n: number) => cargos.find(c => c.n === n)

const index = new Map(cargos.map(c => [c.n, { ti: new Set(tok(c.t + ' ' + c.s)), fi: new Set(tok(c.fn.join(' ') + ' ' + c.d)) }]))
export const idx = (c: Cargo) => index.get(c.n)!

/** Cargos ordenados por relevancia (título/siglas pesan 5, funciones 1). */
export function find(q: string): Cargo[] {
  const t = tok(q)
  return cargos
    .map(c => [t.reduce((a, w) => a + (hit(w, idx(c).ti) ? 5 : 0) + (hit(w, idx(c).fi) ? 1 : 0), 0), c] as const)
    .filter(x => x[0] > 0).sort((a, b) => b[0] - a[0]).map(x => x[1])
}
/** Cargos nombrados de forma explícita en la consulta. */
export const explicit = (q: string) => find(q).filter(c => tok(q).some(w => hit(w, idx(c).ti)))
/** Proporción de palabras de `s` presentes en `q`. */
export const overlap = (q: string, s: string) => {
  const a = new Set(tok(q)), b = tok(s)
  return a.size && b.length ? b.filter(w => hit(w, a)).length / b.length : 0
}
export const cite = (c: Cargo) => `Base de conocimiento, ficha ${c.n}: ${c.f.replace('Archivo original «Cargos.docx», ', '')}`
