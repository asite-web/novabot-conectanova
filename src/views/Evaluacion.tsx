import { useState } from 'react'
import type { Cargo } from '../types'
import { cargos } from '../data/cargosData'
import { cite, nm } from '../utils/text'

interface Q { f: string; c: Cargo; o: Cargo[] }
const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5)
/** Genera 8 preguntas a partir de las funciones documentadas de cada cargo. */
const crear = (): Q[] => shuffle(cargos).slice(0, 8).map(c => ({
  c, f: c.fn[Math.floor(Math.random() * c.fn.length)],
  o: shuffle([c, ...shuffle(cargos.filter(x => x !== c && x.c !== c.c)).slice(0, 3)]),
}))

export default function Evaluacion() {
  const [qs, setQs] = useState(crear)
  const [i, setI] = useState(0), [score, setScore] = useState(0)
  const [pick, setPick] = useState<number | null>(null)
  const reiniciar = () => { setQs(crear()); setI(0); setScore(0); setPick(null) }
  const avanzar = () => { setI(i + 1); setPick(null) }

  if (i >= qs.length) return (
    <section><h1 className="mb-4 text-3xl font-bold">Evaluación</h1>
      <div className="card"><h3 className="font-semibold">Resultado: {score} de {qs.length}</h3></div>
      <button className="btn mt-3" onClick={reiniciar}>Repetir con otras preguntas</button></section>
  )
  const q = qs[i]
  const elegir = (n: number) => { if (pick !== null) return; setPick(n); if (n === q.c.n) setScore(score + 1) }
  return (
    <section>
      <h1 className="mb-1 text-3xl font-bold">Evaluación</h1>
      <p className="mb-4 text-slate-600">Pregunta {i + 1} de {qs.length}, generada con las funciones documentadas de cada cargo.</p>
      <div className="card">
        <h3 className="font-semibold">¿Qué cargo tiene documentada esta función?</h3>
        <p className="my-2">«{q.f}»</p>
        {q.o.map(c => {
          const estado = pick === null ? '' : c.n === q.c.n ? 'border-green-600' : c.n === pick ? 'border-red-600' : ''
          return <button key={c.n} disabled={pick !== null} onClick={() => elegir(c.n)} className={`btn-alt mt-2 block w-full text-left ${estado}`}>{nm(c)}</button>
        })}
        {pick !== null && (
          <div aria-live="polite" className="mt-3 text-sm">
            {pick === q.c.n ? 'Correcto.' : 'No es esa.'} Corresponde a {nm(q.c)}. <small className="block text-slate-500">Fuente: {cite(q.c)}</small>
            <button className="btn mt-2" autoFocus onClick={avanzar}>Siguiente</button>
          </div>
        )}
      </div>
    </section>
  )
}
