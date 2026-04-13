import { useMemo } from 'react'
import { TZ_COUNTRY } from '../data/tzCountry'
import { GOV_SITES } from '../data/govSites'
import { MARKET_SITES } from '../data/marketSites'
import type { CountryCode } from '../types'

const LANG_DEFAULTS: Record<string, CountryCode> = {
  ru: 'RU', uk: 'UA', de: 'DE', fr: 'FR', it: 'IT',
  es: 'ES', pt: 'BR', pl: 'PL', nl: 'NL', tr: 'TR',
  zh: 'CN', ja: 'JP', ko: 'KR', hi: 'IN',
}

export function detectCountry(): CountryCode {
  const lang = navigator.language || ''
  const parts = lang.split('-')

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const cc = TZ_COUNTRY[tz] as CountryCode | undefined
    if (cc && (GOV_SITES[cc] || MARKET_SITES[cc])) return cc
  } catch { /* ignore */ }

  const locCC = parts.length >= 2 ? parts[1].toUpperCase() as CountryCode : undefined
  if (locCC && (GOV_SITES[locCC] || MARKET_SITES[locCC])) return locCC

  return LANG_DEFAULTS[parts[0]] ?? 'US'
}

export function useCountry(): CountryCode {
  return useMemo(() => detectCountry(), [])
}
