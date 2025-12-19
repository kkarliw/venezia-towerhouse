import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageDetectionModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { setLanguage } = useLanguage();

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem('venezia-language-modal-seen');
    if (hasSeenModal) return;

    // Detect user's browser language
    const browserLang = navigator.language || (navigator as any).userLanguage;
    const isSpanish = browserLang?.toLowerCase().startsWith('es');

    // Only show modal if browser language is not Spanish
    if (!isSpanish) {
      // Small delay to not interrupt initial page load
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('venezia-language-modal-seen', 'true');
    setShowModal(false);
  };

  const handleSwitchToEnglish = () => {
    setLanguage('en');
    handleClose();
  };

  const handleContinueInSpanish = () => {
    setLanguage('es');
    handleClose();
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-[90%] max-w-md"
          >
            <div className="bg-background rounded-2xl shadow-2xl border border-accent/20 overflow-hidden">
              {/* Header */}
              <div className="bg-primary p-6 text-center relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-xl font-display font-bold text-white">
                  Welcome to Venezia Tower House
                </h2>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-center text-muted-foreground">
                  We noticed you may be visiting from outside Colombia. Would you like to view this site in English?
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleSwitchToEnglish}
                    className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-display font-bold rounded-lg transition-all shadow-md hover:shadow-lg"
                  >
                    Switch to English
                  </button>
                  <button
                    onClick={handleContinueInSpanish}
                    className="w-full px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-display font-semibold rounded-lg transition-all border border-accent/20"
                  >
                    Continuar en Español
                  </button>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                  You can change the language anytime using the selector in the header.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LanguageDetectionModal;
