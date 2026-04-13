import type { SearchItem, EngineId } from '../../types'
import { t } from '../../lib/i18n'
import FaviconImg from './FaviconImg'

interface Props {
  items: SearchItem[]
  selected: EngineId
  onSelect: (engine: EngineId, name: string, url: string) => void
}

export default function SearchGrid({ items, selected, onSelect }: Props) {
  return (
    <>
      {items.map((item) => (
        <label key={item.value} style={{ display: 'contents' }}>
          <input
            type="radio"
            name="engine"
            value={item.value}
            checked={selected === item.value}
            onChange={() => onSelect(item.value, item.name, item.url)}
            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
          />
          <div className={`card${selected === item.value ? ' selected' : ''}`}>
            <FaviconImg domain={item.domain} />
            <span>{item.name}</span>
          </div>
        </label>
      ))}
      {selected && (
        <div style={{ gridColumn: '1 / -1', marginTop: 4 }}>
          <button
            className="visit-btn"
            style={{ visibility: 'visible' }}
            onClick={() => {
              const item = items.find((i) => i.value === selected)
              if (item) chrome.tabs.create({ url: item.url })
            }}
          >
            {t('visitBtn')} {items.find((i) => i.value === selected)?.name} →
          </button>
        </div>
      )}
    </>
  )
}
