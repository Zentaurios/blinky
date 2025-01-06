import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meet Blinky - Blink and You\'re Rich',
  description: 'Meet Blinky - A high-energy frog from the Solana swamp with one mission: to make you rich while you blink.',
  keywords: ['Blinky', 'Solana', 'crypto', 'meme coin', 'token'],
  openGraph: {
    title: 'Meet Blinky - Blink and You\'re Rich',
    description: 'A high-energy frog from the Solana swamp with one mission: to make you rich while you blink.',
    url: 'https://blinky.com',
    siteName: 'Blinky',
    images: [
      {
        url: '/blinky.jpg',
        width: 1200,
        height: 630,
        alt: 'Blinky the high-energy frog'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Blinky',
    description: 'Blink and You\'re Rich',
    images: ['/blinky.jpg'],
    creator: '@blinky',
    site: '@blinky',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  themeColor: '#768f29',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}