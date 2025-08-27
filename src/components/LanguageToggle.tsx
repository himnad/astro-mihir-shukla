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
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
      aria-label={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'en' ? 'हि' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageToggle;