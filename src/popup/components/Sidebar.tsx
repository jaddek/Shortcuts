import type { CategoryDef } from '../../data/categories'

interface Props {
  categories: CategoryDef[]
  activeId: string
  onSelect: (id: string) => void
}

export default function Sidebar({ categories, activeId, onSelect }: Props) {
  return (
    <nav className="sidebar flex flex-col items-center py-3 px-1.5 gap-1 shrink-0">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`tab-btn${activeId === cat.id ? ' active' : ''}`}
          onClick={() => onSelect(cat.id)}
          title={cat.id}
        >
          <span className="icon">{cat.icon}</span>
        </button>
      ))}
    </nav>
  )
}
