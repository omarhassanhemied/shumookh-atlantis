/* =========================================================
   main.js — سلوك الصفحة (بدون فريمورك)
   يقرأ js/config.js و js/translations.js
   ========================================================= */
(function () {
  'use strict';

  var C = window.SITE_CONFIG || {};
  var I = window.I18N || {};
  var doc = document;
  var root = doc.documentElement;
  var lang = C.defaultLang || 'ar';

  function $(s, r) { return (r || doc).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); }
  function enabledLangs() { return C.enabledLanguages && C.enabledLanguages.length ? C.enabledLanguages : ['ar']; }
  function t(key, l) {
    var d = I[l || lang] || I.ar || {};
    if (d[key] !== undefined) return d[key];
    return (I.ar && I.ar[key] !== undefined) ? I.ar[key] : key;
  }
  function pick(obj) {            // {ar,en} أو نص
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.ar || '';
  }

  /* ---------- الهاتف ---------- */
  function e164(s) {
    s = String(s || '').replace(/[^\d+]/g, '');
    if (!s) return '';
    if (s.charAt(0) === '+') return s;
    if (s.indexOf('00') === 0) return '+' + s.slice(2);
    if (s.charAt(0) === '0') return '+966' + s.slice(1);
    if (s.indexOf('966') === 0) return '+' + s;
    return '+966' + s;
  }
  function fmtPhone(e) {
    var m = String(e).match(/^\+966(\d{2})(\d{3})(\d{4})$/);
    return m ? '+966 ' + m[1] + ' ' + m[2] + ' ' + m[3] : e;
  }
  var PH = C.phones || {};
  var CALL = e164(PH.call || PH.whatsapp);
  var WA = e164(PH.whatsapp || PH.call);
  function waUrl(msg) { return 'https://wa.me/' + WA.replace('+', '') + '?text=' + encodeURIComponent(msg); }

  /* ---------- التتبع (يعمل فقط لو المعرّف موجود في config) ---------- */
  var TR = C.tracking || {};
  function loadTracking() {
    var w = window, d = doc, s, id;
    if (TR.gtm) {
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      s = d.createElement('script'); s.async = true;
      s.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(TR.gtm);
      d.head.appendChild(s);
    }
    if (TR.ga4) {
      w.dataLayer = w.dataLayer || [];
      w.gtag = w.gtag || function () { w.dataLayer.push(arguments); };
      w.gtag('js', new Date()); w.gtag('config', TR.ga4);
      s = d.createElement('script'); s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(TR.ga4);
      d.head.appendChild(s);
    }
    if (TR.metaPixel) {
      (function (f, b, e, v, n, t2, s2) {
        if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
        t2 = b.createElement(e); t2.async = true; t2.src = v; s2 = b.getElementsByTagName(e)[0]; s2.parentNode.insertBefore(t2, s2);
      })(w, d, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      w.fbq('init', TR.metaPixel); w.fbq('track', 'PageView');
    }
    if (TR.tiktokPixel) {
      id = TR.tiktokPixel;
      (function (w2, d2, t2) {
        w2.TiktokAnalyticsObject = t2; var ttq = w2[t2] = w2[t2] || [];
        ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie'];
        ttq.setAndDefer = function (o, m) { o[m] = function () { o.push([m].concat(Array.prototype.slice.call(arguments, 0))); }; };
        for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
        ttq.instance = function (n) { for (var e = ttq._i[n] || [], k = 0; k < ttq.methods.length; k++) ttq.setAndDefer(e, ttq.methods[k]); return e; };
        ttq.load = function (e, n) {
          var u = 'https://analytics.tiktok.com/i18n/pixel/events.js';
          ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = u; ttq._t = ttq._t || {}; ttq._t[e] = +new Date; ttq._o = ttq._o || {}; ttq._o[e] = n || {};
          var o = d2.createElement('script'); o.type = 'text/javascript'; o.async = true; o.src = u + '?sdkid=' + e + '&lib=' + t2;
          var a = d2.getElementsByTagName('script')[0]; a.parentNode.insertBefore(o, a);
        };
        ttq.load(id); ttq.page();
      })(w, d, 'ttq');
    }
  }
  function track(kind) { // kind: 'call' | 'whatsapp' | 'form'
    try {
      if (window.dataLayer) window.dataLayer.push({ event: 'click_' + kind });
      if (window.gtag && TR.ga4) window.gtag('event', 'click_' + kind);
      if (window.fbq) window.fbq('track', 'Contact');
      if (window.ttq && window.ttq.track) window.ttq.track('Contact');
    } catch (e) { /* لا شيء */ }
  }

  /* ---------- إعدادات تُطبَّق مرة واحدة ---------- */
  function applyStaticConfig() {
    // أقسام مخفية
    var S = C.sections || {};
    Object.keys(S).forEach(function (k) {
      if (S[k] === false) $$('[data-section="' + k + '"]').forEach(function (el) { el.parentNode.removeChild(el); });
    });
    bindShared();
    // الإيميل: مخفي لحد التأكيد
    var em = C.email || {};
    var emLi = $('[data-if="email"]');
    if (emLi) {
      if (em.value && em.confirmed) {
        $('[data-email]', emLi).href = 'mailto:' + em.value;
        $('[data-email-text]', emLi).textContent = em.value;
      } else emLi.parentNode.removeChild(emLi);
    }
    // السنة
    var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
    // السوشيال
    var soc = $('#social'), SC = C.social || {};
    var map = { instagram: 'i-insta', x: 'i-x', tiktok: 'i-tiktok', snapchat: 'i-snap' };
    var names = { instagram: 'Instagram', x: 'X', tiktok: 'TikTok', snapchat: 'Snapchat' };
    if (soc) {
      Object.keys(map).forEach(function (k) {
        if (!SC[k]) return;
        var a = doc.createElement('a');
        a.href = SC[k]; a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('aria-label', names[k]);
        a.innerHTML = '<svg class="ico" aria-hidden="true"><use href="#' + map[k] + '"/></svg>';
        soc.appendChild(a);
      });
      if (!soc.children.length) soc.hidden = true;
    }
    // زر اللغة
    if (enabledLangs().length < 2) { var lb = $('#langBtn'); if (lb) lb.hidden = true; }
    // JSON-LD (بيانات مؤكدة فقط)
    buildJsonLd();
  }

  // يُعاد تشغيله بعد كل إعادة رسم لمحتوى الصفحات
  function bindShared() {
    if (C.illustrativeImages === false) {
      $$('[data-illus] .tag, [data-illus-tag], #lbTag, .cmp__tag').forEach(function (el) { el.hidden = true; });
      $$('[data-illus-only]').forEach(function (el) { el.hidden = true; });
    }
    $$('[data-call]').forEach(function (a) { a.href = 'tel:' + CALL; });
    $$('[data-phone-text]').forEach(function (s) { s.textContent = fmtPhone(CALL); });
  }

  // محتوى الخدمات والمقالات (يُرسم بنفس الدالة المستخدمة في البناء)
  function renderPages() {
    var SP = window.SitePages; if (!SP) return;
    $$('[data-render]').forEach(function (el) { el.innerHTML = SP.render(el.getAttribute('data-render'), lang, I[lang]); });
    var id = doc.body.getAttribute('data-page');
    if (id) {
      var m = SP.meta(id, lang, I[lang]);
      if (m) {
        doc.title = m.title;
        [['meta[name="description"]', m.desc], ['meta[property="og:title"]', m.title], ['meta[property="og:description"]', m.desc]].forEach(function (x) {
          var e = $(x[0]); if (e) e.setAttribute('content', x[1]);
        });
      }
    }
    bindShared();
  }

  function buildJsonLd() {
    var co = C.company || {};
    var o = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: co.nameAr,
      alternateName: co.nameEn || undefined,
      telephone: CALL || undefined,
      description: t('meta.description', 'ar'),
      image: C.domain ? C.domain.replace(/\/$/, '') + '/assets/logo/og-image.jpg' : undefined,
      url: C.domain || undefined,
      areaServed: (C.cities && C.cities.length) ? C.cities.map(function (c) { return typeof c === 'string' ? c : (c.ar || c.en); }) : undefined,
      sameAs: Object.keys(C.social || {}).map(function (k) { return C.social[k]; }).filter(Boolean),
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: t('svc.title', 'ar'),
        itemListElement: ['1', '2', '3', '4', '5'].map(function (n) {
          return { '@type': 'Offer', itemOffered: { '@type': 'Service', name: t('svc.' + n + '.name', 'ar'), description: t('svc.' + n + '.desc', 'ar') } };
        })
      }
    };
    if (C.address && C.address.ar) o.address = { '@type': 'PostalAddress', streetAddress: C.address.ar };
    if (C.email && C.email.confirmed && C.email.value) o.email = C.email.value;
    if (!o.sameAs.length) delete o.sameAs;
    var s = doc.createElement('script'); s.type = 'application/ld+json';
    s.textContent = JSON.stringify(o);
    doc.head.appendChild(s);
  }

  /* ---------- اللغة ---------- */
  function captureAnchor() {
    var list = $$('[data-anchor]');
    for (var i = 0; i < list.length; i++) {
      var r = list[i].getBoundingClientRect();
      if (r.bottom > 80) return { idx: i, top: r.top };
    }
    return null;
  }

  function applyLang(l, keepPosition) {
    if (enabledLangs().indexOf(l) < 0) l = enabledLangs()[0];
    var anchor = keepPosition ? captureAnchor() : null;
    lang = l;
    root.lang = l; root.dir = (l === 'ar') ? 'rtl' : 'ltr';
    var d = I[l] || {};

    renderPages();

    $$('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v === undefined) return;
      if (v.indexOf('<') > -1) el.innerHTML = v; else el.textContent = v;
    });
    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); if (p.length < 2) return;
        var v = d[p[1]]; if (v !== undefined) el.setAttribute(p[0], v);
      });
    });
    var ogl = $('meta[property="og:locale"]'); if (ogl) ogl.setAttribute('content', l === 'ar' ? 'ar_SA' : 'en_US');

    buildServiceSelects();
    applyDynamic();

    try { localStorage.setItem('lang', l); } catch (e) { /* ignore */ }

    var anEl = anchor ? $$('[data-anchor]')[anchor.idx] : null;
    if (anEl) {
      root.style.scrollBehavior = 'auto';
      var delta = anEl.getBoundingClientRect().top - anchor.top;
      window.scrollTo(0, window.scrollY + delta);
      requestAnimationFrame(function () { root.style.scrollBehavior = ''; });
    }
  }

  function buildServiceSelects() {
    $$('[data-service-select]').forEach(function (sel) {
      var cur = sel.value;
      sel.innerHTML = '';
      var o = doc.createElement('option'); o.value = ''; o.textContent = t('form.servicePh'); sel.appendChild(o);
      ['1', '2', '3', '4', '5'].forEach(function (n) {
        var op = doc.createElement('option'); op.value = n; op.textContent = t('svc.' + n + '.name'); sel.appendChild(op);
      });
      var ot = doc.createElement('option'); ot.value = 'other'; ot.textContent = t('form.serviceOther'); sel.appendChild(ot);
      sel.value = cur || '';
    });
    // تحديث رسائل الأخطاء المعروضة
    $$('.field__err').forEach(function (el) { if (el.dataset.key) el.textContent = t(el.dataset.key); });
  }

  function applyDynamic() {
    var co = C.company || {};
    $$('[data-company-name]').forEach(function (el) { el.textContent = lang === 'ar' ? co.nameAr : (co.nameEn || co.nameAr); });
    // المدن
    var dl = $('#cityList');
    if (dl) {
      dl.innerHTML = '';
      (C.cities || []).forEach(function (c) { var op = doc.createElement('option'); op.value = pick(c); dl.appendChild(op); });
    }
    // عنصر الثقة الرابع: مدن / ساعات / افتراضي
    var tr = $('#trust4');
    if (tr) {
      var st = $('strong', tr), ss = $('span', tr);
      if (C.cities && C.cities.length) {
        st.textContent = t('trust.cities');
        ss.textContent = C.cities.map(pick).join(lang === 'ar' ? '، ' : ', ');
      } else if (pick(C.hours)) {
        st.textContent = t('trust.hours'); ss.textContent = pick(C.hours);
      }
    }
    // فوتر: عنوان وساعات
    var ad = $('[data-if="address"]'), hr = $('[data-if="hours"]');
    if (ad) { var a = pick(C.address); ad.hidden = !a; var at = $('[data-address-text]', ad); if (at) at.textContent = a; }
    if (hr) { var h = pick(C.hours); hr.hidden = !h; var ht = $('[data-hours-text]', hr); if (ht) ht.textContent = h; }

    // روابط واتساب (الرسالة عربية دائماً)
    $$('[data-wa]').forEach(function (a) { a.href = waUrl(t('wa.generic', 'ar')); });
    $$('[data-wa-service]').forEach(function (a) {
      var name = t('svc.' + a.getAttribute('data-wa-service') + '.name', 'ar');
      a.href = waUrl(t('wa.service', 'ar').replace('{service}', name));
    });
  }

  /* ---------- القائمة (موبايل) ---------- */
  function initMenu() {
    var b = $('#burger'), nav = $('#nav');
    if (!b || !nav) return;
    function set(open) { b.setAttribute('aria-expanded', open ? 'true' : 'false'); nav.classList.toggle('is-open', open); }
    b.addEventListener('click', function () { set(b.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    doc.addEventListener('click', function (e) { if (!e.target.closest('.hdr')) set(false); });
  }

  /* ---------- الأكورديون ---------- */
  function initAccordion() {
    doc.addEventListener('click', function (e) {
      var q = e.target.closest('.acc__q'); if (!q) return;
      var acc = q.closest('.acc');
      var open = q.getAttribute('aria-expanded') === 'true';
      $$('.acc__q', acc).forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        $('#' + b.getAttribute('aria-controls')).classList.remove('is-open');
      });
      if (!open) {
        q.setAttribute('aria-expanded', 'true');
        $('#' + q.getAttribute('aria-controls')).classList.add('is-open');
      }
    });
  }

  /* ---------- المعرض واللايت بوكس ---------- */
  function initGallery() {
    var g = $('#gallery'); if (!g) return;
    var chips = $$('.chip[data-filter]');
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        var f = c.getAttribute('data-filter');
        chips.forEach(function (x) { var on = x === c; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        $$('.g-item', g).forEach(function (it) {
          var cats = it.getAttribute('data-cat').split(' ');
          it.hidden = !(f === 'all' || cats.indexOf(f) > -1);
        });
      });
    });

    var dlg = $('#lightbox'), img = $('#lbImg'), cap = $('#lbCap');
    var idx = 0, items = [], lastBtn = null;
    function visible() { return $$('.g-item', g).filter(function (i) { return !i.hidden; }); }
    function show(i) {
      idx = (i + items.length) % items.length;
      var b = $('.g-btn', items[idx]), im = $('img', b);
      img.src = im.currentSrc || im.src; img.alt = im.alt;
      cap.textContent = t(b.getAttribute('data-cap'));
    }
    function open(btn) {
      items = visible(); lastBtn = btn;
      show(items.indexOf(btn.closest('.g-item')));
      if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    }
    function close() {
      if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open');
      if (lastBtn) lastBtn.focus();
    }
    function step(dirNext) { show(idx + (dirNext ? 1 : -1)); }

    g.addEventListener('click', function (e) { var b = e.target.closest('.g-btn'); if (b) open(b); });
    dlg.addEventListener('click', function (e) {
      var a = e.target.closest('[data-lb]');
      if (a) { var k = a.getAttribute('data-lb'); if (k === 'close') close(); else step(k === 'next'); return; }
      if (e.target === dlg || e.target.classList.contains('lb__inner')) close();
    });
    dlg.addEventListener('keydown', function (e) {
      var rtl = root.dir === 'rtl';
      if (e.key === 'ArrowLeft') { e.preventDefault(); step(rtl); }
      if (e.key === 'ArrowRight') { e.preventDefault(); step(!rtl); }
    });
    var sx = null;
    dlg.addEventListener('touchstart', function (e) { sx = e.changedTouches[0].clientX; }, { passive: true });
    dlg.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) < 50) return;
      var rtl = root.dir === 'rtl';
      step(rtl ? dx > 0 : dx < 0);
    }, { passive: true });
  }

  /* ---------- قبل / بعد ---------- */
  function initCompare() {
    var c = $('#cmp'); if (!c) return;
    var r = $('.cmp__range', c);
    function set() { c.style.setProperty('--pos', r.value + '%'); }
    r.addEventListener('input', set); set();
  }

  /* ---------- الفورم → واتساب ---------- */
  function initForms() {
    $$('[data-wa-form]').forEach(function (form) {
      var fallback = $('.form__fallback', form);
      function field(n) { return form.elements.namedItem(n); }
      function setErr(n, key) {
        var f = field(n); if (!f) return;
        var wrap = f.closest('.field'), err = $('.field__err', wrap);
        wrap.classList.toggle('is-bad', !!key);
        err.dataset.key = key || '';
        err.textContent = key ? t(key) : '';
      }
      ['name', 'phone', 'city', 'service'].forEach(function (n) {
        var f = field(n); if (!f) return;
        f.addEventListener('input', function () { setErr(n, ''); });
        f.addEventListener('change', function () { setErr(n, ''); });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = field('name').value.trim();
        var phone = field('phone').value.trim();
        var city = field('city').value.trim();
        var svc = field('service').value;
        var notesEl = field('notes');
        var notes = notesEl ? notesEl.value.trim() : '';
        var digits = phone.replace(/\D/g, '');
        var first = null;

        function bad(n, key) { setErr(n, key); if (!first) first = field(n); }
        setErr('name', ''); setErr('phone', ''); setErr('city', ''); setErr('service', '');
        if (name.length < 2) bad('name', 'form.errName');
        if (digits.length < 8 || digits.length > 15) bad('phone', 'form.errPhone');
        if (city.length < 2) bad('city', 'form.errCity');
        if (!svc) bad('service', 'form.errService');
        if (first) { first.focus(); return; }

        var A = function (k) { return t(k, 'ar'); };
        var svcText = svc === 'other' ? A('form.serviceOther') : A('svc.' + svc + '.name');
        var lines = [A('wa.form'), '',
          A('wa.name') + ': ' + name,
          A('wa.phone') + ': ' + phone,
          A('wa.city') + ': ' + city,
          A('wa.svc') + ': ' + svcText];
        if (notes) lines.push(A('wa.notes') + ': ' + notes);
        var url = waUrl(lines.join('\n'));

        track('form'); track('whatsapp');
        var w = window.open(url, '_blank');
        if (w) { try { w.opener = null; } catch (err) { /* ignore */ } } else { window.location.href = url; }
        if (fallback) { fallback.href = url; fallback.hidden = false; }
      });
    });

    // زر "اطلب الخدمة" → ينزل للفورم ويركّز على أول حقل
    $$('[data-focus-form]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var f = $('#request'); if (!f) return;
        e.preventDefault();
        f.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(function () { var i = $('input', f); if (i) i.focus({ preventScroll: true }); }, 450);
      });
    });
  }

  /* ---------- تتبع النقرات ---------- */
  function initTrackingClicks() {
    doc.addEventListener('click', function (e) {
      var a = e.target.closest('[data-call],[data-wa],[data-wa-service]');
      if (!a) return;
      track(a.hasAttribute('data-call') ? 'call' : 'whatsapp');
    });
  }

  /* ---------- ظهور تدريجي خفيف ---------- */
  function initReveal() {
    var els = $$('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- تشغيل ---------- */
  function init() {
    var start = C.defaultLang || 'ar';
    try {
      var q = new URLSearchParams(location.search).get('lang');
      var saved = localStorage.getItem('lang');
      start = q || saved || start;
    } catch (e) { /* ignore */ }

    applyStaticConfig();
    applyLang(start, false);

    var lb = $('#langBtn');
    if (lb) lb.addEventListener('click', function () { applyLang(lang === 'ar' ? 'en' : 'ar', true); });

    initMenu(); initAccordion(); initGallery(); initCompare(); initForms(); initTrackingClicks(); initReveal();
    loadTracking();
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init); else init();
})();
