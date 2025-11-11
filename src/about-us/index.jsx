import React from 'react';

const values = [
    { id: 1, title: 'Integrity', desc: 'Transparent communication and accountable delivery.' },
    { id: 2, title: 'Innovation', desc: 'Continuous exploration of better approaches.' },
    { id: 3, title: 'Reliability', desc: 'Systems and processes you can trust.' },
    { id: 4, title: 'Empathy', desc: 'User-first decisions with real-world impact.' }
];

const stats = [
    { id: 1, label: 'Projects Delivered', value: '50+' },
    { id: 2, label: 'Active Clients', value: '20+' },
    { id: 3, label: 'Uptime Reliability', value: '99.9%' },
    { id: 4, label: 'Avg. Delivery Speed', value: '2x' }
];

const timeline = [
    { year: '2021', text: 'Founded with a mission to simplify product delivery.' },
    { year: '2022', text: 'Scaled core platform and design system adoption.' },
    { year: '2023', text: 'Expanded into data intelligence and automation.' },
    { year: '2024', text: 'Global client growth and performance optimization.' }
];

export default function AboutUs() {
    return (
        <div className="px-5 pb-20">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-3xl jumbotron-background-color text-white mb-16">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_60%)]" />
                <div className="relative max-w-6xl mx-auto py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        You Describe. We Build.
                    </h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90 leading-relaxed">
                        We turn your ideas into impactful digital experiences through expert design and development.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button className="px-6 cursor-pointer py-3 rounded-xl bg-white/90 text-blue-700 font-semibold shadow hover:bg-white transition">
                            Get in Touch
                        </button>
                        <button className="px-6 py-3 rounded-xl backdrop-blur bg-white/10 font-medium border border-white/30 hover:bg-white/20 transition">
                            Our Process
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="max-w-6xl mx-auto mb-16">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map(s => (
                        <div
                            key={s.id}
                            className="group relative bg-white rounded-xl p-6 shadow  transition border border-gray-100"
                        >
                            <div className="absolute -inset-px rounded-xl opacity-0  bg-gradient-to-r from-blue-50 to-sky-600 transition" />
                            <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 text-transparent bg-clip-text">
                                {s.value}
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-600">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="max-w-6xl mx-auto mb-20">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Core Values</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {values.map(v => (
                        <div
                            key={v.id}
                            className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition"
                        >
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-tr from-blue-600 to-sky-600 text-white text-sm font-semibold mb-4 shadow">
                                {v.title[0]}
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">{v.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="max-w-6xl mx-auto mb-24">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">Journey</h2>
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-sky-600" />
                    <ul className="space-y-10">
                        {timeline.map(item => (
                            <li key={item.year} className="flex gap-6">
                                <div className="relative">
                                    <div className="mt-1 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-sky-600 text-white text-sm font-semibold shadow">
                                        {item.year.slice(-2)}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold">
                                        {item.year}
                                    </p>
                                    <p className="mt-1 text-gray-600 leading-relaxed">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-5xl mx-auto rounded-3xl p-10 bg-white shadow-md border border-gray-100 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Let`s Build Something Impactful</h3>
                <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
                    From concept validation to iterative scaling, we partner with teams serious about quality and velocity.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-6 cursor-pointer py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:brightness-110 transition">
                        Start a Conversation
                    </button>
                </div>
            </section>
        </div>
    );
}
