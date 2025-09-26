'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { Content } from '@/config/types';
import { config } from '@/config/config';
import Link from 'next/link';

interface TechSkill {
  tech: string;
  icon: string;
  url: string;
  score: number;
  type: string;
}

interface TechSkillsSectionProps {
  t: Content;
  techSkillsOpen: boolean;
  techFilter: string;
  filteredTechSkills: TechSkill[];
  techTypes: string[];
  onOpenChange: (open: boolean) => void;
  onFilterChange: (filter: string) => void;
}

export function TechSkillsSection({
  t,
  techSkillsOpen,
  techFilter,
  filteredTechSkills,
  techTypes,
  onOpenChange,
  onFilterChange,
}: TechSkillsSectionProps) {
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
    <section id="tech-skills" className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto">
        <Collapsible open={techSkillsOpen} onOpenChange={onOpenChange}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto text-left hover:bg-transparent"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
                {t.techSkills.title}
              </h2>
              {techSkillsOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-4">
            <div className="mb-6 flex items-center gap-4">
              <Filter className="h-5 w-5 text-green-400" />
              <Select value={techFilter} onValueChange={onFilterChange}>
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

            <div
              className={config.scrollbar.className}
              style={{
                maxHeight: `${config.maxRowsInCollapsibleContent.techSkills * config.rowHeight.techSkills}px`,
              }}
            >
              <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {filteredTechSkills.map((skill, index) => (
                  <Card
                    key={`${skill.tech}-${index}`}
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
  );
}
