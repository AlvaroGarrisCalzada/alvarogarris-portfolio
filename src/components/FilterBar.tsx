'use client';

import { useState } from 'react';
import { Tag } from './Tag';

interface FilterBarProps {
  tags: string[];
  onFilterChange: (selectedTags: string[]) => void;
}

export function FilterBar({ tags, onFilterChange }: FilterBarProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newSelectedTags);
    onFilterChange(newSelectedTags);
  };

  const clearFilters = () => {
    setSelectedTags([]);
    onFilterChange([]);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Filter by:
        </span>
        {selectedTags.length > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
          >
            Clear all
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedTags.includes(tag)
                ? 'bg-primary-600 text-white dark:bg-primary-500'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
