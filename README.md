# Freedium Redirector

A Chrome Extension that detects Medium paywalls and offers a seamless redirect to [Freedium](https://freedium-mirror.cfd/) for reading.

## Features

- **Paywall Detection**: Automatically detects when a Medium article is locked behind a paywall.
- **Unobtrusive UI**: Shows a clean, non-intrusive banner at the bottom of the screen.
- **One-Click Redirect**: Instantly opens the current article in Freedium.
- **Privacy Focused**: Only runs on Medium domains.

## Installation

1.  **Download the Code**: Clone this repository or download the ZIP.
    ```bash
    git clone https://github.com/yourusername/freedium-redirector.git
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

## Credits

- Redirects to [Freedium](https://codeberg.org/Freedium-cfd/web) - A free Medium proxy.

## License

MIT
