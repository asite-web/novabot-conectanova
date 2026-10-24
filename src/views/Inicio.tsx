import { useState } from 'react'
import CardCargo from '../components/CardCargo'
import { cargos } from '../data/cargosData'
import { glosario } from '../data/glosarioData'
import { faq } from '../data/faqData'
import { casos } from '../data/casosData'
import { find } from '../utils/text'

export const AVISO = 'Vanguardia Telecom S.A.S. es una empresa ficticia. La base es una referencia general del sector: no es un organigrama oficial y debe validarse con la empresa real. Salarios, requisitos académicos y líneas de reporte no están especificados.'

export default function Inicio({ onOpen, onChat }: { onOpen: (n: number) => void; onChat: () => void }) {
  const [q, setQ] = useState('')
  const res = q ? find(q) : cargos.slice(0, 6)
  const stats: [number, string][] = [[cargos.length, 'Cargos'], [glosario.length, 'Términos del glosario'], [faq.length, 'Preguntas frecuentes'], [casos.length, 'Casos de prueba']]
  return (
    <section>
      <div className="mb-6 rounded-2xl bg-navy p-6 text-slate-200 md:p-10" style={{ backgroundImage: 'radial-gradient(circle at 90% 20%, rgba(14,165,233,.35), transparent 40%)' }}>
        <h1 className="mb-2 text-3xl font-bold leading-tight text-white md:text-4xl">Conectando el presente, construyendo la red del mañana.</h1>
        <p className="mb-4 max-w-prose">VanguardIA explica los {cargos.length} cargos de Vanguardia Telecom S.A.S. con base en la documentación cargada y cita la ficha de donde sale cada respuesta.</p>
        <button className="btn" onClick={onChat}>Preguntar a VanguardIA</button>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map(([n, l]) => <div key={l} className="card"><b className="text-2xl text-electric">{n}</b><p className="text-sm text-slate-600">{l} en la base</p></div>)}
      </div>
      <h2 className="mb-2 mt-6 text-xl font-semibold">Buscar en la base</h2>
      <input className="input" type="search" aria-label="Buscar cargo" placeholder="Ej.: espectro, NOC, churn, licitaciones" value={q} onChange={e => setQ(e.target.value)} />
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {res.map(c => <CardCargo key={c.n} cargo={c} onOpen={onOpen} />)}
        {!res.length && <p>No hay coincidencias.</p>}
      </div>
      <p className="note">{AVISO}</p>
    </section>
  )
}
