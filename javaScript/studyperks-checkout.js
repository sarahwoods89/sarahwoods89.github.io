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
      if (!response.ok) throw new Error('Checkout request failed');
      const data = await response.json();
      // The Worker must return { url } only after server-side offer validation.
      const url = new URL(data.url);
      if (url.origin !== 'https://checkout.stripe.com' || url.username || url.password) {
        throw new Error('Unexpected checkout destination');
      }
      window.location.assign(url.href);
    } catch (error) {
      status.textContent = 'Test checkout could not be started. Please verify again to retry.';
    } finally {
      pending = false;
    }
  }

  if (window.location.origin !== approvedOrigin) {
    status.textContent = 'Open https://www.sarahwoods.xyz to use this test checkout.';
    return;
  }

  try {
    window.StudyPerks.mount('#studyperks-checkout', {
      clientId,
      label: 'Verify with StudyPerks — test checkout',
      onComplete: checkout,
      onError() {
        status.textContent = 'Verification was not completed. Please try again.';
      }
    });
    status.textContent = 'Stripe test mode. No real purchase will be made.';
  } catch (error) {
    status.textContent = 'StudyPerks verification is currently unavailable. Please try again later.';
  }
})();
