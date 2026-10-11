import {Link} from 'react-router-dom';
import JsonLd from './JsonLd.jsx';
import {breadcrumbSchema} from '../data/seo.js';

export default function Breadcrumbs({items}) {
    return (
        <nav aria-label="Breadcrumb" className="text-sm text-ink-400">
            <JsonLd data={breadcrumbSchema(items)}/>
            <ol className="flex flex-wrap items-center gap-1.5">
                {items.map((item, i) => (
                    <li key={item.to} className="flex items-center gap-1.5">
                        {i > 0 && <span aria-hidden="true">/</span>}
                        {i === items.length - 1
                            ? <span aria-current="page" className="text-ink-600">{item.label}</span>
                            : <Link to={item.to} className="transition hover:text-brand-600">{item.label}</Link>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
