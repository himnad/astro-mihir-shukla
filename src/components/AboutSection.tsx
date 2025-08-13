import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, BookOpen, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            About Mihir Shukla
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born into a lineage of spiritual wisdom, I bridge the ancient traditions 
            of astrology with modern understanding to guide seekers on their life journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Bio */}
          <div className="space-y-6">
            <div className="serenity-gradient rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                My Journey
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                As an Electrical Engineer from REC Mainpuri, I initially pursued a technical path, 
                but destiny called me to embrace the ancient wisdom that flows through my family lineage. 
                Under the guidance of revered gurus in the sacred cities of Prayagraj and Varanasi, 
                I have spent years mastering the intricate arts of astrology and spiritual sciences.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My mission is to help people navigate life's complexities with clarity and confidence, 
                combining precise astrological insights with compassionate guidance. Every consultation 
                is a sacred opportunity to bring light to someone's path and restore harmony in their life.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-accent/20">
                <div className="text-3xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-accent/20">
                <div className="text-3xl font-bold text-primary mb-1">2000+</div>
                <div className="text-sm text-muted-foreground">Consultations</div>
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            <Card className="border-accent/30 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-divine rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Educational Foundation</h4>
                    <p className="text-foreground/70">
                      Electrical Engineering from REC Mainpuri, providing analytical 
                      precision to ancient wisdom interpretation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/30 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-wisdom rounded-lg">
                    <BookOpen className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Traditional Learning</h4>
                    <p className="text-foreground/70">
                      Trained under family gurus and learned from ancient temples 
                      in the spiritual cities of Prayagraj and Varanasi.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/30 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Heart className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Compassionate Guidance</h4>
                    <p className="text-foreground/70">
                      Dedicated to bringing clarity, prosperity, and peace of mind 
                      through personalized spiritual and astrological guidance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/30 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Users className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Proven Success</h4>
                    <p className="text-foreground/70">
                      Over 2000 successful consultations with people from all walks 
                      of life, helping them find their true path.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;