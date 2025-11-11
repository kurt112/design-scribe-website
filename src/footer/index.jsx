import './footer.css'
import {useState} from "react";

export default function Footer() {
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const handleChange = e => setForm(f => ({...f, [e.target.name]: e.target.value}));
    const handleSubmit = e => {
        e.preventDefault();
        // Replace with real integration (API / mail service)
        console.log('Contact submission:', form);
        setForm({name: '', email: '', message: ''});
    };

    return (
        <footer className='w-100'>
            <div className="px-6 py-10 bg-gray-600 text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent_70%)]"/>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    Design Scribe Solution
                </h2>
                <p className="text-sm md:text-base max-w-xl opacity-90 leading-relaxed">
                    Crafting resilient interfaces and scalable product foundations with clarity and intention.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-sm">
                    <div>
                         <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mr-1">
                        UI/UX
                    </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mr-1">
            Engineering
          </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mr-1">
            Product
          </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mr-1">
            Data
          </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mr-1">
            Consulting
          </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mr-1">
            AI
          </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mr-1">
            Machine Learning
          </span>
                    </div>

                </div>
                <div
                    className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                    <p className="opacity-80">
                        © {new Date().getFullYear()} Design Scribe Solution. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:underline">LinkedIn</a>
                        <a href="#" className="hover:underline">GitHub</a>
                        <a href="mailto:contact@designscribe.dev" className="hover:underline">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}