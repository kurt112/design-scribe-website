import Icon from '../components/Icon.jsx';

const BARS = [38, 52, 44, 61, 57, 70, 64, 78, 72, 86, 81, 94];

const KPIS = [
    {label: 'Monthly revenue', value: '$48.2k', delta: '+12.4%'},
    {label: 'Active users', value: '3,914', delta: '+8.1%'},
    {label: 'Uptime', value: '99.98%', delta: '30d'},
];

const DEPLOYS = [
    {name: 'Billing service', env: 'Production', time: '2m ago'},
    {name: 'Customer portal', env: 'Staging', time: '1h ago'},
    {name: 'Analytics API', env: 'Production', time: '3h ago'},
];

export default function ProductMock() {
    return (
        <div className="relative" aria-hidden="true">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-200/60 via-brand-100/40 to-transparent blur-2xl"/>

            <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_30px_80px_-24px_rgb(15_27_51/0.35)]">
                <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50/60 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-200"/>
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-200"/>
                    <span className="h-2.5 w-2.5 rounded-full bg-ink-200"/>
                    <div className="mx-auto flex h-6 w-1/2 items-center justify-center rounded-md bg-white text-[10px] font-medium text-ink-400 ring-1 ring-ink-100">
                        app.yourproduct.com
                    </div>
                </div>

                <div className="flex">
                    <aside className="hidden w-36 shrink-0 border-r border-ink-100 p-3 sm:block">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="h-6 w-6 rounded-lg bg-ink-900"/>
                            <span className="h-2 w-14 rounded bg-ink-200"/>
                        </div>
                        {['Overview', 'Customers', 'Billing', 'Reports', 'Settings'].map((item, i) => (
                            <div
                                key={item}
                                className={`mb-1 rounded-lg px-2 py-1.5 text-[11px] font-medium ${
                                    i === 0 ? 'bg-brand-50 text-brand-700' : 'text-ink-400'
                                }`}
                            >
                                {item}
                            </div>
                        ))}
                    </aside>

                    <div className="flex-1 p-4 sm:p-5">
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <p className="text-[11px] text-ink-400">Dashboard</p>
                                <p className="font-display text-sm font-bold text-ink-900">Overview</p>
                            </div>
                            <span className="rounded-lg bg-brand-600 px-2.5 py-1 text-[10px] font-semibold text-white">Export</span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            {KPIS.map(kpi => (
                                <div key={kpi.label} className="rounded-xl border border-ink-100 p-2.5 sm:p-3">
                                    <p className="truncate text-[9px] text-ink-400 sm:text-[10px]">{kpi.label}</p>
                                    <p className="mt-1 font-display text-sm font-bold text-ink-900 sm:text-base">{kpi.value}</p>
                                    <p className="text-[9px] font-semibold text-emerald-600 sm:text-[10px]">{kpi.delta}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-3 rounded-xl border border-ink-100 p-3">
                            <div className="mb-3 flex items-center justify-between">
                                <p className="text-[11px] font-semibold text-ink-700">Growth</p>
                                <p className="text-[10px] text-ink-400">Last 12 months</p>
                            </div>
                            <div className="flex h-24 items-end gap-1.5 sm:h-28">
                                {BARS.map((h, i) => (
                                    <div
                                        key={i}
                                        className={`flex-1 rounded-t-[3px] ${i === BARS.length - 1 ? 'bg-brand-600' : 'bg-brand-200'}`}
                                        style={{height: `${h}%`}}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="mt-3 hidden rounded-xl border border-ink-100 sm:block">
                            {DEPLOYS.map((d, i) => (
                                <div
                                    key={d.name}
                                    className={`flex items-center justify-between px-3 py-2 ${i ? 'border-t border-ink-100' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>
                                        <span className="text-[11px] font-medium text-ink-700">{d.name}</span>
                                    </div>
                                    <span className="text-[10px] text-ink-400">{d.env} · {d.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -left-4 top-16 hidden items-center gap-3 rounded-xl border border-ink-100 bg-white px-3.5 py-2.5 shadow-xl sm:flex lg:-left-10">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Icon name="rocket" className="h-4 w-4"/>
                </span>
                <div>
                    <p className="text-xs font-semibold text-ink-900">v2.4 shipped</p>
                    <p className="text-[10px] text-ink-400">Zero downtime deploy</p>
                </div>
            </div>

            <div className="absolute -bottom-5 -right-3 hidden items-center gap-3 rounded-xl border border-ink-100 bg-white px-3.5 py-2.5 shadow-xl sm:flex lg:-right-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon name="shield" className="h-4 w-4"/>
                </span>
                <div>
                    <p className="text-xs font-semibold text-ink-900">QA passed</p>
                    <p className="text-[10px] text-ink-400">248 / 248 tests green</p>
                </div>
            </div>
        </div>
    );
}
