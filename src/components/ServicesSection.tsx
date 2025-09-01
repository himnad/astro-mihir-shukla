import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Heart, 
  TrendingUp, 
  Hand, 
  Eye, 
  Star, 
  Gem, 
  Flower 
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const ServicesSection = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: t('services.horoscope.title'),
      description: t('services.horoscope.desc'),
      gradient: "bg-gradient-divine"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('services.marriage.title'),
      description: t('services.marriage.desc'),
      gradient: "bg-gradient-wisdom"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: t('services.business.title'),
      description: t('services.business.desc'),
      gradient: "bg-accent"
    },
    {
      icon: <Hand className="h-8 w-8" />,
      title: t('services.palmistry.title'),
      description: t('services.palmistry.desc'),
      gradient: "bg-secondary"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: t('services.facereading.title'),
      description: t('services.facereading.desc'),
      gradient: "bg-primary"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: t('services.kundali.title'),
      description: t('services.kundali.desc'),
      gradient: "bg-gradient-divine"
    },
    {
      icon: <Gem className="h-8 w-8" />,
      title: t('services.gemstone.title'),
      description: t('services.gemstone.desc'),
      gradient: "bg-gradient-wisdom"
    },
    {
      icon: <Flower className="h-8 w-8" />,
      title: t('services.spiritual.title'),
      description: t('services.spiritual.desc'),
      gradient: "bg-accent"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 serenity-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-ornate transition-all duration-300 border-accent/20 hover:border-accent/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-serif text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-accent/30 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
              {t('services.contact')}
            </h3>
            <p className="text-foreground/70 mb-6">
              {t('services.contact.desc')}
            </p>
            <div className="flex justify-center">
              <Button 
                variant="wisdom" 
                size="lg"
                onClick={() => window.open('https://wa.me/919519822580', '_blank')}
                className="px-8"
              >
                {t('hero.cta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;