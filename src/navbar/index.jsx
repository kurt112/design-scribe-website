import {NavLink} from "react-router-dom";
import logo from '../assets/logo.png';
function NavBar(){
    const linkClass = ({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition ${
            isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-100'
        }`;
    return (
        <nav className="bg-white shadow mb-8">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
                <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full" src={logo}
                         alt="Rounded avatar"/>
                    <span className="text-xl font-bold text-blue-600">Design Scribe</span>
                </div>
                <div className="flex gap-2">
                    <NavLink to="/" className={linkClass}>About Us</NavLink>
                    <NavLink to="/members" className={linkClass}>Members</NavLink>
                    <NavLink to="/contact-us" className={linkClass}>Contact us</NavLink>
                    {/*<NavLink to="/clients" className={linkClass}>Our Clients</NavLink>*/}
                </div>
            </div>
        </nav>
    );
}

export default NavBar