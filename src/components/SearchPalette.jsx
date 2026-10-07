import {useEffect, useMemo, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Icon from './Icon.jsx';
import {SEARCH_INDEX} from '../data/site.js';

export default function SearchPalette({open, onClose}) {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return SEARCH_INDEX;
        return SEARCH_INDEX.filter(item =>
            `${item.label} ${item.hint} ${item.keywords}`.toLowerCase().includes(q)
        );
    }, [query]);

    useEffect(() => {
        if (!open) return;
        setQuery('');
        setActive(0);
        const id = requestAnimationFrame(() => inputRef.current?.focus());
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            cancelAnimationFrame(id);
            document.body.style.overflow = prevOverflow;
        };
    }, [open]);

    if (!open) return null;

    const go = item => {
        onClose();
        navigate(item.to);
    };

    const onKeyDown = e => {
        if (e.key === 'Escape') onClose();
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActive(i => Math.min(i + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive(i => Math.max(i - 1, 0));
        } else if (e.key === 'Enter' && results[active]) {
            go(results[active]);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Search the site">
            <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" onClick={onClose}/>
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-2xl" onKeyDown={onKeyDown}>
                <div className="flex items-center gap-3 border-b border-ink-100 px-4">
                    <Icon name="search" className="h-5 w-5 text-ink-400"/>
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value);
                            setActive(0);
                        }}
                        placeholder="Search pages and sections…"
                        className="h-14 flex-1 bg-transparent text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none"
                        aria-label="Search"
                    />
                    <kbd className="rounded-md border border-ink-200 px-1.5 py-0.5 text-[10px] font-medium text-ink-400">ESC</kbd>
                </div>
                <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
                    {results.length === 0 && (
                        <li className="px-3 py-8 text-center text-sm text-ink-400">No results for “{query}”</li>
                    )}
                    {results.map((item, i) => (
                        <li key={item.to} role="option" aria-selected={i === active}>
                            <button
                                onClick={() => go(item)}
                                onMouseEnter={() => setActive(i)}
                                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition ${
                                    i === active ? 'bg-brand-50' : ''
                                }`}
                            >
                                <span>
                                    <span className="block text-sm font-medium text-ink-900">{item.label}</span>
                                    <span className="block text-xs text-ink-400">{item.hint}</span>
                                </span>
                                <Icon name="arrow-right" className={`h-4 w-4 ${i === active ? 'text-brand-600' : 'text-ink-200'}`}/>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
