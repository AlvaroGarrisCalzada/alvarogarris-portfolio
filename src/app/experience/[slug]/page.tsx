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

  // Split content into English and Spanish sections
  const fullContent = experience.content;
  
  // English sections: Overview, Key Responsibilities, Key Achievements
  // Spanish sections: Descripción, Responsabilidades Clave, Logros Clave
  
  const englishSectionPattern = /##\s*(Overview|Key Responsibilities|Key Achievements)[\s\S]*?(?=##\s*(Descripción|Responsabilidades Clave|Logros Clave|$))/g;
  const spanishSectionPattern = /##\s*(Descripción|Responsabilidades Clave|Logros Clave)[\s\S]*?(?=##\s*(Overview|Key Responsibilities|Key Achievements|$))/g;
  
  let englishContent = '';
  let spanishContent = '';
  
  // Extract English sections
  const englishMatches = fullContent.matchAll(englishSectionPattern);
  for (const match of englishMatches) {
    englishContent += match[0] + '\n\n';
  }
  
  // Extract Spanish sections
  const spanishMatches = fullContent.matchAll(spanishSectionPattern);
  for (const match of spanishMatches) {
    spanishContent += match[0] + '\n\n';
  }
  
  // If no sections found, use full content for both
  if (!englishContent.trim()) {
    englishContent = fullContent;
  }
  if (!spanishContent.trim()) {
    spanishContent = fullContent;
  }

  // Serialize both versions
  const mdxSource = await serialize(englishContent.trim());
  const mdxSource_es = await serialize(spanishContent.trim());

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
