import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: "Priya S.",
      location: "Mumbai",
      text: "Mihir ji's guidance helped me choose the perfect muhurat for my wedding. Everything went smoothly and we've been blessed with happiness ever since.",
      rating: 5
    },
    {
      name: "Rajesh K.",
      location: "Delhi",
      text: "His business muhurat advice was spot-on. My new venture launched successfully and I've seen remarkable growth in just 6 months.",
      rating: 5
    },
    {
      name: "Anjali M.",
      location: "Pune",
      text: "The kundali reading was incredibly accurate. Mihir ji explained everything clearly and gave practical solutions for my concerns.",
      rating: 5
    },
    {
      name: "Vikram T.",
      location: "Lucknow",
      text: "His palmistry reading revealed things about my personality that amazed me. The career guidance he provided has been invaluable.",
      rating: 5
    },
    {
      name: "Deepika R.",
      location: "Bangalore",
      text: "The gemstone recommendations worked wonders. I feel more positive and confident after following his spiritual guidance.",
      rating: 5
    },
    {
      name: "Arjun P.",
      location: "Kolkata",
      text: "Mihir ji's compassionate approach and deep knowledge make him truly special. His predictions have been remarkably accurate.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-ornate transition-all duration-300 border-accent/20 hover:border-accent/50 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-accent/60" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-accent/20">
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-divine rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-serenity rounded-2xl p-8 border border-accent/30 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
              {t('testimonials.cta.title')}
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed">
              {t('testimonials.cta.subtitle')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                <div className="text-sm text-muted-foreground">{t('testimonials.stats.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">{t('testimonials.stats.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">{t('testimonials.stats.confidential')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">{t('testimonials.stats.support')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;