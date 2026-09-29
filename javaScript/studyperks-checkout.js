(function () {
  'use strict';

  const target = document.getElementById('studyperks-checkout');
  const status = document.getElementById('studyperks-checkout-status');
  if (!target || !status) return;

  const clientId = 'sarahwoods.xyz';
  const approvedOrigin = 'https://www.sarahwoods.xyz';
  const workerUrl = 'https://lucky-night-e415sarahwoods-studyperks-checkout.sarahwoods06.workers.dev/checkout';
  let pending = false;

  async function checkout(result) {
    if (pending) return;
    if (!result || result.eligible !== true || typeof result.proof !== 'string' || !result.proof.trim()) {
      status.textContent = 'An active StudyPerks pass is required for this test checkout.';
      return;
    }

    pending = true;
    status.textContent = 'Confirming your offer and opening Stripe test checkout...';
    try {
      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'omit',
        cache: 'no-store',
        signal: AbortSignal.timeout(30000),
        body: JSON.stringify({ clientId, origin: window.location.origin, proof: result.proof })
      });
      let data;
      try {
        data = await response.json();
      } catch (_) {
        throw new Error('The checkout service returned an unreadable response.');
      }
      if (!response.ok) {
        throw new Error(typeof data.error === 'string'
          ? data.error
          : 'The checkout service returned HTTP ' + response.status + '.');
      }
      if (!data.url) throw new Error('The checkout service did not return a payment link.');
      // The Worker must return { url } only after server-side offer validation.
      const url = new URL(data.url);
      if (url.origin !== 'https://checkout.stripe.com' || url.username || url.password) {
        throw new Error('Unexpected checkout destination');
      }
      window.location.assign(url.href);
    } catch (error) {
      const message = error.name === 'TimeoutError'
        ? 'The checkout service took too long to respond.'
        : error instanceof TypeError
          ? 'Could not reach the checkout service. Check your connection or the Worker CORS settings.'
          : error.message || 'An unexpected error occurred.';
      status.textContent = 'Checkout could not open: ' + message;
    } finally {
      pending = false;
    }
  }

  if (window.location.origin !== approvedOrigin) {
    status.textContent = 'Open https://www.sarahwoods.xyz to use this test checkout.';
    return;
  }

  try {
    const widget = window.StudyPerks.mount('#studyperks-checkout', {
      clientId,
      label: 'Verify & open checkout',
      onComplete: checkout,
      onError() {
        status.textContent = 'Verification was not completed. Please try again.';
      }
    });
    const mark = widget?.root?.querySelector('.sp-mark');
    if (mark) {
      const logo = document.createElement('img');
      logo.src = '/images/logo/studyperks-logo-black-lime.png';
      logo.alt = '';
      logo.width = 27;
      logo.height = 27;
      logo.style.objectFit = 'contain';
      mark.replaceChildren(logo);
      mark.style.background = 'transparent';
    }
    status.textContent = '';
  } catch (error) {
    status.textContent = 'StudyPerks verification is currently unavailable. Please try again later.';
  }
})();
