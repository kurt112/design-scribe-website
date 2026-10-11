// Renders every route in src/data/seo.js ROUTES to static HTML after `vite build`,
// so crawlers get real content and per-page head tags without running JavaScript.
// Also writes dist/404.html and dist/sitemap.xml.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const {render, ROUTES, getPageMeta, SITE_URL} = await import(path.join(ssrDir, 'entry-server.js'));
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const escapeHtml = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Sets valAttr on the first <meta>/<link> whose keyAttr equals keyVal.
function setTag(html, keyAttr, keyVal, valAttr, value) {
    const tag = new RegExp(`<(?:meta|link)\\s[^>]*${keyAttr}="${keyVal}"[^>]*>`);
    if (!tag.test(html)) throw new Error(`Tag ${keyAttr}="${keyVal}" missing from index.html`);
    return html.replace(tag, m => m.replace(new RegExp(`${valAttr}="[^"]*"`), `${valAttr}="${escapeHtml(value)}"`));
}

function renderPage(url, {title, description, canonical, robots}) {
    let html = template.replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
    html = setTag(html, 'name', 'description', 'content', description);
    html = setTag(html, 'name', 'robots', 'content', robots);
    html = setTag(html, 'property', 'og:title', 'content', title);
    html = setTag(html, 'property', 'og:description', 'content', description);
    html = setTag(html, 'name', 'twitter:title', 'content', title);
    html = setTag(html, 'name', 'twitter:description', 'content', description);
    if (canonical) {
        html = setTag(html, 'rel', 'canonical', 'href', canonical);
        html = setTag(html, 'property', 'og:url', 'content', canonical);
    } else {
        html = html.replace(/\s*<link rel="canonical"[^>]*>/, '');
    }
    return html;
}

// "/" -> index.html, "/services/x" -> services/x/index.html (served without a trailing slash, see firebase.json).
for (const route of ROUTES) {
    const meta = getPageMeta(route);
    const html = renderPage(route, {...meta, canonical: meta.url, robots: 'index, follow'});
    const file = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
    fs.mkdirSync(path.dirname(path.join(dist, file)), {recursive: true});
    fs.writeFileSync(path.join(dist, file), html);
}

fs.writeFileSync(path.join(dist, '404.html'), renderPage('/404', {
    title: 'Page not found | DesignScribe',
    description: 'The page you’re looking for doesn’t exist or has moved.',
    robots: 'noindex, follow',
}));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(r => `  <url>
    <loc>${SITE_URL}${r === '/' ? '/' : r}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.rmSync(ssrDir, {recursive: true, force: true});

console.log(`Pre-rendered ${ROUTES.length} routes + 404.html; sitemap.xml written.`);
