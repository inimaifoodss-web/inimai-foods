// இனிமை பேக்ஹவுஸ் – Google Sheet இணைப்பு
// 1) பொருட்கள் & விலை Google Sheet-ன் "Products" tab-லிருந்து வரும் (இணையம் இல்லையெனில் கடைசியாக வந்த பட்டியல் / உள்ளே உள்ள பட்டியல்).
// 2) "ஆர்டர் செய்" அழுத்தியதும் Sheet-லிருந்து வரிசை ஆர்டர் எண் (IMF001, IMF002…) பெறப்படும்.
//    கிடைக்காவிட்டால் (இணையம் இல்லை) தற்காலிக INM-… எண் பயன்படும்.
// 3) "WhatsApp-ல் அனுப்பு" அழுத்தியதும் ஆர்டர் Google Sheet-ல் "Orders" tab-ல் சேமிக்கப்படும்.
// index.html-ல் main script-க்கு பிறகு: <script>var INIMAI_SHEET_URL="https://script.google.com/macros/s/…/exec";</script><script src="sheet-connect.js"></script>
(function () {
  var URL_ = (window.INIMAI_SHEET_URL || '').trim();
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(URL_)) return;
  var KEY = 'inimai_products_v1';
  // படங்கள் / விவரம் இணையதளத்தில் உள்ளவை (Sheet-ல் img காலியாக இருந்தால் இவை பயன்படும்)
  var BUILTIN = {};
  PRODUCTS.forEach(function (p) { BUILTIN[p.id] = p; });

  // இணையதளத்திலிருந்து நீக்கிய பொருட்கள் (Sheet-ல் இருந்தாலும் காட்ட வேண்டாம்) – உரிமையாளர் கேட்டபடி, 16 Nov 2026:
  // p2 ஃபேமிலி பிரெட், p12 மில்க் ரஸ்க், p13 நெய் ரஸ்க், p29 கட்லெட், p30 காரி, p34 ஒஸ்மானியா பிஸ்கட்
  var REMOVED = { p2: 1, p12: 1, p13: 1, p29: 1, p30: 1, p34: 1 };
  // உரிமையாளர் மாற்றிய பெயர்கள் (Sheet-ல் பழைய பெயர் இருந்தாலும் இது காட்டப்படும்) – 16 Nov 2026: p9 பாவ் பன் → மினி பன்
  var RENAMED = { p9: { name: 'மினி பன்', en: 'Mini bun' } };
  function apply(list) {
    if (!Array.isArray(list) || !list.length) return;
    var next = [];
    list.forEach(function (r) {
      if (!r || !r.id || !r.name || REMOVED[String(r.id)]) return;
      var price = (r.price === null || r.price === '' || isNaN(Number(r.price))) ? null : Number(r.price);
      var mrp = (r.mrp === null || r.mrp === '' || isNaN(Number(r.mrp))) ? null : Number(r.mrp);
      next.push({ id: String(r.id), cat: String(r.cat || ''), name: String(r.name), en: String(r.en || ''),
        unit: String(r.unit || ''), unitEn: String(r.unitEn || ''), price: price, mrp: mrp,
        img: null });
      var b = BUILTIN[r.id] || {}, cur = next[next.length - 1], im = String(r.img || '').trim();
      if (RENAMED[cur.id]) { cur.name = RENAMED[cur.id].name; cur.en = RENAMED[cur.id].en; }
      if (/^https:\/\//.test(im) || /^img\/products\/[\w.-]+$/.test(im)) cur.img = im;
      else if (b.img) { cur.img = b.img; if (b.fit) cur.fit = b.fit; }
      cur.desc = String(r.desc || b.desc || ''); cur.descEn = String(r.descEn || b.descEn || '');
    });
    if (!next.length) return;
    // இணையதளத்தில் மட்டும் சேர்த்த புதிய பொருட்கள் (p36 முதல், எ.கா. கேக்குகள்) – Sheet-ல் இல்லையென்றாலும் காட்டு
    var have = {}; next.forEach(function (p) { have[p.id] = 1; });
    Object.keys(BUILTIN).forEach(function (id) {
      var n = Number(String(id).slice(1));
      if (have[id] || REMOVED[id] || !(n > 35)) return;
      var b = BUILTIN[id], at = -1;
      next.forEach(function (p, i) { if (p.cat === b.cat) at = i; });
      next.splice(at < 0 ? next.length : at + 1, 0, b); have[id] = 1;
    });
    PRODUCTS.length = 0;
    next.forEach(function (p) { PRODUCTS.push(p); if (!(p.id in qty)) qty[p.id] = 0; });
    Object.keys(qty).forEach(function (id) { if (!next.some(function (p) { return p.id === id; })) delete qty[id]; });
    try { changed(); } catch (e) {}
  }

  try { var cached = JSON.parse(localStorage.getItem(KEY) || 'null'); if (cached) apply(cached); } catch (e) {}
  fetch(URL_ + '?api=products', { method: 'GET', redirect: 'follow' })
    .then(function (r) { return r.json(); })
    .then(function (j) {
      if (j && j.ok && j.products && j.products.length) {
        apply(j.products);
        try { localStorage.setItem(KEY, JSON.stringify(j.products)); } catch (e) {}
      }
    })
    .catch(function () {});

  // வரிசை ஆர்டர் எண்: இந்த போனில் ஒதுக்கப்பட்ட, இன்னும் அனுப்பாத எண் இருந்தால் அதையே மீண்டும் பயன்படுத்து
  var RKEY = 'inimai_reserved_id';
  function useId(id) {
    ORDER_ID = id; ORDER_TIME = new Date();
    try { refreshPay(); } catch (e) { try { updateWa(); } catch (e2) {} }
  }
  var asking = false;
  $('place').addEventListener('click', function () {
    if (problem() || asking) return;
    if (/^IMF\d+$/.test(String(ORDER_ID || ''))) return;
    var saved = null; try { saved = localStorage.getItem(RKEY); } catch (e) {}
    if (saved && /^IMF\d+$/.test(saved)) { useId(saved); return; }
    asking = true;
    fetch(URL_ + '?api=next', { method: 'GET', redirect: 'follow' })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j && j.ok && /^IMF\d+$/.test(j.id || '')) {
          try { localStorage.setItem(RKEY, j.id); } catch (e) {}
          if ($('paySec').hidden === false) useId(j.id);
        }
      })
      .catch(function () {})
      .then(function () { asking = false; });
  });

  // ஆர்டர் சேமிப்பு: பழைய click handler LAST_BILL-ஐ அமைத்த பிறகு இது இயங்கும்
  $('wa').addEventListener('click', function () {
    if (problem()) return;
    var b = LAST_BILL; if (!b) return;
    try { if (localStorage.getItem(RKEY) === b.id) localStorage.removeItem(RKEY); } catch (e) {}
    var L = T[b.lang] || T.ta;
    var body = {
      id: b.id, lang: b.lang, name: b.name, phone: b.phone, addr: b.address, date: b.date, note: b.note,
      pay: b.pay === 'upi' ? L.mPayUpi : L.mPayCod, utr: b.pay === 'upi' ? b.utr : '', payer: b.pay === 'upi' ? (b.payer || '') : '',
      items: b.items.map(function (i) { return [i.n, i.u, i.q, i.pr]; }),
      goods: b.unknown ? 0 : b.sum - b.fee, fee: b.fee, total: b.sum
    };
    try {
      fetch(URL_, { method: 'POST', mode: 'no-cors', keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body) }).catch(function () {});
    } catch (e) {}
  });
})();
