import Link from 'next/link';
import { Footer, Header, ItemGrid, JsonLd, MapPreview } from './components';
import { siteUrl } from '@/data/items';

export default function Home() {
  return <>
    <JsonLd data={{ '@context':'https://schema.org', '@type':'WebSite', name:'Subnautica 2 Map', url: siteUrl, potentialAction:{ '@type':'SearchAction', target:`${siteUrl}/map/?q={search_term_string}`, 'query-input':'required name=search_term_string' } }} />
    <Header />
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_520px] lg:items-center">
        <div>
          <div className="mb-5 flex flex-wrap gap-2"><span className="badge">Unofficial fan guide</span><span className="badge">Early Access tracker</span><span className="badge">Spoiler-light</span></div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">Subnautica 2 Interactive Map</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/78">Find Subnautica 2 blueprints, fragments, materials, recipes, biomes, vehicles, and key locations with a fast second-screen map built for players.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link className="rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950" href="/map/">Open Map</Link><Link className="rounded-full border border-cyan-200/30 px-6 py-3 font-bold text-cyan-50" href="/blueprints/">Browse Blueprints</Link></div>
          <div className="mt-8 grid gap-3 text-sm text-cyan-50/70 sm:grid-cols-3"><div className="card p-4"><b className="text-white">Fast answers</b><br/>No long intros.</div><div className="card p-4"><b className="text-white">Checklist-ready</b><br/>Track fragments and materials.</div><div className="card p-4"><b className="text-white">Patch-aware</b><br/>Updated as locations change.</div></div>
        </div>
        <MapPreview />
      </section>
      <section className="mx-auto max-w-7xl px-5 py-10"><h2 className="mb-5 text-3xl font-bold">Popular Subnautica 2 locations and guides</h2><ItemGrid limit={6} /></section>
      <section className="mx-auto max-w-7xl px-5 py-10"><div className="card p-7"><h2 className="text-3xl font-bold">What this map covers</h2><div className="mt-5 grid gap-4 md:grid-cols-3">{['Blueprint fragment routes','Material and resource locations','Crafting recipes and unlocks','Vehicle and base-building progression','Biomes, hazards, and depth notes','Spoiler-light quick answers'].map(x => <div key={x} className="rounded-2xl bg-white/5 p-4 text-cyan-50/80">{x}</div>)}</div></div></section>
    </main><Footer /></>;
}
