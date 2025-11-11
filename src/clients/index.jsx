// src/pages/Clients.jsx
const clients = [
    { id: 1, name: 'Globex', sector: 'Finance' },
    { id: 2, name: 'Initech', sector: 'Enterprise' },
    { id: 3, name: 'Umbrella', sector: 'Healthcare' },
    { id: 4, name: 'Soylent', sector: 'Retail' }
];
export default function Clients() {
    return (
        <section className="max-w-6xl mx-auto px-4">
            <h2 className="section-title">Clients</h2>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {clients.map(c => (
                    <div key={c.id} className="bg-white border rounded-lg p-4 text-center">
                        <p className="font-medium">{c.name}</p>
                        <p className="text-xs text-gray-500">{c.sector}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}