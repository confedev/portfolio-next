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
