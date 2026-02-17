console.log("Freedium Redirector: Content script loaded.");

function checkForPaywall() {
    const pageText = document.body.innerText;
    const isMemberOnlyText = /member-only story/i.test(pageText) || /upgrade to read/i.test(pageText);

    const contentTierMeta = document.querySelector('meta[property="article:content_tier"]');
    const isMetered = contentTierMeta && contentTierMeta.content === 'metered';

    const hasMemberStar = document.querySelector('svg[data-testid="header-member-star"]') ||
        document.querySelector('.star-15px');


    if (isMemberOnlyText || hasMemberStar) {
        console.log("Freedium Redirector: Paywall/Member content detected.");
        showBaner();
    }
}

function showBaner() {
    if (document.getElementById('freedium-redirect-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'freedium-redirect-banner';
    banner.innerHTML = `
    <div class="freedium-banner-content">
      <div class="freedium-banner-header">
        <h3 class="freedium-title">Paywall Detected</h3>
        <button class="freedium-close-btn" id="freedium-close">×</button>
      </div>
      <p class="freedium-message">
        This story seems to be member-only. Would you like to read it on Freedium?
      </p>
      <div class="freedium-actions">
        <button class="freedium-btn freedium-btn-secondary" id="freedium-dismiss">No thanks</button>
        <button class="freedium-btn freedium-btn-primary" id="freedium-go">Read on Freedium</button>
      </div>
    </div>
  `;

    document.body.appendChild(banner);

    document.getElementById('freedium-close').addEventListener('click', removeBanner);
    document.getElementById('freedium-dismiss').addEventListener('click', removeBanner);
    document.getElementById('freedium-go').addEventListener('click', redirectToFreedium);
}

function removeBanner() {
    const banner = document.getElementById('freedium-redirect-banner');
    if (banner) banner.remove();
}

function redirectToFreedium() {
    const currentUrl = window.location.href;
    const freediumUrl = `https://freedium-mirror.cfd/${currentUrl}`;
    window.location.href = freediumUrl;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkForPaywall);
} else {
    checkForPaywall();
}

let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        setTimeout(checkForPaywall, 1000);
    }
}).observe(document, { subtree: true, childList: true });
