'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
import { Filter, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Content } from '@/config/types';
import { config } from '@/config/config';
import Link from 'next/link';

interface SoftSkill {
  name: string;
  platform: string;
  url: string;
  type: string;
  icon: string;
}

interface SoftSkillsSectionProps {
  t: Content;
  softSkillsOpen: boolean;
  softSkillsFilter: string;
  filteredSoftSkills: SoftSkill[];
  softSkillTypes: string[];
  onOpenChange: (open: boolean) => void;
  onFilterChange: (filter: string) => void;
}

export function SoftSkillsSection({
  t,
  softSkillsOpen,
  softSkillsFilter,
  filteredSoftSkills,
  softSkillTypes,
  onOpenChange,
  onFilterChange,
}: SoftSkillsSectionProps) {
  return (
    <section id="soft-skills" className="py-16 px-4">
      <div className="container mx-auto">
        <Collapsible open={softSkillsOpen} onOpenChange={onOpenChange}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto text-left hover:bg-transparent"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
                {t.softSkills.title}
              </h2>
              {softSkillsOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-4">
            <div className="mb-6 flex items-center gap-4">
              <Filter className="h-5 w-5 text-green-400" />
              <Select value={softSkillsFilter} onValueChange={onFilterChange}>
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

            <div
              className={config.scrollbar.className}
              style={{
                maxHeight: `${config.maxRowsInCollapsibleContent.softSkills * config.rowHeight.softSkills}px`,
              }}
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredSoftSkills.map((skill, index) => (
                  <Card
                    key={`${skill.name}-${index}`}
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
  );
}
