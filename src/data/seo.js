import {PAGE_META, PRODUCTS, SITE_URL} from './site.js';
import {INDUSTRY_PAGES, PRODUCT_DETAILS, SERVICE_PAGES} from './pages.js';

const DYNAMIC_META = {
    ...Object.fromEntries(SERVICE_PAGES.map(s => [`/services/${s.slug}`, {title: s.metaTitle, description: s.metaDescription}])),
    ...Object.fromEntries(INDUSTRY_PAGES.map(i => [`/industries/${i.slug}`, {title: i.metaTitle, description: i.metaDescription}])),
    ...Object.fromEntries(PRODUCTS.map(p => [`/products/${p.id}`, {title: PRODUCT_DETAILS[p.id].metaTitle, description: PRODUCT_DETAILS[p.id].metaDescription}])),
};

const ALL_META = {...PAGE_META, ...DYNAMIC_META};

// Every indexable route. Drives pre-rendering and sitemap.xml.
export const ROUTES = Object.keys(ALL_META);

// Returns null for unknown routes so callers can mark them noindex.
export function getPageMeta(pathname) {
    const meta = ALL_META[pathname];
    return meta ? {...meta, url: SITE_URL + pathname} : null;
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function breadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            item: SITE_URL + item.to,
        })),
    };
}

export function faqSchema(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {'@type': 'Answer', text: f.a},
        })),
    };
}
