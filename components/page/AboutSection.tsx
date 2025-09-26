import { Card, CardContent } from '@/components/ui/card';
import { Content } from '@/config/types';

interface AboutSectionProps {
  t: Content;
}

export function AboutSection({ t }: AboutSectionProps) {
  return (
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
  );
}
