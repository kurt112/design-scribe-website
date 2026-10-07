import {COMPANY} from '../data/site.js';

const SECTIONS = [
    {
        title: 'Information we collect',
        body: 'When you use our contact or newsletter forms, we collect the details you provide — such as your name, email address, company, and message. We do not sell this information.',
    },
    {
        title: 'How we use it',
        body: 'We use your information only to respond to your inquiry, send updates you subscribed to, and improve our services. You can unsubscribe from updates at any time.',
    },
    {
        title: 'Third-party services',
        body: 'Form submissions are delivered by email through EmailJS, and the site is hosted on Firebase Hosting. These providers process data on our behalf under their own privacy terms.',
    },
    {
        title: 'Your choices',
        body: `You can ask us to access, correct, or delete the information we hold about you by emailing ${COMPANY.email}.`,
    },
];

export default function Privacy() {
    return (
        <section className="py-20 sm:py-24">
            <div className="container-page max-w-3xl">
                <p className="eyebrow">Legal</p>
                <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
                <p className="mt-5 text-lg leading-relaxed text-ink-500">
                    {COMPANY.name} respects your privacy. This page explains what we collect through this website and how we use it.
                </p>
                <div className="mt-12 space-y-10">
                    {SECTIONS.map(s => (
                        <div key={s.title}>
                            <h2 className="text-xl font-bold">{s.title}</h2>
                            <p className="mt-3 leading-relaxed text-ink-600">{s.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
