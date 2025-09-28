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

    // Smooth scroll to section
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={cn('md:hidden', className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className={cn(
              'fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg',
              'bg-green-500/90 hover:bg-green-500 text-white',
              'backdrop-blur-sm border border-green-500/20',
            )}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú de navegación</span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="bottom"
          className="h-auto max-h-[80vh] border-green-500/20"
        >
          <SheetHeader className="pb-4">
            <SheetTitle className="text-green-400">
              {t.nav.about === 'About' ? 'Navigation' : 'Navegación'}
            </SheetTitle>
          </SheetHeader>

          <div className="grid gap-3 pb-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'justify-start h-12 text-left',
                    'hover:bg-green-500/10 hover:text-green-400',
                    'border border-green-500/20 bg-card/50',
                  )}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
