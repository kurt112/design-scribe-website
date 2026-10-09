import {useEffect} from 'react';
import NavBar from "./navbar/index.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import AboutUs from "./about-us/index.jsx";
import Members from "./members/index.jsx";
import Footer from "./footer/index.jsx";
import ContactUs from "./contact-us/index.jsx";
import Privacy from "./privacy/index.jsx";
import Products from "./products/index.jsx";
import Seo from "./components/Seo.jsx";

function ScrollManager() {
    const {pathname, hash} = useLocation();

    useEffect(() => {
        if (hash) {
            const id = requestAnimationFrame(() => {
                document.getElementById(hash.slice(1))?.scrollIntoView({behavior: 'smooth', block: 'start'});
            });
            return () => cancelAnimationFrame(id);
        }
        window.scrollTo({top: 0, behavior: 'instant'});
    }, [pathname, hash]);

    return null;
}

function App() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            <ScrollManager/>
            <Seo/>
            <NavBar/>
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<AboutUs/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/members" element={<Members/>}/>
                    <Route path="/contact-us" element={<ContactUs/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                    {/*<Route path="/clients" element={<Clients/>}/>*/}
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App
