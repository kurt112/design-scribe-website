import React, { useState, useMemo } from 'react';

const team = [
    {
        id: 1,
        name: 'Kurt Lupin Orioque',
        role: 'Founder/CEO',
        bio: 'Drives vision, culture, and long term strategy.',
        skills: ['Leadership', 'Growth', 'Technical Skills'],
        avatar: '/team-members-pictures/kurt-picture.jpg'
    },
    {
        id: 2,
        name: 'Patrick Semilla',
        role: 'Sales Lead',
        bio: 'Leads client acquisition and relationship management.',
        skills: ['Sales', 'CRM'],
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Patrick+Semilla'
    },
    // {
    //     id: 3,
    //     name: 'Alice Lee',
    //     role: 'Design',
    //     bio: 'Owns product design language and accessibility.',
    //     skills: ['UI', 'UX', 'A11y'],
    //     avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Alice+Lee'
    // },
    // {
    //     id: 4,
    //     name: 'Carlos Reyes',
    //     role: 'Engineering',
    //     bio: 'Optimizes performance and delivery pipelines.',
    //     skills: ['DevOps', 'Performance'],
    //     avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Carlos+Reyes'
    // },
    // {
    //     id: 5,
    //     name: 'Maya Patel',
    //     role: 'Product',
    //     bio: 'Aligns roadmap with user and business outcomes.',
    //     skills: ['Strategy', 'Research'],
    //     avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Maya+Patel'
    // },
    // {
    //     id: 6,
    //     name: 'Tom Nguyen',
    //     role: 'Data',
    //     bio: 'Transforms raw data into actionable insights.',
    //     skills: ['Analytics', 'ML'],
    //     avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Tom+Nguyen'
    // }
];

const roles = ['All', ...Array.from(new Set(team.map(t => t.role)))];

export default function Members() {
    const [activeRole, setActiveRole] = useState('All');
    const filtered = useMemo(
        () => (activeRole === 'All' ? team : team.filter(t => t.role === activeRole)),
        [activeRole]
    );

    return (
        <div className="px-5 pb-24">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-3xl text-white mb-16 jumbotron-background-color">
                <div
                    className="relative max-w-6xl mx-auto py-16 md:py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Meet The Team
                    </h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90 leading-relaxed">
                        A multidisciplinary crew crafting resilient products with precision and empathy.
                    </p>
                    {/* Role Filter */}
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {roles.map(r => {
                            const active = r === activeRole;
                            return (
                                <button
                                    key={r}
                                    onClick={() => setActiveRole(r)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition backdrop-blur
                  ${active
                                        ? 'bg-white text-indigo-700 shadow'
                                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}
                                >
                                    {r}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Count Bar */}
            <div className="max-w-6xl mx-auto mb-10">
            <div className="flex items-center justify-between bg-white rounded-xl px-6 py-4 shadow border border-gray-100">
                    <p className="text-sm font-medium text-gray-700">
                        Showing <span className="text-indigo-600 font-semibold">{filtered.length}</span> of {team.length} members
                    </p>
                    <div className="w-40 h-2 rounded-full bg-indigo-100 overflow-hidden">
                        <div
                            className="h-full bg-gray-600 transition-all"
                            style={{ width: `${(filtered.length / team.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <section className="max-w-6xl mx-auto">
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map(m => (
                        <div
                            key={m.id}
                            className="group relative cursor-pointer bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition"
                        >
                            <div className="absolute -inset-px rounded-2xl opacity-0  bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 transition" />
                            <div className="flex items-center gap-4 mb-5">
                                <div className="relative">
                                    <img
                                        src={m.avatar}
                                        alt={m.name}
                                        className="w-16 h-16 rounded-xl ring-2 ring-white shadow-md object-cover"
                                    />
                                    <span className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold bg-gray-600 text-white shadow">
                    {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 leading-tight">{m.name}</h3>
                                    <p className="text-xs uppercase tracking-wide font-medium text-indigo-600">
                                        {m.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                {m.bio}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {m.skills.map(s => (
                                    <span
                                        key={s}
                                        className="px-2.5 py-1 text-xs rounded-full bg-gray-600 text-white font-medium shadow-sm"
                                    >
                    {s}
                  </span>
                                ))}
                            </div>
                            <div className="mt-5 flex items-center justify-between">
                                <button className="text-xs font-medium text-sky-600">
                                    View Profile →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}