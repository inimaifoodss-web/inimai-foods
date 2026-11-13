// Inimai Bakes – "install as app" support (Android button + iPhone steps).
(function () {
  var TXT = {
    ta: {
      h: 'இனிமை பேக்ஸ் App', p: 'போன் Home screen-ல் சேர்த்தால், ஒரே தொடுதலில் ஆர்டர் செய்யலாம்.',
      btn: 'App-ஆக install செய்', close: 'மூடு', done: 'நன்றி! App உங்கள் Home screen-ல் சேர்க்கப்பட்டது.',
      ios: '<b>iPhone-ல் சேர்க்க:</b><ol><li>Safari-ல் இந்த பக்கத்தைத் திறக்கவும்.</li><li>கீழே உள்ள <b>Share</b> பட்டனை (□↑) அழுத்தவும்.</li><li><b>"Add to Home Screen"</b> தேர்வு செய்து <b>Add</b> அழுத்தவும்.</li></ol>',
      other: '<b>App-ஆக சேர்க்க:</b><ol><li>இந்த பக்கத்தை <b>Chrome</b>-ல் திறக்கவும் (WhatsApp-ல் இருந்தால் ⋮ → "Open in Chrome").</li><li>மேலே வலது பக்க <b>⋮</b> மெனுவை அழுத்தவும்.</li><li><b>"Install app"</b> அல்லது <b>"Add to Home screen"</b> அழுத்தவும்.</li></ol>'
    },
    en: {
      h: 'Inimai Bakes App', p: 'Add it to your phone’s Home screen and order in one tap.',
      btn: 'Install as app', close: 'Close', done: 'Thank you! The app is now on your Home screen.',
      ios: '<b>To add on iPhone:</b><ol><li>Open this page in Safari.</li><li>Tap the <b>Share</b> button (□↑) at the bottom.</li><li>Choose <b>"Add to Home Screen"</b>, then tap <b>Add</b>.</li></ol>',
      other: '<b>To add as an app:</b><ol><li>Open this page in <b>Chrome</b> (in WhatsApp: ⋮ → "Open in Chrome").</li><li>Tap the <b>⋮</b> menu at the top right.</li><li>Tap <b>"Install app"</b> or <b>"Add to Home screen"</b>.</li></ol>'
    }
  };
  var KEY = 'inimai_app_hide';
  var deferred = null, installed = false;
  var ua = navigator.userAgent || '';
  var isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  function standalone() {
    return (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  }
  function L() { return TXT[document.documentElement.lang === 'en' ? 'en' : 'ta']; }
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }

  function render() {
    var t = L();
    document.querySelectorAll('.appcard').forEach(function (card) {
      var dismissible = card.hasAttribute('data-dismiss');
      var hidden = standalone() || (dismissible && !installed && Number(get(KEY) || 0) > Date.now());
      card.hidden = hidden;
      if (hidden) return;
      card.querySelector('.appH').textContent = t.h;
      card.querySelector('.appP').textContent = installed ? t.done : t.p;
      var b = card.querySelector('.appBtn');
      b.textContent = t.btn; b.hidden = installed;
      var x = card.querySelector('.appX'); if (x) { x.hidden = !dismissible; x.setAttribute('aria-label', t.close); }
      var help = card.querySelector('.appHelp');
      if (!help.hidden) help.innerHTML = isIOS ? t.ios : t.other;
    });
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.appBtn, .appX');
    if (!b) return;
    var card = b.closest('.appcard');
    if (b.classList.contains('appX')) { set(KEY, String(Date.now() + 14 * 864e5)); card.hidden = true; return; }
    if (deferred) {
      deferred.prompt();
      deferred.userChoice.then(function () { deferred = null; });
      return;
    }
    var help = card.querySelector('.appHelp');
    help.hidden = !help.hidden;
    render();
  });

  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; render(); });
  window.addEventListener('appinstalled', function () { installed = true; deferred = null; render(); });
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  render();
})();
