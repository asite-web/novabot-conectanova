import { useState } from 'react'
import { casos, colaboracion } from '../data/casosData'

export default function Casos({ onAsk }: { onAsk: (q: string) => void }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section>
      <h1 className="mb-1 text-3xl font-bold">Casos prácticos</h1>
      <p className="mb-4 max-w-prose text-slate-600">Situaciones de la sección de pruebas del documento. Cada una muestra el criterio de respuesta correcta.</p>
      <div className="grid gap-3 md:grid-cols-2">
        {casos.map((c, i) => (
          <article key={c[0]} className="card">
            <span className="tag">{c[0]}</span>
            <h3 className="font-semibold">{c[1]}</h3>
            {open === i && <p className="mt-2 text-sm text-slate-600">{c[2]}</p>}
            <div className="mt-3 flex flex-wrap gap-2">
              <button className="btn-alt" onClick={() => setOpen(open === i ? null : i)}>{open === i ? 'Ocultar criterio' : 'Ver criterio'}</button>
              <button className="btn" onClick={() => onAsk(c[1])}>Preguntar a VanguardIA</button>
            </div>
          </article>
        ))}
      </div>
      <h2 className="mb-2 mt-6 text-xl font-semibold">Mapa de colaboración</h2>
      <div className="grid gap-3 md:grid-cols-2">{colaboracion.map(l => <div key={l} className="card text-sm">{l}</div>)}</div>
    </section>
  )
}
