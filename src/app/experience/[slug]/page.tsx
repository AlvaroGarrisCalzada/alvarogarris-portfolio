import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getExperienceBySlug, getAllExperience } from '@/lib/content';
import { Tag } from '@/components/Tag';

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

  if (!experience) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/experience"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8"
        >
          ← Back to Experience
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            {experience.logoPath && (
              <div className="flex-shrink-0">
                <div className="w-24 h-24 relative bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                  <Image
                    src={experience.logoPath}
                    alt={`${experience.company} logo`}
                    fill
                    className="object-contain p-3"
                  />
                </div>
              </div>
            )}

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {experience.role}
              </h1>
              <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-3">
                {experience.company}
              </p>
              <div className="flex flex-wrap gap-3 text-slate-600 dark:text-slate-400 mb-4">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {experience.location}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {experience.startDate} - {experience.endDate}
                </span>
              </div>

              {experience.tags && experience.tags.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Focus Areas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              )}

              {experience.tools && experience.tools.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Tools & Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.tools.map((tool) => (
                      <Tag key={tool} variant="primary">{tool}</Tag>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8">
          <div className="prose prose-slate dark:prose-invert max-w-none
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:dark:text-white [&>h2]:mb-4 [&>h2]:mt-8 [&>h2]:pb-3 [&>h2]:border-b [&>h2]:border-slate-200 [&>h2]:dark:border-slate-700
            [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-800 [&>h3]:dark:text-slate-200 [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:bg-slate-50 [&>h3]:dark:bg-slate-700/50 [&>h3]:px-4 [&>h3]:py-2 [&>h3]:rounded-lg [&>h3]:border-l-4 [&>h3]:border-primary-500
            [&>ul]:space-y-2 [&>ul]:my-4
            [&>p]:text-slate-600 [&>p]:dark:text-slate-400 [&>p]:leading-relaxed
            [&>hr]:my-8 [&>hr]:border-slate-200 [&>hr]:dark:border-slate-700
            [&_strong]:text-slate-900 [&_strong]:dark:text-white [&_strong]:font-semibold
            [&>blockquote]:border-l-4 [&>blockquote]:border-primary-500 [&>blockquote]:pl-4 [&>blockquote]:py-2 [&>blockquote]:bg-primary-50 [&>blockquote]:dark:bg-primary-900/20 [&>blockquote]:rounded-r">
            {experience.content && <MDXRemote source={experience.content} />}
          </div>
        </div>
      </div>
    </div>
  );
}
