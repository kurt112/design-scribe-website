import {Link, useParams} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import FaqList from '../components/FaqList.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import JsonLd from '../components/JsonLd.jsx';
import ProductCards from '../components/ProductCards.jsx';
import NotFound from '../not-found/index.jsx';
import {PROCESS, PRODUCTS, SITE_URL, TRUST_BADGES} from '../data/site.js';
import {INDUSTRY_PAGES, SERVICE_PAGES, SHARED_FAQS} from '../data/pages.js';
import {ORGANIZATION_ID} from '../data/seo.js';

const AUDIENCES = [
    ...INDUSTRY_PAGES.map(i => ({label: i.name, to: `/industries/${i.slug}`})),
    {label: 'Gyms & Fitness', to: '/products/gym-management'},
    {label: 'Sports Leagues', to: '/products/courtside'},
];

export default function ServicePage() {
    const {slug} = useParams();
    const service = SERVICE_PAGES.find(s => s.slug === slug);
    if (!service) return <NotFound/>;

    const faqs = [...service.faqs, ...SHARED_FAQS];
    const related = SERVICE_PAGES.filter(s => s.slug !== slug);

    return (
        <>
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: service.name,
                serviceType: service.name,
                description: service.metaDescription,
                url: `${SITE_URL}/services/${service.slug}`,
                provider: {'@id': ORGANIZATION_ID},
                areaServed: {'@type': 'Country', name: 'Philippines'},
            }}/>

            <section className="relative -mt-16 overflow-hidden pt-16">
                <div className="bg-grid mask-fade-b absolute inset-0 -z-10"/>
                <div className="container-page pb-14 pt-10 sm:pt-14">
                    <Breadcrumbs items={[{label: 'Home', to: '/'}, {label: 'Services', to: '/services'}, {label: service.name, to: `/services/${service.slug}`}]}/>
                    <Reveal className="mt-8 max-w-3xl">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-100">
                            <Icon name={service.icon} className="h-6 w-6"/>
                        </span>
                        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">{service.h1}</h1>
                        <p className="mt-5 text-lg leading-relaxed text-ink-500">{service.intro}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to="/contact-us" className="btn-primary">
                                Start your project
                                <Icon name="arrow-right" className="h-4 w-4"/>
                            </Link>
                            <Link to="/products" className="btn-secondary">See our live products</Link>
                        </div>
                    </Reveal>
                    <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-600">
                        {TRUST_BADGES.map(b => (
                            <li key={b.label} className="flex items-center gap-2">
                                <Icon name={b.icon} className="h-4 w-4 text-brand-600"/>
                                {b.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container-page">
                    <h2 className="text-3xl font-bold">What we build</h2>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                        {service.builds.map((b, i) => (
                            <Reveal key={b.title} delay={i * 60} className="card p-7">
                                <h3 className="text-lg font-bold">{b.title}</h3>
                                <p className="mt-2 leading-relaxed text-ink-500">{b.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page">
                    <h2 className="text-3xl font-bold">Built for businesses like yours</h2>
                    <p className="mt-3 max-w-2xl text-ink-500">From small businesses to enterprise teams, including:</p>
                    <ul className="mt-8 flex flex-wrap gap-3">
                        {AUDIENCES.map(a => (
                            <li key={a.to}>
                                <Link to={a.to} className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700">
                                    {a.label}
                                    <Icon name="arrow-right" className="h-3.5 w-3.5"/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container-page">
                    <h2 className="text-3xl font-bold">Proof: software we built and run ourselves</h2>
                    <p className="mt-3 max-w-2xl text-ink-500">Live products with real customers, designed, built, tested, and supported by the same team that will work on yours.</p>
                    <div className="mt-10">
                        <ProductCards products={PRODUCTS}/>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page">
                    <h2 className="text-3xl font-bold">How a project works</h2>
                    <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {PROCESS.map(p => (
                            <li key={p.step} className="card p-6">
                                <span className="font-display text-sm font-bold text-brand-600">{p.step}</span>
                                <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.desc}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container-page max-w-3xl">
                    <h2 className="text-3xl font-bold">Frequently asked questions</h2>
                    <div className="mt-8">
                        <FaqList faqs={faqs}/>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page">
                    <h2 className="text-2xl font-bold">Other services</h2>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {related.map(s => (
                            <li key={s.slug}>
                                <Link to={`/services/${s.slug}`} className="card flex items-center gap-3 p-4 font-semibold transition hover:border-brand-200 hover:text-brand-700">
                                    <Icon name={s.icon} className="h-5 w-5 text-brand-600"/>
                                    {s.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-16">
                        <CtaBanner/>
                    </div>
                </div>
            </section>
        </>
    );
}
