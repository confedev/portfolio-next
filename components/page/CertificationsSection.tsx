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
import { Content } from '@/config/text.type';
import { config } from '@/config/config';
import Link from 'next/link';

interface Certification {
  name: string;
  platform: string;
  url: string;
  type: string;
  icon: string;
}

interface CertificationsSectionProps {
  t: Content;
  certificationsOpen: boolean;
  certificationsFilter: string;
  filteredCertifications: Certification[];
  certificationTypes: string[];
  onOpenChange: (open: boolean) => void;
  onFilterChange: (filter: string) => void;
}

export function CertificationsSection({
  t,
  certificationsOpen,
  certificationsFilter,
  filteredCertifications,
  certificationTypes,
  onOpenChange,
  onFilterChange,
}: CertificationsSectionProps) {
  return (
    <section id="certifications" className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto">
        <Collapsible open={certificationsOpen} onOpenChange={onOpenChange}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto text-left hover:bg-transparent"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
                {t.certifications.title}
              </h2>
              {certificationsOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-4">
            <div className="mb-6 flex items-center gap-4">
              <Filter className="h-5 w-5 text-green-400" />
              <Select
                value={certificationsFilter}
                onValueChange={onFilterChange}
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

            <div
              className={config.scrollbar.className}
              style={{
                maxHeight: `${config.maxRowsInCollapsibleContent.certifications * config.rowHeight.certifications}px`,
              }}
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCertifications.map((cert, index) => (
                  <Card
                    key={`${cert.name}-${index}`}
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
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
