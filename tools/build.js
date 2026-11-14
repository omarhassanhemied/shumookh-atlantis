// يبني كل صفحات الموقع بنص عربي جاهز (لمحركات البحث وللتحميل بدون JS):
//   index.html  +  صفحات الخدمات  +  blog.html  +  صفحات المقالات
// الاستخدام (من جذر المشروع):  node tools/build.js
// ثم js/main.js يبدّل اللغة في المتصفح بدون إعادة تحميل.
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname, '..');
const ctx = { window: {} }; vm.createContext(ctx);
['js/config.js', 'js/translations.js', 'js/pages.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx));
const W = ctx.window, ar = W.I18N.ar, SP = W.SitePages, CFG = W.SITE_CONFIG;
const tpl = fs.readFileSync(path.join(__dirname, 'index.template.html'), 'utf8');

function fill(s) {
  return s.replace(/\{\{(@?[\w.\-]+)\}\}/g, (m, k) => {
    if (k[0] === '@') return SP.render(k.slice(1), 'ar', ar);
    if (!(k in ar)) { console.warn('missing key', k); return m; }
    return ar[k].replace(/"/g, '&quot;');
  });
}

// index
fs.writeFileSync(path.join(root, 'index.html'), fill(tpl));

// أجزاء مشتركة
const sprite = tpl.slice(tpl.indexOf('<svg width="0"'), tpl.indexOf('<a class="skip"'));
const hdr = tpl.slice(tpl.indexOf('<a class="skip"'), tpl.indexOf('</header>') + 9);
const foot = tpl.slice(tpl.indexOf('<!-- ============ الفوتر'), tpl.indexOf('<script src="js/config.js">'));
const toIndex = s => s.replace(/href="#(svc-\d|services|why|works|faq|contact|request)"/g, 'href="index.html#$1"').replace(/href="#top"/g, 'href="index.html"');

function attr(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;'); }

const urls = ['index.html'];
SP.ids().forEach(id => {
  const p = SP.pages[id];
  const meta = SP.meta(id, 'ar', ar);
  const html = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${attr(meta.title)}</title>
<meta name="description" content="${attr(meta.desc)}">
<meta name="theme-color" content="#061722">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website">
<meta property="og:locale" content="ar_SA">
<meta property="og:title" content="${attr(meta.title)}">
<meta property="og:description" content="${attr(meta.desc)}">
<meta property="og:image" content="assets/logo/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="64x64" href="assets/logo/favicon-64.png">
<link rel="apple-touch-icon" href="assets/logo/apple-touch-icon.png">
<script>document.documentElement.className+=" js"</script>
<link rel="stylesheet" href="css/style.css">
</head>
<body data-page="${id}">

${fill(toIndex(sprite))}${fill(toIndex(hdr))}

<main id="main">
<div id="pageRoot" data-render="${id}">${SP.render(id, 'ar', ar)}</div>
</main>

${fill(toIndex(foot))}<script src="js/config.js"></script>
<script src="js/translations.js"></script>
<script src="js/pages.js"></script>
<script src="js/main.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(root, p.file), html);
  urls.push(p.file);
});

// robots + sitemap
const dom = (CFG.domain || '').replace(/\/$/, '');
if (dom) {
  fs.writeFileSync(path.join(root, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.map(u => `  <url><loc>${dom}/${u === 'index.html' ? '' : u}</loc></url>`).join('\n') + '\n</urlset>\n');
  fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${dom}/sitemap.xml\n`);
} else {
  fs.writeFileSync(path.join(root, 'robots.txt'), 'User-agent: *\nAllow: /\n');
  try { fs.unlinkSync(path.join(root, 'sitemap.xml')); } catch (e) {}
}
console.log('built', urls.length, 'pages:', urls.join(', '));
