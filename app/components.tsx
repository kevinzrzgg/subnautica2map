import Link from 'next/link';
import { guideItems } from '@/data/items';

export function Header() {
  return <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
    <Link href="/" className="flex items-center gap-3 font-bold tracking-wide"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300/15 text-cyan-200">S2</span><span>Subnautica 2 Map</span></Link>
    <nav className="hidden gap-5 text-sm text-cyan-100/80 md:flex">
      <Link href="/map/">Map</Link><Link href="/blueprints/">Blueprints</Link><Link href="/fragments/">Fragments</Link><Link href="/materials/">Materials</Link><Link href="/recipes/">Recipes</Link>
    </nav>
  </header>
}

export function Footer() {
  return <footer className="mx-auto max-w-7xl px-5 py-12 text-sm text-cyan-100/60">
    <div className="card p-6"><p><strong>Disclaimer:</strong> Subnautica 2 Map is an unofficial fan-made guide and is not affiliated with Unknown Worlds or Krafton. Game names and assets belong to their respective owners.</p><p className="mt-3">Built for fast second-screen lookup: spoiler-light routes, blueprints, fragments, recipes, and materials.</p></div>
  </footer>
}

export function MapPreview() {
  const points = [
    ['Repair Tool Fragment','Fragment','left-[24%] top-[35%]'], ['Conduit Crystal','Material','left-[57%] top-[29%]'], ['Vehicle Fabricator','Blueprint','left-[70%] top-[58%]'], ['Silver Outcrop','Material','left-[38%] top-[64%]'], ['Tadpole Route','Vehicle','left-[49%] top-[48%]']
  ];
  return <div className="card map-grid relative min-h-[420px] overflow-hidden p-5">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,.45))]" />
    <div className="relative z-10 flex flex-wrap gap-2">{['Blueprints','Fragments','Materials','Biomes','Vehicles','Black Boxes'].map(x => <span className="badge" key={x}>{x}</span>)}</div>
    {points.map(([name,type,pos]) => <div key={name} className={`absolute ${pos} z-10`}><div className="group relative"><span className="block h-4 w-4 rounded-full border-2 border-white bg-teal-300 shadow-[0_0_24px_rgba(55,240,192,.9)]"/><div className="absolute left-5 top-0 w-52 rounded-2xl border border-cyan-200/20 bg-slate-950/90 p-3 text-xs opacity-0 shadow-xl transition group-hover:opacity-100"><b>{name}</b><br/><span className="text-cyan-100/70">{type}</span></div></div></div>)}
    <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl border border-cyan-200/15 bg-slate-950/70 p-4 text-sm text-cyan-50/75">MVP preview map: exact coordinates will be updated as Early Access patches change item locations.</div>
  </div>
}

export function ItemGrid({ limit }: { limit?: number }) {
  const rows = limit ? guideItems.slice(0, limit) : guideItems;
  return <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{rows.map(item => <Link href={`/${item.slug}/`} key={item.slug} className="card block p-5 transition hover:-translate-y-1 hover:border-cyan-200/40"><div className="mb-3 flex items-center justify-between"><span className="badge">{item.category}</span><span className="text-xs text-teal-200">{item.priority}</span></div><h3 className="text-xl font-bold text-white">{item.name}</h3><p className="mt-2 text-sm text-cyan-50/70">{item.summary}</p><p className="mt-4 text-xs text-cyan-200/70">Target: {item.intent}</p></Link>)}</div>
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
