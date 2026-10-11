import {Link} from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function CtaBanner({
    title = 'Let’s scope your project',
    desc = 'Tell us what you need. We’ll reply with questions, a plan, and clear costs.',
    cta = 'Start your project',
}) {
    return (
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgb(0_112_192/0.6),transparent_60%)]"/>
            <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold text-white">{title}</h2>
                <p className="mt-4 leading-relaxed text-ink-300">{desc}</p>
                <Link to="/contact-us" className="btn-primary mt-8 px-6 py-3.5 text-base">
                    {cta}
                    <Icon name="arrow-right" className="h-4 w-4"/>
                </Link>
            </div>
        </Reveal>
    );
}
