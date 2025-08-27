import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageToggle from "@/components/LanguageToggle";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-2xl font-bold sacred-text">Astro Mihir Shukla</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.testimonials')}
            </button>
            <LanguageToggle />
            <Button variant="divine" onClick={() => scrollToSection('contact')}>
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 py-4 border-t border-accent/20">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">
                {t('nav.services')}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-foreground hover:text-primary transition-colors">
                {t('nav.testimonials')}
              </button>
              <div className="flex justify-start">
                <LanguageToggle />
              </div>
              <Button variant="divine" className="w-full justify-start" onClick={() => scrollToSection('contact')}>
                {t('nav.contact')}
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;