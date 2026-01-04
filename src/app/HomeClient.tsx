'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/SectionHeading';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';

interface HomeClientProps {
  featuredExperience: any[];
  featuredProjects: any[];
}

export function HomeClient({ featuredExperience, featuredProjects }: HomeClientProps) {
  const { t } = useLanguage();

  return (
    <>
      {/* Featured Experience */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <SectionHeading 
              title={t('home.featured.experience')}
              subtitle=""
            />
            <Link
              href="/experience"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              {t('experience.card.readMore')} →
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {featuredExperience.map((exp) => (
              <ExperienceCard key={exp.slug} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <SectionHeading 
              title={t('home.featured.projects')}
              subtitle=""
            />
            <Link
              href="/projects"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              {t('projects.card.viewDetails')} →
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Garris Alvaro IE-Bocconi CV (Website).pdf"
              download
              className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              {t('home.hero.viewCV')}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-primary-600 dark:hover:border-primary-500 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-colors"
            >
              {t('home.hero.contactMe')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

