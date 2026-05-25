import type { Metadata } from 'next';
import { Footer, Header, ItemGrid, JsonLd } from '../components';
import { siteUrl } from '@/data/items';

export const metadata: Metadata = { title: 'Subnautica 2 Blueprints', description: 'All blueprint locations, required fragments, unlock routes, and crafting links.', alternates: { canonical: '/blueprints/' } };

export default function Page() {
  return <><JsonLd data={{ '@context':'https://schema.org', '@type':'CollectionPage', name:'Subnautica 2 Blueprints', url:`${siteUrl}/blueprints/`, description:'All blueprint locations, required fragments, unlock routes, and crafting links.' }} /><Header /><main className="mx-auto max-w-7xl px-5 py-10"><div className="mb-8"><span className="badge">Blueprints</span><h1 className="mt-4 text-5xl font-black">Subnautica 2 Blueprints</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-cyan-50/75">All blueprint locations, required fragments, unlock routes, and crafting links.</p></div><ItemGrid /><section className="mt-10 card p-6"><h2 className="text-2xl font-bold">Quick FAQ</h2><div className="mt-4 space-y-4 text-cyan-50/75"><p><b>Is this official?</b> No. This is an unofficial fan-made guide.</p><p><b>Are locations final?</b> Subnautica 2 is in Early Access, so locations may change after patches.</p><p><b>How should I use it?</b> Use the category pages to jump from a map marker to a blueprint, recipe, or material page.</p></div></section></main><Footer /></>;
}
