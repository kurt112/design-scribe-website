import {useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import logo from '../assets/logo.png';
import Icon from '../components/Icon.jsx';
import SearchPalette from '../components/SearchPalette.jsx';
import {COMPANY, NAV_LINKS} from '../data/site.js';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onKey = e => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setSearchOpen(open => !open);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => setMenuOpen(false), [location.pathname]);

    const linkClass = ({isActive}) =>
        `relative px-3 py-2 text-sm font-medium transition-colors ${
            isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
        }`;

    return (
        <>
            <header
                className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
                    scrolled || menuOpen
                        ? 'border-ink-100 bg-white/85 shadow-[0_4px_20px_-12px_rgb(15_27_51/0.15)] backdrop-blur-xl'
                        : 'border-transparent bg-slate-50/0'
                }`}
            >
                <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main">
                    <Link to="/" className="flex items-center gap-2.5" aria-label={`${COMPANY.name} home`}>
                        <img className="h-9 w-9 rounded-full" src={logo} alt="" width="36" height="36"/>
                        <span className="font-display text-lg font-bold tracking-tight text-ink-900">
                            Design<span className="text-brand-600">Scribe</span>
                        </span>
                    </Link>

                    <div className="hidden items-center gap-1 md:flex">
                        {NAV_LINKS.map(link => (
                            <NavLink key={link.to} to={link.to} end className={linkClass}>
                                {({isActive}) => (
                                    <>
                                        {link.label}
                                        <span
                                            className={`absolute inset-x-3 -bottom-[14px] h-0.5 rounded-full bg-brand-600 transition-opacity ${
                                                isActive ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="hidden h-10 items-center gap-2 rounded-xl border border-ink-200 bg-white px-3 text-sm text-ink-400 transition hover:border-ink-300 hover:text-ink-600 lg:flex"
                        >
                            <Icon name="search" className="h-4 w-4"/>
                            <span className="pr-6">Search…</span>
                            <kbd className="rounded-md bg-ink-50 px-1.5 py-0.5 text-[10px] font-semibold text-ink-400">⌘K</kbd>
                        </button>
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-500 transition hover:bg-ink-50 hover:text-ink-900 lg:hidden"
                            aria-label="Search"
                        >
                            <Icon name="search"/>
                        </button>
                        <Link to="/contact-us" className="btn-primary hidden py-2.5 sm:inline-flex">
                            Get Started
                            <Icon name="arrow-right" className="h-4 w-4"/>
                        </Link>
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 transition hover:bg-ink-50 md:hidden"
                            onClick={() => setMenuOpen(open => !open)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <Icon name={menuOpen ? 'x' : 'menu'} className="h-6 w-6"/>
                        </button>
                    </div>
                </nav>

                {menuOpen && (
                    <div className="border-t border-ink-100 bg-white md:hidden">
                        <div className="container-page flex flex-col gap-1 py-4">
                            {NAV_LINKS.map(link => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end
                                    className={({isActive}) =>
                                        `rounded-xl px-4 py-3 text-base font-medium transition ${
                                            isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-700 hover:bg-ink-50'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <Link to="/contact-us" className="btn-primary mt-3 w-full">
                                Get Started
                                <Icon name="arrow-right" className="h-4 w-4"/>
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)}/>
        </>
    );
}

export default NavBar;
