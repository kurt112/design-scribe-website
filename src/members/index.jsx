import {useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';

const team = [
    {
        id: 1,
        name: 'Kurt Lupin Orioque',
        role: 'Owner & IT Consultant',
        bio: 'Drives vision, culture, and long term strategy.',
        skills: ['Leadership', 'Growth', 'Technical Skills'],
        avatar: '/team-members-pictures/kurt-picture.jpg'
    },
    {
        id: 3,
        name: 'Jea Maureen Geulen',
        role: 'COO',
        bio: 'Drives revenue growth by building strong client relationships and delivering tailored solutions that exceed expectations.',
        skills: ['Sales', 'Marketing', 'Trading', 'Presentation'],
        avatar: '/team-members-pictures/jea-picture.jpg'
    },
    {
        id: 4,
        name: 'Patrick Semilla',
        role: 'Lead Quality Assurance',
        bio: 'Ensures product excellence through rigorous testing and continuous process improvement.',
        skills: ['Quality Assurance', 'Testing', 'Leadership', 'Efficiency', 'Sales'],
        avatar: '/team-members-pictures/patrick-picture.jpg'
    },
    {
        id: 5,
        name: 'Aaron Paul Habel',
        role: 'Quality Assurance Engineer',
        bio: 'Delivers reliable products by designing and executing thorough test plans, ensuring quality at every stage of development.',
        skills: ['Testing', 'Automation', 'Attention to Detail'],
        avatar: '/team-members-pictures/habel-picture.png'
    },
];

const roles = ['All', ...Array.from(new Set(team.map(t => t.role)))];

export default function Members() {
    const [activeRole, setActiveRole] = useState('All');
    const filtered = useMemo(
        () => (activeRole === 'All' ? team : team.filter(t => t.role === activeRole)),
        [activeRole]
    );

    return (
        <>
            <section className="relative -mt-16 overflow-hidden pt-16">
                <div className="bg-grid mask-fade-b absolute inset-0 -z-10"/>
                <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"/>
                <div className="container-page pb-14 pt-16 text-center sm:pt-24">
                    <Reveal>
                        <p className="eyebrow">Our team</p>
                        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
                            The people behind your product
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
                            A multidisciplinary crew crafting resilient products with precision and empathy.
                        </p>
                    </Reveal>
                    <Reveal delay={120} className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by role">
                        {roles.map(r => {
                            const active = r === activeRole;
                            return (
                                <button
                                    key={r}
                                    onClick={() => setActiveRole(r)}
                                    aria-pressed={active}
                                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                                        active
                                            ? 'bg-ink-900 text-white shadow'
                                            : 'border border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:text-ink-900'
                                    }`}
                                >
                                    {r}
                                </button>
                            );
                        })}
                    </Reveal>
                </div>
            </section>

            <section className="pb-24">
                <div className="container-page">
                    <p className="mb-6 text-sm text-ink-400">
                        Showing <span className="font-semibold text-ink-800">{filtered.length}</span> of {team.length} members
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {filtered.map((m, i) => (
                            <Reveal key={m.id} delay={i * 80} as="article" className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgb(15_27_51/0.3)]">
                                <div className="aspect-[4/3.6] overflow-hidden bg-ink-50">
                                    <img
                                        src={m.avatar}
                                        alt={m.name}
                                        loading="lazy"
                                        className="h-full w-full object-cover object-[50%_25%] transition duration-500 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{m.role}</p>
                                    <h2 className="mt-1.5 text-lg font-bold">{m.name}</h2>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{m.bio}</p>
                                    <ul className="mt-5 flex flex-wrap gap-1.5">
                                        {m.skills.map(s => (
                                            <li key={s} className="rounded-md bg-ink-50 px-2 py-1 text-xs font-medium text-ink-600 ring-1 ring-ink-100">
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className="card mt-16 flex flex-col items-center justify-between gap-6 p-8 text-center sm:p-10 md:flex-row md:text-left">
                        <div>
                            <h2 className="text-2xl font-bold">Want this team on your project?</h2>
                            <p className="mt-2 text-ink-500">Tell us what you're building and we'll put together a plan.</p>
                        </div>
                        <Link to="/contact-us" className="btn-primary shrink-0 px-6 py-3.5 text-base">
                            Get Started
                            <Icon name="arrow-right" className="h-4 w-4"/>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
