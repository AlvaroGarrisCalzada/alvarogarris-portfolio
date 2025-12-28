import { Metadata } from 'next';
import { getCertificates } from '@/lib/content';
import { SectionHeading } from '@/components/SectionHeading';
import { CertificateCard } from '@/components/CertificateCard';

export const metadata: Metadata = {
  title: 'Certificates',
  description: 'Professional certificates and certifications in finance, data analytics, and technology.',
};

export default async function CertificatesPage() {
  const certificates = await getCertificates();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Certificates & Certifications" 
          subtitle="Professional development and continuous learning"
        />

        {certificates.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              Certificates coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
