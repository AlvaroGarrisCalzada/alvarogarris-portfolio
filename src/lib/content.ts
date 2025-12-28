import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Experience, Project, Certificate, Skill, Education } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content');

// Experience functions
export async function getAllExperience(): Promise<Experience[]> {
  const experienceDir = path.join(contentDirectory, 'experience');
  
  if (!fs.existsSync(experienceDir)) {
    return [];
  }

  const files = fs.readdirSync(experienceDir);
  const experiences = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(experienceDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as Experience;
    })
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return experiences;
}

export async function getExperienceBySlug(slug: string): Promise<Experience | null> {
  try {
    const fullPath = path.join(contentDirectory, 'experience', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as Experience;
  } catch {
    return null;
  }
}

export async function getFeaturedExperience(): Promise<Experience[]> {
  const all = await getAllExperience();
  return all.filter((exp) => exp.featured).slice(0, 3);
}

// Project functions
export async function getAllProjects(): Promise<Project[]> {
  const projectsDir = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const files = fs.readdirSync(projectsDir);
  const projects = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as Project;
    });

  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(contentDirectory, 'projects', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as Project;
  } catch {
    return null;
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((project) => project.featured).slice(0, 3);
}

// Certificate functions
export async function getCertificates(): Promise<Certificate[]> {
  try {
    const fullPath = path.join(contentDirectory, 'certificates.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    return [];
  }
}

// Skills functions
export async function getSkills(): Promise<Skill[]> {
  try {
    const fullPath = path.join(contentDirectory, 'skills.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    return [];
  }
}

// Education functions
export async function getEducation(): Promise<Education[]> {
  try {
    const fullPath = path.join(contentDirectory, 'education.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    return [];
  }
}

// Get all unique tags from experience
export async function getAllExperienceTags(): Promise<string[]> {
  const experiences = await getAllExperience();
  const tagsSet = new Set<string>();
  
  experiences.forEach((exp) => {
    exp.tags?.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

// Get all unique tech from projects
export async function getAllProjectTech(): Promise<string[]> {
  const projects = await getAllProjects();
  const techSet = new Set<string>();
  
  projects.forEach((project) => {
    project.tech?.forEach((tech) => techSet.add(tech));
  });

  return Array.from(techSet).sort();
}
