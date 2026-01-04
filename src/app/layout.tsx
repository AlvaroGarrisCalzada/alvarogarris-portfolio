import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

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
    default: 'Alvaro Garris - Portfolio | Financial Analyst & Data Specialist',
    template: '%s | Alvaro Garris',
  },
  description: 'Professional portfolio of Alvaro Garris - Financial Advisory Analyst with experience at Deloitte, Rothschild & Co. Explore my projects, skills, and professional background in M&A, Risk Modeling, and Data Analytics.',
  keywords: ['Financial Advisory', 'M&A', 'Risk Modeling', 'Data Analytics', 'Python', 'Excel', 'Power BI', 'Portfolio'],
  authors: [{ name: 'Alvaro Garris' }],
  creator: 'Alvaro Garris',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alvarogarris-portfolio.vercel.app',
    title: 'Alvaro Garris - Portfolio | Financial Analyst & Data Specialist',
    description: 'Professional portfolio showcasing my experience in Financial Advisory, M&A, Risk Modeling, and Data Analytics. Discover my projects and professional journey.',
    siteName: 'Alvaro Garris Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alvaro Garris - Portfolio | Financial Analyst & Data Specialist',
    description: 'Professional portfolio showcasing my experience in Financial Advisory, M&A, Risk Modeling, and Data Analytics',
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
  verification: {
    google: 'POLiKnZqcQb24nnQR_ABYl88jfJW5eQlwnt5Jh90NvE',
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
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
