import { useEffect, useState } from 'react'
import { CATEGORIES } from '../data/categories'
import { GOV_SITES } from '../data/govSites'
import { MARKET_SITES } from '../data/marketSites'
import { t } from '../lib/i18n'
import { useStorage } from '../hooks/useStorage'
import { useCountry } from '../hooks/useCountry'
import type { EngineId, Theme, SiteItem, SearchItem } from '../types'
import Sidebar from './components/Sidebar'
import SearchGrid from './components/SearchGrid'
import LinkGrid from './components/LinkGrid'
import ThemeToolbar from './components/ThemeToolbar'

export default function App() {
  const country = useCountry()
  const [engine, setEngine] = useStorage<EngineId>('engine', 'duckduckgo')
  const [theme, setTheme] = useStorage<Theme>('theme', 'light')
  const [activeId, setActiveId] = useState('search')
  const [savedVisible, setSavedVisible] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') delete root.dataset['theme']
    else root.dataset['theme'] = theme
  }, [theme])

  const handleEngineSelect = async (id: EngineId) => {
    await setEngine(id)
    setSavedVisible(true)
    setTimeout(() => setSavedVisible(false), 1500)
  }

  const activeCat = CATEGORIES.find((c) => c.id === activeId)!

  const getTitle = () => {
    if (activeId === 'gov') {
      const data = GOV_SITES[country] ?? GOV_SITES['US']!
      return `${data.flag} ${data.name}`
    }
    if (activeId === 'marketplaces') {
      const data = MARKET_SITES[country] ?? MARKET_SITES['US']!
      return `${data.flag} ${data.name}`
    }
    return t(activeCat.labelKey as Parameters<typeof t>[0])
  }

  const getItems = (): SiteItem[] | SearchItem[] => {
    if (activeCat.getItems) return activeCat.getItems(country)
    return (activeCat.items ?? []) as SiteItem[] | SearchItem[]
  }

  return (
    <div className="flex antialiased overflow-hidden select-none">
      <Sidebar categories={CATEGORIES} activeId={activeId} onSelect={setActiveId} />

      <main className="content flex flex-col overflow-hidden">
        <header className="px-4 pt-4 pb-3 shrink-0">
          <h3 className="section-title">{getTitle()}</h3>
        </header>

        <div className="item-grid grid grid-cols-2 gap-2 overflow-y-auto px-4 pb-1">
          {activeCat.type === 'select' ? (
            <SearchGrid
              items={getItems() as SearchItem[]}
              selected={engine}
              onSelect={handleEngineSelect}
            />
          ) : (
            <LinkGrid items={getItems() as SiteItem[]} />
          )}
        </div>

        <div className="px-4 pt-2 pb-1 shrink-0 min-h-[32px]">
          {savedVisible && (
            <div className="saved">{t('saved')}</div>
          )}
        </div>

        <ThemeToolbar theme={theme} onTheme={setTheme} />
      </main>
    </div>
  )
}
