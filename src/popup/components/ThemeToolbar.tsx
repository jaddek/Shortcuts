import type { Theme } from '../../types'

interface Props {
  theme: Theme
  onTheme: (t: Theme) => void
}

const COLOR_THEMES: { id: Theme; icon: string }[] = [
  { id: 'light',    icon: '☀' },
  { id: 'dark',     icon: '☾' },
  { id: 'contrast', icon: '◑' },
]

export default function ThemeToolbar({ theme, onTheme }: Props) {
  return (
    <div className="toolbar-strip">
      {COLOR_THEMES.map(({ id, icon }) => (
        <button
          key={id}
          className={`theme-btn${theme === id ? ' active' : ''}`}
          onClick={() => onTheme(id)}
        >
          {icon}
        </button>
      ))}
    </div>
  )
}
