import type { Cargo } from '../types'
import { categorias } from '../data/cargosData'
import { nm } from '../utils/text'

interface Props { cargo: Cargo; onOpen: (n: number) => void }

export default function CardCargo({ cargo, onOpen }: Props) {
  return (
    <button onClick={() => onOpen(cargo.n)} className="card text-left hover:border-cyan">
      <span className="tag">{categorias[cargo.c]}</span>
      <h3 className="font-semibold">{nm(cargo)}</h3>
      <p className="text-sm text-slate-600">{cargo.d}</p>
    </button>
  )
}
