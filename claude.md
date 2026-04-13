# Project: Chrome Extension (MySmartTool)

This guide helps Claude understand the architecture and development flow of this browser extension.

## Tech Stack & Architecture
- **Manifest Version:** MV3 (Manifest V3)
- **Framework:** React + Tailwind CSS
- **Bundler:** Vite (with @crxjs/vite-plugin)
- **Language:** TypeScript
- **Communication:** Standard `chrome.runtime.sendMessage` and `chrome.storage.local`

## Key Commands
- **Dev Mode:** `npm run dev` (Runs Vite with HMR for the extension)
- **Production Build:** `npm run build` (Outputs to `/dist`)
- **Linting:** `npm run lint`
- **Testing:** `npm run test` (Vitest for logic)

## Code Style & Rules
- **Modules:** Use ES Modules. Avoid CommonJS.
- **UI:** Use Shadcn/UI components where possible.
- **State:** Use `chrome.storage.local` for persistence across popup and background.
- **Safety:** Never use `eval()` or `unsafe-inline` scripts (MV3 compliance).
- **Asynchronous:** Always use `async/await` instead of `.then()` callbacks.
- **Permissions:** If adding a feature that needs new permissions, remind the user to update `manifest.json`.

## Extension Structure
- `src/background/`: Service workers (no DOM access).
- `src/content/`: Scripts running in the context of web pages.
- `src/popup/`: The main UI when clicking the extension icon.
- `src/options/`: Extension settings page.

## Shortcuts for Claude
- `/new-content-script`: Create a new content script template and remind me to register it in `manifest.json`.
- `/check-permissions`: Review the code and check if we need to add new entries to `permissions` or `host_permissions`.
- `/debug-bridge`: Generate a message-passing template between the Popup and Background script.

## Crucial Reminders
- Content scripts cannot use all `chrome.*` APIs. Check compatibility.
- Always clean up event listeners to prevent memory leaks.
- Manifest V3 service workers are ephemeral; do not rely on global variables for long-term state.
