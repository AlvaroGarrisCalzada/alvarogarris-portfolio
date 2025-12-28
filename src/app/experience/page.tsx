import { Metadata } from 'next';
import { getAllExperience, getAllExperienceTags } from '@/lib/content';
import { ExperienceClient } from './ExperienceClient';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience in financial advisory, M&A, risk modeling, and economic research.',
};

export default async function ExperiencePage() {
  const experiences = await getAllExperience();
  const tags = await getAllExperienceTags();

  return <ExperienceClient experiences={experiences} tags={tags} />;
}
