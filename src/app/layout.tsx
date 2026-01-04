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
    default: 'Alvaro Garris - Portfolio | Analista Financiero y Especialista en Datos | Financial Analyst & Data Specialist',
    template: '%s | Alvaro Garris',
  },
  description: 'Portfolio profesional de Alvaro Garris - Analista de Asesoramiento Financiero con experiencia en Deloitte, Rothschild & Co. | Professional portfolio - Financial Advisory Analyst. Explora mis proyectos, habilidades y experiencia en M&A, Modelización de Riesgos y Análisis de Datos.',
  keywords: [
    'Alvaro Garris',
    'Portfolio',
    'Financial Advisory',
    'Asesoramiento Financiero',
    'M&A',
    'Fusiones y Adquisiciones',
    'Risk Modeling',
    'Modelización de Riesgos',
    'Data Analytics',
    'Análisis de Datos',
    'Python',
    'Excel',
    'Power BI',
    'Analista Financiero',
    'Financial Analyst',
    'Deloitte',
    'Rothschild',
    'Madrid',
    'España',
    'Spain',
  ],
  authors: [{ name: 'Alvaro Garris' }],
  creator: 'Alvaro Garris',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://alvarogarris-portfolio.vercel.app',
    title: 'Alvaro Garris - Portfolio | Analista Financiero y Especialista en Datos',
    description: 'Portfolio profesional mostrando mi experiencia en Asesoramiento Financiero, M&A, Modelización de Riesgos y Análisis de Datos. Descubre mis proyectos y trayectoria profesional. | Professional portfolio showcasing experience in Financial Advisory, M&A, Risk Modeling, and Data Analytics.',
    siteName: 'Alvaro Garris Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alvaro Garris - Analista Financiero y Especialista en Datos | Financial Analyst & Data Specialist',
    description: 'Portfolio profesional - Experiencia en Asesoramiento Financiero, M&A, Modelización de Riesgos y Análisis de Datos | Professional portfolio - Financial Advisory, M&A, Risk Modeling, Data Analytics',
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alvaro Garris Calzada',
    alternateName: ['Alvaro Garris', 'Álvaro Garris'],
    jobTitle: [
      'Financial Advisory Analyst',
      'Analista de Asesoramiento Financiero',
      'Data Specialist',
      'Especialista en Datos'
    ],
    description: 'Financial Advisory Analyst with experience at Deloitte, Rothschild & Co, specializing in M&A, Risk Modeling, and Data Analytics | Analista de Asesoramiento Financiero con experiencia en Deloitte, Rothschild & Co, especializado en M&A, Modelización de Riesgos y Análisis de Datos',
    url: 'https://alvarogarris-portfolio.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/alvaro-garris-calzada',
      'https://github.com/AlvaroGarrisCalzada',
    ],
    knowsAbout: [
      'Financial Advisory',
      'Asesoramiento Financiero',
      'M&A',
      'Fusiones y Adquisiciones',
      'Risk Modeling',
      'Modelización de Riesgos',
      'Data Analytics',
      'Análisis de Datos',
      'Python',
      'Excel',
      'Power BI',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'IE Business School',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Bocconi University',
      },
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Deloitte',
      },
    ],
    inLanguage: ['es', 'en'],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="es" href="https://alvarogarris-portfolio.vercel.app" />
        <link rel="alternate" hrefLang="en" href="https://alvarogarris-portfolio.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://alvarogarris-portfolio.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
