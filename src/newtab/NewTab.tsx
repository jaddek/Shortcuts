import { useState } from 'react'
import { ENGINES } from '../data/engines'
import { t } from '../lib/i18n'
import type { EngineId } from '../types'

export default function NewTab() {
  const [query, setQuery] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    const { engine = 'duckduckgo' } = await chrome.storage.local.get('engine') as { engine: EngineId }
    location.href = ENGINES[engine](encodeURIComponent(q))
  }

  return (
    <div style={{
      margin: 0,
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    }}>
      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        padding: 24,
        borderRadius: 16,
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        width: 500,
      }}>
        <input
          type="text"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('placeholder')}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: 16,
            border: '2px solid #e2e8f0',
            borderRadius: 10,
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color .15s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#6366f1')}
          onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
        />
      </form>
    </div>
  )
}
