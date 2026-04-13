import type { SiteItem } from '../../types'
import FaviconImg from './FaviconImg'

interface Props { items: SiteItem[] }

export default function LinkGrid({ items }: Props) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.url}
          className="card"
          onClick={() => chrome.tabs.create({ url: item.url })}
        >
          <FaviconImg domain={item.domain} />
          <span>{item.name}</span>
        </div>
      ))}
    </>
  )
}
