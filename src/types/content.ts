export interface Experience {
  slug: string;
  title: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  tags: string[];
  tools: string[];
  featured: boolean;
  logoPath?: string;
  content?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  websiteUrl?: string;
  pdfReport?: string;
  featured: boolean;
  screenshots: string[];
  content?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  pdfPath?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  logoPath?: string;
}

export interface Language {
  name: string;
  level: string;
}
