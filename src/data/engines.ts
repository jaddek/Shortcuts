import type { EngineId } from '../types'

export const ENGINES: Record<EngineId, (q: string) => string> = {
  google:       (q) => `https://www.google.com/search?q=${q}`,
  bing:         (q) => `https://www.bing.com/search?q=${q}`,
  yahoo:        (q) => `https://search.yahoo.com/search?p=${q}`,
  duckduckgo:   (q) => `https://duckduckgo.com/?q=${q}`,
  yandex:       (q) => `https://yandex.ru/search/?text=${q}`,
  baidu:        (q) => `https://www.baidu.com/s?wd=${q}`,
  ask:          (q) => `https://www.ask.com/web?q=${q}`,
  ecosia:       (q) => `https://www.ecosia.org/search?q=${q}`,
  brave:        (q) => `https://search.brave.com/search?q=${q}`,
  qwant:        (q) => `https://www.qwant.com/?q=${q}`,
  startpage:    (q) => `https://www.startpage.com/search?q=${q}`,
  wolframalpha: (q) => `https://www.wolframalpha.com/input?i=${q}`,
  naver:        (q) => `https://search.naver.com/search.naver?query=${q}`,
  sogou:        (q) => `https://www.sogou.com/web?query=${q}`,
  perplexity:   (q) => `https://www.perplexity.ai/search?q=${q}`,
  aol:          (q) => `https://search.aol.com/aol/search?q=${q}`,
  swisscows:    (q) => `https://swisscows.com/web?query=${q}`,
  mojeek:       (q) => `https://www.mojeek.com/search?q=${q}`,
  seznam:       (q) => `https://search.seznam.cz/?q=${q}`,
  metager:      (q) => `https://metager.org/meta/meta.ger3?eingabe=${q}`,
}
