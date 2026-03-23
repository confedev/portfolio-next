import { useMemo } from 'react';
import { Content } from '@/config/texts/types';
import { useTypewriter } from '@/hooks/use-typewriter';

interface HeroSectionProps {
  t: Content;
}

export function HeroSection({ t }: HeroSectionProps) {
  const { currentText } = useTypewriter({
    phrases: t.hero.typewriterPhrases,
  });

  const longestPhrase = useMemo(() => {
    return t.hero.typewriterPhrases.reduce(
      (a, b) => (a.length > b.length ? a : b),
      '',
    );
  }, [t.hero.typewriterPhrases]);

  return (
    <section className="py-12 md:py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        <div className="relative flex items-center justify-center mb-6 px-2">
          <div
            className="text-lg md:text-xl font-bold font-mono text-green-300 opacity-0 pointer-events-none select-none leading-relaxed tracking-tight"
            aria-hidden="true"
          >
            {'>_ '}
            {longestPhrase}
          </div>

          <div className="absolute inset-x-0 top-0 flex justify-center">
            <div className="text-lg md:text-xl font-bold font-mono leading-relaxed text-green-400 animate-pulse tracking-tight">
              {'>_ '}
              <span className="text-green-300">
                {currentText}
                <span className="inline-block h-5 w-0.5 bg-green-300 animate-pulse ml-0.5 align-middle"></span>
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-[clamp(2rem,8vw,4rem)] font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent leading-tight tracking-tight">
          {t.hero.title}
        </h1>

        <p className="text-xl md:text-2xl mb-6 text-green-300 font-medium">
          {t.hero.subtitle}
        </p>

        <p className="text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          {t.hero.description}
        </p>
      </div>
    </section>
  );
}
