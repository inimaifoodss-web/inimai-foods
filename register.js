// இனிமை பேக்ஹவுஸ் – கடை பதிவு (கடைகள் / சூப்பர் மார்க்கெட்டுகளுக்கு மட்டும்)
// பதிவு செய்த பிறகுதான் பொருட்கள், விலை, ஆர்டர் தெரியும். விவரம் இந்த போனில் சேமிக்கப்பட்டு,
// Google Sheet-ன் "Users" tab-க்கும் அனுப்பப்படும் (இணையம் இல்லையெனில் அடுத்த முறை மீண்டும் அனுப்பும்).
(function () {
  Object.assign(T.ta, {
    gBadge: '🏪 கடைகள் & சூப்பர் மார்க்கெட்டுகளுக்கு மட்டும்',
    gH1a: 'உங்கள் கடைக்கு', gH1b: 'தினமும் புதிய பேக்கரி சப்ளை',
    gP: 'பிரெட், பன், ரஸ்க், கேக், பஃப்ஸ், பிஸ்கட் – நேராக எங்கள் அடுப்பிலிருந்து உங்கள் கடைக்கு. ஒருமுறை பதிவு செய்தால் விலைகளைப் பார்த்து ஆர்டர் செய்யலாம்.',
    b1h: 'தினமும் புதியது', b1p: 'தரமான பொருட்கள், சுவையான தயாரிப்பு',
    b2h: 'கடைக்கே டெலிவரி', b2p: 'உங்கள் கடை வாசலுக்கு நேரடியாக',
    b3h: 'கடைகளுக்கான விலை', b3p: 'MRP-க்கு குறைவான மொத்த விலை',
    b4h: 'எளிதான ஆர்டர்', b4p: 'WhatsApp-ல் 2 நிமிடத்தில்',
    fTitle: 'கடை பதிவு', fSub: '1 நிமிடத்தில் முடியும். * உள்ளவை கட்டாயம்.', fEdit: 'கடை விவரத்தை மாற்று',
    rShop: 'கடை பெயர் *', rKind: 'கடை வகை *', rOwner: 'உரிமையாளர் / தொடர்பு நபர் பெயர் *', rPhone: 'மொபைல் எண் (WhatsApp) *',
    rAddr: 'கடை முகவரி (கதவு எண், தெரு) *', rArea: 'ஊர் / பகுதி *', rPin: 'பின்கோடு', rGst: 'GST எண் (இருந்தால்)',
    rGps: '📍 கடையின் இருப்பிடத்தைச் சேர் (GPS)', rGo: 'பதிவு செய்து தொடரவும் →', rSave: 'சேமி',
    rNote: '🔒 உங்கள் விவரங்கள் ஆர்டர் மற்றும் டெலிவரிக்கு மட்டுமே பயன்படும்.',
    rAgain: 'முன்பே பதிவு செய்தவரா? அதே மொபைல் எண்ணுடன் மீண்டும் நிரப்பினால் போதும்.',
    rHelp: 'உதவி தேவையா? WhatsApp-ல் கேளுங்கள்',
    kSuper: 'சூப்பர் மார்க்கெட்', kBakery: 'பேக்கரி', kGrocery: 'மளிகை கடை', kTea: 'டீ கடை / கேண்டீன்', kHotel: 'ஹோட்டல் / உணவகம்', kOther: 'மற்றவை',
    errShop: 'கடை பெயரை உள்ளிடவும்.', errKind: 'கடை வகையைத் தேர்ந்தெடுக்கவும்.', errOwner: 'உரிமையாளர் பெயரை உள்ளிடவும்.',
    errPin: 'சரியான 6 இலக்க பின்கோடு உள்ளிடவும்.', errGst: 'GST எண் 15 எழுத்து / எண் இருக்க வேண்டும்.',
    hello: 'வணக்கம்', helloSub: 'இன்றைய புதிய பொருட்களைப் பார்த்து ஆர்டர் செய்யுங்கள்.',
    myShop: 'என் கடை', shopEdit: '🏪 கடை விவரத்தை மாற்று', welcome: '✓ பதிவு முடிந்தது! இனிமை பேக்ஹவுஸுக்கு வரவேற்கிறோம்.'
  });
  Object.assign(T.en, {
    gBadge: '🏪 For shops & supermarkets only',
    gH1a: 'Fresh bakery supply', gH1b: 'for your shop, every day',
    gP: 'Bread, buns, rusk, cakes, puffs and biscuits – straight from our oven to your shop. Register once to see prices and order.',
    b1h: 'Fresh every day', b1p: 'Quality ingredients, great taste',
    b2h: 'Delivered to your shop', b2p: 'Right to your shop door',
    b3h: 'Shop prices', b3p: 'Wholesale prices below MRP',
    b4h: 'Easy ordering', b4p: 'On WhatsApp in 2 minutes',
    fTitle: 'Shop registration', fSub: 'Takes 1 minute. Fields with * are required.', fEdit: 'Edit shop details',
    rShop: 'Shop name *', rKind: 'Shop type *', rOwner: 'Owner / contact person name *', rPhone: 'Mobile number (WhatsApp) *',
    rAddr: 'Shop address (door no., street) *', rArea: 'Town / area *', rPin: 'PIN code', rGst: 'GST number (if any)',
    rGps: '📍 Add shop location (GPS)', rGo: 'Register & continue →', rSave: 'Save',
    rNote: '🔒 Your details are used only for orders and delivery.',
    rAgain: 'Registered before? Just fill this again with the same mobile number.',
    rHelp: 'Need help? Ask on WhatsApp',
    kSuper: 'Supermarket', kBakery: 'Bakery', kGrocery: 'Grocery store', kTea: 'Tea shop / canteen', kHotel: 'Hotel / restaurant', kOther: 'Other',
    errShop: 'Enter the shop name.', errKind: 'Choose the shop type.', errOwner: 'Enter the owner name.',
    errPin: 'Enter a valid 6-digit PIN code.', errGst: 'GST number must be 15 letters / digits.',
    hello: 'Welcome', helloSub: 'See today\'s fresh products and place your order.',
    myShop: 'My shop', shopEdit: '🏪 Edit shop details', welcome: '✓ Registered! Welcome to Inimai Bakehouse.'
  });
  var KINDS = [['supermarket', '🛒', 'kSuper'], ['bakery', '🥐', 'kBakery'], ['grocery', '🏪', 'kGrocery'], ['tea', '☕', 'kTea'], ['hotel', '🍽️', 'kHotel'], ['other', '➕', 'kOther']];

  var css = document.createElement('style');
  css.textContent = [
    '#gate{position:fixed;inset:0;z-index:1000;overflow-y:auto;-webkit-overflow-scrolling:touch;color:#fff;',
    'background:radial-gradient(1200px 600px at 10% -10%,#B23A5C 0,rgba(178,58,92,0) 60%),radial-gradient(900px 500px at 110% 110%,#C8892B 0,rgba(200,137,43,0) 55%),linear-gradient(160deg,#8E1C3E 0%,#7A1532 45%,#4E0B20 100%)}',
    '#gate[hidden]{display:none}',
    '#gate::before{content:"";position:fixed;inset:0;pointer-events:none;opacity:.10;background-image:radial-gradient(#fff 1.2px,transparent 1.3px);background-size:22px 22px}',
    '.gwrap{position:relative;max-width:1120px;margin:0 auto;padding:16px 16px 28px;display:grid;gap:18px;grid-template-areas:"top" "hero" "card" "ben" "foot"}',
    '.gtop{grid-area:top}.ghero{grid-area:hero}.gcard{grid-area:card}.gbens{grid-area:ben}.gfoot{grid-area:foot}',
    '.gtop{display:flex;align-items:center;justify-content:space-between;gap:12px}',
    '.glogo{background:#fff;border-radius:16px;padding:6px 12px;display:inline-flex;box-shadow:0 8px 24px rgba(0,0,0,.25)}',
    '.glogo img{display:block;height:50px;width:auto}',
    '.glang{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.75);border-radius:999px;min-height:40px;padding:0 16px;font:inherit;font-weight:700;font-size:14px;cursor:pointer}',
    '.gclose{background:#fff;color:#7A1532;border:0;border-radius:999px;min-height:40px;padding:0 16px;font:inherit;font-weight:700;cursor:pointer;margin-left:8px}',
    '.gbadge{display:inline-block;background:rgba(255,210,122,.16);border:1px solid rgba(255,210,122,.6);color:#FFE2A6;border-radius:999px;padding:6px 14px;font-size:13px;font-weight:700}',
    '.gh1{font-family:"Baloo Thambi 2","Noto Sans Tamil",sans-serif;font-weight:800;font-size:27px;line-height:1.15;margin:12px 0 8px;letter-spacing:-.01em}',
    '.gh1 span{display:block;color:#FFD27A}',
    '.gp{margin:0;font-size:14px;line-height:1.55;color:rgba(255,255,255,.88);max-width:560px}',
    '.gben{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:10px}',
    '.gben li{display:flex;gap:10px;align-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:10px;backdrop-filter:blur(4px)}',
    '.gben i{font-style:normal;flex:none;width:38px;height:38px;border-radius:12px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 4px 12px rgba(0,0,0,.15)}',
    '.gben b{display:block;font-size:14px;line-height:1.3}.gben small{display:block;font-size:12px;color:rgba(255,255,255,.75);line-height:1.35;margin-top:2px}',
    '.gcard{background:#fff;color:#22140C;border-radius:24px;padding:22px 18px;box-shadow:0 24px 60px rgba(30,0,10,.45);position:relative;overflow:hidden}',
    '.gcard::before{content:"";position:absolute;left:0;right:0;top:0;height:6px;background:linear-gradient(90deg,#7A1532,#C8892B,#7A1532)}',
    '.gcard h2{margin:2px 0 2px;font-family:"Baloo Thambi 2","Noto Sans Tamil",sans-serif;font-weight:800;font-size:24px;color:#7A1532}',
    '.gcard .gsub{margin:0 0 14px;font-size:13px;color:#6B5446}',
    '.gf{display:grid;gap:12px}',
    '.gf label{display:grid;gap:5px;font-size:13px;font-weight:600;color:#6B5446}',
    '.gf input,.gf textarea{font:inherit;font-size:16px;color:#22140C;border:1.5px solid #E2CFB8;border-radius:12px;padding:11px 12px;background:#FFFCF7;width:100%;min-width:0}',
    '.gf input:focus,.gf textarea:focus{outline:0;border-color:#7A1532;box-shadow:0 0 0 3px rgba(122,21,50,.14);background:#fff}',
    '.gf textarea{resize:vertical;min-height:62px}',
    '.g2{display:grid;grid-template-columns:1.4fr 1fr;gap:10px}',
    '.gkinds{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}',
    '.gkind{font:inherit;font-size:13px;font-weight:600;color:#22140C;background:#FFF8EE;border:1.5px solid #EADBC8;border-radius:12px;padding:8px 6px;min-height:58px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;line-height:1.2;text-align:center}',
    '.gkind span{font-size:20px}',
    '.gkind[aria-checked=true]{background:#7A1532;border-color:#7A1532;color:#fff;box-shadow:0 6px 14px rgba(122,21,50,.3)}',
    '.ggps{font:inherit;font-size:14px;font-weight:700;color:#7A1532;background:#fff;border:1.5px dashed #C8892B;border-radius:12px;min-height:46px;cursor:pointer}',
    '.ggm{font-size:13px;color:#6B5446;min-height:0}.ggm.ok{color:#1E7B34;font-weight:600}',
    '.ggo{font:inherit;font-size:17px;font-weight:800;color:#fff;border:0;border-radius:14px;min-height:54px;cursor:pointer;background:linear-gradient(135deg,#94203F,#7A1532 55%,#5E0F28);box-shadow:0 10px 22px rgba(122,21,50,.35)}',
    '.ggo:disabled{opacity:.7}',
    '.gmsg{color:#A3122A;font-size:14px;font-weight:600;min-height:0}',
    '.gnote{font-size:12px;color:#6B5446;text-align:center;margin:0}',
    '.gfoot{display:flex;flex-direction:column;align-items:center;gap:6px;font-size:13px;color:rgba(255,255,255,.85);text-align:center}',
    '.gfoot a{color:#FFE2A6;font-weight:700}',
    'body.gated{overflow:hidden}',
    '.ghello{margin:14px 16px 0;display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#FFF3D6,#FFF8EE);border:1px solid #F0D9A8;border-radius:18px;padding:12px 14px;color:#22140C}',
    '.ghello .av{flex:none;width:44px;height:44px;border-radius:50%;background:#7A1532;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:19px}',
    '.ghello b{display:block;font-family:"Baloo Thambi 2","Noto Sans Tamil",sans-serif;font-weight:800;font-size:19px;color:#7A1532;line-height:1.2}',
    '.ghello small{display:block;color:#6B5446;font-size:13px}',
    '.gtoast{position:fixed;left:50%;bottom:92px;transform:translateX(-50%);z-index:1001;background:#1E7B34;color:#fff;border-radius:16px;padding:10px 18px;font-weight:700;font-size:14px;box-shadow:0 10px 24px rgba(0,0,0,.25);max-width:calc(100% - 32px);text-align:center}',
    '@media (min-width:900px){',
    ' .gwrap{grid-template-columns:1.1fr .9fr;grid-template-areas:"top top" "hero card" "ben card" "foot foot";grid-template-rows:auto auto 1fr auto;column-gap:56px;row-gap:22px;padding:36px 32px 40px}',
 ' .ghero{align-self:end;padding-top:40px}.gbens{align-self:start}.gcard{align-self:center}',
    
    ' .glogo img{height:72px}.gben li{padding:12px}',
    ' .gh1{font-size:46px}.gp{font-size:17px}',
    ' .gcard{padding:28px 26px}',
    
    '}',
    '@media (max-width:360px){.gben{grid-template-columns:1fr}.gkinds{grid-template-columns:1fr 1fr}}'
  ].join('\n');
  document.head.appendChild(css);

  var gate = document.createElement('div');
  gate.id = 'gate'; gate.hidden = true; gate.setAttribute('role', 'dialog'); gate.setAttribute('aria-modal', 'true');
  document.body.appendChild(gate);
  var EDITING = false, kind = '', loc = null;

  function reg() { var c = acct(); return c && c.reg ? c.reg : null; }
  function el(tag, cls, text, attrs) { return h(tag, cls, text, attrs); }

  function draw() {
    // keep anything already typed when the language changes
    var keep = {}; gate.querySelectorAll('[data-k]').forEach(function (i) { keep[i.dataset.k] = i.value; });
    var c = acct(), r = reg() || {}, a = c ? (selAddr() || {}) : {};
    function val(k, d) { return keep[k] != null ? keep[k] : (d || ''); }
    if (!kind) kind = r.kind || '';
    if (!loc && r.lat != null) loc = {lat: r.lat, lng: r.lng};
    gate.innerHTML = '';
    var w = el('div', 'gwrap');
    var top = el('div', 'gtop'), lg = el('div', 'glogo'), im = el('img', null, null, {src: 'logo.png', alt: t('brand')});
    lg.appendChild(im); top.appendChild(lg);
    var rt = el('div');
    var lb = el('button', 'glang', t('other'), {type: 'button'});
    lb.addEventListener('click', function () { LANG = LANG === 'ta' ? 'en' : 'ta'; store('inimai_lang', LANG); try { applyLang(); } catch (e) {} draw(); });
    rt.appendChild(lb);
    if (EDITING) { var cx = el('button', 'gclose', '✕', {type: 'button', 'aria-label': 'Close'}); cx.addEventListener('click', close); rt.appendChild(cx); }
    top.appendChild(rt); w.appendChild(top);

    var hero = el('section', 'ghero');
    hero.appendChild(el('span', 'gbadge', t('gBadge')));
    var h1 = el('h1', 'gh1'); h1.appendChild(document.createTextNode(t('gH1a'))); h1.appendChild(el('span', null, t('gH1b'))); hero.appendChild(h1);
    hero.appendChild(el('p', 'gp', t('gP')));
    var ul = el('ul', 'gben');
    [['🍞', 'b1'], ['🚚', 'b2'], ['🏷️', 'b3'], ['📲', 'b4']].forEach(function (x) {
      var li = el('li'); li.appendChild(el('i', null, x[0], {'aria-hidden': 'true'}));
      var d = el('div'); d.appendChild(el('b', null, t(x[1] + 'h'))); d.appendChild(el('small', null, t(x[1] + 'p'))); li.appendChild(d); ul.appendChild(li);
    });
    w.appendChild(hero);
    var bens = el('section', 'gbens'); bens.appendChild(ul);

    var card = el('section', 'gcard');
    card.appendChild(el('h2', null, EDITING ? t('fEdit') : t('fTitle')));
    card.appendChild(el('p', 'gsub', t('fSub')));
    var f = el('div', 'gf');
    function inp(k, label, type, v, attrs) {
      var l = el('label'); l.appendChild(el('span', null, t(label)));
      var i = el(type === 'area' ? 'textarea' : 'input', null, null, Object.assign(type === 'area' ? {rows: '2'} : {type: type}, attrs || {}));
      i.dataset.k = k; i.value = v; l.appendChild(i); return l;
    }
    f.appendChild(inp('shop', 'rShop', 'text', val('shop', r.shop || (c && !c.reg ? c.name : '')), {maxlength: '80', autocomplete: 'organization'}));
    var kl = el('div'); kl.appendChild(el('div', null, t('rKind'), {style: 'font-size:13px;font-weight:600;color:#6B5446;margin-bottom:5px'}));
    var kg = el('div', 'gkinds', null, {role: 'radiogroup', 'aria-label': t('rKind')});
    KINDS.forEach(function (k) {
      var b = el('button', 'gkind', null, {type: 'button', role: 'radio', 'aria-checked': String(kind === k[0])});
      b.appendChild(el('span', null, k[1], {'aria-hidden': 'true'})); b.appendChild(document.createTextNode(t(k[2])));
      b.addEventListener('click', function () { kind = k[0]; kg.querySelectorAll('.gkind').forEach(function (x) { x.setAttribute('aria-checked', String(x === b)); }); });
      kg.appendChild(b);
    });
    kl.appendChild(kg); f.appendChild(kl);
    f.appendChild(inp('owner', 'rOwner', 'text', val('owner', r.owner || ''), {maxlength: '60', autocomplete: 'name'}));
    f.appendChild(inp('phone', 'rPhone', 'tel', val('phone', curPhone()), {inputmode: 'numeric', maxlength: '14', autocomplete: 'tel'}));
    f.appendChild(inp('addr', 'rAddr', 'area', val('addr', r.addr || a.line || ''), {maxlength: '200', autocomplete: 'street-address'}));
    var two = el('div', 'g2');
    two.appendChild(inp('area', 'rArea', 'text', val('area', r.area || a.area || ''), {maxlength: '60'}));
    two.appendChild(inp('pin', 'rPin', 'text', val('pin', r.pin || ''), {inputmode: 'numeric', maxlength: '6', autocomplete: 'postal-code'}));
    f.appendChild(two);
    var gb = el('button', 'ggps', t('rGps'), {type: 'button'}), gm = el('div', 'ggm', loc ? t('gpsOk') : '', {role: 'status'});
    if (loc) gm.className = 'ggm ok';
    gb.addEventListener('click', function () {
      if (!navigator.geolocation) { gm.className = 'ggm'; gm.textContent = t('gpsFail'); return; }
      gm.className = 'ggm'; gm.textContent = t('gpsWait');
      navigator.geolocation.getCurrentPosition(function (p) {
        loc = {lat: +p.coords.latitude.toFixed(6), lng: +p.coords.longitude.toFixed(6)}; gm.className = 'ggm ok'; gm.textContent = t('gpsOk');
      }, function () { gm.className = 'ggm'; gm.textContent = t('gpsFail'); }, {enableHighAccuracy: true, timeout: 15000, maximumAge: 60000});
    });
    f.appendChild(gb); f.appendChild(gm);
    f.appendChild(inp('gst', 'rGst', 'text', val('gst', r.gst || ''), {maxlength: '15', autocapitalize: 'characters', style: 'text-transform:uppercase'}));
    var m = el('div', 'gmsg', '', {role: 'alert'}), go = el('button', 'ggo', EDITING ? t('rSave') : t('rGo'), {type: 'button'});
    f.appendChild(m); f.appendChild(go);
    f.appendChild(el('p', 'gnote', t('rNote')));
    if (!EDITING) f.appendChild(el('p', 'gnote', t('rAgain')));
    card.appendChild(f); w.appendChild(card); w.appendChild(bens);

    var foot = el('div', 'gfoot');
    var hl = el('a', null, '💬 ' + t('rHelp'), {href: 'https://wa.me/' + ORDER_WHATSAPP, target: '_blank', rel: 'noopener'});
    foot.appendChild(hl); w.appendChild(foot);
    gate.appendChild(w);

    go.addEventListener('click', function () {
      var v = {}; f.querySelectorAll('[data-k]').forEach(function (i) { v[i.dataset.k] = i.value.trim(); });
      var ph = v.phone.replace(/\D/g, ''); if (ph.length === 12 && ph.indexOf('91') === 0) ph = ph.slice(2);
      var pin = v.pin.replace(/\D/g, ''), gst = v.gst.toUpperCase().replace(/[^0-9A-Z]/g, '');
      function bad(k, msg) { m.textContent = t(msg); var i = f.querySelector('[data-k=' + k + ']'); if (i) i.focus(); return; }
      if (!v.shop) return bad('shop', 'errShop');
      if (!kind) { m.textContent = t('errKind'); kg.scrollIntoView({block: 'center'}); return; }
      if (!v.owner) return bad('owner', 'errOwner');
      if (!/^[6-9]\d{9}$/.test(ph)) return bad('phone', 'errPhone');
      if (!v.addr) return bad('addr', 'errLine');
      if (!v.area) return bad('area', 'errArea');
      if (pin && !/^\d{6}$/.test(pin)) return bad('pin', 'errPin');
      if (gst && gst.length !== 15) return bad('gst', 'errGst');
      m.textContent = '';
      var R = {shop: v.shop, kind: kind, owner: v.owner, addr: v.addr.replace(/\s*\n\s*/g, ', '), area: v.area, pin: pin, gst: gst,
        lat: loc ? loc.lat : null, lng: loc ? loc.lng : null, at: Date.now(), synced: false};
      var all = accts(), was = curPhone(); all[ph] = all[ph] || {addrs: []};
      if (was && was !== ph && all[was] && !all[ph].addrs.length) all[ph].addrs = all[was].addrs || [];
      var c2 = all[ph]; c2.name = R.shop; c2.reg = Object.assign({}, c2.reg || {}, R, {id: (c2.reg || {}).id});
      // கடை முகவரியை டெலிவரி முகவரியாகச் சேர் / புதுப்பி
      var areaTxt = R.area + (R.pin ? ' - ' + R.pin : ''), sa = c2.addrs.filter(function (x) { return x.shopReg; })[0];
      if (!sa) { sa = {id: newId(), label: 'shop', shopReg: true}; c2.addrs.unshift(sa); }
      sa.line = R.addr; sa.area = areaTxt; if (loc) { sa.lat = loc.lat; sa.lng = loc.lng; }
      c2.sel = sa.id; saveAccts(all); store('inimai_cur', ph);
      send();
      var first = !EDITING; close();
      if (first) toast(t('welcome'));
    });
  }

  // முகப்பில் "வணக்கம், <பெயர்>" வரவேற்பு
  function hello() {
    var r = reg(), home = $('v-home'), x = $('ghello');
    if (!r || !home) { if (x) x.remove(); return; }
    if (!x) { x = el('div', 'ghello', null, {id: 'ghello', role: 'status'}); home.insertBefore(x, home.firstChild); }
    x.innerHTML = '';
    x.appendChild(el('span', 'av', (r.owner || r.shop || '?').trim().charAt(0).toUpperCase(), {'aria-hidden': 'true'}));
    var d = el('div'); d.appendChild(el('b', null, t('hello') + ', ' + (r.owner || r.shop) + '! 👋'));
    d.appendChild(el('small', null, r.shop + ' · ' + t('helloSub'))); x.appendChild(d);
  }

  function toast(s) { var x = el('div', 'gtoast', s, {role: 'status'}); document.body.appendChild(x); setTimeout(function () { x.remove(); }, 3500); }

  function send() {
    var u = (window.INIMAI_SHEET_URL || '').trim(), c = acct(), r = reg();
    if (!u || !r || r.synced) return;
    var body = {type: 'register', shop: r.shop, kind: r.kind, owner: r.owner, phone: curPhone(), addr: r.addr, area: r.area, pin: r.pin, gst: r.gst,
      lat: r.lat, lng: r.lng, lang: LANG};
    var ph = curPhone();
    fetch(u, {method: 'POST', headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: JSON.stringify(body)})
      .then(function (x) { return x.json(); })
      .then(function (j) {
        if (!j || !j.ok || !j.registered) return;
        var all = accts(); if (!all[ph] || !all[ph].reg) return;
        all[ph].reg.synced = true; if (j.id) all[ph].reg.id = j.id; saveAccts(all);
      }).catch(function () {});
  }

  function open(edit) { EDITING = !!edit; kind = ''; loc = null; draw(); gate.hidden = false; gate.scrollTop = 0; document.body.classList.add('gated'); }
  function close() {
    if (!reg()) return;   // பதிவு செய்யாமல் மூட முடியாது
    gate.hidden = true; document.body.classList.remove('gated'); EDITING = false;
    try { syncFields(); renderAcctOrig(); } catch (e) {}
    profileShop(); hello();
  }
  function check() { if (!reg()) { if (gate.hidden || EDITING) open(false); } else if (!gate.hidden && !EDITING) close(); }

  // Profile பக்கத்தில் "என் கடை" விவரமும் மாற்றும் பட்டனும்
  function profileShop() {
    var pf = $('profBox'), r = reg(); if (!pf || !r) return;
    var old = pf.querySelector('.shopbox'); if (old) old.remove();
    var b = el('div', 'shopbox', null, {style: 'margin:12px 0;padding:12px;border:1px solid var(--line);border-radius:14px;background:var(--cream)'});
    var k = KINDS.filter(function (x) { return x[0] === r.kind; })[0];
    b.appendChild(el('div', 'pkT', t('myShop'), {style: 'margin:0 0 4px'}));
    b.appendChild(el('b', null, (k ? k[1] + ' ' : '') + r.shop));
    b.appendChild(el('div', 'unit', (k ? t(k[2]) + ' · ' : '') + r.owner + (r.id ? ' · ' + r.id : '')));
    var e = el('button', 'btn btn2', t('shopEdit'), {type: 'button', style: 'margin-top:10px'});
    e.addEventListener('click', function () { open(true); });
    b.appendChild(e);
    var first = pf.querySelector('.pcard'); if (first && first.nextSibling) pf.insertBefore(b, first.nextSibling); else pf.appendChild(b);
  }

  var renderAcctOrig = window.renderAcct;
  window.renderAcct = function () { renderAcctOrig(); profileShop(); hello(); check(); };
  var applyOrig = window.applyLang;
  window.applyLang = function () { applyOrig(); if (!gate.hidden) draw(); };

  check(); profileShop(); hello(); send();
})();
