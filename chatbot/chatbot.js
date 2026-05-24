/* ═══════════════════════════════════════════════════════════════
   Sarah Woods — FAQ Chatbot
   ─────────────────────────────────────────────────────────────
   To teach the chatbot new answers, add entries to the FAQS
   array below. Each entry needs:
     q    — the question (use several phrasings, space-separated)
     a    — the answer shown to the visitor (HTML is allowed)
     tags — keywords that trigger this answer
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ─── FAQ DATA ─────────────────────────────────────────────── */
  var FAQS = [
    {
      q: 'do you ship internationally where do you ship countries deliver abroad',
      a: 'Yes, I ship worldwide! Shipping costs and estimated delivery times are shown at checkout based on your location.',
      tags: ['ship', 'international', 'worldwide', 'delivery', 'abroad', 'overseas', 'countries']
    },
    {
      q: 'how long does shipping take delivery time how quickly can I get my print dispatch days weeks',
      a: 'Please allow 2 working days for Sarah to collect and prepare your print, then add your chosen delivery time on top of that. The shipping options at checkout are:<br><br>• <strong>Ireland:</strong> 1–3 business days (€9)<br>• <strong>EU / UK:</strong> 4–7 business days (€15)<br>• <strong>Worldwide standard:</strong> 7–14 business days (€20)<br>• <strong>Worldwide express:</strong> 5–7 business days (€36)<br><br>All orders are tracked.',
      tags: ['shipping', 'delivery', 'time', 'long', 'dispatch', 'arrive', 'days', 'weeks', 'when', 'quickly', 'fast', 'soon', 'tracked']
    },
    {
      q: 'return policy can I return my order refund exchange damaged wrong',
      a: 'We don\'t accept returns for change of mind, but if your print arrives damaged or there\'s an issue with your order, get in touch within 14 days and we\'ll make it right. Email us at <a href="mailto:sarahwoodsartist@gmail.com" style="color:inherit;font-weight:500">sarahwoodsartist@gmail.com</a> with a photo and your order details.',
      tags: ['return', 'refund', 'exchange', 'damaged', 'policy', 'wrong', 'broken', 'fault', 'change of mind']
    },
    {
      q: 'are prints limited edition how many per edition numbered sold out',
      a: 'Yes! Limited edition prints are available in editions of 50 per size. Each print is numbered. Once they sell out they won\'t be reprinted, so grab one while you can.',
      tags: ['limited', 'edition', 'numbered', '50', 'sold out']
    },
    {
      q: 'what sizes are available print size dimensions measurements how big how small',
      a: 'Our smallest print is 10 x 10 inches, and our largest is A2. Sizes vary across collections, so the best place to check is each individual collection in the <a href="/shop/" style="color:inherit;font-weight:500">Shop</a>.',
      tags: ['size', 'sizes', 'dimension', 'measurement', 'large', 'small', 'format', 'cm', 'inch', 'a1', 'a2', 'a3', 'big']
    },
    {
      q: 'payment methods accepted how do I pay card checkout',
      a: 'Payments are handled securely through Stripe. You can pay by credit or debit card at checkout.',
      tags: ['payment', 'pay', 'card', 'stripe', 'credit', 'debit', 'checkout', 'purchase']
    },
    {
      q: 'custom orders commission painting request personalised bespoke',
      a: 'Custom commissions aren\'t available right now. I\'m focused on my existing collections. Follow me on Instagram (<a href="https://instagram.com/sarahwoods_art" target="_blank" style="color:inherit;font-weight:500">@sarahwoods_art</a>) to be the first to know if that changes!',
      tags: ['custom', 'commission', 'personalised', 'bespoke', 'request', 'specific']
    },
    {
      q: 'how do I contact you get in touch email message',
      a: 'You can reach me at <a href="mailto:sarahwoodsartist@gmail.com" style="color:inherit;font-weight:500">sarahwoodsartist@gmail.com</a> or through the <a href="/contact/" style="color:inherit;font-weight:500">Contact page</a>. I aim to reply within 2–3 business days.',
      tags: ['contact', 'email', 'touch', 'message', 'reach', 'talk', 'speak']
    },
    {
      q: 'who is sarah woods about the artist biography story',
      a: 'Sarah Woods is an Irish artist and writer. You can learn more about her work on the <a href="/about/" style="color:inherit;font-weight:500">About page</a>.',
      tags: ['who', 'about', 'artist', 'biography', 'story', 'background']
    },
    {
      q: 'ireland collection emerald eire prints irish',
      a: 'The Ireland Collection features prints inspired by the beauty of Ireland, including Emerald Eire, We\'re From, and Cóisir. Browse it in the <a href="/shop/ireland/" style="color:inherit;font-weight:500">Shop</a>.',
      tags: ['ireland', 'irish', 'collection', 'emerald', 'eire', 'coisir']
    },
    {
      q: 'track my order tracking number shipment status where is it',
      a: 'Tracking details are emailed to you once your order is dispatched. If you haven\'t received them, check your spam folder or contact me at <a href="mailto:sarahwoodsartist@gmail.com" style="color:inherit;font-weight:500">sarahwoodsartist@gmail.com</a>.',
      tags: ['track', 'tracking', 'order', 'status', 'shipment', 'number']
    },
    {
      q: 'what paper are your art prints printed on material quality made from',
      a: 'Our prints at The Copper House are made to stand the test of time. We print onto a curated selection of certified Hahnemühle fine art papers. This choice of paper adds an extra layer of texture and quality to the final print.',
      tags: ['paper', 'material', 'quality', 'made', 'medium', 'archival', 'hahnemuhle', 'printed', 'texture']
    },
    {
      q: 'price how much does a print cost pricing euro',
      a: 'Print prices vary by size and edition. You\'ll find the full pricing on each product page in the <a href="/shop/" style="color:inherit;font-weight:500">Shop</a>.',
      tags: ['price', 'cost', 'expensive', 'pricing', 'euro', 'pound', 'dollar', 'much']
    },
    {
      q: 'can I buy this framed do you offer framing framed prints',
      a: 'Unfortunately we don\'t offer a framing service, but we print our art prints at The Copperhouse Gallery where you can get it framed.',
      tags: ['frame', 'framed', 'framing', 'unframed', 'mount']
    },
    {
      q: 'can I pay in installments split the cost payment plan finance klarna',
      a: 'Yes! We offer Klarna at checkout, which lets you split the cost into 3 installments. Your print is sent out as normal once we receive your order. You don\'t need to complete all 3 payments before it ships. We aim to get every print out within 2 working days.',
      tags: ['installment', 'installments', 'klarna', 'split', 'finance', 'plan', 'later', 'monthly', 'deposit', 'pay later']
    }
  ];

  var SUGGESTIONS = [
    'Do you ship worldwide?',
    'What sizes are available?',
    'What\'s your return policy?',
    'Find my perfect print'
  ];

  var GREETING = 'Hi! I\'m Sarah\'s virtual assistant. Ask me anything about prints, shipping, or orders, or tap a question below to get started.';
  var FALLBACK  = 'I\'m not sure about that one! For anything I can\'t answer, you can reach Sarah directly at <a href="mailto:sarahwoodsartist@gmail.com" style="color:inherit;font-weight:500">sarahwoodsartist@gmail.com</a> or via the <a href="/contact/" style="color:inherit;font-weight:500">Contact page</a>.';

  /* ─── QUIZ DATA ─────────────────────────────────────────────── */
  var QUIZ_QUESTIONS = [
    {
      text: 'I\'ll ask you 3 quick questions to find your perfect print. First — what kind of art catches your eye?',
      options: [
        { label: 'Abstract and emotional — art that makes you feel something', value: 'abstract' },
        { label: 'Bold colours and joy — life is too short to be beige', value: 'colour' },
        { label: 'Landscapes and the great outdoors', value: 'landscape' },
        { label: 'Feminine and figure-led — prints with a story in them', value: 'feminine' }
      ]
    },
    {
      text: 'If your walls could say one thing, they\'d say...',
      options: [
        { label: 'I have depth. I\'m a bit moody. I\'m not sorry.', value: 'moody' },
        { label: 'I love colour. Life is bright.', value: 'colourful' },
        { label: 'I\'m rooted in the land and proud of it.', value: 'rooted' },
        { label: 'Home is personal. This print means something.', value: 'personal' }
      ]
    },
    {
      text: 'Last one! What\'s your connection to Ireland?',
      options: [
        { label: 'I\'m Irish and proud of it', value: 'irish' },
        { label: 'Irish at heart, wherever I am', value: 'irish_heart' },
        { label: 'I love Ireland but I\'m not from there', value: 'loves' },
        { label: 'No particular connection to Ireland', value: 'no_ireland' }
      ]
    }
  ];

  var QUIZ_PRINTS = {
    emeraldEire: {
      name: 'Emerald Eire',
      desc: 'Contemporary and patriotic. A limited edition print celebrating Ireland at its most striking and beautiful.',
      url: '/shop/ireland/emeraldEire.html',
      cta: 'View Emerald Eire'
    },
    wicklowLumps: {
      name: 'Wicklow Lumps',
      desc: 'Earthy, grounded and quietly stunning. Wicklow Lumps captures the raw landscape of Ireland in a print that feels like home.',
      url: '/shop/ireland/wicklowLumps.html',
      cta: 'View Wicklow Lumps'
    },
    coisir: {
      name: 'Cóisir',
      desc: 'Moody, messy and unmistakably Irish. Cóisir is a bold abstract piece that carries the spirit of Ireland in every mark.',
      url: '/shop/ireland/coisir.html',
      cta: 'View Cóisir'
    },
    wereFrom: {
      name: "We're From",
      desc: 'Feminine, personal and pop. A personalised print of Ireland — tell me where you\'re from and I\'ll mark it on the map before it ships.',
      url: '/shop/ireland/weAreFrom.html',
      cta: "View We're From"
    },
    slidingSouls: {
      name: 'Sliding Souls',
      desc: 'Ethereal and red. An abstract print about those sliding doors moments in life — the kind of piece that makes you stop and think.',
      url: '/shop/abstracts/slidingSouls.html',
      cta: 'View Sliding Souls'
    },
    sprinkles: {
      name: 'Sprinkles',
      desc: 'Pop, fun and full of energy. Sprinkles brings colour and joy to any room — impossible not to smile at.',
      url: '/shop/ireland/sprinkles.html',
      cta: 'View Sprinkles'
    },
    onTheHill: {
      name: 'On the Hill',
      desc: 'Pop colours, florals and a whole lot of life. On the Hill brings the outdoors in with bold, beautiful energy.',
      url: '/shop/florals/',
      cta: 'View On the Hill'
    },
    bliss: {
      name: 'Bliss',
      desc: 'Fun, cheeky, feminine and classy — Bliss is the kind of print that works in any room and always gets a comment.',
      url: '/shop/women/bliss.html',
      cta: 'View Bliss'
    },
    leanBack: {
      name: 'Lean Back',
      desc: 'Feminine and Irish with a quiet confidence. Lean Back is a figure-led print full of story and personality.',
      url: '/shop/women/leanBack.html',
      cta: 'View Lean Back'
    }
  };

  function getQuizRecommendation(answers) {
    var order = ['emeraldEire', 'wicklowLumps', 'coisir', 'wereFrom', 'slidingSouls', 'sprinkles', 'onTheHill', 'bliss', 'leanBack'];
    var scores = {};
    for (var i = 0; i < order.length; i++) { scores[order[i]] = 0; }

    if (answers[0] === 'abstract')  { scores.slidingSouls += 3; scores.coisir += 2; }
    if (answers[0] === 'colour')    { scores.sprinkles += 2; scores.onTheHill += 2; scores.bliss += 2; }
    if (answers[0] === 'landscape') { scores.wicklowLumps += 3; scores.emeraldEire += 2; }
    if (answers[0] === 'feminine')  { scores.leanBack += 3; scores.bliss += 2; scores.wereFrom += 1; }

    if (answers[1] === 'moody')     { scores.slidingSouls += 3; scores.coisir += 3; }
    if (answers[1] === 'colourful') { scores.sprinkles += 2; scores.onTheHill += 2; scores.bliss += 1; }
    if (answers[1] === 'rooted')    { scores.wicklowLumps += 3; scores.emeraldEire += 2; }
    if (answers[1] === 'personal')  { scores.wereFrom += 3; scores.leanBack += 2; }

    if (answers[2] === 'irish')       { scores.emeraldEire += 3; scores.coisir += 2; scores.wicklowLumps += 1; }
    if (answers[2] === 'irish_heart') { scores.wereFrom += 3; scores.emeraldEire += 1; }
    if (answers[2] === 'loves')       { scores.wicklowLumps += 2; scores.wereFrom += 1; scores.emeraldEire += 1; }

    var best = order[0], bestScore = -1;
    for (var j = 0; j < order.length; j++) {
      if (scores[order[j]] > bestScore) { bestScore = scores[order[j]]; best = order[j]; }
    }
    return QUIZ_PRINTS[best];
  }

  /* ─── FAQ MATCHING ─────────────────────────────────────────── */
  var STOP = { a:1,an:1,the:1,is:1,are:1,do:1,does:1,can:1,i:1,my:1,how:1,what:1,when:1,where:1,why:1,will:1,would:1,please:1,help:1,me:1,you:1,your:1,it:1,this:1,that:1,to:1,for:1,of:1,on:1,in:1,at:1,by:1,with:1,from:1,have:1,has:1,had:1,be:1,been:1,was:1,were:1,am:1,get:1,got:1,about:1,some:1,any:1,all:1,just:1,and:1,or:1,not:1 };

  function norm(s) {
    return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function tokens(s) {
    return norm(s).split(' ').filter(function(w) { return w.length > 2 && !STOP[w]; });
  }

  function isQuizTrigger(input) {
    var n = norm(input);
    return /find|quiz|recommend|which print|not sure|help me choose|suggest|perfect print/.test(n);
  }

  function findAnswer(input) {
    var inputNorm  = norm(input);
    var inputToks  = tokens(input);
    var best = { score: 0, answer: null };

    for (var i = 0; i < FAQS.length; i++) {
      var faq   = FAQS[i];
      var qNorm = norm(faq.q);
      var score = 0;

      for (var t = 0; t < faq.tags.length; t++) {
        if (inputNorm.indexOf(norm(faq.tags[t])) !== -1) score += 0.7;
      }

      if (inputToks.length > 0) {
        var hits = 0;
        for (var k = 0; k < inputToks.length; k++) {
          if (qNorm.indexOf(inputToks[k]) !== -1) hits++;
        }
        score += (hits / inputToks.length) * 1.5;
      }

      if (inputNorm.length >= 4 && qNorm.indexOf(inputNorm) !== -1) score += 1.0;

      if (score > best.score) { best.score = score; best.answer = faq.a; }
    }

    return best.score >= 0.5 ? best.answer : null;
  }

  /* ─── STYLES ───────────────────────────────────────────────── */
  var styleEl = document.createElement('style');
  styleEl.textContent = [
    '#sw-bubble{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:#111;color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:9100;box-shadow:0 4px 20px rgba(0,0,0,.22);transition:transform .2s,box-shadow .2s}',
    '#sw-bubble:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(0,0,0,.3)}',
    '#sw-bubble svg{pointer-events:none}',
    '#sw-win{position:fixed;bottom:92px;right:24px;width:340px;max-height:540px;background:#fff;border:1px solid #e4e4e4;border-radius:18px;box-shadow:0 12px 40px rgba(0,0,0,.14);z-index:9099;display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(16px) scale(.97);pointer-events:none;transition:opacity .22s,transform .22s;text-align:left}',
    '#sw-win.sw-open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}',
    '#sw-head{background:#111;color:#fff;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}',
    '#sw-head-title{font-family:"Helvetica Neue",Arial,sans-serif;font-size:.85rem;font-weight:500;letter-spacing:.4px}',
    '#sw-head-sub{font-size:.72rem;opacity:.55;margin-top:2px;font-family:"Helvetica Neue",Arial,sans-serif}',
    '#sw-x{background:none;border:none;color:#fff;cursor:pointer;padding:4px;opacity:.65;transition:opacity .15s;line-height:0}',
    '#sw-x:hover{opacity:1}',
    '#sw-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}',
    '#sw-msgs::-webkit-scrollbar{width:4px}',
    '#sw-msgs::-webkit-scrollbar-thumb{background:#ddd;border-radius:4px}',
    '.sw-msg{max-width:83%;padding:10px 14px;border-radius:14px;font-size:.85rem;line-height:1.65;font-family:"Helvetica Neue",Arial,sans-serif;word-break:break-word}',
    '.sw-bot{align-self:flex-start;background:#f2f2f2;color:#222;border-bottom-left-radius:4px}',
    '.sw-user{align-self:flex-end;background:#111;color:#fff;border-bottom-right-radius:4px}',
    '.sw-dots{align-self:flex-start;background:#f2f2f2;color:#999;border-radius:14px;border-bottom-left-radius:4px;padding:10px 18px;font-size:1.2rem;letter-spacing:3px;line-height:1}',
    '#sw-sugg{padding:4px 14px 12px;display:flex;flex-wrap:wrap;gap:6px;flex-shrink:0}',
    '.sw-sq{background:#fff;border:1px solid #ddd;border-radius:20px;padding:5px 12px;font-size:.76rem;cursor:pointer;font-family:"Helvetica Neue",Arial,sans-serif;color:#444;transition:background .15s,color .15s,border-color .15s;white-space:nowrap}',
    '.sw-sq:hover{background:#111;color:#fff;border-color:#111}',
    '.sw-sq.sw-quiz-pill{border-color:#111;color:#111;font-weight:500}',
    '.sw-sq.sw-quiz-pill:hover{background:#111;color:#fff}',
    '#sw-irow{padding:12px 14px;border-top:1px solid #eee;display:flex;gap:8px;flex-shrink:0;background:#fff}',
    '#sw-input{flex:1;border:1px solid #e0e0e0;border-radius:10px;padding:9px 13px;font-size:.85rem;font-family:"Helvetica Neue",Arial,sans-serif;outline:none;background:#fafafa;color:#222;transition:border-color .15s}',
    '#sw-input:focus{border-color:#999;background:#fff}',
    '#sw-send{background:#111;color:#fff;border:none;border-radius:10px;padding:9px 15px;cursor:pointer;font-size:.85rem;transition:background .15s;flex-shrink:0}',
    '#sw-send:hover{background:#333}',
    'html.dark-mode #sw-win{background:#1c1c1c;border-color:#2e2e2e}',
    'html.dark-mode .sw-bot,html.dark-mode .sw-dots{background:#2a2a2a;color:#e0e0e0}',
    'html.dark-mode .sw-sq{background:#1c1c1c;border-color:#3a3a3a;color:#bbb}',
    'html.dark-mode .sw-sq:hover{background:#f0f0f0;color:#111;border-color:#f0f0f0}',
    'html.dark-mode #sw-irow{background:#1c1c1c;border-top-color:#2e2e2e}',
    'html.dark-mode #sw-input{background:#252525;color:#e0e0e0;border-color:#3a3a3a}',
    'html.dark-mode #sw-input:focus{border-color:#666;background:#2a2a2a}',
    '.sw-followup{font-size:.75rem;color:#999;font-family:"Helvetica Neue",Arial,sans-serif;text-align:left;padding:0 2px 4px}',
    '.sw-followup a{color:#999;text-decoration:underline}',
    '.sw-followup a:hover{color:#555}',
    'html.dark-mode .sw-followup,.sw-followup a{color:#666}',
    'html.dark-mode .sw-followup a:hover{color:#999}',
    '.sw-quiz-q{max-width:100%;width:100%;box-sizing:border-box}',
    '.sw-quiz-opt{display:block;width:100%;text-align:left;background:#fff;border:1px solid #ddd;border-radius:10px;padding:9px 12px;font-size:.82rem;cursor:pointer;font-family:"Helvetica Neue",Arial,sans-serif;color:#333;margin-top:7px;transition:background .15s,color .15s,border-color .15s;line-height:1.4}',
    '.sw-quiz-opt:first-of-type{margin-top:10px}',
    '.sw-quiz-opt:hover:not(:disabled){background:#111;color:#fff;border-color:#111}',
    '.sw-quiz-opt:disabled{cursor:default}',
    '.sw-quiz-opt.sw-quiz-selected{background:#111;color:#fff;border-color:#111;opacity:1!important}',
    'html.dark-mode .sw-quiz-opt{background:#2a2a2a;border-color:#3a3a3a;color:#bbb}',
    'html.dark-mode .sw-quiz-opt:hover:not(:disabled){background:#f0f0f0;color:#111;border-color:#f0f0f0}',
    'html.dark-mode .sw-quiz-opt.sw-quiz-selected{background:#f0f0f0;color:#111;border-color:#f0f0f0}',
    '.sw-quiz-result{max-width:100%;width:100%;box-sizing:border-box}',
    '.sw-quiz-result-name{font-size:1rem;font-weight:600;margin:0 0 6px;font-family:"Helvetica Neue",Arial,sans-serif}',
    '.sw-quiz-result-desc{font-size:.82rem;line-height:1.6;color:#555;margin:0 0 14px;font-family:"Helvetica Neue",Arial,sans-serif}',
    '.sw-quiz-result-btn{display:inline-block;background:#111;color:#fff;padding:9px 18px;border-radius:10px;text-decoration:none;font-size:.82rem;font-family:"Helvetica Neue",Arial,sans-serif;transition:background .15s}',
    '.sw-quiz-result-btn:hover{background:#333;color:#fff}',
    '@media(max-width:420px){#sw-win{width:calc(100vw - 20px);right:10px;bottom:82px}#sw-bubble{bottom:16px;right:16px}}'
  ].join('');
  document.head.appendChild(styleEl);

  /* ─── BUILD DOM ────────────────────────────────────────────── */
  var CHAT_ICON  = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  var CLOSE_ICON = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  var bubble = document.createElement('button');
  bubble.id = 'sw-bubble';
  bubble.setAttribute('aria-label', 'Open FAQ chat');
  bubble.setAttribute('aria-expanded', 'false');
  bubble.innerHTML = CHAT_ICON;

  var win = document.createElement('div');
  win.id = 'sw-win';
  win.setAttribute('role', 'dialog');
  win.setAttribute('aria-label', 'FAQ Chat');
  win.innerHTML =
    '<div id="sw-head">' +
      '<div><div id="sw-head-title">Ask Sarah\'s Assistant</div><div id="sw-head-sub">FAQ bot &middot; usually instant</div></div>' +
      '<button id="sw-x" aria-label="Close chat">' + CLOSE_ICON + '</button>' +
    '</div>' +
    '<div id="sw-msgs"></div>' +
    '<div id="sw-sugg"></div>' +
    '<div id="sw-irow">' +
      '<input id="sw-input" type="text" placeholder="Ask a question…" autocomplete="off" maxlength="200">' +
      '<button id="sw-send">Send</button>' +
    '</div>';

  document.body.appendChild(bubble);
  document.body.appendChild(win);

  /* ─── LOGIC ────────────────────────────────────────────────── */
  var msgsEl   = win.querySelector('#sw-msgs');
  var suggEl   = win.querySelector('#sw-sugg');
  var inputEl  = win.querySelector('#sw-input');
  var isOpen   = false;
  var greeted  = false;

  var quizActive  = false;
  var quizAnswers = [];

  function addMsg(text, type) {
    var m = document.createElement('div');
    m.className = 'sw-msg sw-' + type;
    m.innerHTML = text;
    msgsEl.appendChild(m);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return m;
  }

  function showDots() {
    var dots = document.createElement('div');
    dots.className = 'sw-dots';
    dots.textContent = '···';
    msgsEl.appendChild(dots);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return dots;
  }

  /* ─── QUIZ FUNCTIONS ───────────────────────────────────────── */
  function showQuizQuestion(stepIdx) {
    var dots = showDots();
    setTimeout(function () {
      dots.remove();
      var q = QUIZ_QUESTIONS[stepIdx];
      var msgDiv = document.createElement('div');
      msgDiv.className = 'sw-msg sw-bot sw-quiz-q';

      var pEl = document.createElement('p');
      pEl.style.cssText = 'margin:0;font-family:"Helvetica Neue",Arial,sans-serif;font-size:.85rem;line-height:1.65;';
      pEl.textContent = q.text;
      msgDiv.appendChild(pEl);

      q.options.forEach(function (opt) {
        var btn = document.createElement('button');
        btn.className = 'sw-quiz-opt';
        btn.textContent = opt.label;
        btn.addEventListener('click', function () {
          msgDiv.querySelectorAll('.sw-quiz-opt').forEach(function (b) {
            b.disabled = true;
            b.style.opacity = '0.38';
          });
          btn.classList.add('sw-quiz-selected');
          btn.style.opacity = '1';

          quizAnswers.push(opt.value);
          addMsg(opt.label, 'user');

          if (quizAnswers.length < QUIZ_QUESTIONS.length) {
            showQuizQuestion(quizAnswers.length);
          } else {
            showQuizResult();
          }
        });
        msgDiv.appendChild(btn);
      });

      msgsEl.appendChild(msgDiv);
      msgsEl.scrollTop = msgsEl.scrollHeight;
    }, 700);
  }

  function showQuizResult() {
    var dots = showDots();
    setTimeout(function () {
      dots.remove();
      var print = getQuizRecommendation(quizAnswers);

      var resultDiv = document.createElement('div');
      resultDiv.className = 'sw-msg sw-bot sw-quiz-result';

      var intro = document.createElement('p');
      intro.style.cssText = 'margin:0 0 10px;font-family:"Helvetica Neue",Arial,sans-serif;font-size:.85rem;line-height:1.65;';
      intro.textContent = 'Based on your answers, your perfect print is...';
      resultDiv.appendChild(intro);

      var name = document.createElement('p');
      name.className = 'sw-quiz-result-name';
      name.textContent = print.name;
      resultDiv.appendChild(name);

      var desc = document.createElement('p');
      desc.className = 'sw-quiz-result-desc';
      desc.textContent = print.desc;
      resultDiv.appendChild(desc);

      var link = document.createElement('a');
      link.className = 'sw-quiz-result-btn';
      link.href = print.url;
      link.textContent = print.cta + ' →';
      resultDiv.appendChild(link);

      msgsEl.appendChild(resultDiv);

      var followUp = document.createElement('div');
      followUp.className = 'sw-followup';
      followUp.innerHTML = 'Want to browse everything? Visit the <a href="/shop/">full Shop</a>.';
      msgsEl.appendChild(followUp);

      msgsEl.scrollTop = msgsEl.scrollHeight;
      quizActive = false;
      quizAnswers = [];
    }, 900);
  }

  function startQuiz() {
    quizActive = true;
    quizAnswers = [];
    suggEl.style.display = 'none';
    showQuizQuestion(0);
  }

  /* ─── FAQ RESPOND ──────────────────────────────────────────── */
  function respond(question) {
    addMsg(question, 'user');
    suggEl.style.display = 'none';

    if (isQuizTrigger(question)) {
      startQuiz();
      return;
    }

    var dots = showDots();
    setTimeout(function () {
      dots.remove();
      addMsg(findAnswer(question) || FALLBACK, 'bot');
      var followUp = document.createElement('div');
      followUp.className = 'sw-followup';
      followUp.innerHTML = 'Not quite the answer you needed? <a href="mailto:sarahwoodsartist@gmail.com">Email us</a> and Sarah will get back to you.';
      msgsEl.appendChild(followUp);
      msgsEl.scrollTop = msgsEl.scrollHeight;
    }, 650);
  }

  function openChat() {
    isOpen = true;
    win.classList.add('sw-open');
    bubble.setAttribute('aria-expanded', 'true');
    bubble.innerHTML = CLOSE_ICON;

    if (!greeted) {
      greeted = true;
      addMsg(GREETING, 'bot');
      for (var i = 0; i < SUGGESTIONS.length; i++) {
        (function (q) {
          var btn = document.createElement('button');
          btn.className = q === 'Find my perfect print' ? 'sw-sq sw-quiz-pill' : 'sw-sq';
          btn.textContent = q;
          btn.addEventListener('click', function () {
            if (q === 'Find my perfect print') {
              addMsg(q, 'user');
              suggEl.style.display = 'none';
              startQuiz();
            } else {
              respond(q);
            }
          });
          suggEl.appendChild(btn);
        })(SUGGESTIONS[i]);
      }
    }

    setTimeout(function () { inputEl.focus(); }, 60);
  }

  function closeChat() {
    isOpen = false;
    win.classList.remove('sw-open');
    bubble.setAttribute('aria-expanded', 'false');
    bubble.innerHTML = CHAT_ICON;
  }

  function sendMsg() {
    var q = inputEl.value.trim();
    if (!q) return;
    inputEl.value = '';
    respond(q);
  }

  bubble.addEventListener('click', function (e) {
    e.stopPropagation();
    isOpen ? closeChat() : openChat();
  });

  win.querySelector('#sw-x').addEventListener('click', closeChat);
  win.querySelector('#sw-send').addEventListener('click', sendMsg);
  inputEl.addEventListener('keydown', function (e) { if (e.key === 'Enter') sendMsg(); });

  document.addEventListener('click', function (e) {
    if (isOpen && !win.contains(e.target) && e.target !== bubble) closeChat();
  });

})();
