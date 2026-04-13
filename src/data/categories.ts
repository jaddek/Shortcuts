import type { CountryCode, SiteItem, SearchItem } from '../types'
import { GOV_SITES } from './govSites'
import { MARKET_SITES } from './marketSites'

export interface CategoryDef {
  id: string
  icon: string
  labelKey: string
  type: 'select' | 'link'
  items?: SiteItem[] | SearchItem[]
  getItems?: (country: CountryCode) => SiteItem[]
}

export const CATEGORIES: CategoryDef[] = [
  {
    id: 'search', icon: '🔍', labelKey: 'catSearch', type: 'select',
    items: [
      { value: 'google',       name: 'Google',       domain: 'www.google.com',          url: 'https://www.google.com' },
      { value: 'bing',         name: 'Bing',          domain: 'www.bing.com',             url: 'https://www.bing.com' },
      { value: 'yahoo',        name: 'Yahoo',         domain: 'search.yahoo.com',         url: 'https://yahoo.com' },
      { value: 'duckduckgo',   name: 'DuckDuckGo',    domain: 'duckduckgo.com',           url: 'https://duckduckgo.com' },
      { value: 'yandex',       name: 'Яндекс',        domain: 'yandex.ru',                url: 'https://yandex.ru' },
      { value: 'baidu',        name: 'Baidu',         domain: 'www.baidu.com',            url: 'https://www.baidu.com' },
      { value: 'ask',          name: 'Ask',           domain: 'www.ask.com',              url: 'https://www.ask.com' },
      { value: 'ecosia',       name: 'Ecosia',        domain: 'www.ecosia.org',           url: 'https://www.ecosia.org' },
      { value: 'brave',        name: 'Brave Search',  domain: 'search.brave.com',         url: 'https://search.brave.com' },
      { value: 'qwant',        name: 'Qwant',         domain: 'www.qwant.com',            url: 'https://www.qwant.com' },
      { value: 'startpage',    name: 'Startpage',     domain: 'www.startpage.com',        url: 'https://www.startpage.com' },
      { value: 'wolframalpha', name: 'Wolfram',       domain: 'www.wolframalpha.com',     url: 'https://www.wolframalpha.com' },
      { value: 'naver',        name: 'Naver',         domain: 'search.naver.com',         url: 'https://naver.com' },
      { value: 'sogou',        name: 'Sogou',         domain: 'www.sogou.com',            url: 'https://www.sogou.com' },
      { value: 'perplexity',   name: 'Perplexity',    domain: 'www.perplexity.ai',        url: 'https://www.perplexity.ai' },
      { value: 'aol',          name: 'AOL',           domain: 'search.aol.com',           url: 'https://search.aol.com' },
      { value: 'swisscows',    name: 'Swisscows',     domain: 'swisscows.com',            url: 'https://swisscows.com' },
      { value: 'mojeek',       name: 'Mojeek',        domain: 'www.mojeek.com',           url: 'https://www.mojeek.com' },
      { value: 'seznam',       name: 'Seznam',        domain: 'search.seznam.cz',         url: 'https://search.seznam.cz' },
      { value: 'metager',      name: 'MetaGer',       domain: 'metager.org',              url: 'https://metager.org' },
    ] as SearchItem[],
  },
  {
    id: 'browsers', icon: '🌐', labelKey: 'catBrowsers', type: 'link',
    items: [
      { name: 'Chrome',  domain: 'google.com',      url: 'https://google.com/chrome' },
      { name: 'Firefox', domain: 'mozilla.org',     url: 'https://mozilla.org/firefox' },
      { name: 'Safari',  domain: 'apple.com',       url: 'https://apple.com/safari' },
      { name: 'Edge',    domain: 'microsoft.com',   url: 'https://microsoft.com/edge' },
      { name: 'Brave',   domain: 'brave.com',       url: 'https://brave.com' },
      { name: 'Opera',   domain: 'opera.com',       url: 'https://opera.com' },
      { name: 'Vivaldi', domain: 'vivaldi.com',     url: 'https://vivaldi.com' },
      { name: 'Tor',     domain: 'torproject.org',  url: 'https://torproject.org' },
      { name: 'Arc',     domain: 'arc.net',         url: 'https://arc.net' },
      { name: 'Zen',        domain: 'zen-browser.app', url: 'https://zen-browser.app' },
      { name: 'DuckDuckGo', domain: 'duckduckgo.com',  url: 'https://duckduckgo.com/app' },
    ],
  },
  {
    id: 'messengers', icon: '💬', labelKey: 'catMessengers', type: 'link',
    items: [
      { name: 'Telegram',  domain: 'telegram.org',  url: 'https://telegram.org' },
      { name: 'WhatsApp',  domain: 'whatsapp.com',  url: 'https://web.whatsapp.com' },
      { name: 'Signal',    domain: 'signal.org',    url: 'https://signal.org' },
      { name: 'Discord',   domain: 'discord.com',   url: 'https://discord.com' },
      { name: 'Slack',     domain: 'slack.com',     url: 'https://slack.com' },
      { name: 'Viber',     domain: 'viber.com',     url: 'https://viber.com' },
      { name: 'WeChat',    domain: 'wechat.com',    url: 'https://wechat.com' },
      { name: 'Line',      domain: 'line.me',       url: 'https://line.me' },
      { name: 'Skype',     domain: 'skype.com',     url: 'https://skype.com' },
      { name: 'Messenger', domain: 'messenger.com', url: 'https://messenger.com' },
    ],
  },
  {
    id: 'marketplaces', icon: '🛒', labelKey: 'catMarketplaces', type: 'link',
    getItems: (country) => (MARKET_SITES[country] ?? MARKET_SITES['US']!).items,
  },
  {
    id: 'gov', icon: '🏛️', labelKey: 'catGov', type: 'link',
    getItems: (country) => (GOV_SITES[country] ?? GOV_SITES['US']!).items,
  },
  {
    id: 'weather', icon: '🌤️', labelKey: 'catWeather', type: 'link',
    items: [
      { name: 'Weather.com',  domain: 'weather.com',        url: 'https://weather.com' },
      { name: 'AccuWeather',  domain: 'accuweather.com',    url: 'https://accuweather.com' },
      { name: 'Windy',        domain: 'windy.com',          url: 'https://windy.com' },
      { name: 'Yr.no',        domain: 'yr.no',              url: 'https://yr.no' },
      { name: 'Wunderground', domain: 'wunderground.com',   url: 'https://wunderground.com' },
      { name: 'OpenWeather',  domain: 'openweathermap.org', url: 'https://openweathermap.org' },
      { name: 'Ventusky',     domain: 'ventusky.com',       url: 'https://ventusky.com' },
      { name: 'Meteoblue',    domain: 'meteoblue.com',      url: 'https://meteoblue.com' },
    ],
  },
]
