'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Experience } from '@/types/content';
import { Card } from './Card';
import { Tag } from './Tag';
import { useLanguage } from '@/contexts/LanguageContext';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { language } = useLanguage();
  
  const title = language === 'es' ? (experience.title_es || experience.title) : experience.title;
  const role = language === 'es' ? (experience.role_es || experience.role) : experience.role;
  const location = language === 'es' ? (experience.location_es || experience.location) : experience.location;
  const endDate = language === 'es' ? (experience.endDate_es || experience.endDate) : experience.endDate;
  const tags = language === 'es' ? (experience.tags_es || experience.tags) : experience.tags;

  return (
    <Link href={`/experience/${experience.slug}`}>
      <Card hover>
        <div className="flex flex-col sm:flex-row gap-4">
          {experience.logoPath && (
            <div className="flex-shrink-0">
              <div className="w-16 h-16 relative bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                <Image
                  src={experience.logoPath}
                  alt={`${experience.company} logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
              {role}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
              {experience.company}
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
              <span>{location}</span>
              <span>•</span>
              <span>
                {experience.startDate} - {endDate}
              </span>
            </div>
            
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}

            {experience.tools && experience.tools.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {experience.tools.slice(0, 5).map((tool) => (
                  <Tag key={tool} variant="primary">{tool}</Tag>
                ))}
                {experience.tools.length > 5 && (
                  <Tag variant="primary">+{experience.tools.length - 5}</Tag>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
