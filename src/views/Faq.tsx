import { useState } from 'react'
import { faq } from '../data/faqData'
import { byN, nm, norm } from '../utils/text'

/** Extrae los números de «Apartado(s) N y M» para enlazar con los cargos. */
const apartados = (s: string) => [...new Set((s.match(/Apartados? \d+(?: y \d+)?/g) ?? []).flatMap(m => (m.match(/\d+/g) ?? []).map(Number)))].filter(n => byN(n))

export default function Faq({ onOpen }: { onOpen: (n: number) => void }) {
  const [q, setQ] = useState('')
  const r = faq.filter(x => norm(x[0] + x[1]).includes(norm(q)))
  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold">Preguntas frecuentes</h1>
      <input className="input" type="search" aria-label="Buscar pregunta" placeholder="Buscar pregunta" value={q} onChange={e => setQ(e.target.value)} />
      <div className="mt-3 space-y-2">
        {r.map(x => (
          <details key={x[0]} className="card">
            <summary className="cursor-pointer font-semibold">{x[0]}</summary>
            <p className="mt-2 text-sm text-slate-600">{x[1]}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {apartados(x[1]).map(n => <button key={n} onClick={() => onOpen(n)} className="rounded-full border border-slate-300 px-3 py-1 text-xs hover:border-cyan">{nm(byN(n)!)}</button>)}
            </div>
          </details>
        ))}
        {!r.length && <p>No hay coincidencias.</p>}
      </div>
    </section>
  )
}
