import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialLanguageModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [suggestedLanguage, setSuggestedLanguage] = useState<'es' | 'en'>('es');
  const { setLanguage } = useLanguage();

  useEffect(() => {
    // Check if user has already selected a language
    const hasSelectedLanguage = localStorage.getItem('venezia-language-selected');
    if (hasSelectedLanguage) return;

    // Detect user's browser language
    const browserLang = navigator.language || (navigator as any).userLanguage;
    const isSpanish = browserLang?.toLowerCase().startsWith('es');
    
    setSuggestedLanguage(isSpanish ? 'es' : 'en');
    
    // Show modal after a brief delay for smooth UX
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSelectLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('venezia-language-selected', 'true');
    localStorage.setItem('venezia-language-modal-seen', 'true');
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-[90%] max-w-lg"
          >
            <div className="bg-background rounded-2xl shadow-2xl border border-accent/20 overflow-hidden">
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 p-8 text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Globe className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-2">
                  Bienvenido / Welcome
                </h2>
                <p className="text-white/80 text-sm">
                  Venezia Tower House
                </p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-1">
                    Selecciona tu idioma preferido
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Select your preferred language
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Spanish Option */}
                  <button
                    onClick={() => handleSelectLanguage('es')}
                    className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${
                      suggestedLanguage === 'es'
                        ? 'border-accent bg-accent/5 shadow-lg'
                        : 'border-border hover:border-accent/50 hover:bg-muted/50'
                    }`}
                  >
                    {suggestedLanguage === 'es' && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                        Recomendado
                      </span>
                    )}
                    <div className="text-4xl mb-3">🇪🇸</div>
                    <h3 className="font-display font-bold text-foreground text-lg">Español</h3>
                    <p className="text-muted-foreground text-sm mt-1">Spanish</p>
                  </button>

                  {/* English Option */}
                  <button
                    onClick={() => handleSelectLanguage('en')}
                    className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${
                      suggestedLanguage === 'en'
                        ? 'border-accent bg-accent/5 shadow-lg'
                        : 'border-border hover:border-accent/50 hover:bg-muted/50'
                    }`}
                  >
                    {suggestedLanguage === 'en' && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                        Recommended
                      </span>
                    )}
                    <div className="text-4xl mb-3">🇺🇸</div>
                    <h3 className="font-display font-bold text-foreground text-lg">English</h3>
                    <p className="text-muted-foreground text-sm mt-1">Inglés</p>
                  </button>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                  Puedes cambiar el idioma en cualquier momento desde el menú.
                  <br />
                  You can change the language anytime from the menu.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InitialLanguageModal;
