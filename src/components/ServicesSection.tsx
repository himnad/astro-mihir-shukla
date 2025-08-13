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

const ServicesSection = () => {
  const services = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Horoscope Creation",
      description: "Detailed birth chart analysis with personalized predictions and life guidance based on planetary positions.",
      gradient: "bg-gradient-divine"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Marriage Muhurat Selection",
      description: "Choose the most auspicious times for weddings to ensure harmony and prosperity in married life.",
      gradient: "bg-gradient-wisdom"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Muhurat",
      description: "Select ideal timings for business ventures, deals, and important professional decisions.",
      gradient: "bg-accent"
    },
    {
      icon: <Hand className="h-8 w-8" />,
      title: "Palmistry",
      description: "Read the lines of your hands to reveal insights about personality, health, and future events.",
      gradient: "bg-secondary"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Face Reading",
      description: "Ancient art of understanding character traits and life patterns through facial features analysis.",
      gradient: "bg-primary"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Kundali Reading & Matching",
      description: "Comprehensive horoscope analysis and compatibility checks for marriage and partnerships.",
      gradient: "bg-gradient-divine"
    },
    {
      icon: <Gem className="h-8 w-8" />,
      title: "Gemstone Recommendations",
      description: "Personalized gemstone suggestions to enhance positive energies and balance planetary influences.",
      gradient: "bg-gradient-wisdom"
    },
    {
      icon: <Flower className="h-8 w-8" />,
      title: "Tantra & Worship Guidance",
      description: "Traditional rituals, puja guidance, and spiritual practices for inner peace and prosperity.",
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
            Services & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive astrological and spiritual services rooted in ancient wisdom, 
            tailored to guide you through life's important decisions and challenges.
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
              Ready to Discover Your Path?
            </h3>
            <p className="text-foreground/70 mb-6">
              Every consultation is personalized to your unique situation. 
              Let ancient wisdom illuminate your journey forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="divine" 
                size="lg"
                onClick={scrollToContact}
                className="px-8"
              >
                Book Consultation
              </Button>
              <Button 
                variant="wisdom" 
                size="lg"
                onClick={() => window.open('https://wa.me/919519822580', '_blank')}
                className="px-8"
              >
                Quick WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;