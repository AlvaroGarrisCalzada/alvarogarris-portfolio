import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedExperience, getFeaturedProjects } from '@/lib/content';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { HomeClient } from './HomeClient';

export default async function HomePage() {
  const featuredExperience = await getFeaturedExperience();
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20 sm:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-900/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 relative rounded-full overflow-hidden ring-4 ring-primary-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900">
                <Image
                  src="/images/profile.jpeg"
                  alt="Alvaro Garris Calzada"
                  fill
                  className="object-cover object-[center_25%]"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Alvaro Garris Calzada
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-4">
              Financial Advisory & Data Analytics Professional
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
              Madrid, Spain
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/alvaro-garris-calzada/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/AlvaroGarrisCalzada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.youtube.com/watch?v=1erpki_k8E4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
              >
                YouTube
              </a>
              <a
                href="mailto:agarris.ieu2021@student.ie.edu"
                className="inline-flex items-center px-6 py-3 bg-yellow-700 hover:bg-yellow-800 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors"
              >
                Email
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/Garris Alvaro IE-Bocconi CV (Website).pdf"
                download
                className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeClient 
        featuredExperience={featuredExperience} 
        featuredProjects={featuredProjects} 
      />
    </div>
  );
}
