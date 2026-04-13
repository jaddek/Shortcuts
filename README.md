# Search Changer

Chrome extension (MV3) for quickly switching the default search engine and accessing categorized web resources from the popup or new tab page.

## Features

- Switch between 20+ search engines (Google, Bing, DuckDuckGo, Yandex, Brave, Perplexity, etc.)
- Quick-access tabs: Browsers, Messengers, Marketplaces, Weather, Government sites
- Country-aware marketplaces and government sites
- Light / dark theme
- Replaces the new tab page with the search panel

## Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Vite** + **@crxjs/vite-plugin**
- **Manifest V3**

## Getting Started

```bash
npm install
npm run dev
```

Then open `chrome://extensions`, enable **Developer mode**, and click **Load unpacked** — select the `dist/` folder.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev build with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run lint` | ESLint |
| `npm run test` | Vitest unit tests |

## Project Structure

```
src/
├── background/   # Service worker (MV3)
├── content/      # Content scripts
├── popup/        # Extension popup UI
├── newtab/       # New tab page
├── data/         # Static data (engines, categories, sites)
├── hooks/        # React hooks (useStorage, useCountry)
├── lib/          # Utilities (i18n)
└── types/        # Shared TypeScript types
```

## Permissions

| Permission | Reason |
|------------|--------|
| `storage` | Persist selected engine and theme |
| `tabs` | Navigate tabs on engine switch |
| `host_permissions` | Intercept search queries on supported engines |
