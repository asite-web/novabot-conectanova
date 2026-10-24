import { useState } from 'react'
import type { ViewId } from './types'
import Sidebar from './components/Sidebar'
import Inicio from './views/Inicio'
import Chat from './components/Chat'
import Cargos from './views/Cargos'
import Comparador from './views/Comparador'
import Casos from './views/Casos'
import Glosario from './views/Glosario'
import Faq from './views/Faq'
import Evaluacion from './views/Evaluacion'

export default function App() {
  const [view, setView] = useState<ViewId>('inicio')
  const [cargoSel, setCargoSel] = useState<number | null>(null)
  const [pregunta, setPregunta] = useState<string | null>(null)

  const ir = (v: ViewId) => { setView(v); setCargoSel(null) }
  const abrirCargo = (n: number) => { setCargoSel(n); setView('cargos') }
  const preguntar = (q: string) => { setPregunta(q); setView('chat') }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar view={view} onChange={ir} />
      <main className="min-w-0 max-w-6xl flex-1 p-4 md:p-8" tabIndex={-1}>
        {view === 'inicio' && <Inicio onOpen={abrirCargo} onChat={() => ir('chat')} />}
        {view === 'chat' && <Chat initial={pregunta} onConsumed={() => setPregunta(null)} />}
        {view === 'cargos' && <Cargos selected={cargoSel} onSelect={setCargoSel} onAsk={preguntar} />}
        {view === 'comparar' && <Comparador />}
        {view === 'casos' && <Casos onAsk={preguntar} />}
        {view === 'glosario' && <Glosario />}
        {view === 'faq' && <Faq onOpen={abrirCargo} />}
        {view === 'quiz' && <Evaluacion />}
      </main>
    </div>
  )
}
