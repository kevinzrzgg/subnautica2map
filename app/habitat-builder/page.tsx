import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Header, JsonLd } from '../components';

export const metadata: Metadata = { title: 'Habitat Builder Subnautica 2: Location, Blueprint & Crafting Guide', description: 'Unlock the Habitat Builder and start base construction.', alternates: { canonical: '/habitat-builder/' } };

const faq = [
  ['Where is Habitat Builder in Subnautica 2?', 'Habitat Builder is tracked in the Starter progression section. Exact coordinates should be verified in-game because Early Access patches can move locations.'],
  ['What type of item is Habitat Builder?', 'Habitat Builder is listed as Blueprint in the Tools category.'],
  ['Is this guide spoiler-light?', 'Yes. The page prioritizes the fastest route and avoids story spoilers unless needed for progression.'],
];

export default function GuidePage() {
  return <>
    <JsonLd data={{ '@context':'https://schema.org', '@type':'FAQPage', mainEntity: faq.map(([q,a]) => ({ '@type':'Question', name:q, acceptedAnswer:{ '@type':'Answer', text:a } })) }} />
    <Header />
    <main className="mx-auto max-w-5xl px-5 py-10">
      <Link href="/map/" className="text-sm text-cyan-200">← Back to map</Link>
      <div className="mt-6 card p-7 md:p-10"><span className="badge">Tools</span><h1 className="mt-4 text-4xl font-black md:text-6xl">Habitat Builder Subnautica 2 Guide</h1><p className="mt-5 text-lg leading-8 text-cyan-50/75">Unlock the Habitat Builder and start base construction.</p><div className="mt-6 grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-white/5 p-4"><b>Type</b><br/>Blueprint</div><div className="rounded-2xl bg-white/5 p-4"><b>Biome</b><br/>Starter progression</div><div className="rounded-2xl bg-white/5 p-4"><b>Depth</b><br/>TBD</div></div></div>
      <section className="mt-8 card p-7"><h2 className="text-3xl font-bold">Quick answer</h2><p className="mt-4 leading-8 text-cyan-50/75">Use this page as the fast lookup for <strong>habitat builder subnautica 2</strong>. Check the map category, scan or collect the required item, then follow the related recipe and material links.</p></section>
      <section className="mt-8 grid gap-5 md:grid-cols-3"><div className="card p-5"><h3 className="font-bold">1. Find the location</h3><p className="mt-2 text-sm text-cyan-50/70">Open the map and filter by Tools.</p></div><div className="card p-5"><h3 className="font-bold">2. Track progress</h3><p className="mt-2 text-sm text-cyan-50/70">Use the checklist format to avoid rescanning the same place.</p></div><div className="card p-5"><h3 className="font-bold">3. Craft or unlock</h3><p className="mt-2 text-sm text-cyan-50/70">Follow related materials and recipe pages.</p></div></section>
      <section className="mt-8 card p-7"><h2 className="text-3xl font-bold">FAQ</h2><div className="mt-5 space-y-5">{faq.map(([q,a]) => <div key={q}><h3 className="font-bold text-white">{q}</h3><p className="mt-1 text-cyan-50/70">{a}</p></div>)}</div></section>
    </main><Footer /></>;
}
