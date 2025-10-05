'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Menu,
  Home,
  User,
  Code,
  Heart,
  Award,
  Briefcase,
  Mail,
} from 'lucide-react';
import { Content } from '@/config/texts/types';
import { cn } from '@/lib/utils';

interface FloatingNavProps {
  t: Content;
  className?: string;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function FloatingNav({ t, className }: FloatingNavProps) {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: t.nav.about === 'About' ? 'Home' : 'Inicio',
      href: '#',
      icon: Home,
    },
    {
      id: 'about',
      label: t.nav.about,
      href: '#about',
      icon: User,
    },
    {
      id: 'tech-skills',
      label: t.nav.techSkills,
      href: '#tech-skills',
      icon: Code,
    },
    {
      id: 'soft-skills',
      label: t.nav.softSkills,
      href: '#soft-skills',
      icon: Heart,
    },
    {
      id: 'certifications',
      label: t.nav.certifications,
      href: '#certifications',
      icon: Award,
    },
    {
      id: 'projects',
      label: t.nav.projects,
      href: '#projects',
      icon: Briefcase,
    },
    {
      id: 'contact',
      label: t.nav.contact,
      href: '#contact',
      icon: Mail,
    },
  ];

  const handleNavClick = (href: string) => {
    setOpen(false);

    // Smooth scroll to section with offset for header
    setTimeout(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    }, 150);
  };

  return (
    <div className={cn('md:hidden', className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className={cn(
              'fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300',
              'bg-green-500/90 hover:bg-green-500 text-white',
              'border-2 border-green-400/30 hover:border-green-400/50',
              'backdrop-blur-sm',
              'hover:scale-110 active:scale-95',
            )}
          >
            <Menu className="h-6 w-6 transition-transform duration-200" />
            <span className="sr-only">
              {t.nav.about === 'About'
                ? 'Open navigation menu'
                : 'Abrir menú de navegación'}
            </span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="bottom"
          className={cn(
            'h-auto max-h-[85vh] rounded-t-xl',
            'border-t-2 border-green-500/30 bg-background/95 backdrop-blur-md',
            'animate-in slide-in-from-bottom duration-300',
          )}
        >
          <SheetHeader className="pb-6 pt-2">
            <div className="mx-auto w-12 h-1 bg-muted-foreground/30 rounded-full mb-4" />
            <SheetTitle className="text-green-400 text-xl font-bold text-center">
              {t.nav.about === 'About' ? 'Navigation' : 'Navegación'}
            </SheetTitle>
          </SheetHeader>

          <div className="grid gap-2 pb-6 max-h-[60vh] overflow-y-auto">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'justify-start h-12 text-left transition-all duration-200',
                    'hover:bg-green-500/10 hover:text-green-400 hover:scale-105',
                    'border border-green-500/20 bg-card/50 hover:bg-card/80',
                    'animate-in slide-in-from-left',
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationDuration: '300ms',
                  }}
                >
                  <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
