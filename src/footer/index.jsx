import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import Icon from '../components/Icon.jsx';
import { COMPANY, NAV_LINKS, SERVICES } from '../data/site.js';
import { sendInquiry } from '../lib/email.js';

const SOCIALS = [
    { icon: 'linkedin', label: 'LinkedIn', href: COMPANY.socials.linkedin },
    { icon: 'github', label: 'GitHub', href: COMPANY.socials.github },
    { icon: 'mail', label: 'Email', href: `mailto:${COMPANY.email}` },
];

export default function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = e => {
        e.preventDefault();
        setStatus('sending');
        sendInquiry({ name: 'Newsletter signup', notes: `Newsletter signup: ${email}` })
            .then(() => {
                setStatus('sent');
                setEmail('');
            }, err => {
                console.log(err);
                setStatus('error');
            });
    };

    return (
        <footer className="bg-ink-950 text-ink-300">
            <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.6fr]">
                <div>
                    <Link to="/" className="flex items-center gap-2.5">
                        <img className="h-9 w-9 rounded-full ring-1 ring-white/10" src={logo} alt="" width="36" height="36" />
                        <span className="font-display text-lg font-bold tracking-tight text-white">
                            Design<span className="text-brand-400">Scribe</span>
                        </span>
                    </Link>
                    <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
                        Crafting resilient interfaces and scalable product foundations with clarity and intention.
                    </p>
                    <ul className="mt-6 flex gap-2">
                        {SOCIALS.map(s => (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    aria-label={s.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-ink-300 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
                                >
                                    <Icon name={s.icon} className="h-[18px] w-[18px]" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <nav aria-label="Company">
                    <h3 className="font-sans text-sm font-semibold text-white">Company</h3>
                    <ul className="mt-5 space-y-3 text-sm">
                        {NAV_LINKS.map(link => (
                            <li key={link.to}>
                                <Link to={link.to} className="transition hover:text-white">{link.label}</Link>
                            </li>
                        ))}
                        <li><Link to="/#process" className="transition hover:text-white">Our Process</Link></li>
                    </ul>
                </nav>

                <nav aria-label="Services">
                    <h3 className="font-sans text-sm font-semibold text-white">Services</h3>
                    <ul className="mt-5 space-y-3 text-sm">
                        {SERVICES.map(s => (
                            <li key={s.id}>
                                <Link to={s.link?.to ?? '/#services'} className="transition hover:text-white">{s.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h3 className="font-sans text-sm font-semibold text-white">Stay in the loop</h3>
                    <p className="mt-5 text-sm leading-relaxed text-ink-400">
                        Product-building tips and studio news. One email a month, no spam.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2 sm:flex-row">
                        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                        <input
                            id="newsletter-email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="h-11 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-ink-500 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/20"
                        />
                        <button type="submit" disabled={status === 'sending'} className="btn-primary h-11 py-0">
                            {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
                        </button>
                    </form>
                    <p aria-live="polite" className="mt-3 min-h-5 text-xs">
                        {status === 'sent' && <span className="text-emerald-400">Thanks — you're subscribed.</span>}
                        {status === 'error' && <span className="text-red-400">Couldn't subscribe. Please try again.</span>}
                    </p>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-400 sm:flex-row">
                    <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="transition hover:text-white">Privacy Policy</Link>
                        <Link to="/contact-us" className="transition hover:text-white">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
