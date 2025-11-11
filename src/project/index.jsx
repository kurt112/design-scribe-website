const projects = [
    { id: 1, name: 'Platform X', status: 'In Progress', desc: 'Next-gen SaaS.' },
    { id: 2, name: 'Mobile Suite', status: 'Released', desc: 'Cross-platform app.' },
    { id: 3, name: 'DataHub', status: 'Beta', desc: 'Analytics pipeline.' }
];
export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto px-4">
            <h2 className="section-title">Projects</h2>
            <ul className="space-y-4">
                {projects.map(p => (
                    <li key={p.id} className="border rounded-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="font-semibold">{p.name}</h3>
                            <p className="text-sm text-gray-500">{p.desc}</p>
                        </div>
                        <span className="mt-2 sm:mt-0 inline-block text-xs px-2 py-1 rounded bg-blue-600 text-white">
              {p.status}
            </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}