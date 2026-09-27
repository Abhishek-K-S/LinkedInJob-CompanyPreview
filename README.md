# LinkedIn Company Preview

A small Chrome extension that detects the company from the selected LinkedIn job and opens its LinkedIn company page in a separate popup window.

## How it works

1. Open LinkedIn Jobs.
2. Select a job.
3. The extension finds the company link.
4. It opens the company page in a small Chrome popup window.

## Project files

- `manifest.json` — extension configuration.
- `content.js` — finds the selected company's link on LinkedIn.
- `background.js` — creates, positions, and updates the popup window.
- `sidepanel.html` and `sidepanel.js` — optional side-panel UI.

## Load it in Chrome

This project is currently an unpacked extension, so it does not need to be published to the Chrome Web Store.

1. Put all project files in one folder.
2. Open Chrome and go to `chrome://extensions/`.
3. Turn on **Developer mode**.
4. Click **Load unpacked**.
5. Select the folder containing `manifest.json`.
6. Pin the extension from the puzzle-piece menu if needed.
7. Open [LinkedIn Jobs](https://www.linkedin.com/jobs/) and select a job.

After changing the code, return to `chrome://extensions/`, click **Reload** for this extension, and refresh the LinkedIn tab.

## Notes

- The extension needs access to LinkedIn Jobs pages.
- LinkedIn can change its page structure, so the selector in `content.js` may need updating later.
- The company page opens in a separate popup because LinkedIn does not allow its pages to be embedded in an iframe.
- Only load extension code that you trust.
