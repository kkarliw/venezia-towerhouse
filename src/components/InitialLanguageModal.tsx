import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Globe, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialLanguageModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [suggestedLanguage, setSuggestedLanguage] = useState<'es' | 'en'>('es');
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const hasSelectedLanguage = localStorage.getItem('venezia-language-selected');
    if (hasSelectedLanguage) return;

    const browserLang = navigator.language || (navigator as any).userLanguage;
    const isSpanish = browserLang?.toLowerCase().startsWith('es');
    
    setSuggestedLanguage(isSpanish ? 'es' : 'en');
    
    setShowModal(true);
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary/80 backdrop-blur-md"
            onClick={() => {}} // Prevent closing on backdrop click
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative w-full max-w-md mx-auto"
          >
            <div className="relative bg-background rounded-3xl shadow-2xl overflow-hidden border border-accent/30">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              </div>

              {/* Header */}
              <div className="relative pt-8 pb-6 px-6 sm:px-8 text-center">
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/60 rounded-2xl rotate-6" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                    <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-1 -right-1"
                  >
                    <Sparkles className="w-5 h-5 text-accent" />
                  </motion.div>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2"
                >
                  ¡Bienvenido! / Welcome!
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-accent font-semibold text-sm sm:text-base"
                >
                  Venezia Tower House
                </motion.p>
              </div>

              {/* Content */}
              <div className="relative px-6 sm:px-8 pb-8 space-y-6">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center space-y-1"
                >
                  <p className="text-foreground font-medium text-sm sm:text-base">
                    Selecciona tu idioma preferido
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Select your preferred language
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 gap-3 sm:gap-4"
                >
                  {/* Spanish Option */}
                  <button
                    onClick={() => handleSelectLanguage('es')}
                    className={`group relative p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                      suggestedLanguage === 'es'
                        ? 'border-accent bg-accent/10 shadow-lg shadow-accent/20'
                        : 'border-border hover:border-accent/50 hover:bg-muted/30'
                    }`}
                  >
                    {suggestedLanguage === 'es' && (
                      <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-primary text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap"
                      >
                        ✨ Recomendado
                      </motion.span>
                    )}
                    <div className="text-4xl sm:text-5xl mb-3 filter drop-shadow-sm">🇪🇸</div>
                    <h3 className="font-display font-bold text-foreground text-base sm:text-lg">Español</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spanish</p>
                  </button>

                  {/* English Option */}
                  <button
                    onClick={() => handleSelectLanguage('en')}
                    className={`group relative p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                      suggestedLanguage === 'en'
                        ? 'border-accent bg-accent/10 shadow-lg shadow-accent/20'
                        : 'border-border hover:border-accent/50 hover:bg-muted/30'
                    }`}
                  >
                    {suggestedLanguage === 'en' && (
                      <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-primary text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap"
                      >
                        ✨ Recommended
                      </motion.span>
                    )}
                    <div className="text-4xl sm:text-5xl mb-3 filter drop-shadow-sm">🇺🇸</div>
                    <h3 className="font-display font-bold text-foreground text-base sm:text-lg">English</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Inglés</p>
                  </button>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-[10px] sm:text-xs text-center text-muted-foreground leading-relaxed"
                >
                  Puedes cambiar el idioma en cualquier momento desde el menú
                  <br />
                  <span className="text-muted-foreground/70">You can change the language anytime from the menu</span>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InitialLanguageModal;

