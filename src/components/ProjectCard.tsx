import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/content';
import { Card } from './Card';
import { Tag } from './Tag';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card hover>
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="relative w-full h-48 mb-4 bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
            <Image
              src={project.screenshots[0]}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Tag key={tech} variant="primary">{tech}</Tag>
            ))}
          </div>
        )}

        <div className="flex gap-3 text-sm">
          {project.githubUrl && (
            <span className="text-primary-600 dark:text-primary-400 hover:underline">
              GitHub →
            </span>
          )}
          {project.demoUrl && (
            <span className="text-primary-600 dark:text-primary-400 hover:underline">
              Live Demo →
            </span>
          )}
        </div>
      </Card>
    </Link>
  );
}
