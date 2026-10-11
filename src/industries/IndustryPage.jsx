import {Link, useParams} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import ProductCards from '../components/ProductCards.jsx';
import NotFound from '../not-found/index.jsx';
import {PRODUCTS} from '../data/site.js';
import {INDUSTRY_PAGES, SERVICE_PAGES} from '../data/pages.js';

export default function IndustryPage() {
    const {slug} = useParams();
    const industry = INDUSTRY_PAGES.find(i => i.slug === slug);
    if (!industry) return <NotFound/>;

    const products = PRODUCTS.filter(p => industry.productIds.includes(p.id));
    const services = SERVICE_PAGES.filter(s => industry.serviceSlugs.includes(s.slug));

    return (
        <>
            <section className="relative -mt-16 overflow-hidden pt-16">
                <div className="bg-grid mask-fade-b absolute inset-0 -z-10"/>
                <div className="container-page pb-14 pt-10 sm:pt-14">
                    <Breadcrumbs items={[{label: 'Home', to: '/'}, {label: industry.name, to: `/industries/${industry.slug}`}]}/>
                    <Reveal className="mt-8 max-w-3xl">
                        <p className="eyebrow">Industries</p>
                        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{industry.h1}</h1>
                        <p className="mt-5 text-lg leading-relaxed text-ink-500">{industry.intro}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to="/contact-us" className="btn-primary">
                                Talk to us
                                <Icon name="arrow-right" className="h-4 w-4"/>
                            </Link>
                            <Link to={`/products/${products[0].id}`} className="btn-secondary">See the {products[0].name}</Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container-page">
                    <h2 className="text-3xl font-bold">What we help with</h2>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                        {industry.needs.map((n, i) => (
                            <Reveal key={n.title} delay={i * 60} className="card p-7">
                                <h3 className="text-lg font-bold">{n.title}</h3>
                                <p className="mt-2 leading-relaxed text-ink-500">{n.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-page">
                    <h2 className="text-3xl font-bold">Ready-made software</h2>
                    <p className="mt-3 max-w-2xl text-ink-500">Set up under your brand in days, without a custom build.</p>
                    <div className="mt-10">
                        <ProductCards products={products}/>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container-page">
                    <h2 className="text-3xl font-bold">Need something custom?</h2>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                        {services.map(s => (
                            <li key={s.slug}>
                                <Link to={`/services/${s.slug}`} className="card flex h-full flex-col p-6 transition hover:border-brand-200">
                                    <span className="flex items-center gap-3 font-bold">
                                        <Icon name={s.icon} className="h-5 w-5 text-brand-600"/>
                                        {s.name}
                                    </span>
                                    <span className="mt-2 text-sm leading-relaxed text-ink-500">{s.metaDescription}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-16">
                        <CtaBanner title={`Software for your ${industry.name.toLowerCase()} business`}/>
                    </div>
                </div>
            </section>
        </>
    );
}
