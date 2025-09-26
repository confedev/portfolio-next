// Bilingual content types
export interface BilingualText {
  en: string;
  es: string;
}

// Tech Skills
export interface TechSkill {
  tech: string;
  icon: string;
  url: string;
  score: number;
  type: BilingualText;
}

// Soft Skills
export interface SoftSkill {
  name: BilingualText;
  platform: string;
  url: string;
  type: BilingualText;
  icon: string;
}

// Certifications
export interface Certification {
  name: BilingualText;
  platform: string;
  url: string;
  type: BilingualText;
  icon: string;
}

// Projects
export interface Project {
  name: BilingualText;
  description: BilingualText;
  url: string;
  image: string;
  sector: BilingualText;
}

// Main content interface
export interface Content {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    techSkills: string;
    softSkills: string;
    certifications: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    typewriterPhrases: string[];
  };
  about: {
    title: string;
    content: string;
  };
  techSkills: {
    title: string;
    all: string;
  };
  softSkills: {
    title: string;
    all: string;
  };
  certifications: {
    title: string;
    all: string;
  };
  projects: {
    title: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    phoneLabel: string;
    location: string;
    locationLabel: string;
  };
  filters: {
    all: string;
  };
  footer: {
    copyright: string;
  };
}
