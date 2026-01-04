import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { getExperienceBySlug, getAllExperience } from '@/lib/content';
import { ExperienceDetailClient } from './ExperienceDetailClient';

interface ExperienceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const experiences = await getAllExperience();
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: ExperienceDetailPageProps): Promise<Metadata> {
  const experience = await getExperienceBySlug(params.slug);
  
  if (!experience) {
    return {};
  }

  return {
    title: `${experience.role} at ${experience.company}`,
    description: `${experience.role} at ${experience.company} - ${experience.location}`,
  };
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const experience = await getExperienceBySlug(params.slug);

  if (!experience || !experience.content) {
    notFound();
  }

  // Split content by language sections
  const contentParts = experience.content.split(/## Descripción|## Responsabilidades Clave|## Logros Clave/);
  const englishContent = contentParts[0].trim();
  
  // Extract Spanish sections
  const fullContent = experience.content;
  const spanishMatch = fullContent.match(/## Descripción[\s\S]*$/);
  const spanishContent = spanishMatch ? spanishMatch[0] : englishContent;

  // Serialize both versions
  const mdxSource = await serialize(englishContent);
  const mdxSource_es = spanishContent !== englishContent ? await serialize(spanishContent) : mdxSource;

  return (
    <ExperienceDetailClient 
      experience={{
        ...experience,
        mdxSource,
        mdxSource_es
      }} 
    />
  );
}
