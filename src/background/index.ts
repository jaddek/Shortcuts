import { ENGINES } from '../data/engines'
import type { EngineId } from '../types'

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  if (!changeInfo.url) return

  const { engine = 'duckduckgo' } = await chrome.storage.local.get('engine') as { engine: EngineId }
  if (engine === 'google') return

  try {
    const url = new URL(changeInfo.url)
    if (url.hostname.endsWith('google.com') && url.pathname === '/search') {
      const q = url.searchParams.get('q')
      if (q) {
        await chrome.tabs.update(tabId, { url: ENGINES[engine](encodeURIComponent(q)) })
      }
    }
  } catch {
    // invalid URL — ignore
  }
})
