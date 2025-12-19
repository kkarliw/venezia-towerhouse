import { useLanguage } from '@/i18n/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1 border border-accent/20">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold tracking-wide transition-all ${
          language === 'es'
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-foreground/70 hover:text-foreground'
        }`}
        aria-label="Español"
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold tracking-wide transition-all ${
          language === 'en'
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-foreground/70 hover:text-foreground'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
