async function connectDemo() {
  const status = document.getElementById('demo-status');
  const launch = document.getElementById('launch-demo');
  let base;
  try {
    base = new URL(window.SHOT_TRACKER_URL || window.location.origin);
    if (!['https:', 'http:'].includes(base.protocol)) throw new Error('Invalid URL');
    const response = await fetch(new URL('/health', base), { signal: AbortSignal.timeout(15000) });
    const health = await response.json();
    if (!response.ok || health.service !== 'basketball-shot-tracker') throw new Error('Unavailable');
    launch.href = new URL('/tracker', base).href;
    launch.hidden = false;
    status.textContent = 'Ready to analyse a video. Uploads are limited to 100 MB and two minutes. Your results are available only in your browser session.';
  } catch (error) {
    status.textContent = 'The interactive demo is currently offline. You can still explore the project and its source code.';
  }
}
connectDemo();
