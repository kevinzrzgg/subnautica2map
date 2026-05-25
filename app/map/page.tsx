import type { Metadata } from 'next';
import { Footer, Header, JsonLd, MapPreview } from '../components';
import { siteUrl } from '@/data/items';

export const metadata: Metadata = { title: 'Subnautica 2 Interactive Map', description: 'Filter blueprints, fragments, materials, biomes, vehicles, black boxes, and important progression locations.', alternates: { canonical: '/map/' } };

export default function Page() {
  return <><JsonLd data={{ '@context':'https://schema.org', '@type':'CollectionPage', name:'Subnautica 2 Interactive Map', url:`${siteUrl}/map/`, description:'Filter blueprints, fragments, materials, biomes, vehicles, black boxes, and important progression locations.' }} /><Header /><main className="mx-auto max-w-7xl px-5 py-10"><div className="mb-8"><span className="badge">Map</span><h1 className="mt-4 text-5xl font-black">Subnautica 2 Interactive Map</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-cyan-50/75">Filter blueprints, fragments, materials, biomes, vehicles, black boxes, and important progression locations.</p></div><MapPreview /><section className="mt-10 card p-6"><h2 className="text-2xl font-bold">Quick FAQ</h2><div className="mt-4 space-y-4 text-cyan-50/75"><p><b>Is this official?</b> No. This is an unofficial fan-made guide.</p><p><b>Are locations final?</b> Subnautica 2 is in Early Access, so locations may change after patches.</p><p><b>How should I use it?</b> Use the category pages to jump from a map marker to a blueprint, recipe, or material page.</p></div></section></main><Footer /></>;
}
