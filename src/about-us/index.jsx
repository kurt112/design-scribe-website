import {Link} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import ProductMock from './ProductMock.jsx';
import {CLIENTS, PROCESS, PRODUCTS, SERVICES, STATS, TESTIMONIALS, TRUST_BADGES, VALUES} from '../data/site.js';

function SectionHeading({eyebrow, title, desc, align = 'center', dark = false}) {
    return (
        <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
            <p className={`eyebrow ${dark ? 'text-brand-300' : ''}`}>{eyebrow}</p>
            <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${dark ? 'text-white' : ''}`}>{title}</h2>
            {desc && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-ink-300' : 'text-ink-500'}`}>{desc}</p>}
        </Reveal>
    );
}

function Hero() {
    return (
        <section className="relative -mt-16 overflow-hidden pt-16">
            <div className="bg-grid mask-fade-b absolute inset-0 -z-10"/>
            <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"/>

            <div className="container-page grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-28 lg:pt-24">
                <div className="text-center lg:text-left">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-medium text-ink-600 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>
                            Custom software &amp; SaaS development studio
                        </span>
                    </Reveal>
                    <Reveal delay={80}>
                        <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] sm:text-6xl lg:text-[4.1rem]">
                            You Describe.
                            <br/>
                            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">We Build.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={160}>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-500 lg:mx-0">
                            DesignScribe turns your ideas into secure, scalable SaaS products and custom software —
                            designed, engineered, and quality-tested by one accountable team.
                        </p>
                    </Reveal>
                    <Reveal delay={240} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                        <Link to="/contact-us" className="btn-primary px-6 py-3.5 text-base">
                            Start your project
                            <Icon name="arrow-right" className="h-4 w-4"/>
                        </Link>
                        <a href="#process" className="btn-secondary px-6 py-3.5 text-base">
                            <Icon name="play" className="h-5 w-5 text-brand-600"/>
                            See how we work
                        </a>
                    </Reveal>
                    <Reveal delay={320} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                        <div className="flex text-amber-400">
                            {Array.from({length: 5}).map((_, i) => <Icon key={i} name="star" className="h-4 w-4"/>)}
                        </div>
                        <p className="text-sm text-ink-500">
                            <span className="font-semibold text-ink-800">50+ projects</span> delivered for teams of every size
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={200} className="mx-auto w-full max-w-xl lg:max-w-none">
                    <ProductMock/>
                </Reveal>
            </div>
        </section>
    );
}

function LogoGlyph({shape}) {
    const common = 'h-5 w-5 fill-current';
    if (shape === 'square') return <svg viewBox="0 0 20 20" className={common}><rect x="3" y="3" width="14" height="14" rx="3"/></svg>;
    if (shape === 'triangle') return <svg viewBox="0 0 20 20" className={common}><path d="M10 2.5 18 17H2l8-14.5Z"/></svg>;
    if (shape === 'hex') return <svg viewBox="0 0 20 20" className={common}><path d="M10 1.5 17.5 6v8L10 18.5 2.5 14V6L10 1.5Z"/></svg>;
    if (shape === 'diamond') return <svg viewBox="0 0 20 20" className={common}><path d="M10 1.5 18.5 10 10 18.5 1.5 10 10 1.5Z"/></svg>;
    return <svg viewBox="0 0 20 20" className={common}><circle cx="10" cy="10" r="8"/></svg>;
}

