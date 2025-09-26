import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { content } from '@/config/texts/content';

const inter = Inter({ subsets: ['latin'] });

// Dynamic metadata based on language preference
export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const savedLanguage = cookieStore.get('portfolio-language')?.value as
    | 'es'
    | 'en'
    | undefined;

  // Default to Spanish if no language preference is found
  const language = savedLanguage || 'es';
  const currentContent = content[language];

  return {
    title: currentContent.metadata.title,
    description: currentContent.metadata.description,
    generator: 'v0.dev',
    alternates: {
      languages: {
        es: '/',
        en: '/',
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
