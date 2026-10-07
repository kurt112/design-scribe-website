import {useState} from 'react';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import {COMPANY, SERVICES} from '../data/site.js';
import {sendInquiry} from '../lib/email.js';

const EMPTY = {name: '', email: '', company: '', service: '', message: ''};

const NEXT_STEPS = [
    {icon: 'mail', title: 'We reply within one business day', desc: 'A real person reads every message — no auto-responders.'},
    {icon: 'chat', title: 'Free discovery call', desc: '30 minutes to understand your goals, users, and constraints.'},
    {icon: 'check-circle', title: 'Clear proposal', desc: 'Scope, timeline, and cost in writing before any work starts.'},
];

export default function ContactUs() {
    const [data, setData] = useState(EMPTY);
    const [status, setStatus] = useState('idle');

    const update = field => e => setData(d => ({...d, [field]: e.target.value}));

    const sendEmail = event => {
        event.preventDefault();
        setStatus('sending');

        const details = [data.message, '', `From: ${data.name} (${data.email})`];
        if (data.company) details.push(`Company: ${data.company}`);
        if (data.service) details.push(`Interested in: ${data.service}`);

        sendInquiry({name: data.name, notes: details.join('\n')})
            .then(() => {
                setStatus('sent');
                setData(EMPTY);
            }, err => {
                console.log(err);
                setStatus('error');
            });
    };

    return (
        <section className="relative -mt-16 overflow-hidden pt-16 pb-24">
            <div className="bg-grid mask-fade-b absolute inset-x-0 top-0 -z-10 h-[600px]"/>
            <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"/>

            <div className="container-page grid gap-12 pt-16 sm:pt-24 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
                <Reveal>
                    <p className="eyebrow">Contact us</p>
                    <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                        Let's talk about what you're building
                    </h1>
                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-500">
                        Whether it's a brand-new SaaS product or an upgrade to the tools you already rely on,
                        we'd love to hear from you.
                    </p>

                    <ul className="mt-10 space-y-6">
                        {NEXT_STEPS.map(step => (
                            <li key={step.title} className="flex gap-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm ring-1 ring-ink-100">
                                    <Icon name={step.icon} className="h-5 w-5"/>
                                </span>
                                <div>
                                    <p className="font-semibold text-ink-900">{step.title}</p>
                                    <p className="mt-0.5 text-sm text-ink-500">{step.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 border-t border-ink-100 pt-8">
                        <p className="text-sm text-ink-400">Prefer email?</p>
                        <a href={`mailto:${COMPANY.email}`} className="mt-1 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-brand-600">
                            <Icon name="mail" className="h-4 w-4"/>
                            {COMPANY.email}
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={120}>
                    <form className="card p-6 sm:p-10" onSubmit={sendEmail}>
                        <h2 className="text-xl font-bold">Send a message</h2>
                        <p className="mt-1 text-sm text-ink-400">Fields marked * are required.</p>

                        <div className="mt-8 grid gap-5 sm:grid-cols-2">
                            <label className="block">
                                <span className="mb-1.5 block text-sm font-medium text-ink-700">Name *</span>
                                <input className="field" type="text" autoComplete="name" value={data.name} onChange={update('name')} required/>
                            </label>
                            <label className="block">
                                <span className="mb-1.5 block text-sm font-medium text-ink-700">Work email *</span>
                                <input className="field" type="email" autoComplete="email" value={data.email} onChange={update('email')} required/>
                            </label>
                            <label className="block">
                                <span className="mb-1.5 block text-sm font-medium text-ink-700">Company</span>
                                <input className="field" type="text" autoComplete="organization" value={data.company} onChange={update('company')}/>
                            </label>
                            <label className="block">
                                <span className="mb-1.5 block text-sm font-medium text-ink-700">I'm interested in</span>
                                <select className="field" value={data.service} onChange={update('service')}>
                                    <option value="">Select a service</option>
                                    {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                                    <option value="Not sure yet">Not sure yet</option>
                                </select>
                            </label>
                            <label className="block sm:col-span-2">
                                <span className="mb-1.5 block text-sm font-medium text-ink-700">Tell us about your project *</span>
                                <textarea
                                    className="field h-36 resize-none"
                                    placeholder="What are you building, who is it for, and when do you need it?"
                                    value={data.message}
                                    onChange={update('message')}
                                    required
                                />
                            </label>
                        </div>

                        <button type="submit" disabled={status === 'sending'} className="btn-primary mt-8 w-full py-3.5 text-base">
                            {status === 'sending' ? 'Sending…' : 'Send message'}
                            {status !== 'sending' && <Icon name="arrow-right" className="h-4 w-4"/>}
                        </button>

                        <div aria-live="polite">
                            {status === 'sent' && (
                                <p className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                                    <Icon name="check-circle" className="h-5 w-5"/>
                                    Message sent — we'll be in touch within one business day.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                                    Something went wrong. Please try again or email us at {COMPANY.email}.
                                </p>
                            )}
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
