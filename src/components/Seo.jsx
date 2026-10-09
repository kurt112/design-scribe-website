import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {PAGE_META, SITE_URL} from '../data/site.js';

function setMeta(selector, attr, value) {
    document.head.querySelector(selector)?.setAttribute(attr, value);
}

// Updates title, description, canonical and social tags per route.
// Unknown routes fall back to the home page copy and are marked noindex.
export default function Seo() {
    const {pathname} = useLocation();

    useEffect(() => {
        const meta = PAGE_META[pathname];
        const {title, description} = meta ?? PAGE_META['/'];
        const url = SITE_URL + pathname;

        document.title = title;
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
