import { BookOpen, ClipboardList, GitCompare, GraduationCap, HelpCircle, Home, MessageSquare, Users } from 'lucide-react'
import type { ViewId } from '../types'

const items: { id: ViewId; label: string; icon: typeof Home }[] = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'cargos', label: 'Cargos', icon: Users },
  { id: 'comparar', label: 'Comparador', icon: GitCompare },
  { id: 'casos', label: 'Casos', icon: ClipboardList },
  { id: 'glosario', label: 'Glosario', icon: BookOpen },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
  { id: 'quiz', label: 'Evaluación', icon: GraduationCap },
]

interface Props { view: ViewId; onChange: (v: ViewId) => void }

export default function Sidebar({ view, onChange }: Props) {
  return (
    <nav aria-label="Principal" className="sticky top-0 z-10 flex gap-1 overflow-x-auto bg-navy p-3 text-slate-200 md:h-screen md:w-60 md:shrink-0 md:flex-col md:p-4">
      <div className="hidden px-3 pb-4 md:block">
        <b className="block text-lg text-white">VanguardIA</b>
        <small className="text-slate-400">Vanguardia Telecom S.A.S.</small>
      </div>
      {items.map(({ id, label, icon: Icon }) => (
        <button key={id} onClick={() => onChange(id)} aria-current={view === id ? 'page' : undefined}
          className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium ${view === id ? 'bg-electric text-white' : 'hover:bg-white/10'}`}>
          <Icon size={16} aria-hidden /> {label}
        </button>
      ))}
    </nav>
  )
}
