import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const linkClass = ({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition ${
            isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-100'
        }`;

    return (
        <nav className="bg-white shadow mb-8">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
                <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full" src={logo} alt="Rounded avatar" />
                    <span className="text-xl font-bold text-blue-600">Design Scribe</span>
                </div>
                {/* Desktop links */}
                <div className="hidden md:flex gap-2">
                    <NavLink to="/" className={linkClass}>About Us</NavLink>
                    <NavLink to="/members" className={linkClass}>Members</NavLink>
                    <NavLink to="/contact-us" className={linkClass}>Contact us</NavLink>
                </div>
                {/* Hamburger menu button */}
                <button
                    className="md:hidden flex items-center p-2 rounded hover:bg-blue-100"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
                    <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>About Us</NavLink>
                    <NavLink to="/members" className={linkClass} onClick={() => setMenuOpen(false)}>Members</NavLink>
                    <NavLink to="/contact-us" className={linkClass} onClick={() => setMenuOpen(false)}>Contact us</NavLink>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
