import {Link} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import {PRODUCTS} from '../data/site.js';

function BrowserFrame({product}) {
    return (
        <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the live ${product.name} site`}
            className="group relative block"
        >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-brand-200/50 via-brand-100/30 to-transparent blur-2xl"/>
            <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_30px_80px_-24px_rgb(15_27_51/0.35)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_40px_90px_-24px_rgb(15_27_51/0.4)]">
                <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50/60 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-200"/>
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-200"/>
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-200"/>
                    <div className="mx-auto flex h-6 w-3/5 items-center justify-center truncate rounded-md bg-white px-3 text-[10px] font-medium text-ink-400 ring-1 ring-ink-100">
                        {product.url.replace(/^https:\/\//, '').replace(/\/(#\/)?$/, '')}
                    </div>
                </div>
                <img
                    src={product.image}
                    alt={`${product.name} website`}
                    loading="lazy"
                    width="1440"
                    height="900"
                    className="aspect-[16/10] w-full object-cover object-top"
                />
            </div>
        </a>
    );
}

export default function Products() {
    return (
        <>
            <section className="relative -mt-16 overflow-hidden pt-16">
                <div className="bg-grid mask-fade-b absolute inset-0 -z-10"/>
                <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"/>
                <Reveal className="container-page pb-6 pt-16 text-center sm:pt-24">
                    <p className="eyebrow">Our products</p>
                    <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
                        SaaS we've built, launched, and run
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
                        Ready-to-use software for real businesses — proof of how we design, build, and support products in production.
                    </p>
                </Reveal>
            </section>

            <section className="pb-24 pt-14 sm:pt-20">
                <div className="container-page space-y-24 sm:space-y-32">
                    {PRODUCTS.map((p, i) => (
                        <article
                            key={p.id}
                            id={p.id}
                            className="grid scroll-mt-24 items-center gap-12 lg:grid-cols-2 lg:gap-16"
                        >
                            <Reveal className={i % 2 ? 'lg:order-2' : ''}>
                                <BrowserFrame product={p}/>
                            </Reveal>

                            <Reveal delay={120}>
                                <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-medium text-ink-600 shadow-sm">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>
                                    Live · {p.category}
                                </span>
                                <h2 className="mt-5 text-3xl font-bold sm:text-4xl">{p.name}</h2>
                                <p className="mt-3 text-lg font-medium text-ink-800">{p.tagline}</p>
                                <p className="mt-4 leading-relaxed text-ink-500">{p.desc}</p>

                                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                                    {p.features.map(f => (
                                        <li key={f} className="flex gap-2.5 text-sm text-ink-700">
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                                                <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5}/>
                                            </span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-7 text-sm font-semibold text-ink-900">{p.pricing}</p>

                                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                        Visit live site
                                        <Icon name="external" className="h-4 w-4"/>
                                    </a>
                                    <Link to="/contact-us" className="btn-secondary">
                                        Request a demo
                                    </Link>
                                </div>
                            </Reveal>
                        </article>
                    ))}

                    <Reveal className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 text-center sm:px-12 sm:py-16">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgb(0_112_192/0.6),transparent_60%)]"/>
                        <div className="relative mx-auto max-w-2xl">
                            <h2 className="text-3xl font-bold text-white">Need something built for your business?</h2>
                            <p className="mt-4 leading-relaxed text-ink-300">
                                The same team behind these products can design and build yours — or tailor one of ours to fit how you work.
                            </p>
                            <Link to="/contact-us" className="btn-primary mt-8 px-6 py-3.5 text-base">
                                Start your project
                                <Icon name="arrow-right" className="h-4 w-4"/>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
