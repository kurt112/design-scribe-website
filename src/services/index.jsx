import {Link} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import {SERVICE_PAGES} from '../data/pages.js';

export default function Services() {
    return (
        <>
            <section className="relative -mt-16 overflow-hidden pt-16">
                <div className="bg-grid mask-fade-b absolute inset-0 -z-10"/>
                <div className="container-page pb-6 pt-10 sm:pt-14">
                    <Breadcrumbs items={[{label: 'Home', to: '/'}, {label: 'Services', to: '/services'}]}/>
                    <Reveal className="mt-8 max-w-3xl">
                        <p className="eyebrow">Our services</p>
                        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Software Development Services</h1>
                        <p className="mt-5 text-lg leading-relaxed text-ink-500">
                            One team owns design, engineering, and quality, from the first sketch to the thousandth deploy, so nothing gets lost in the handoff.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="pb-24 pt-10">
                <div className="container-page">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICE_PAGES.map((s, i) => (
                            <Reveal key={s.slug} delay={i * 60}>
                                <Link to={`/services/${s.slug}`} className="card group flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-200">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-100">
                                        <Icon name={s.icon} className="h-6 w-6"/>
                                    </span>
                                    <h2 className="mt-6 text-lg font-bold">{s.name}</h2>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{s.metaDescription}</p>
                                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                                        Learn more
                                        <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-0.5"/>
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-20">
                        <CtaBanner/>
                    </div>
                </div>
            </section>
        </>
    );
}
