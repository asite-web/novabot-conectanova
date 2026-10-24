import { useState } from 'react'
import { glosario } from '../data/glosarioData'
import { norm } from '../utils/text'

export default function Glosario() {
  const [q, setQ] = useState('')
  const r = glosario.filter(g => norm(g[0] + g[1]).includes(norm(q)))
  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold">Glosario sectorial</h1>
      <input className="input" type="search" aria-label="Buscar término" placeholder="Buscar término" value={q} onChange={e => setQ(e.target.value)} />
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {r.map(g => <article key={g[0]} className="card"><h3 className="font-semibold">{g[0]}</h3><p className="text-sm text-slate-600">{g[1]}</p></article>)}
        {!r.length && <p>No hay coincidencias.</p>}
      </div>
    </section>
  )
}
