import {Link} from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function ProductCards({products}) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
                <Reveal key={p.id} delay={i * 100} className="h-full">
                    <Link
                        to={`/products/${p.id}`}
                        className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand-200"
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
                        <div className="flex flex-1 flex-col p-6">
                            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{p.category}</p>
                            <h3 className="mt-2 text-lg font-bold">{p.name}</h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{p.tagline}</p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                                See how it works
                                <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-0.5"/>
                            </span>
                        </div>
                    </Link>
                </Reveal>
            ))}
        </div>
    );
}
