'use client';

import Image from 'next/image';
import { SectionHeading } from '@/components/SectionHeading';
import { Card } from '@/components/Card';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Education, Skill } from '@/types/content';

interface AboutClientProps {
  education: Education[];
  skills: Skill[];
}

const languagesData = {
  en: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Bilingual' },
    { name: 'German', level: 'C1' },
    { name: 'Italian', level: 'B1' },
    { name: 'Mandarin', level: 'HSK2' },
  ],
  es: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Bilingüe' },
    { name: 'Alemán', level: 'C1' },
    { name: 'Italiano', level: 'B1' },
    { name: 'Mandarín', level: 'HSK2' },
  ],
};

const interestsData = {
  en: [
    'Global Macroeconomics',
    'Financial Markets',
    'Data Visualization',
    'Economic Research',
    'Risk Management',
    'Quantitative Analysis',
  ],
  es: [
    'Macroeconomía Global',
    'Mercados Financieros',
    'Visualización de Datos',
    'Investigación Económica',
    'Gestión de Riesgos',
    'Análisis Cuantitativo',
  ],
};

export function AboutClient({ education, skills }: AboutClientProps) {
  const { language, t } = useLanguage();
  
  const languages = languagesData[language];
  const interests = interestsData[language];

  return (
    <>
      {/* Bio Section */}
      <section className="mb-16">
        <SectionHeading title={t('about.title')} />
        <Card>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <div className="w-64 h-64 relative rounded-xl overflow-hidden shadow-xl ring-4 ring-primary-500/20">
                <Image
                  src="/images/profile.jpeg"
                  alt="Alvaro Garris Calzada"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {t('about.intro')}
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {t('about.background')}
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t('about.approach')}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <SectionHeading title={t('about.education')} />
        <div className="space-y-6">
          {education.map((edu) => {
            const degree = language === 'es' ? (edu.degree_es || edu.degree) : edu.degree;
            const field = language === 'es' ? (edu.field_es || edu.field) : edu.field;
            const location = language === 'es' ? (edu.location_es || edu.location) : edu.location;
            const endDate = language === 'es' ? (edu.endDate_es || edu.endDate) : edu.endDate;
            const description = language === 'es' ? (edu.description_es || edu.description) : edu.description;

            return (
              <Card key={edu.id}>
                <div className="flex flex-col sm:flex-row gap-4">
                  {edu.logoPath && (
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 relative bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                        <Image
                          src={edu.logoPath}
                          alt={`${edu.institution} logo`}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                      {degree}
                    </h3>
                    {field && (
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        {field}
                      </p>
                    )}
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                      <span>{location}</span>
                      <span>•</span>
                      <span>{edu.startDate} - {endDate}</span>
                    </div>
                    {description && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <SectionHeading title="Skills" subtitle="Technical proficiencies and tools" />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => {
            const category = language === 'es' ? (skill.category_es || skill.category) : skill.category;
            const items = language === 'es' ? (skill.items_es || skill.items) : skill.items;

            return (
              <Card key={skill.category}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Languages Section */}
      <section className="mb-16">
        <SectionHeading title={t('about.languages')} />
        <Card>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="text-center">
                <p className="font-semibold text-slate-900 dark:text-white mb-1">
                  {lang.name}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Interests Section */}
      <section>
        <SectionHeading title={t('about.interests')} />
        <Card>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
