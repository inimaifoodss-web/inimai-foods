// இனிமை ஃபுட்ஸ் – கடை பதிவு (கடைகள் / சூப்பர் மார்க்கெட்டுகளுக்கு மட்டும்)
// யார் வேண்டுமானாலும் பொருட்களைப் பார்க்கலாம் (விலை இல்லாமல்). விலை & ஆர்டர்:
// கடை பதிவு + WhatsApp உறுதி + உரிமையாளர் அட்மின் ஆப்பில் "அனுமதி" கொடுத்த பிறகு மட்டும்.
// விவரம் Google Sheet-ன் "Users" tab-க்கு அனுப்பப்படும் (இணையம் இல்லையெனில் அடுத்த முறை மீண்டும் அனுப்பும்).
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
    vH: '📲 WhatsApp-ல் உறுதி செய்யுங்கள்', vP: 'உங்கள் மொபைல் {p} உங்களுடையது என்று உறுதி செய்ய, கீழே உள்ள பச்சை பட்டனை அழுத்துங்கள். WhatsApp-ல் செய்தி தயாராக இருக்கும் – அங்கே Send அழுத்துங்கள்.',
    vCode: 'உங்கள் உறுதி குறியீடு', vSend: 'WhatsApp-ல் குறியீட்டை அனுப்பு', vGo: 'அனுப்பினேன் – தொடரவும் →', vBack: '← விவரங்களை மாற்று',
    vNote: 'இதே மொபைல் எண்ணின் WhatsApp-லிருந்து அனுப்ப வேண்டும்.', vSent: '✓ WhatsApp-ல் Send அழுத்தியிருந்தால், இப்போது "தொடரவும்" அழுத்துங்கள்.',
    vMsg: 'வணக்கம் இனிமை ஃபுட்ஸ்! கடை பதிவு உறுதி.\nகடை: {s}\nமொபைல்: {p}\nகுறியீடு: {c}',
    hello: 'வணக்கம்', helloSub: 'இன்றைய புதிய பொருட்களைப் பார்த்து ஆர்டர் செய்யுங்கள்.',
    guestH: '👀 எங்கள் பொருட்களைப் பாருங்கள்', guestP: 'ஆர்டர் செய்ய, கீழே உள்ள பட்டனை அழுத்தி உங்கள் கடையைப் பதிவு செய்யுங்கள்.',
    guestBtn: '🏪 கடை பதிவு செய்து ஆர்டர் செய்யுங்கள் →', guestBar: '🏪 கடை பதிவு செய்யுங்கள்', guestBarS: 'ஆர்டர் செய்ய இங்கே அழுத்துங்கள்',
    waitH: '⏳ அனுமதிக்காக காத்திருக்கிறது', waitP: 'உங்கள் கடை பதிவு எங்களுக்கு வந்துவிட்டது. நாங்கள் சரிபார்த்து அனுமதி கொடுத்ததும் விலையும் ஆர்டரும் தெரியும். அனுமதி கிடைத்ததும் WhatsApp-ல் தெரிவிப்போம்.',
    waitBar: '⏳ அனுமதிக்காக காத்திருக்கிறது', waitBarS: 'அனுமதி வந்ததா என்று பார்க்க அழுத்துங்கள்',
    waitDone: '✓ பதிவு முடிந்தது!', waitCheck: '↻ அனுமதி வந்ததா? சரிபார்', waitBrowse: 'பொருட்களைப் பாருங்கள் →', waitNo: 'இன்னும் அனுமதி வரவில்லை. சிறிது நேரம் கழித்து மீண்டும் பாருங்கள்.',
    waitNet: 'இணைய இணைப்பு இல்லை. மீண்டும் முயற்சிக்கவும்.', waitAsk: '💬 WhatsApp-ல் எங்களைத் தொடர்பு கொள்ள',
    remH: '🚫 உங்கள் கடைக்கான அனுமதி நிறுத்தப்பட்டுள்ளது', remP: 'மேலும் விவரத்துக்கு WhatsApp-ல் எங்களைத் தொடர்பு கொள்ளுங்கள்.', remBar: '🚫 அனுமதி இல்லை – தொடர்பு கொள்ளுங்கள்',
    approved: '✓ உங்கள் கடைக்கு அனுமதி கிடைத்தது! இப்போது விலை பார்த்து ஆர்டர் செய்யலாம்.', myShopReg: 'கடை பதிவு', myShopRegP: 'விலை பார்த்து ஆர்டர் செய்ய உங்கள் கடையைப் பதிவு செய்யுங்கள்.',
    stPending: '⏳ அனுமதிக்காக காத்திருக்கிறது', stApproved: '✓ அனுமதி உண்டு', stRemoved: '🚫 அனுமதி நிறுத்தப்பட்டது',
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
    vH: '📲 Verify on WhatsApp', vP: 'To confirm that {p} is your number, tap the green button below. WhatsApp opens with a ready message – tap Send there.',
    vCode: 'Your verification code', vSend: 'Send code on WhatsApp', vGo: 'I have sent it – continue →', vBack: '← Change details',
    vNote: 'Send it from the WhatsApp of this same mobile number.', vSent: '✓ If you tapped Send in WhatsApp, now tap "Continue".',
    vMsg: 'Hello Inimai Foods! Shop registration verification.\nShop: {s}\nMobile: {p}\nCode: {c}',
    hello: 'Welcome', helloSub: 'See today\'s fresh products and place your order.',
    guestH: '👀 Take a look at our products', guestP: 'To order, tap the button below and register your shop.',
    guestBtn: '🏪 Register your shop to order →', guestBar: '🏪 Register your shop', guestBarS: 'Tap here to order',
    waitH: '⏳ Waiting for approval', waitP: 'We have received your shop registration. Once we check and approve it, you will see prices and can order. We will tell you on WhatsApp when it is approved.',
    waitBar: '⏳ Waiting for approval', waitBarS: 'Tap to check if you are approved',
    waitDone: '✓ Registration complete!', waitCheck: '↻ Approved yet? Check', waitBrowse: 'Browse products →', waitNo: 'Not approved yet. Please check again a little later.',
    waitNet: 'No internet connection. Please try again.', waitAsk: '💬 Contact us on WhatsApp',
    remH: '🚫 Access for your shop has been stopped', remP: 'Please contact us on WhatsApp for details.', remBar: '🚫 No access – contact us',
    approved: '✓ Your shop is approved! You can now see prices and order.', myShopReg: 'Shop registration', myShopRegP: 'Register your shop to see prices and order.',
    stPending: '⏳ Waiting for approval', stApproved: '✓ Approved', stRemoved: '🚫 Access stopped',
    myShop: 'My shop', shopEdit: '🏪 Edit shop details', welcome: '✓ Registered! Welcome to Inimai Foods.'
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
    // பதிவு / அனுமதி இல்லாதவர்கள்: பொருட்கள் மட்டும் தெரியும்; விலை, தள்ளுபடி, கார்ட், ஆர்டர் மறைவு
    'body.guest .price,body.guest .off,body.guest #bnOff,body.guest .pdPrice,body.guest .mrp,body.guest .pdOff,body.guest .step,body.guest .pdGo,body.guest #fbar,body.guest #badge,body.guest .card .add,body.guest .card .unit,body.guest .pdUnit,body.guest .pdAct{display:none!important}',
    'body.guest .card .name{margin-top:8px}',
    '.gguest{margin:14px 16px 0;background:linear-gradient(135deg,#7A1532,#94203F);color:#fff;border-radius:18px;padding:14px 16px;display:grid;gap:8px;box-shadow:0 8px 20px rgba(122,21,50,.25)}',
    '.gguest b{font-family:"Baloo Thambi 2","Noto Sans Tamil",sans-serif;font-weight:800;font-size:19px;line-height:1.2}',
    '.gguest p{margin:0;font-size:14px;line-height:1.5;color:rgba(255,255,255,.9)}',
    '.gguest button,.gguest a{justify-self:start;font:inherit;font-weight:800;font-size:15px;color:#7A1532;background:#FFD27A;border:0;border-radius:12px;min-height:46px;padding:0 16px;cursor:pointer;display:inline-flex;align-items:center;text-decoration:none}',
    '.gguest.wait{background:linear-gradient(135deg,#8A5A00,#B07A10)}.gguest.rem{background:linear-gradient(135deg,#5E2A2A,#7A3030)}',
    '#gcta{position:fixed;left:8px;right:8px;bottom:76px;z-index:19;max-width:964px;margin:0 auto;border:0;border-radius:14px;min-height:56px;padding:8px 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;font:inherit;color:#fff;cursor:pointer;text-align:left;background:linear-gradient(135deg,#94203F,#7A1532 55%,#5E0F28);box-shadow:0 6px 18px rgba(0,0,0,.25)}',
    '#gcta[hidden]{display:none}#gcta b{display:block;font-size:16px}#gcta small{display:block;font-size:12px;opacity:.85}#gcta i{font-style:normal;font-size:22px;font-weight:800}',
    '#gcta.wait{background:linear-gradient(135deg,#9A6A00,#7A5200)}#gcta.rem{background:#5E2A2A}',
    'body[data-view]:not([data-view=home]) #gcta,body.gated #gcta{display:none!important}',
    '.gstat{display:inline-block;margin-top:6px;border-radius:999px;padding:3px 10px;font-size:13px;font-weight:700;background:#FFF3D6;color:#7A5200}.gstat.ok{background:#E3F4E7;color:#1E7B34}.gstat.no{background:#FBE3E6;color:#A3122A}',
    '@media (min-width:1024px){#gcta{left:auto;right:max(24px,calc((100% - 1200px)/2));bottom:24px;width:420px;max-width:none;margin:0}}',
    '.ghello{margin:14px 16px 0;display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#FFF3D6,#FFF8EE);border:1px solid #F0D9A8;border-radius:18px;padding:12px 14px;color:#22140C}',
    '.ghello .av{flex:none;width:44px;height:44px;border-radius:50%;background:#7A1532;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:19px}',
    '.ghello b{display:block;font-family:"Baloo Thambi 2","Noto Sans Tamil",sans-serif;font-weight:800;font-size:19px;color:#7A1532;line-height:1.2}',
    '.ghello small{display:block;color:#6B5446;font-size:13px}',
    '.gcode{display:grid;justify-items:center;gap:2px;background:#FFF8EE;border:1.5px dashed #C8892B;border-radius:16px;padding:14px;margin:4px 0 14px}',
    '.gcode small{font-size:13px;color:#6B5446;font-weight:600}.gcode b{font-size:38px;letter-spacing:.3em;color:#7A1532;font-family:"Baloo Thambi 2",sans-serif;font-weight:800;padding-left:.3em}',
    '.gwa{display:flex;align-items:center;justify-content:center;text-align:center;padding:6px 12px;gap:8px;min-height:56px;border-radius:14px;background:#1E9E4A;color:#fff;font-weight:800;font-size:17px;text-decoration:none;box-shadow:0 10px 22px rgba(30,158,74,.3)}',
    '.gnote.ok{color:#1E7B34;font-weight:600}',
    '.gback{font:inherit;font-size:14px;color:#7A1532;background:none;border:0;cursor:pointer;text-decoration:underline;justify-self:center}',
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
  function done() { var r = reg(); return !!(r && r.waOk); }          // பதிவு + WhatsApp உறுதி முடிந்தது
  function status() { var r = reg(); return r && r.status ? r.status : 'pending'; }
  function access() { return done() && status() === 'approved'; }   // விலை & ஆர்டர் (உரிமையாளர் அனுமதி)
  function setReg(fn) { var all = accts(), ph = curPhone(); if (!all[ph] || !all[ph].reg) return; fn(all[ph].reg); saveAccts(all); }
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
    { var cx = el('button', 'gclose', '✕', {type: 'button', 'aria-label': 'Close'}); cx.addEventListener('click', close); rt.appendChild(cx); }
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
      var old = c2.reg && c2.reg.waOk && was === ph ? c2.reg : null;
      c2.reg.code = (c2.reg && c2.reg.code && was === ph) ? c2.reg.code : String(1000 + Math.floor(Math.random() * 9000));
      c2.reg.waOk = !!old; if (!old) delete c2.reg.status;
      c2.sel = sa.id; saveAccts(all); store('inimai_cur', ph);
      send();
      if (!c2.reg.waOk) { verify(); return; }
      if (access()) close(); else { waiting(); refresh(); }
    });
  }

  // WhatsApp உறுதி (இலவசம்): வாடிக்கையாளர் தன் WhatsApp-லிருந்து குறியீட்டுடன் கடைக்கு செய்தி அனுப்புவார்.
  // செய்தி வந்த எண் = பதிவு செய்த எண் என்று உரிமையாளர் பார்த்து, Sheet-ல் "WhatsApp உறுதி" column-ல் ✓ போடலாம்.
  function verify() {
    var r = reg(), card = gate.querySelector('.gcard'); if (!r || !card) return;
    card.innerHTML = '';
    card.appendChild(el('h2', null, t('vH')));
    card.appendChild(el('p', 'gsub', t('vP').replace('{p}', '+91 ' + curPhone())));
    var box = el('div', 'gcode'); box.appendChild(el('small', null, t('vCode'))); box.appendChild(el('b', null, r.code)); card.appendChild(box);
    var text = t('vMsg').replace('{s}', r.shop).replace('{p}', curPhone()).replace('{c}', r.code);
    var wa = el('a', 'gwa', t('vSend'), {href: 'https://wa.me/' + ORDER_WHATSAPP + '?text=' + encodeURIComponent(text), target: '_blank', rel: 'noopener'});
    var go = el('button', 'ggo', t('vGo'), {type: 'button'}); go.disabled = true;
    var note = el('p', 'gnote', t('vNote'));
    wa.addEventListener('click', function () { go.disabled = false; note.textContent = t('vSent'); note.className = 'gnote ok'; });
    go.addEventListener('click', function () {
      var all = accts(), ph = curPhone(); if (!all[ph] || !all[ph].reg) return;
      all[ph].reg.waOk = true; all[ph].reg.waAt = Date.now(); saveAccts(all);
      if (access()) { close(); toast(t('welcome')); } else { waiting(); refresh(); }
    });
    var back = el('button', 'gback', t('vBack'), {type: 'button'});
    back.addEventListener('click', function () { draw(); });
    var f = el('div', 'gf'); [wa, note, go, back].forEach(function (x) { f.appendChild(x); }); card.appendChild(f);
    gate.scrollTop = 0; card.scrollIntoView({block: 'start'});
  }

  // பதிவு முடிந்து அனுமதிக்காக காத்திருக்கும் பக்கம் (அல்லது அனுமதி நிறுத்தப்பட்டது)
  function waiting() {
    var card = gate.querySelector('.gcard'); if (!card) { draw(); card = gate.querySelector('.gcard'); }
    var rem = status() === 'removed';
    card.innerHTML = '';
    if (!rem) card.appendChild(el('p', 'gnote ok', t('waitDone'), {style: 'text-align:left;font-size:15px;margin:0 0 6px'}));
    card.appendChild(el('h2', null, rem ? t('remH') : t('waitH')));
    card.appendChild(el('p', 'gsub', rem ? t('remP') : t('waitP'), {style: 'font-size:15px;line-height:1.55'}));
    var f = el('div', 'gf'), m = el('p', 'gnote', '', {role: 'status'});
    if (!rem) {
      var ck = el('button', 'ggo', t('waitCheck'), {type: 'button'});
      ck.addEventListener('click', function () {
        ck.disabled = true; m.className = 'gnote'; m.textContent = '…';
        refresh(function (ok) {
          ck.disabled = false;
          if (access()) return;
          if (status() === 'removed') { waiting(); return; }
          m.textContent = ok ? t('waitNo') : t('waitNet');
        });
      });
      f.appendChild(ck); f.appendChild(m);
    }
    var wa = el('a', 'gwa', t('waitAsk'), {href: 'https://wa.me/' + ORDER_WHATSAPP + '?text=' + encodeURIComponent(t('hello') + '! ' + (reg() || {}).shop + ' – ' + curPhone()), target: '_blank', rel: 'noopener'});
    f.appendChild(wa);
    var br = el('button', 'gback', t('waitBrowse'), {type: 'button'}); br.addEventListener('click', close); f.appendChild(br);
    card.appendChild(f);
    gate.hidden = false; document.body.classList.add('gated'); gate.scrollTop = 0; card.scrollIntoView({block: 'start'});
  }

  // முகப்பின் மேலே: அனுமதி உண்டு → "வணக்கம், <பெயர்>"; இல்லையெனில் பதிவு / காத்திருப்பு செய்தி
  function hello() {
    var r = reg(), home = $('v-home'), x = $('ghello');
    if (!home) return;
    if (!x) { x = el('div', null, null, {id: 'ghello', role: 'status'}); home.insertBefore(x, home.firstChild); }
    x.innerHTML = '';
    if (access()) {
      x.className = 'ghello';
      x.appendChild(el('span', 'av', (r.owner || r.shop || '?').trim().charAt(0).toUpperCase(), {'aria-hidden': 'true'}));
      var d = el('div'); d.appendChild(el('b', null, t('hello') + ', ' + (r.owner || r.shop) + '! 👋'));
      d.appendChild(el('small', null, r.shop + ' · ' + t('helloSub'))); x.appendChild(d);
      return;
    }
    var st = done() ? status() : 'guest';
    x.className = 'gguest' + (st === 'pending' ? ' wait' : st === 'removed' ? ' rem' : '');
    x.appendChild(el('b', null, st === 'guest' ? t('guestH') : st === 'removed' ? t('remH') : (r.owner ? t('hello') + ', ' + r.owner + '! ' : '') + t('waitH')));
    x.appendChild(el('p', null, st === 'guest' ? t('guestP') : st === 'removed' ? t('remP') : t('waitP')));
    if (st === 'guest') { /* ஒரே பதிவு பட்டன்: கீழே உள்ள பட்டை */ }
    else if (st === 'pending') { var c = el('button', null, t('waitCheck'), {type: 'button'}); c.addEventListener('click', waiting); x.appendChild(c); }
    else x.appendChild(el('a', null, t('waitAsk'), {href: 'https://wa.me/' + ORDER_WHATSAPP, target: '_blank', rel: 'noopener'}));
  }

  // கீழே உள்ள "பதிவு செய்து விலை பார்க்க" பட்டை (முகப்பில் மட்டும்)
  var cta = el('button', null, null, {id: 'gcta', type: 'button', hidden: ''});
  document.body.appendChild(cta);
  cta.addEventListener('click', ask);
  function bar() {
    var on = !access(); cta.hidden = !on; document.body.classList.toggle('guest', on);
    if (!on) return;
    var st = done() ? status() : 'guest';
    cta.className = st === 'pending' ? 'wait' : st === 'removed' ? 'rem' : '';
    cta.innerHTML = '';
    var d = el('span'); d.appendChild(el('b', null, st === 'guest' ? t('guestBar') : st === 'removed' ? t('remBar') : t('waitBar')));
    if (st !== 'removed') d.appendChild(el('small', null, st === 'guest' ? t('guestBarS') : t('waitBarS')));
    cta.appendChild(d); cta.appendChild(el('i', null, '›', {'aria-hidden': 'true'}));
  }
  // ஆர்டர் செய்ய முயன்றால்: பதிவு இல்லை → பதிவு படிவம்; பதிவு உண்டு → காத்திருப்பு / அனுமதி இல்லை
  function ask() { if (!done()) open(false); else waiting(); }

  // ஆர்டர் / கார்ட் / பழைய ஆர்டர்கள்: அனுமதி இல்லாதவர்களுக்கு தடை
  document.addEventListener('click', function (e) {
    if (access() || !e.target.closest) return;
    var x = e.target.closest('.add,.step,.cbar,#place,#wa,a[href="#cart"],a[href="#orders"],#reorder');
    if (!x || gate.contains(x)) return;
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
    try { if (!$('sheet').hidden) $('shClose').click(); } catch (er) {}
    ask();
  }, true);
  function guard() {
    if (access()) return;
    var hsh = location.hash;
    if (hsh === '#cart' || hsh === '#orders') { try { history.replaceState(null, '', '#home'); } catch (er) {} try { route(); } catch (er) {} }
  }
  window.addEventListener('hashchange', guard, true);

  function toast(s) { var x = el('div', 'gtoast', s, {role: 'status'}); document.body.appendChild(x); setTimeout(function () { x.remove(); }, 3500); }

  function send(cb) {
    var u = (window.INIMAI_SHEET_URL || '').trim(), c = acct(), r = reg();
    if (!u || !r || r.synced) { if (cb) cb(); return; }
    var body = {type: 'register', code: r.code, shop: r.shop, kind: r.kind, owner: r.owner, phone: curPhone(), addr: r.addr, area: r.area, pin: r.pin, gst: r.gst,
      lat: r.lat, lng: r.lng, lang: LANG};
    var ph = curPhone();
    fetch(u, {method: 'POST', headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: JSON.stringify(body)})
      .then(function (x) { return x.json(); })
      .then(function (j) {
        var all = accts(); if (!j || !all[ph] || !all[ph].reg) return;
        if (j.removed) { all[ph].reg.status = 'removed'; all[ph].reg.synced = true; }
        else if (j.ok && j.registered) { all[ph].reg.synced = true; if (j.id) all[ph].reg.id = j.id; if (j.status) all[ph].reg.status = j.status; }
        saveAccts(all); after();
      }).catch(function () {}).then(function () { if (cb) cb(); });
  }

  // உரிமையாளர் அனுமதி கொடுத்தாரா? (Sheet-ல் நிலை) – திறக்கும்போதும், திரும்ப வரும்போதும், காத்திருக்கும்போது ஒவ்வொரு நிமிடமும்
  var lastSt = null;
  function refresh(cb) {
    var u = (window.INIMAI_SHEET_URL || '').trim(), r = reg(), ph = curPhone();
    if (!u || !r || !done()) { if (cb) cb(false); return; }
    if (!r.synced) { send(function () { if (cb) cb(true); }); return; }
    fetch(u + '?api=shop&phone=' + encodeURIComponent(ph), {redirect: 'follow'})
      .then(function (x) { return x.json(); })
      .then(function (j) {
        if (!j || !j.ok) { if (cb) cb(false); return; }
        if (!j.found) { setReg(function (g) { g.synced = false; }); send(function () { if (cb) cb(true); }); return; }
        setReg(function (g) { g.status = j.status; });
        after(); if (cb) cb(true);
      }).catch(function () { if (cb) cb(false); });
  }
  function after() {
    var st = done() ? status() : 'guest';
    if (lastSt && lastSt !== st && st === 'approved') { toast(t('approved')); if (!gate.hidden && !EDITING) close(); }
    if (st === 'removed' && !gate.hidden && !EDITING && lastSt !== 'removed') waiting();
    lastSt = st; bar(); hello(); profileShop(); guard();
  }
  document.addEventListener('visibilitychange', function () { if (!document.hidden) refresh(); });
  setInterval(function () { if (!document.hidden && done() && status() === 'pending') refresh(); }, 60000);

  function open(edit) { EDITING = !!edit; kind = ''; loc = null; draw(); gate.hidden = false; gate.scrollTop = 0; document.body.classList.add('gated'); }
  function close() {
    gate.hidden = true; document.body.classList.remove('gated'); EDITING = false;
    try { syncFields(); renderAcctOrig(); } catch (e) {}
    after();
  }
  function check() { if (!gate.hidden && !EDITING && access()) close(); }

  // Profile பக்கத்தில் "என் கடை" விவரமும் மாற்றும் பட்டனும்
  function profileShop() {
    var pf = $('profBox'), r = reg(); if (!pf) return;
    var old = pf.querySelector('.shopbox'); if (old) old.remove();
    if (!r || !done()) {
      var g = el('div', 'shopbox', null, {style: 'margin:12px 0;padding:12px;border:1px solid var(--line);border-radius:14px;background:var(--cream)'});
      g.appendChild(el('div', 'pkT', t('myShopReg'), {style: 'margin:0 0 4px'})); g.appendChild(el('div', 'unit', t('myShopRegP')));
      var rb = el('button', 'btn', t('guestBtn'), {type: 'button', style: 'margin-top:10px'}); rb.addEventListener('click', function () { open(false); });
      g.appendChild(rb); pf.insertBefore(g, pf.firstChild); return;
    }
    var b = el('div', 'shopbox', null, {style: 'margin:12px 0;padding:12px;border:1px solid var(--line);border-radius:14px;background:var(--cream)'});
    var k = KINDS.filter(function (x) { return x[0] === r.kind; })[0];
    b.appendChild(el('div', 'pkT', t('myShop'), {style: 'margin:0 0 4px'}));
    b.appendChild(el('b', null, (k ? k[1] + ' ' : '') + r.shop));
    b.appendChild(el('div', 'unit', (k ? t(k[2]) + ' · ' : '') + r.owner + (r.id ? ' · ' + r.id : '')));
    var st = status(); b.appendChild(el('span', 'gstat' + (st === 'approved' ? ' ok' : st === 'removed' ? ' no' : ''), t(st === 'approved' ? 'stApproved' : st === 'removed' ? 'stRemoved' : 'stPending')));
    b.appendChild(el('br'));
    var e = el('button', 'btn btn2', t('shopEdit'), {type: 'button', style: 'margin-top:10px'});
    e.addEventListener('click', function () { open(true); });
    b.appendChild(e);
    var first = pf.querySelector('.pcard'); if (first && first.nextSibling) pf.insertBefore(b, first.nextSibling); else pf.appendChild(b);
  }

  var renderAcctOrig = window.renderAcct;
  window.renderAcct = function () { renderAcctOrig(); profileShop(); hello(); bar(); check(); };
  var applyOrig = window.applyLang;
  window.applyLang = function () { applyOrig(); bar(); hello(); if (!gate.hidden) { if (done() && !EDITING) waiting(); else draw(); } };

  after(); refresh();
})();
