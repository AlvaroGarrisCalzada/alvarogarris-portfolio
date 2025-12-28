'use client';

import { useState, useMemo } from 'react';
import { Experience } from '@/types/content';
import { ExperienceCard } from '@/components/ExperienceCard';
import { FilterBar } from '@/components/FilterBar';
import { SectionHeading } from '@/components/SectionHeading';

interface ExperienceClientProps {
  experiences: Experience[];
  tags: string[];
}

export function ExperienceClient({ experiences, tags }: ExperienceClientProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredExperiences = useMemo(() => {
    if (selectedTags.length === 0) {
      return experiences;
    }

    return experiences.filter((exp) =>
      selectedTags.some((tag) => exp.tags?.includes(tag))
    );
  }, [experiences, selectedTags]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My journey through financial advisory and data analytics"
        />
        
        <FilterBar tags={tags} onFilterChange={setSelectedTags} />

        <div className="space-y-6">
          {filteredExperiences.length > 0 ? (
            filteredExperiences.map((exp) => (
              <ExperienceCard key={exp.slug} experience={exp} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400">
                No experience found matching the selected filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
