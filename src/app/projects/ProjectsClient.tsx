'use client';

import { useState, useMemo } from 'react';
import { Project } from '@/types/content';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterBar } from '@/components/FilterBar';
import { SectionHeading } from '@/components/SectionHeading';

interface ProjectsClientProps {
  projects: Project[];
  tech: string[];
}

export function ProjectsClient({ projects, tech }: ProjectsClientProps) {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    if (selectedTech.length === 0) {
      return projects;
    }

    return projects.filter((project) =>
      selectedTech.some((t) => project.tech?.includes(t))
    );
  }, [projects, selectedTech]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Projects" 
          subtitle="Personal projects and technical work"
        />
        
        <FilterBar tags={tech} onFilterChange={setSelectedTech} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-600 dark:text-slate-400">
                No projects found matching the selected filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
