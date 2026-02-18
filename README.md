# Freedium Redirector

A Chrome Extension that detects Medium paywalls and offers a seamless redirect to [Freedium](https://freedium-mirror.cfd/) for reading.

## Features

- **Paywall Detection**: Automatically detects when a Medium article is locked behind a paywall.
- **Unobtrusive UI**: Shows a clean, non-intrusive banner at the bottom of the screen.
- **One-Click Redirect**: Instantly opens the current article in Freedium.
- **Broad Domain Support**: Works with `medium.com`, `*.medium.com`, and custom hosts like `medium.example.com`.
- **Privacy Focused**: Injected on all pages due Chrome match limitations, but logic only runs on hosts containing `medium`.

## Installation

1.  **Download the Code**: Clone this repository or download the ZIP.
    ```bash
    git clone https://github.com/Cr0wtl3r/freedium-redirector.git
    ```
2.  **Open Chrome Extensions**:
    - Navigate to `chrome://extensions/` in your browser.
3.  **Enable Developer Mode**:
    - Toggle the "Developer mode" switch in the top right corner.
4.  **Load Unpacked**:
    - Click the "Load unpacked" button.
    - Select the folder containing this extension's files (where `manifest.json` is located).

## Usage

1.  Browse Medium as usual.
2.  When you encounter a "Member-only story" or paywalled content, a banner will appear in the bottom right corner.
3.  Click **"Read on Freedium"** to unlock the article via Freedium.

## Permissions Note

Chrome does not allow wildcard TLD match patterns like `*://*.medium.*/*` in `content_scripts.matches`.
To support Medium custom domains (for example, `medium.verylazytech.com`), the extension uses `*://*/*` for script injection and immediately exits on non-Medium hosts.
Because of that, Chrome shows the permission as access to all sites.

## Credits

- Redirects to [Freedium](https://codeberg.org/Freedium-cfd/web) - A free Medium proxy.

## License

MIT
