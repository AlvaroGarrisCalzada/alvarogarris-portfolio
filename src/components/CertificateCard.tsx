import { Certificate } from '@/types/content';
import { Card } from './Card';

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const content = (
    <Card hover={!!certificate.credentialUrl || !!certificate.pdfPath}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex-1">
          {certificate.title}
        </h3>
      </div>
      
      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
        {certificate.issuer}
      </p>
      
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {certificate.date}
      </p>

      {(certificate.credentialUrl || certificate.pdfPath) && (
        <div className="mt-4 text-sm text-primary-600 dark:text-primary-400 hover:underline">
          View Certificate →
        </div>
      )}
    </Card>
  );

  if (certificate.credentialUrl) {
    return (
      <a
        href={certificate.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  if (certificate.pdfPath) {
    return (
      <a href={certificate.pdfPath} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
