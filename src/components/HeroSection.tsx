import { Button } from "@/components/ui/button";
import { Star, Users, Calendar } from "lucide-react";
import mihirPortrait from "@/assets/mihir-new-profile.jpg";
import templeBackground from "@/assets/temple-background.jpg";
import { seoConfig } from "@/config/seo";
import { useTranslation } from "@/hooks/useTranslation";
const HeroSection = () => {
  const { t } = useTranslation();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${templeBackground})`
    }}>
        <div className="absolute inset-0 bg-gradient-mystical"></div>
      </div>

      {/* Floating cosmic orbs */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-accent/40 floating-orb"></div>
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-spiritual/50 floating-orb animation-delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-cosmic/30 floating-orb animation-delay-500"></div>
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-secondary/40 floating-orb animation-delay-2000"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-2xl lg:text-3xl text-primary-foreground/90 mb-4 font-medium">
              {t('hero.subtitle')}
            </p>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              {t('hero.tagline')}
            </p>
            <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl">
              {t('hero.description')}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Star className="h-5 w-5 text-accent" />
                <span className="font-semibold">{t('hero.experience')}</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Users className="h-5 w-5 text-accent" />
                <span className="font-semibold">{t('hero.consultations')}</span>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button variant="cosmic" size="lg" onClick={() => window.open('https://wa.me/919519822580', '_blank')} className="text-lg px-8 py-6 animate-fade-in">
                {t('hero.cta')}
              </Button>
            </div>
          </div>

          {/* Enhanced Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-fade-in">
              <div className="ornate-border">
                <img src={mihirPortrait} alt="Astro Mihir Shukla - Expert Astrologer and Spiritual Guide in Prayagraj" className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl" />
              </div>
              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/30 floating-orb blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 floating-orb blur-2xl animation-delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-cosmic/25 floating-orb blur-lg animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;