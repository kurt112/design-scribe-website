// src/clients/index.jsx
import React, {useState, useMemo} from 'react';

const clients = [
    {id: 1, name: 'Globex', sector: 'Finance', summary: 'Digital treasury modernization.', country: 'US'},
    {id: 2, name: 'Initech', sector: 'Enterprise', summary: 'Workflow automation platform.', country: 'US'},
    {id: 3, name: 'Umbrella', sector: 'Healthcare', summary: 'Secure patient data exchange.', country: 'UK'},
    {id: 4, name: 'Soylent', sector: 'Retail', summary: 'Ecommerce performance optimization.', country: 'DE'},
    {id: 5, name: 'Stark Industries', sector: 'Defense', summary: 'Edge analytics infrastructure.', country: 'US'},
    {id: 6, name: 'Wayne Corp', sector: 'Manufacturing', summary: 'Predictive maintenance suite.', country: 'CA'},
    {id: 7, name: 'Tyrell', sector: 'Biotech', summary: 'Genomic data pipelines.', country: 'SE'},
    {id: 8, name: 'Wonka Labs', sector: 'Food', summary: 'Smart supply chain tracking.', country: 'FR'}
];

const testimonials = [
    {
        id: 1,
        quote: 'Their engineering velocity and clarity transformed our release cycles.',
        author: 'CIO, Globex'
    },
    {
        id: 2,
        quote: 'We scaled confidently thanks to their performance guidance.',
        author: 'Head of Product, Initech'
    },
    {
        id: 3,
        quote: 'A reliable partner for sensitive data solutions.',
        author: 'CTO, Umbrella'
    }
];

const sectors = ['All', ...Array.from(new Set(clients.map(c => c.sector)))];

export default function Clients() {
    const [activeSector, setActiveSector] = useState('All');
    const [testIdx, setTestIdx] = useState(0);

    const filtered = useMemo(
        () => (activeSector === 'All' ? clients : clients.filter(c => c.sector === activeSector)),
        [activeSector]
    );

    const nextTestimonial = () =>
        setTestIdx(i => (i + 1) % testimonials.length);
    const prevTestimonial = () =>
        setTestIdx(i => (i - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="px-5 pb-24">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-3xl jumbotron-background-color text-white mb-16">
                <div
                    className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent_70%)]"/>
                <div className="relative max-w-6xl mx-auto py-16 md:py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Trusted By Forward Teams
                    </h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90 leading-relaxed">
                        We partner with organizations across industries to build resilient, scalable digital
                        foundations.
                    </p>
                    {/* Sector Filter */}
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {sectors.map(s => {
                            const active = s === activeSector;
                            return (
                                <button
                                    key={s}
                                    onClick={() => setActiveSector(s)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition backdrop-blur
                      ${active
                                        ? 'bg-white text-indigo-700 shadow'
                                        : 'bg-white/10 text-white border border-white/20'}`}
                                >
                                    {s}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Count Bar */}
            <div className="max-w-6xl mx-auto mb-10">
                <div
                    className="flex items-center justify-between bg-white rounded-xl px-6 py-4 shadow border border-gray-100">
                    <p className="text-sm font-medium text-gray-700">
                        Showing <span
                        className="text-indigo-600 font-semibold">{filtered.length}</span> of {clients.length} clients
                    </p>
                    <div className="w-44 h-2 rounded-full bg-indigo-100 overflow-hidden">
                        <div
                            className="h-full bg-gray-600"
                            style={{width: `${(filtered.length / clients.length) * 100}%`}}
                        />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map(c => (
                        <div
                            key={c.id}
                            className="group relative cursor-pointer bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition"
                        >
                            <div
                                className="absolute -inset-px rounded-2xl opacity-0  bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 transition"/>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="relative">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-white text-lg bg-gradient-to-br from-indigo-600 to-cyan-500 shadow ring-2 ring-white">
                                        {c.name[0]}
                                    </div>
                                    <span
                                        className="absolute -bottom-1 -right-1 text-[10px] px-2 py-1 rounded-full bg-gray-800 text-white font-semibold shadow">
                    {c.country}
                  </span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 leading-tight">{c.name}</h3>
                                    <p className="text-xs uppercase tracking-wide font-medium text-indigo-600">
                                        {c.sector}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                {c.summary}
                            </p>
                            <div className="flex items-center justify-between">
                                <button className="text-xs font-medium text-gray-600 transition">
                                    Case Study →
                                </button>
                                <span
                                    className="text-[10px] px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                                    ID {c.id}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-5xl mx-auto mb-24">
                <div className="relative bg-white rounded-3xl p-10 shadow-md border border-gray-100 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_70%)]"/>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                        Partner Voices
                    </h2>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold transition"
                            aria-label="Previous"
                        >
                            ‹
                        </button>
                        <div className="flex-1 text-center px-4">
                            <p className="text-lg font-medium text-gray-800 leading-relaxed">
                                “{testimonials[testIdx].quote}”
                            </p>
                            <p className="mt-3 text-sm text-indigo-600 font-semibold">
                                {testimonials[testIdx].author}
                            </p>
                            <div className="mt-6 flex justify-center gap-2">
                                {testimonials.map((t, i) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setTestIdx(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition ${
                                            i === testIdx ? 'bg-indigo-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold transition"
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
}
