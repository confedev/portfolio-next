import { Content } from '@/config/texts/types';
import { useTypewriter } from '@/hooks/use-typewriter';

interface HeroSectionProps {
  t: Content;
}

export function HeroSection({ t }: HeroSectionProps) {
  const { currentText } = useTypewriter({
    phrases: t.hero.typewriterPhrases,
  });

  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-4xl font-bold mb-4 text-green-400 animate-pulse">
          {'>'}_
          <span className="text-green-300 font-mono ml-2">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
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
  );
}
