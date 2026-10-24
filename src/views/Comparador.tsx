import { useState } from 'react'
import { cargos, categorias } from '../data/cargosData'
import { diffFor } from '../services/rag'
import { byN, cite, nm, norm } from '../utils/text'

const sp = (s: string) => s.split(/,| y |\//).map(x => x.trim().replace(/\.$/, '')).filter(Boolean)
const FILAS: [string, 'd' | 'k' | 'a' | 'i' | 'l'][] = [['Objetivo', 'd'], ['Conocimientos (orientativo)', 'k'], ['Áreas de interacción', 'a'], ['Indicadores', 'i'], ['Límites', 'l']]

export default function Comparador() {
  const [a, setA] = useState(1), [b, setB] = useState(2)
  const [ver, setVer] = useState(false)
  const ca = byN(a)!, cb = byN(b)!
  const sa = sp(ca.a), sb = sp(cb.a)
  const com = sa.filter(x => sb.some(y => norm(y) === norm(x)))
  const dr = diffFor(ca, cb)
  const sel = (v: number, set: (n: number) => void, l: string) => (
    <select className="input flex-1" aria-label={l} value={v} onChange={e => { set(+e.target.value); setVer(false) }}>
      {cargos.map(c => <option key={c.n} value={c.n}>{nm(c)}</option>)}
    </select>
  )
  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold">Comparador de cargos</h1>
      <div className="mb-3 flex flex-wrap gap-3">{sel(a, setA, 'Cargo A')}{sel(b, setB, 'Cargo B')}</div>
      <button className="btn" onClick={() => setVer(true)}>Comparar</button>
      {ver && (a === b ? <p className="mt-4">Elige dos cargos distintos.</p> : (
        <div className="mt-4" aria-live="polite">
          <div className="grid gap-3 md:grid-cols-2">
            {[ca, cb].map(c => (
              <article key={c.n} className="card">
                <h3 className="mb-2 font-semibold">{nm(c)}</h3>
                {FILAS.map(([l, k]) => <p key={k} className="mb-1 text-sm"><b>{l}:</b> {c[k]}</p>)}
                <p className="mt-2 text-sm font-semibold">Funciones:</p>
                <ul className="list-disc pl-5 text-sm">{c.fn.map(f => <li key={f}>{f}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="note">
            <b>Similitudes:</b> {ca.c === cb.c ? `misma categoría (${categorias[ca.c]}). ` : `categorías distintas (${categorias[ca.c]} y ${categorias[cb.c]}). `}
            {com.length ? `Áreas de interacción en común: ${com.join(', ')}.` : 'No comparten áreas de interacción nombradas de forma idéntica.'}<br />
            {dr ? <><b>Diferencia según el apartado 3:</b> {dr[1]}</> : 'El apartado 3 no incluye una fila específica para este par.'}<br />
            <small>Fuente: {cite(ca)}; {cite(cb)}</small>
          </div>
        </div>
      ))}
    </section>
  )
}
