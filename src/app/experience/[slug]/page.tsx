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

  // Split content by detecting Spanish section markers
  const fullContent = experience.content;
  
  // Find where Spanish content starts (after ## Descripción)
  const spanishStartIndex = fullContent.search(/## Descripción/);
  
  let englishContent = fullContent;
  let spanishContent = fullContent;
  
  if (spanishStartIndex !== -1) {
    // English is everything before Spanish section
    englishContent = fullContent.substring(0, spanishStartIndex).trim();
    // Spanish is everything from Spanish section onwards
    spanishContent = fullContent.substring(spanishStartIndex).trim();
  }

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
