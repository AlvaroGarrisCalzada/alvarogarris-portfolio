import { Metadata } from 'next';
import { getAllProjects, getAllProjectTech } from '@/lib/content';
import { ProjectsClient } from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Personal projects and technical work in data analytics, finance, and web development.',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const tech = await getAllProjectTech();

  return <ProjectsClient projects={projects} tech={tech} />;
}
