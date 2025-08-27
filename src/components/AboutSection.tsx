import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, BookOpen, Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Bio */}
          <div className="space-y-6">
            <div className="serenity-gradient rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                {t('about.journey')}
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                {t('about.description')}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {t('about.journey.text')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-accent/20">
                <div className="text-3xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-muted-foreground">{t('hero.experience')}</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-accent/20">
                <div className="text-3xl font-bold text-primary mb-1">2000+</div>
                <div className="text-sm text-muted-foreground">{t('hero.consultations')}</div>
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
                    <h4 className="font-semibold text-primary mb-2">{t('about.highlights.education')}</h4>
                    <p className="text-foreground/70">
                      {t('about.highlights.education.desc')}
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
                    <h4 className="font-semibold text-primary mb-2">{t('about.highlights.learning')}</h4>
                    <p className="text-foreground/70">
                      {t('about.highlights.learning.desc')}
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
                    <h4 className="font-semibold text-primary mb-2">{t('about.highlights.guidance')}</h4>
                    <p className="text-foreground/70">
                      {t('about.highlights.guidance.desc')}
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
                    <h4 className="font-semibold text-primary mb-2">{t('about.highlights.success')}</h4>
                    <p className="text-foreground/70">
                      {t('about.highlights.success.desc')}
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