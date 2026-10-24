import { useState } from 'react'
import CardCargo from '../components/CardCargo'
import { cargos, categorias } from '../data/cargosData'
import { byN, cite, nm, norm } from '../utils/text'

const Sec = ({ h, x }: { h: string; x: string | string[] }) => (
  <>
    <h2 className="mb-1 mt-5 text-lg font-semibold">{h}</h2>
    {Array.isArray(x) ? <ul className="list-disc space-y-1 pl-5">{x.map(i => <li key={i}>{i}</li>)}</ul> : <p>{x}</p>}
  </>
)

interface Props { selected: number | null; onSelect: (n: number | null) => void; onAsk: (q: string) => void }

export default function Cargos({ selected, onSelect, onAsk }: Props) {
  const [txt, setTxt] = useState('')
  const [cat, setCat] = useState('')
  const c = selected ? byN(selected) : null
  if (c) return (
    <article>
      <button className="btn-alt" onClick={() => onSelect(null)}>Volver a cargos</button>
      <p className="mt-4"><span className="tag">{categorias[c.c]}</span></p>
      <h1 className="text-3xl font-bold">{c.t}</h1>
      <p className="mb-2 max-w-prose text-slate-600">{c.d}</p>
      <Sec h="Funciones documentadas" x={c.fn} />
      <Sec h="Conocimientos y competencias (orientativo)" x={c.k} />
      <Sec h="Áreas con las que suele interactuar" x={c.a} />
      <Sec h="Indicadores que podrían utilizarse" x={c.i} />
      <Sec h="Límites y precauciones" x={c.l} />
      <Sec h="Preguntas que el agente debe resolver" x={c.q} />
      <p className="note">Fuente: {cite(c)}. Competencias, áreas e indicadores son referencias generales del sector, no requisitos de una empresa.</p>
      <button className="btn" onClick={() => onAsk(`¿Qué hace ${nm(c)}?`)}>Preguntar por este cargo</button>
    </article>
  )
  const lista = cargos.filter(x => (cat === '' || x.c === +cat) && norm(x.t + x.d + x.fn.join(' ')).includes(norm(txt)))
  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold">Explorador de cargos</h1>
      <div className="mb-4 flex flex-wrap gap-3">
        <input className="input flex-1" type="search" aria-label="Filtrar por texto" placeholder="Filtrar por texto" value={txt} onChange={e => setTxt(e.target.value)} />
        <select className="input flex-1" aria-label="Categoría" value={cat} onChange={e => setCat(e.target.value)}>
          <option value="">Todas las categorías</option>
          {categorias.map((n, i) => <option key={n} value={i}>{n}</option>)}
        </select>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map(x => <CardCargo key={x.n} cargo={x} onOpen={onSelect} />)}
        {!lista.length && <p>No hay coincidencias.</p>}
      </div>
    </section>
  )
}
