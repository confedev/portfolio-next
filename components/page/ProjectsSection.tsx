'use client';

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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Content } from '@/config/texts/types';
import { config } from '@/config/config';
import Link from 'next/link';

interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
  sector: string;
}

interface ProjectsSectionProps {
  t: Content;
  projects: Project[];
  projectsOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectsSection({
  t,
  projects,
  projectsOpen,
  onOpenChange,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="container mx-auto">
        <Collapsible open={projectsOpen} onOpenChange={onOpenChange}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto text-left hover:bg-transparent"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
                {t.projects.title}
              </h2>
              {projectsOpen ? (
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
                maxHeight: `${config.maxRowsInCollapsibleContent.projects * config.rowHeight.projects}px`,
              }}
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <Card
                    key={`${project.name}-${index}`}
                    className="border-green-500/20 bg-card/50 hover:bg-green-500/5 transition-colors overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-4xl">🚀</div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          {project.name}
                        </CardTitle>
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
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
