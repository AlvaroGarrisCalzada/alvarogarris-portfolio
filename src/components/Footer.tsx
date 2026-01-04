'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Alvaro Garris
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Financial Advisory & Data Analytics Professional
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {t('nav.experience')}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/alvaro-garris-calzada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AlvaroGarrisCalzada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=1erpki_k8E4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="mailto:agarris.ieu2021@student.ie.edu"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} Alvaro Garris. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
