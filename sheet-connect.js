// இனிமை ஃபுட்ஸ் – Google Sheet இணைப்பு
// 1) பொருட்கள் & விலை Google Sheet-ன் "Products" tab-லிருந்து வரும் (இணையம் இல்லையெனில் கடைசியாக வந்த பட்டியல் / உள்ளே உள்ள பட்டியல்).
// 2) "ஆர்டர் செய்" அழுத்தியதும் Sheet-லிருந்து வரிசை ஆர்டர் எண் (IMF001, IMF002…) பெறப்படும்.
//    கிடைக்காவிட்டால் (இணையம் இல்லை) தற்காலிக INM-… எண் பயன்படும்.
// 3) "WhatsApp-ல் அனுப்பு" அழுத்தியதும் ஆர்டர் Google Sheet-ல் "Orders" tab-ல் சேமிக்கப்படும்.
// index.html-ல் main script-க்கு பிறகு: <script>var INIMAI_SHEET_URL="https://script.google.com/macros/s/…/exec";</script><script src="sheet-connect.js"></script>
(function () {
  var URL_ = (window.INIMAI_SHEET_URL || '').trim();
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(URL_)) return;
  var KEY = 'inimai_products_v1';
  var ART_BY_ID = {};
  PRODUCTS.forEach(function (p) { ART_BY_ID[p.id] = p.art; });

  function apply(list) {
    if (!Array.isArray(list) || !list.length) return;
    var next = [];
    list.forEach(function (r) {
      if (!r || !r.id || !r.name) return;
      var price = (r.price === null || r.price === '' || isNaN(Number(r.price))) ? null : Number(r.price);
      var mrp = (r.mrp === null || r.mrp === '' || isNaN(Number(r.mrp))) ? null : Number(r.mrp);
      next.push({ id: String(r.id), cat: String(r.cat || ''), name: String(r.name), en: String(r.en || ''),
        unit: String(r.unit || ''), unitEn: String(r.unitEn || ''), price: price, mrp: mrp,
        img: /^https:\/\//.test(r.img || '') ? r.img : null, art: ART_BY_ID[r.id] });
    });
    if (!next.length) return;
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
      pay: b.pay === 'upi' ? L.mPayUpi : L.mPayCod, utr: b.pay === 'upi' ? b.utr : '',
      items: b.items.map(function (i) { return [i.n, i.u, i.q, i.pr]; }),
      goods: b.unknown ? 0 : b.sum - b.fee, fee: b.fee, total: b.sum
    };
    try {
      fetch(URL_, { method: 'POST', mode: 'no-cors', keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body) }).catch(function () {});
    } catch (e) {}
  });
})();
