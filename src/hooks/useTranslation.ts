import { useLanguage } from "@/contexts/LanguageContext";
import { translations, TranslationKey } from "@/utils/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey, variables?: Record<string, string>): string => {
    let text = translations[language][key] || translations.en[key] || key;
    
    // Replace variables in the text
    if (variables) {
      Object.entries(variables).forEach(([varKey, value]) => {
        text = text.replace(`{${varKey}}`, value);
      });
    }
    
    return text;
  };

  return { t, language };
};