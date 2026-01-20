# Tab open feedback

Browser extension that plays a visual animation when you middle-click and ctrl+click on links. Coz sometimes it doesn't open coz of misclicks or smth and I don't notice.

## Installation

### Chromium based
1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" → select this folder

### Firefox based (temporary)
1. Open `about:debugging`
2. Click "This Firefox" → "Load Temporary Add-on"
3. Select `manifest.json`

## Development

```bash
pnpm install
pnpm run build
pnpm run build:firefox
```
