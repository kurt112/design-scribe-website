import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {getPageMeta} from '../data/seo.js';
import {PAGE_META, SITE_URL} from '../data/site.js';

function setMeta(selector, attr, value) {
    document.head.querySelector(selector)?.setAttribute(attr, value);
}

// Keeps head tags in sync on client-side navigation. Pre-rendered pages
// already ship these tags (see scripts/prerender.js); unknown routes are noindex.
export default function Seo() {
    const {pathname} = useLocation();

    useEffect(() => {
        const meta = getPageMeta(pathname);
        const {title, description} = meta ?? PAGE_META['/'];
        const url = meta?.url ?? SITE_URL + pathname;

        document.title = meta ? title : 'Page not found | DesignScribe';
        setMeta('meta[name="description"]', 'content', description);
        setMeta('meta[name="robots"]', 'content', meta ? 'index, follow' : 'noindex, follow');
        setMeta('link[rel="canonical"]', 'href', url);
        setMeta('meta[property="og:title"]', 'content', title);
        setMeta('meta[property="og:description"]', 'content', description);
        setMeta('meta[property="og:url"]', 'content', url);
        setMeta('meta[name="twitter:title"]', 'content', title);
        setMeta('meta[name="twitter:description"]', 'content', description);
    }, [pathname]);

    return null;
}
