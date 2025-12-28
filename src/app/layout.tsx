import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Alvaro Garris | Financial Advisory & Data Analytics',
    template: '%s | Alvaro Garris',
  },
  description: 'Financial Advisory Analyst specializing in M&A, Risk Modeling, and Data Analytics. Experience in Deloitte, Rothschild & Co, and more.',
  keywords: ['Financial Advisory', 'M&A', 'Risk Modeling', 'Data Analytics', 'Python', 'Excel', 'Power BI'],
  authors: [{ name: 'Alvaro Garris' }],
  creator: 'Alvaro Garris',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alvarogarris.com',
    title: 'Alvaro Garris | Financial Advisory & Data Analytics',
    description: 'Financial Advisory Analyst specializing in M&A, Risk Modeling, and Data Analytics',
    siteName: 'Alvaro Garris Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alvaro Garris | Financial Advisory & Data Analytics',
    description: 'Financial Advisory Analyst specializing in M&A, Risk Modeling, and Data Analytics',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
