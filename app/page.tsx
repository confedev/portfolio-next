'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Content } from '@/config/text.type';
import { content as contentEs } from '@/config/es/texts';
import { content as contentEn } from '@/config/en/texts';
import {
  Header,
  HeroSection,
  AboutSection,
  TechSkillsSection,
  SoftSkillsSection,
  CertificationsSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from '@/components/page';

interface TechSkill {
  tech: string;
  icon: string;
  url: string;
  score: number;
  type: string;
}

interface SoftSkill {
  name: string;
  platform: string;
  url: string;
  type: string;
  icon: string;
}

interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
  sector: string;
}

interface Certification {
  name: string;
  platform: string;
  url: string;
  type: string;
  icon: string;
}

const content: Record<string, Content> = {
  es: contentEs,
  en: contentEn,
};

/* === JSON datasets – Spanish === */
import techSkillsEs from '../config/es/tech_skills.json';
import softSkillsEs from '../config/es/soft_skills.json';
import projectsEs from '../config/es/projects.json';
import certsEs from '../config/es/certifications.json';

/* === JSON datasets – English === */
import techSkillsEn from '../config/en/tech_skills.json';
import softSkillsEn from '../config/en/soft_skills.json';
import projectsEn from '../config/en/projects.json';
import certsEn from '../config/en/certifications.json';

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [techSkills, setTechSkills] = useState<TechSkill[]>([]);
  const [softSkills, setSoftSkills] = useState<SoftSkill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [techFilter, setTechFilter] = useState('all');
  const [techSkillsOpen, setTechSkillsOpen] = useState(true);
  const [softSkillsOpen, setSoftSkillsOpen] = useState(true);
  const [certificationsOpen, setCertificationsOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [softSkillsFilter, setSoftSkillsFilter] = useState('all');
  const [certificationsFilter, setCertificationsFilter] = useState('all');
  const [isMounted, setIsMounted] = useState(false);

  const t = content[language];

  // Detect system preferences and load saved configuration
  useEffect(() => {
    setIsMounted(true);

    // Detect system language or load from localStorage
    const savedLanguage = localStorage.getItem('portfolio-language') as
      | 'es'
      | 'en'
      | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLanguage = navigator.language.toLowerCase();
      const detectedLanguage = browserLanguage.startsWith('es') ? 'es' : 'en';
      setLanguage(detectedLanguage);
    }

    // Theme is already handled automatically by next-themes with localStorage
  }, []);

  // Save language to localStorage when changed
  const handleLanguageChange = (newLanguage: 'es' | 'en') => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  // Handle theme change and save it
  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // next-themes already handles localStorage automatically
  };

  useEffect(() => {
    const datasets = {
      es: {
        tech: techSkillsEs,
        soft: softSkillsEs,
        projects: projectsEs,
        certs: certsEs,
      },
      en: {
        tech: techSkillsEn,
        soft: softSkillsEn,
        projects: projectsEn,
        certs: certsEn,
      },
    } as const;

    // Populate state directly from in-memory JSON
    setTechSkills(datasets[language].tech);
    setSoftSkills(datasets[language].soft);
    setProjects(datasets[language].projects);
    setCertifications(datasets[language].certs);
  }, [language]);

  const filteredTechSkills =
    techFilter === 'all'
      ? techSkills
      : techSkills.filter((skill) => skill.type === techFilter);
  const filteredSoftSkills =
    softSkillsFilter === 'all'
      ? softSkills
      : softSkills.filter((skill) => skill.type === softSkillsFilter);
  const filteredCertifications =
    certificationsFilter === 'all'
      ? certifications
      : certifications.filter((cert) => cert.type === certificationsFilter);

  const techTypes = [...new Set(techSkills.map((skill) => skill.type))];
  const softSkillTypes = [...new Set(softSkills.map((skill) => skill.type))];
  const certificationTypes = [
    ...new Set(certifications.map((cert) => cert.type)),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <Header
        t={t}
        language={language}
        theme={theme}
        isMounted={isMounted}
        onLanguageChange={handleLanguageChange}
        onThemeChange={handleThemeChange}
      />

      <HeroSection t={t} />

      <AboutSection t={t} />

      <TechSkillsSection
        t={t}
        techSkillsOpen={techSkillsOpen}
        techFilter={techFilter}
        filteredTechSkills={filteredTechSkills}
        techTypes={techTypes}
        onOpenChange={setTechSkillsOpen}
        onFilterChange={setTechFilter}
      />

      <SoftSkillsSection
        t={t}
        softSkillsOpen={softSkillsOpen}
        softSkillsFilter={softSkillsFilter}
        filteredSoftSkills={filteredSoftSkills}
        softSkillTypes={softSkillTypes}
        onOpenChange={setSoftSkillsOpen}
        onFilterChange={setSoftSkillsFilter}
      />

      <CertificationsSection
        t={t}
        certificationsOpen={certificationsOpen}
        certificationsFilter={certificationsFilter}
        filteredCertifications={filteredCertifications}
        certificationTypes={certificationTypes}
        onOpenChange={setCertificationsOpen}
        onFilterChange={setCertificationsFilter}
      />

      <ProjectsSection
        t={t}
        projects={projects}
        projectsOpen={projectsOpen}
        onOpenChange={setProjectsOpen}
      />

      <ContactSection t={t} />

      <Footer t={t} />
    </div>
  );
}
