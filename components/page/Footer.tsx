import { Content } from '@/config/texts/types';

interface FooterProps {
  t: Content;
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-green-500/20 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {currentYear} - {t.footer.description}
        </p>
      </div>
    </footer>
  );
}
