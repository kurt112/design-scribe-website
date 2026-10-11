import {Link, useParams} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import FaqList from '../components/FaqList.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import JsonLd from '../components/JsonLd.jsx';
import NotFound from '../not-found/index.jsx';
import {PRODUCTS, SITE_URL} from '../data/site.js';
import {PRODUCT_DETAILS} from '../data/pages.js';
import {ORGANIZATION_ID} from '../data/seo.js';

export default function ProductPage() {
    const {slug} = useParams();
    const product = PRODUCTS.find(p => p.id === slug);
    if (!product) return <NotFound/>;

    const details = PRODUCT_DETAILS[product.id];
    const others = PRODUCTS.filter(p => p.id !== product.id);

    return (
        <>
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: product.name,
                description: product.desc,
                applicationCategory: details.appCategory,
                operatingSystem: 'Web, iOS, Android',
                url: `${SITE_URL}/products/${product.id}`,
                image: SITE_URL + product.image,
                publisher: {'@id': ORGANIZATION_ID},
                offers: {
                    '@type': 'Offer',
                    price: details.offer.price,
                    priceCurrency: 'PHP',
                    description: details.offer.note,
                },
            }}/>

            <section className="relative -mt-16 overflow-hidden pt-16">
                <div className="bg-grid mask-fade-b absolute inset-0 -z-10"/>
                <div className="container-page pb-14 pt-10 sm:pt-14">
                    <Breadcrumbs items={[{label: 'Home', to: '/'}, {label: 'Products', to: '/products'}, {label: product.name, to: `/products/${product.id}`}]}/>
                    <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
                        <Reveal>
                            <p className="eyebrow">{product.category}</p>
                            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{product.name}</h1>
                            <p className="mt-4 text-xl font-medium text-ink-800">{product.tagline}</p>
                            <p className="mt-4 leading-relaxed text-ink-500">{product.desc}</p>
                            <p className="mt-6 text-sm font-semibold text-ink-900">{product.pricing}</p>
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    Visit live site
                                    <Icon name="external" className="h-4 w-4"/>
                                </a>
                                <Link to="/contact-us" className="btn-secondary">Request a demo</Link>
                            </div>
                        </Reveal>
                        <Reveal delay={120} className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-xl">
                            <img
                                src={product.image}
                                alt={`${product.name} website`}
                                width="1440"
                                height="900"
                                className="aspect-[16/10] w-full object-cover object-top"
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container-page grid gap-12 lg:grid-cols-[2fr_1fr]">
                    <div>
                        <h2 className="text-3xl font-bold">Features</h2>
                        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                            {product.features.map(f => (
                                <li key={f} className="card flex gap-3 p-5 text-ink-700">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                                        <Icon name="check" className="h-4 w-4" strokeWidth={2.5}/>
                                    </span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Built for</h2>
                        <ul className="mt-8 space-y-3">
                            {details.audience.map(a => (
                                <li key={a} className="flex items-center gap-2.5 text-ink-700">
                                    <Icon name="check-circle" className="h-5 w-5 text-brand-600"/>
                                    {a}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page max-w-3xl">
                    <h2 className="text-3xl font-bold">Frequently asked questions</h2>
                    <div className="mt-8">
                        <FaqList faqs={details.faqs}/>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container-page">
                    <h2 className="text-2xl font-bold">More from DesignScribe</h2>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {others.map(p => (
                            <li key={p.id}>
                                <Link to={`/products/${p.id}`} className="card flex h-full flex-col p-5 transition hover:border-brand-200">
                                    <span className="font-bold">{p.name}</span>
                                    <span className="mt-1 text-sm text-ink-500">{p.tagline}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-16">
                        <CtaBanner
                            title="Want it tailored to your business?"
                            desc="The team behind this product can customize it for how you work, or build something new."
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
