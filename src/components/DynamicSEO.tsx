import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

// Import the context directly to avoid circular dependency issues
import { createContext } from 'react';

interface SEOConfig {
  titleKey: string;
  descriptionKey: string;
}

const routeSEOConfig: Record<string, SEOConfig> = {
  '/': {
    titleKey: 'seo.home.title',
    descriptionKey: 'seo.home.description'
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

// SEO translations inline to avoid context dependency issues
const seoTranslations = {
  es: {
    'seo.home.title': 'Venezia Tower House | Apartamentos de Lujo en Cartagena',
    'seo.home.description': 'Venezia Tower House es un proyecto de apartamentos de lujo en Cartagena, con arquitectura moderna, amenidades premium y una ubicación privilegiada cerca del mar.',
    'seo.proyecto.title': 'El Proyecto | Venezia Tower House Cartagena',
    'seo.proyecto.description': 'Descubre Venezia Tower House: 16 niveles, 50 apartamentos exclusivos, arquitectura moderna y ubicación estratégica en Crespo, Cartagena.',
    'seo.amenidades.title': 'Amenidades | Venezia Tower House Cartagena',
    'seo.amenidades.description': 'Piscina, gimnasio, zona BBQ, salón de eventos y más. Conoce todas las amenidades de lujo en Venezia Tower House.',
    'seo.tipologias.title': 'Tipologías | Venezia Tower House Cartagena',
    'seo.tipologias.description': 'Explora 7 diseños de apartamentos únicos desde estudios hasta 3 habitaciones. Encuentra tu espacio ideal en Venezia Tower House.',
    'seo.ubicacion.title': 'Ubicación | Venezia Tower House Cartagena',
    'seo.ubicacion.description': 'Ubicado en Crespo, Cartagena. Cerca del aeropuerto, centro histórico, playas y los mejores servicios de la ciudad.',
    'seo.trayectoria.title': 'Nuestra Trayectoria | Venezia Tower House Cartagena',
    'seo.trayectoria.description': 'Más de 10 años de experiencia, 150+ unidades entregadas. Conoce la historia y proyectos de Venezia Tower House.',
    'seo.galeria.title': 'Galería | Venezia Tower House Cartagena',
    'seo.galeria.description': 'Explora imágenes de los apartamentos, amenidades y espacios de Venezia Tower House en Cartagena.',
    'seo.contacto.title': 'Contacto | Venezia Tower House Cartagena',
    'seo.contacto.description': 'Contáctanos para información sobre precios, disponibilidad y planes de financiación de Venezia Tower House.',
    'seo.agendarVisita.title': 'Agendar Visita | Venezia Tower House Cartagena',
    'seo.agendarVisita.description': 'Agenda una visita personalizada a Venezia Tower House. Conoce en persona tu futuro hogar en Cartagena.'
  },
  en: {
    'seo.home.title': 'Venezia Tower House | Luxury Apartments in Cartagena, Colombia',
    'seo.home.description': 'Venezia Tower House offers luxury apartments in Cartagena with modern architecture, premium amenities, and a privileged beachfront location.',
    'seo.proyecto.title': 'The Project | Venezia Tower House Cartagena',
    'seo.proyecto.description': 'Discover Venezia Tower House: 16 levels, 50 exclusive apartments, modern architecture, and strategic location in Crespo, Cartagena.',
    'seo.amenidades.title': 'Amenities | Venezia Tower House Cartagena',
    'seo.amenidades.description': 'Pool, gym, BBQ area, event room and more. Discover all the luxury amenities at Venezia Tower House.',
    'seo.tipologias.title': 'Floor Plans | Venezia Tower House Cartagena',
    'seo.tipologias.description': 'Explore 7 unique apartment designs from studios to 3-bedroom units. Find your ideal space at Venezia Tower House.',
    'seo.ubicacion.title': 'Location | Venezia Tower House Cartagena',
    'seo.ubicacion.description': 'Located in Crespo, Cartagena. Near the airport, historic center, beaches, and the best services in the city.',
    'seo.trayectoria.title': 'Our Track Record | Venezia Tower House Cartagena',
    'seo.trayectoria.description': 'Over 10 years of experience, 150+ units delivered. Learn about the history and projects of Venezia Tower House.',
    'seo.galeria.title': 'Gallery | Venezia Tower House Cartagena',
    'seo.galeria.description': 'Explore images of apartments, amenities, and spaces at Venezia Tower House in Cartagena.',
    'seo.contacto.title': 'Contact | Venezia Tower House Cartagena',
    'seo.contacto.description': 'Contact us for pricing, availability, and financing plans at Venezia Tower House.',
    'seo.agendarVisita.title': 'Schedule a Visit | Venezia Tower House Cartagena',
    'seo.agendarVisita.description': 'Schedule a personalized visit to Venezia Tower House. See your future home in Cartagena in person.'
  }
};

export const DynamicSEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Get language from localStorage directly to avoid context issues
    const language = (localStorage.getItem('venezia-language') as 'es' | 'en') || 'es';
    const translations = seoTranslations[language];
    
    const path = location.pathname;
    const config = routeSEOConfig[path] || routeSEOConfig['/'];
    
    const title = translations[config.titleKey as keyof typeof translations] || translations['seo.home.title'];
    const description = translations[config.descriptionKey as keyof typeof translations] || translations['seo.home.description'];
    
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', language === 'es' ? 'es_CO' : 'en_US');
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
  }, [location.pathname]);

  // Also listen for language changes via storage event
  useEffect(() => {
    const handleStorageChange = () => {
      const language = (localStorage.getItem('venezia-language') as 'es' | 'en') || 'es';
      const translations = seoTranslations[language];
      const config = routeSEOConfig[location.pathname] || routeSEOConfig['/'];
      
      const title = translations[config.titleKey as keyof typeof translations] || translations['seo.home.title'];
      const description = translations[config.descriptionKey as keyof typeof translations] || translations['seo.home.description'];
      
      document.title = title;
      document.documentElement.lang = language;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [location.pathname]);

  return null;
};

export default DynamicSEO;
