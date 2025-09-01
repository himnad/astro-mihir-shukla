import { Heart, Star, Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">
              {t('hero.title')}
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              {t('footer.about')}
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Star className="h-5 w-5" />
              <span className="font-semibold">{t('footer.trusted')}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>{t('services.horoscope.title')}</li>
              <li>{t('services.marriage.title')}</li>
              <li>{t('services.business.title')}</li>
              <li>{t('services.palmistry.title')}</li>
              <li>{t('services.kundali.title')}</li>
              <li>{t('services.gemstone.title')}</li>
              <li>{t('services.spiritual.title')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contact.title')}</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span>{t('contact.phone')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span>{t('contact.email')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-accent" />
                <span>{t('contact.instagram')}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{t('contact.location')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              {t('footer.copyright', { year: currentYear.toString() })}
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              {t('footer.made')} <Heart className="h-4 w-4 text-accent" /> {t('footer.made.for')}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg">
          <p className="text-xs text-primary-foreground/60 text-center leading-relaxed">
            <strong>Disclaimer:</strong> {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;