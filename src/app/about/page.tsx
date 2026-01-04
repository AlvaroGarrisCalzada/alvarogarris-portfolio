import { Metadata } from 'next';
import { getEducation, getSkills } from '@/lib/content';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Alvaro Garris - education, background, languages, and interests.',
};

export default async function AboutPage() {
  const education = await getEducation();
  const skills = await getSkills();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutClient education={education} skills={skills} />
      </div>
    </div>
  );
}
