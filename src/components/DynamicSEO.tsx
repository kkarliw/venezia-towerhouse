import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

interface SEOConfig {
  titleKey: string;
  descriptionKey: string;
  keywords?: string[];
}

const routeSEOConfig: Record<string, SEOConfig> = {
  '/': {
    titleKey: 'seo.home.title',
    descriptionKey: 'seo.home.description',
    keywords: ['apartamentos', 'lujo', 'Cartagena', 'inversión', 'Crespo']
  },
  '/proyecto': {
    titleKey: 'seo.proyecto.title',
    descriptionKey: 'seo.proyecto.description'
  },
  '/amenidades': {
    titleKey: 'seo.amenidades.title',
    descriptionKey: 'seo.amenidades.description'
  },
  '/tipologias': {
    titleKey: 'seo.tipologias.title',
    descriptionKey: 'seo.tipologias.description'
  },
  '/ubicacion': {
    titleKey: 'seo.ubicacion.title',
    descriptionKey: 'seo.ubicacion.description'
  },
  '/trayectoria': {
    titleKey: 'seo.trayectoria.title',
    descriptionKey: 'seo.trayectoria.description'
  },
  '/galeria': {
    titleKey: 'seo.galeria.title',
    descriptionKey: 'seo.galeria.description'
  },
  '/contacto': {
    titleKey: 'seo.contacto.title',
    descriptionKey: 'seo.contacto.description'
  },
  '/agendar-visita': {
    titleKey: 'seo.agendarVisita.title',
    descriptionKey: 'seo.agendarVisita.description'
  }
};

export const DynamicSEO = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const config = routeSEOConfig[path] || routeSEOConfig['/'];
    
    // Update document title
    document.title = t(config.titleKey);
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t(config.descriptionKey));
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t(config.titleKey));
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t(config.descriptionKey));
    }
    
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', language === 'es' ? 'es_CO' : 'en_US');
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', t(config.titleKey));
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t(config.descriptionKey));
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
  }, [location.pathname, language, t]);

  return null;
};

export default DynamicSEO;
