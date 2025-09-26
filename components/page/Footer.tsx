import { Content } from '@/config/text.type';

interface FooterProps {
  t: Content;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-green-500/20 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
