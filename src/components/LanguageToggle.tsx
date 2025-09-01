import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="default"
      onClick={toggleLanguage}
      className="flex items-center gap-3 px-4 py-2 text-foreground border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300 font-semibold text-base shadow-md"
      aria-label={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
    >
      <Globe className="h-5 w-5" />
      <span className="font-bold text-lg">
        {language === 'en' ? 'हिं' : 'ENG'}
      </span>
    </Button>
  );
};

export default LanguageToggle;