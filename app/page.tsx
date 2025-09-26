'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { TechSkill, SoftSkill, Project, Certification } from '@/config/types';
import { content } from '@/config/content';
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

/* === Bilingual JSON datasets === */
import techSkillsData from '../config/tech_skills.json';
import softSkillsData from '../config/soft_skills.json';
import projectsData from '../config/projects.json';
import certificationsData from '../config/certifications.json';

// Transformed types for component consumption
interface TransformedTechSkill {
  tech: string;
  icon: string;
  url: string;
  score: number;
  type: string;
}

interface TransformedSoftSkill {
  name: string;
  platform: string;
  url: string;
  type: string;
  icon: string;
}

interface TransformedProject {
  name: string;
  description: string;
  url: string;
  image: string;
  sector: string;
}

interface TransformedCertification {
  name: string;
  platform: string;
  url: string;
  type: string;
  icon: string;
}

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [techSkills, setTechSkills] = useState<TransformedTechSkill[]>([]);
  const [softSkills, setSoftSkills] = useState<TransformedSoftSkill[]>([]);
  const [projects, setProjects] = useState<TransformedProject[]>([]);
  const [certifications, setCertifications] = useState<
    TransformedCertification[]
  >([]);
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

    // Function to get cookie value
    const getCookie = (name: string): string | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
      return null;
    };

    // Priority: Cookie > localStorage > Browser language
    const cookieLanguage = getCookie('portfolio-language') as
      | 'es'
      | 'en'
      | null;
    const savedLanguage = localStorage.getItem('portfolio-language') as
      | 'es'
      | 'en'
      | null;

    if (cookieLanguage) {
      setLanguage(cookieLanguage);
      // Sync localStorage with cookie
      localStorage.setItem('portfolio-language', cookieLanguage);
    } else if (savedLanguage) {
      setLanguage(savedLanguage);
      // Set cookie to match localStorage
      document.cookie = `portfolio-language=${savedLanguage}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Strict`;
    } else {
      // Detect browser language
      const browserLanguage = navigator.language.toLowerCase();
      const detectedLanguage = browserLanguage.startsWith('es') ? 'es' : 'en';
      setLanguage(detectedLanguage);
      // Save detected language to both localStorage and cookie
      localStorage.setItem('portfolio-language', detectedLanguage);
      document.cookie = `portfolio-language=${detectedLanguage}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Strict`;
    }

    // Theme is already handled automatically by next-themes with localStorage
  }, []);

  // Save language to localStorage and cookies when changed
  const handleLanguageChange = (newLanguage: 'es' | 'en') => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);

    // Set cookie for server-side metadata generation
    document.cookie = `portfolio-language=${newLanguage}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Strict`;

    // Refresh the page to update metadata
    router.refresh();
  };

  // Handle theme change and save it
  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // next-themes already handles localStorage automatically
  };

  useEffect(() => {
    // Transform bilingual data to current language format
    const transformTechSkills = (data: TechSkill[]): TransformedTechSkill[] =>
      data.map((skill) => ({
        ...skill,
        type: skill.type[language],
      }));

    const transformSoftSkills = (data: SoftSkill[]): TransformedSoftSkill[] =>
      data.map((skill) => ({
        ...skill,
        name: skill.name[language],
        type: skill.type[language],
      }));

    const transformProjects = (data: Project[]): TransformedProject[] =>
      data.map((project) => ({
        ...project,
        name: project.name[language],
        description: project.description[language],
        sector: project.sector[language],
      }));

    const transformCertifications = (
      data: Certification[],
    ): TransformedCertification[] =>
      data.map((cert) => ({
        ...cert,
        name: cert.name[language],
        type: cert.type[language],
      }));

    // Populate state with transformed data
    setTechSkills(transformTechSkills(techSkillsData as TechSkill[]));
    setSoftSkills(transformSoftSkills(softSkillsData as SoftSkill[]));
    setProjects(transformProjects(projectsData as Project[]));
    setCertifications(
      transformCertifications(certificationsData as Certification[]),
    );
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
