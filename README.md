# Tab open feedback

Browser extension that plays a visual animation when you middle-click and ctrl+click on links. Coz sometimes it doesn't open coz of misclicks or smth and I don't notice.

## Installation

### Chromium based
1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" → select this folder

### Firefox based (temporary)
1. In `manifest.json`, replace `"service_worker": "background.js",`(line 20) with `"scripts": ["background.js"],`
2. Open `about:debugging`
3. Click "This Firefox" → "Load Temporary Add-on"
4. Select `manifest.json`

### Firefox based (permanent)
Do step 1 from the temporary installation, then:  
Go to `about:config`, set `xpinstall.signatures.required` to `false`. Then go to `about:addons` → click the gear icon → "Install Add-on From File..." → select the zip file from the `dist` folder after running `pnpm build:firefox`.  

OR  

Install from [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/tab-open_feedback/)  

## Development

```bash
pnpm install
pnpm build # build for chromium based
pnpm build:firefox # build for firefox based
pnpm lint # check manifest.json
```
