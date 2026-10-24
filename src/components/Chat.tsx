import { useEffect, useRef, useState } from 'react'
import { Copy, Send, Trash2 } from 'lucide-react'
import type { Cargo } from '../types'
import { reply } from '../services/rag'

interface Msg { role: 'u' | 'b'; text: string; source?: string }
const SUGERENCIAS = ['¿Quién define la estrategia general?', 'Diferencia entre CTO y CIO', '¿El CIO administra las antenas?', '¿Cuánto gana un Director de Redes?', '¿Y sus indicadores?']
interface Props { initial: string | null; onConsumed: () => void }

export default function Chat({ initial, onConsumed }: Props) {
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const last = useRef<Cargo | null>(null)
  const end = useRef<HTMLDivElement>(null)

  const ask = (q: string) => {
    q = q.trim(); if (!q) return
    setMsgs(m => [...m, { role: 'u', text: q }]); setInput(''); setTyping(true)
    setTimeout(() => {
      const r = reply(q, last.current); last.current = r.cargo
      setMsgs(m => [...m, { role: 'b', text: r.body, source: r.source }]); setTyping(false)
    }, 350)
  }
  useEffect(() => { if (initial) { ask(initial); onConsumed() } }, [initial])
  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }) }, [msgs, typing])

  return (
    <section>
      <h1 className="text-3xl font-bold">Chat con VanguardIA</h1>
      <p className="mb-4 max-w-prose text-slate-600">Modo demostración local: recupera fragmentos de la base documental sin conectarse a ningún modelo externo. Recuerda el último cargo consultado.</p>
      <div aria-live="polite" className="flex h-[50vh] flex-col gap-3 overflow-auto rounded-xl border border-slate-200 bg-white p-3">
        {msgs.map((m, i) => (
          <div key={i} className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3 py-2 text-sm ${m.role === 'u' ? 'self-end bg-electric text-white' : 'self-start border border-slate-200 bg-surface'}`}>
            {m.text}
            {m.source && <small className="mt-2 block text-slate-500">Fuente: {m.source}</small>}
            {m.role === 'b' && <button onClick={() => navigator.clipboard?.writeText(m.text)} className="mt-1 flex items-center gap-1 text-xs text-electric"><Copy size={12} /> Copiar</button>}
          </div>
        ))}
        {typing && <div className="self-start rounded-xl border border-slate-200 bg-surface px-3 py-2 text-sm text-slate-500">Escribiendo…</div>}
        <div ref={end} />
      </div>
      <div className="my-3 flex flex-wrap gap-2">
        {SUGERENCIAS.map(s => <button key={s} onClick={() => ask(s)} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs hover:border-cyan">{s}</button>)}
      </div>
      <div className="flex gap-2">
        <input className="input" aria-label="Tu pregunta" placeholder="Escribe tu pregunta" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && ask(input)} />
        <button className="btn" onClick={() => ask(input)} aria-label="Enviar"><Send size={16} /></button>
        <button className="btn-alt" onClick={() => { setMsgs([]); last.current = null }} aria-label="Limpiar chat"><Trash2 size={16} /></button>
      </div>
    </section>
  )
}
