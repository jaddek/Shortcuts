export type EngineId =
  | 'google' | 'bing' | 'yahoo' | 'duckduckgo' | 'yandex' | 'baidu'
  | 'ask' | 'ecosia' | 'brave' | 'qwant' | 'startpage' | 'wolframalpha'
  | 'naver' | 'sogou' | 'perplexity' | 'aol' | 'swisscows' | 'mojeek'
  | 'seznam' | 'metager'

export type CountryCode =
  | 'RU' | 'US' | 'GB' | 'DE' | 'FR' | 'UA' | 'CN' | 'JP' | 'KR'
  | 'BR' | 'IT' | 'ES' | 'PL' | 'NL' | 'TR' | 'NZ' | 'AU' | 'IN'
  | 'CA' | 'AR' | 'SE' | 'NO' | 'DK' | 'FI' | 'PT' | 'CZ' | 'SK'
  | 'HU' | 'RO' | 'GR' | 'IL' | 'SA' | 'AE' | 'KZ' | 'ID' | 'IE'
  | 'AT' | 'CH' | 'BE' | 'MX'

export interface SiteItem {
  name: string
  domain: string
  url: string
}

export interface CountrySites {
  flag: string
  name: string
  items: SiteItem[]
}

export type CategoryType = 'select' | 'link'

export interface SearchItem {
  value: EngineId
  name: string
  domain: string
  url: string
}

export interface Category {
  id: string
  icon: string
  labelKey: string
  type: CategoryType
  items?: SiteItem[] | SearchItem[]
  getItems?: (country: CountryCode) => SiteItem[]
}

export type Theme = 'light' | 'dark' | 'contrast'

export interface StorageData {
  engine: EngineId
  theme: Theme
  large: boolean
  country?: CountryCode
  enabledCats?: string[]
}
