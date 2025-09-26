import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Content } from '@/config/texts/types';

interface ContactSectionProps {
  t: Content;
}

export function ContactSection({ t }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-green-400 border-l-4 border-green-400 pl-4">
          {t.contact.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-green-500/20 bg-card/50">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">{t.contact.email}</p>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-card/50">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <h3 className="font-semibold mb-2">{t.contact.phoneLabel}</h3>
              <p className="text-muted-foreground">{t.contact.phone}</p>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-card/50">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <h3 className="font-semibold mb-2">{t.contact.locationLabel}</h3>
              <p className="text-muted-foreground">{t.contact.location}</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="border-green-500/20 hover:bg-green-500/10 bg-transparent"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-green-500/20 hover:bg-green-500/10 bg-transparent"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
