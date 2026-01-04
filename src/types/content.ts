export interface Experience {
  slug: string;
  title: string;
  title_es?: string;
  company: string;
  role: string;
  role_es?: string;
  startDate: string;
  endDate: string;
  endDate_es?: string;
  location: string;
  location_es?: string;
  tags: string[];
  tags_es?: string[];
  tools: string[];
  featured: boolean;
  logoPath?: string;
  content?: string;
}

export interface Project {
  slug: string;
  title: string;
  title_es?: string;
  description: string;
  description_es?: string;
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
  category_es?: string;
  items: string[];
  items_es?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  degree_es?: string;
  field?: string;
  field_es?: string;
  location: string;
  location_es?: string;
  startDate: string;
  endDate: string;
  endDate_es?: string;
  description?: string;
  description_es?: string;
  logoPath?: string;
}

export interface Language {
  name: string;
  level: string;
}
