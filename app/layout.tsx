import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '@/data/items';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Subnautica 2 Interactive Map - Blueprints, Fragments, Materials & Biomes',
    template: '%s | Subnautica 2 Map',
  },
  description: 'Find Subnautica 2 blueprints, fragments, materials, recipes, biomes, vehicles, and key locations with a fast spoiler-light interactive map.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Subnautica 2 Interactive Map',
    description: 'Fast spoiler-light map and database for Subnautica 2 blueprints, fragments, recipes, materials, vehicles, and biomes.',
    url: siteUrl,
    siteName: 'Subnautica 2 Map',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
