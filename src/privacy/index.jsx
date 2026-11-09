import {COMPANY} from '../data/site.js';

const SECTIONS = [
    {
        title: 'Who we are',
        body: `${COMPANY.name} is the trade name of DesignScribe IT Consultancy, a business name registered in the Philippines with the Department of Trade and Industry (DTI Business Name No. 7934410), owned by Kurt Lupin Concepcion Orioque. Our Data Protection Officer is Kurt Lupin Concepcion Orioque, reachable at ${COMPANY.email}.`,
    },
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
        body: `You can ask us to access, correct, or delete the information we hold about you by emailing ${COMPANY.email}. Under the Data Privacy Act of 2012 (Republic Act No. 10173) you may also file a complaint with the National Privacy Commission.`,
    },
    {
        title: 'Data breaches',
        body: 'If a personal data breach puts people at real risk of harm, we notify the National Privacy Commission and the people affected within 72 hours of learning of it, as the Data Privacy Act requires.',
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
