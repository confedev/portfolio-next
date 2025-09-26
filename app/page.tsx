'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Moon,
  Sun,
  Globe,
  Filter,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Content } from '@/config/text.type';
import { content as contentEs } from '@/config/es/texts';
import { content as contentEn } from '@/config/en/texts';
import { config } from '@/config/config';

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
  const [techSkillsOpen, setTechSkillsOpen] = useState(false);
  const [softSkillsOpen, setSoftSkillsOpen] = useState(false);
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

  const renderStars = (score: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < score ? 'text-green-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-green-500/20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-green-400">{'<DEV/>'}</div>

          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-green-400 transition-colors">
              {t.nav.about}
            </a>
            <a
              href="#tech-skills"
              className="hover:text-green-400 transition-colors"
            >
              {t.nav.techSkills}
            </a>
            <a
              href="#soft-skills"
              className="hover:text-green-400 transition-colors"
            >
              {t.nav.softSkills}
            </a>
            <a
              href="#certifications"
              className="hover:text-green-400 transition-colors"
            >
              {t.nav.certifications}
            </a>
            <a
              href="#projects"
              className="hover:text-green-400 transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#contact"
              className="hover:text-green-400 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                handleLanguageChange(language === 'es' ? 'en' : 'es')
              }
              className="hover:bg-green-500/10 font-mono flex items-center gap-1"
            >
              <Globe className="h-3 w-3" />
              {language === 'es' ? 'ES' : 'EN'}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeChange}
              className="hover:bg-green-500/10"
            >
              {isMounted &&
                (theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                ))}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-6xl font-bold mb-4 text-green-400 animate-pulse">
            {'>'}_
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-green-300">
            {t.hero.subtitle}
          </p>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
            {t.about.title}
          </h2>
          <Card className="border-green-500/20 bg-card/50">
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed">{t.about.content}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Skills Section - Modified to show all skills with expand/collapse */}
      <section id="tech-skills" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
            {t.techSkills.title}
          </h2>

          <div className="mb-6 flex items-center gap-4">
            <Filter className="h-5 w-5 text-green-400" />
            <Select value={techFilter} onValueChange={setTechFilter}>
              <SelectTrigger className="w-48 border-green-500/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.techSkills.all}</SelectItem>
                {techTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Collapsible open={techSkillsOpen} onOpenChange={setTechSkillsOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between border-green-500/20 hover:bg-green-500/10 bg-transparent mb-6"
              >
                {techSkillsOpen
                  ? 'Contraer habilidades técnicas'
                  : 'Expandir habilidades técnicas'}
                {techSkillsOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div
                className={config.scrollbar.className}
                style={{
                  maxHeight: `${config.maxRowsInCollapsibleContent * config.rowHeight.techSkills}px`,
                }}
              >
                <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {filteredTechSkills.map((skill, index) => (
                    <Card
                      key={index}
                      className="border-green-500/20 bg-card/50 hover:bg-green-500/5 transition-colors"
                    >
                      <CardContent className="p-3 flex flex-col items-center text-center">
                        <Link
                          href={skill.url}
                          target="_blank"
                          className="group w-full"
                        >
                          <div className="w-10 h-10 mx-auto mb-2 bg-green-500/10 rounded-full flex items-center justify-center">
                            <div className="text-lg">⚡</div>
                          </div>
                          <h3 className="font-medium text-xs mb-1 text-green-400 group-hover:text-green-300 transition-colors leading-tight">
                            {skill.tech}
                          </h3>
                          <div className="flex justify-center mb-1 scale-75">
                            {renderStars(skill.score)}
                          </div>
                          <Badge
                            variant="outline"
                            className="border-green-500/50 text-green-400 text-xs px-1 py-0"
                          >
                            {skill.type}
                          </Badge>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section id="soft-skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
            {t.softSkills.title}
          </h2>

          <div className="mb-6 flex items-center gap-4">
            <Filter className="h-5 w-5 text-green-400" />
            <Select
              value={softSkillsFilter}
              onValueChange={setSoftSkillsFilter}
            >
              <SelectTrigger className="w-48 border-green-500/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.softSkills.all}</SelectItem>
                {softSkillTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Collapsible open={softSkillsOpen} onOpenChange={setSoftSkillsOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between border-green-500/20 hover:bg-green-500/10 bg-transparent"
              >
                {softSkillsOpen ? 'Contraer lista' : 'Expandir lista'}
                {softSkillsOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div
                className={config.scrollbar.className}
                style={{
                  maxHeight: `${config.maxRowsInCollapsibleContent * config.rowHeight.softSkills}px`,
                }}
              >
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredSoftSkills.map((skill, index) => (
                    <Card
                      key={index}
                      className="border-green-500/20 bg-card/50 hover:bg-green-500/5 transition-colors"
                    >
                      <CardContent className="p-4">
                        <Link
                          href={skill.url}
                          target="_blank"
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                            <div className="text-sm">💡</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold group-hover:text-green-400 transition-colors">
                              {skill.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {skill.platform}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
            {t.certifications.title}
          </h2>

          <div className="mb-6 flex items-center gap-4">
            <Filter className="h-5 w-5 text-green-400" />
            <Select
              value={certificationsFilter}
              onValueChange={setCertificationsFilter}
            >
              <SelectTrigger className="w-48 border-green-500/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.certifications.all}</SelectItem>
                {certificationTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCertifications.map((cert, index) => (
              <Card
                key={index}
                className="border-green-500/20 bg-card/50 hover:bg-green-500/5 transition-colors"
              >
                <CardContent className="p-6">
                  <Link href={cert.url} target="_blank" className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                        <div className="text-lg">🏆</div>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-green-500/50 text-green-400"
                      >
                        {cert.type}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-green-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.platform}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
            {t.projects.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-green-500/20 bg-card/50 hover:bg-green-500/5 transition-colors overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Badge
                      variant="outline"
                      className="border-green-500/50 text-green-400"
                    >
                      {project.sector}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link href={project.url} target="_blank">
                    <Button
                      variant="outline"
                      className="w-full border-green-500/20 hover:bg-green-500/10 bg-transparent"
                    >
                      Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
            {t.contact.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-green-500/20 bg-card/50">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-green-400" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">{t.contact.email}</p>
              </CardContent>
            </Card>

            <Card className="border-green-500/20 bg-card/50">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-green-400" />
                <h3 className="font-semibold mb-2">{t.contact.phoneLabel}</h3>
                <p className="text-muted-foreground">{t.contact.phone}</p>
              </CardContent>
            </Card>

            <Card className="border-green-500/20 bg-card/50">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-green-400" />
                <h3 className="font-semibold mb-2">
                  {t.contact.locationLabel}
                </h3>
                <p className="text-muted-foreground">{t.contact.location}</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="border-green-500/20 hover:bg-green-500/10 bg-transparent"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-green-500/20 hover:bg-green-500/10 bg-transparent"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