function LogoMarquee() {
    const logos = [...CLIENTS, ...CLIENTS];
    return (
        <section className="border-y border-ink-100 bg-white py-10" aria-label="Clients">
            <p className="container-page text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                Trusted by teams from early-stage startups to established enterprises
            </p>
            <div className="mask-fade-x mt-8 overflow-hidden">
                <ul className="marquee-track flex w-max animate-marquee items-center gap-14 pr-14">
                    {logos.map((client, i) => (
                        <li
                            key={i}
                            aria-hidden={i >= CLIENTS.length}
                            className="flex items-center gap-2 text-ink-300 transition-colors hover:text-ink-700"
                        >
                            <LogoGlyph shape={client.glyph}/>
                            <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight">{client.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function Services() {
    return (
        <section id="services" className="py-24 sm:py-28">
            <div className="container-page">
                <SectionHeading
                    eyebrow="What we do"
                    title="Everything you need to ship great software"
                    desc="From the first sketch to the thousandth deploy, one team owns design, engineering, and quality — so nothing gets lost in the handoff."
                />
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
                    {SERVICES.map((s, i) => (
                        <Reveal key={s.id} delay={i * 80} className={`card group relative flex flex-col p-7 ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'} ${i === SERVICES.length - 1 && i % 2 === 0 ? 'sm:col-span-2' : ''} transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_40px_-20px_rgb(0_112_192/0.35)]`}>
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-100 transition group-hover:from-brand-600 group-hover:to-brand-500 group-hover:text-white">
                                <Icon name={s.icon} className="h-6 w-6"/>
                            </span>
                            <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                            {s.link && (
                                <Link to={s.link.to} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 after:absolute after:inset-0 after:content-['']">
                                    {s.link.label}
                                    <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-0.5"/>
                                </Link>
                            )}
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductsTeaser() {
    return (
        <section className="bg-white py-24 sm:py-28">
            <div className="container-page">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <SectionHeading
                        align="left"
                        eyebrow="Our products"
                        title="SaaS we've built and run ourselves"
                        desc="Live products serving real businesses today — and the best proof of what we can build for you."
                    />
                    <Reveal>
                        <Link to="/products" className="btn-secondary shrink-0">
                            View all products
                            <Icon name="arrow-right" className="h-4 w-4"/>
                        </Link>
                    </Reveal>
                </div>
                <div className="mt-14 grid gap-6 md:grid-cols-2">
                    {PRODUCTS.map((p, i) => (
                        <Reveal key={p.id} delay={i * 100}>
                            <Link
                                to={`/products#${p.id}`}
                                className="card group block overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_48px_-24px_rgb(15_27_51/0.35)]"
                            >
                                <div className="overflow-hidden border-b border-ink-100 bg-ink-50">
                                    <img
                                        src={p.image}
                                        alt={`${p.name} website`}
                                        loading="lazy"
                                        width="1440"
                                        height="900"
                                        className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                                <div className="p-7">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{p.category}</p>
                                    <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.tagline}</p>
                                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                                        Learn more
                                        <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-0.5"/>
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Process() {
    return (
        <section id="process" className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(0_112_192/0.35),transparent_60%)]"/>
            <div className="container-page relative">
                <SectionHeading
                    dark
                    eyebrow="How we work"
                    title="A clear path from idea to launch"
                    desc="No black boxes. You see progress every week and always know what's next, what it costs, and when it ships."
                />
                <div className="relative mt-16">
                    <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"/>
                    <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                        {PROCESS.map((p, i) => (
                            <Reveal as="li" key={p.step} delay={i * 100} className="relative">
                                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brand-400/40 bg-ink-900 font-display text-sm font-bold text-brand-300 shadow-[0_0_0_6px_rgb(10_18_34)]">
                                    {p.step}
                                </span>
                                <h3 className="mt-6 text-xl font-bold text-white">{p.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink-300">{p.desc}</p>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}

function Metrics() {
    return (
        <section className="py-24 sm:py-28">
            <div className="container-page">
                <Reveal className="card grid grid-cols-2 divide-ink-100 overflow-hidden lg:grid-cols-4 lg:divide-x">
                    {STATS.map((s, i) => (
                        <div key={s.label} className={`p-8 text-center sm:p-10 ${i < 2 ? 'border-b border-ink-100 lg:border-b-0' : ''} ${i % 2 === 0 ? 'border-r border-ink-100 lg:border-r-0' : ''}`}>
                            <p className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">{s.value}</p>
                            <p className="mt-2 text-sm font-medium text-ink-500">{s.label}</p>
                        </div>
                    ))}
                </Reveal>
                <Reveal delay={100} as="ul" className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                    {TRUST_BADGES.map(b => (
                        <li key={b.label} className="flex items-center gap-2 text-sm font-medium text-ink-600">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                                <Icon name={b.icon} className="h-4 w-4"/>
                            </span>
                            {b.label}
                        </li>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}

function Testimonials() {
    return (
        <section id="testimonials" className="bg-white py-24 sm:py-28">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Client stories"
                    title="Teams that build with us, stay with us"
                    desc="Here's what leaders say after shipping with DesignScribe."
                />
                <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
                    {TESTIMONIALS.map((t, i) => (
                        <Reveal
                            as="figure"
                            key={t.company}
                            delay={i * 100}
                            className="card flex w-[85%] shrink-0 snap-center flex-col p-8 sm:w-[60%] md:w-auto"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex text-amber-400">
                                    {Array.from({length: 5}).map((_, j) => <Icon key={j} name="star" className="h-4 w-4"/>)}
                                </div>
                                <Icon name="quote" className="h-8 w-8 text-brand-100"/>
                            </div>
                            <blockquote className="mt-6 flex-1 text-base leading-relaxed text-ink-700">
                                “{t.quote}”
                            </blockquote>
                            <figcaption className="mt-8 flex items-center gap-3 border-t border-ink-100 pt-6">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-bold text-white">
                                    {t.company[0]}
                                </span>
                                <span>
                                    <span className="block text-sm font-semibold text-ink-900">{t.name}</span>
                                    <span className="block text-sm text-ink-400">{t.company}</span>
                                </span>
                            </figcaption>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Values() {
    return (
        <section id="values" className="py-24 sm:py-28">
            <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
                <SectionHeading
                    align="left"
                    eyebrow="Core values"
                    title="The principles behind every line of code"
                    desc="We're a small, senior team. These values decide how we scope, build, and support your product."
                />
                <div className="grid gap-5 sm:grid-cols-2">
                    {VALUES.map((v, i) => (
                        <Reveal key={v.title} delay={i * 80} className="card p-6">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-white">
                                <Icon name={v.icon} className="h-5 w-5"/>
                            </span>
                            <h3 className="mt-5 text-base font-bold">{v.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ClosingCta() {
    return (
        <section className="pb-24 sm:pb-28">
            <div className="container-page">
                <Reveal className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgb(0_112_192/0.6),transparent_60%)]"/>
                    <div className="bg-grid absolute inset-0 opacity-[0.08] invert"/>
                    <div className="relative mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Let's build something impactful</h2>
                        <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
                            From concept validation to iterative scaling, we partner with teams serious about quality and velocity.
                            Tell us what you need — we'll reply within one business day.
                        </p>
                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link to="/contact-us" className="btn-primary px-6 py-3.5 text-base">
                                Start a conversation
                                <Icon name="arrow-right" className="h-4 w-4"/>
                            </Link>
                            <Link to="/members" className="btn-ghost-dark px-6 py-3.5 text-base">
                                Meet the team
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default function AboutUs() {
    return (
        <>
            <Hero/>
            <LogoMarquee/>
            <Services/>
            <ProductsTeaser/>
            <Process/>
            <Metrics/>
            <Testimonials/>
            <Values/>
            <ClosingCta/>
        </>
    );
}
