import Icon from './Icon.jsx';
import JsonLd from './JsonLd.jsx';
import {faqSchema} from '../data/seo.js';

export default function FaqList({faqs}) {
    return (
        <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
            <JsonLd data={faqSchema(faqs)}/>
            {faqs.map(f => (
                <details key={f.q} className="group px-6 py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                        <h3 className="text-base">{f.q}</h3>
                        <Icon name="arrow-right" className="h-4 w-4 shrink-0 text-ink-400 transition group-open:rotate-90"/>
                    </summary>
                    <p className="mt-3 leading-relaxed text-ink-500">{f.a}</p>
                </details>
            ))}
        </div>
    );
}
