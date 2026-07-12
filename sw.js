<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Office Ops Manager</title>
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#1a3a8f">
  <link rel="icon" href="icons/icon-192.png">
  <link rel="apple-touch-icon" href="icons/icon-192.png">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Office Ops">
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{
      height:100dvh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.25rem;
      background:#fbf8f1;color:#1c2333;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;text-align:center;padding:2rem;
    }
    img{width:88px;height:88px;border-radius:20px}
    h1{font-size:1.25rem}
    p{color:#5c5f6c;font-size:.95rem;max-width:32ch}
    a.btn{
      margin-top:.5rem;display:inline-flex;align-items:center;justify-content:center;padding:.9rem 1.6rem;
      background:#1a3a8f;color:#fff;border-radius:999px;font-weight:700;text-decoration:none;font-size:.95rem;
    }
    .spinner{width:22px;height:22px;border:3px solid #d8dcec;border-top-color:#1a3a8f;border-radius:50%;animation:spin 0.8s linear infinite}
    @keyframes spin{to{transform:rotate(360deg)}}
  </style>
</head>
<body>
  <img src="icons/icon-192.png" alt="Office Ops Manager">
  <h1>Office Ops Manager</h1>
  <p>Opening the app — you may be asked to sign in with your @empowerpeople.in Google account.</p>
  <div class="spinner" aria-hidden="true"></div>
  <a class="btn" id="openLink" href="#">Open now</a>

  <script>
    // The deployed Apps Script Web app URL for the actual app.
    const APP_URL = 'https://script.google.com/a/macros/empowerpeople.in/s/AKfycbwIT_60Zwsu53Gzyr3HtVHMZHlmyz6sZIgZIZXNqXRFqxcYzAbWLRJuXCU0XLC7LE7i-Q/exec';

    document.getElementById('openLink').href = APP_URL;

    // Auto-redirect shortly after load. The visible button is a manual fallback
    // in case auto-redirect is blocked (some standalone/installed windows are
    // stricter about automatic navigation on first paint).
    setTimeout(() => { window.location.href = APP_URL; }, 600);

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
      });
    }
  </script>
</body>
</html>
