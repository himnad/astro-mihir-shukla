import { Button } from "@/components/ui/button";
import { Star, Users, Calendar } from "lucide-react";
import mihirPortrait from "@/assets/mihir-new-profile.jpg";
import templeBackground from "@/assets/temple-background.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${templeBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary-foreground mb-6">
              Mihir Shukla
            </h1>
            <p className="text-2xl lg:text-3xl text-primary-foreground/90 mb-4 font-medium">
              Astrologer & Spiritual Guide
            </p>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Guiding Your Path with Ancient Wisdom & Modern Insight
            </p>
            <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl">
              With 8+ years of expertise and over 2000 successful consultations, 
              I help people find clarity, prosperity, and peace of mind through 
              traditional astrology and spiritual guidance.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Star className="h-5 w-5 text-accent" />
                <span className="font-semibold">8+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Users className="h-5 w-5 text-accent" />
                <span className="font-semibold">2000+ Consultations</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="font-semibold">Available Daily</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="wisdom" 
                size="lg"
                onClick={() => window.open('https://wa.me/919519822580', '_blank')}
                className="text-lg px-8 py-6"
              >
                WhatsApp Now
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="ornate-border">
                <img
                  src={mihirPortrait}
                  alt="Mihir Shukla - Expert Astrologer"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-accent/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-accent/50 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-accent/30 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;