import { Metadata } from 'next';
import Image from 'next/image';
import { getEducation } from '@/lib/content';
import { SectionHeading } from '@/components/SectionHeading';
import { Card } from '@/components/Card';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Alvaro Garris - education, background, languages, and interests.',
};

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Bilingual' },
  { name: 'German', level: 'C1' },
  { name: 'Italian', level: 'B1' },
  { name: 'Mandarin', level: 'HSK2' },
];

const interests = [
  'Global Macroeconomics',
  'Financial Markets',
  'Data Visualization',
  'Economic Research',
  'Risk Management',
  'Quantitative Analysis',
];

export default async function AboutPage() {
  const education = await getEducation();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bio Section */}
        <section className="mb-16">
          <SectionHeading title="About Me" />
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
                I&apos;m a financial advisory and data analytics professional with a strong academic 
                foundation from IE Business School and diverse experience across M&A advisory, 
                risk modeling, and economic research.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                My background spans leading financial institutions including Accenture, Deloitte, 
                Rothschild & Co, Deutsche Bank, and Howden, where I&apos;ve developed expertise in financial modeling, 
                data analysis, and strategic advisory. I&apos;m passionate about leveraging quantitative 
                methods and technology to solve complex business challenges.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Beyond my professional work, I co-founded Eden Fund, a student-led global markets 
                investment initiative, and serve as a scholar at The Macro Institute, where I continue 
                to deepen my understanding of macroeconomic trends and their market implications.
              </p>
            </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <SectionHeading title="Education" />
          <div className="space-y-6">
            {education.map((edu) => (
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
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        {edu.field}
                      </p>
                    )}
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                      <span>{edu.location}</span>
                      <span>•</span>
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="text-slate-700 dark:text-slate-300">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-16">
          <SectionHeading title="Languages" />
          <Card>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center">
                  <span className="text-slate-900 dark:text-white font-medium">
                    {lang.name}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Interests Section */}
        <section>
          <SectionHeading title="Interests" />
          <Card>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
