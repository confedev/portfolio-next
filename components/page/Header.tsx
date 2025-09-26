'use client';

import { Button } from '@/components/ui/button';
import { AnimatedLogo } from '@/components/ui/animated-logo';
import { Moon, Sun, Globe } from 'lucide-react';
import { Content } from '@/config/types';

interface HeaderProps {
  t: Content;
  language: 'es' | 'en';
  theme: string | undefined;
  isMounted: boolean;
  onLanguageChange: (lang: 'es' | 'en') => void;
  onThemeChange: () => void;
}

export function Header({
  t,
  language,
  theme,
  isMounted,
  onLanguageChange,
  onThemeChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-green-500/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* default, extended, neon, professional, dark */}
        <AnimatedLogo theme="neon" />

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
          <a href="#contact" className="hover:text-green-400 transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
            className="hover:bg-green-500/10 font-mono flex items-center gap-1"
          >
            <Globe className="h-3 w-3" />
            {language === 'es' ? 'ES' : 'EN'}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onThemeChange}
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
  );
}
