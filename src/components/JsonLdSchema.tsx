import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const JsonLdSchema = () => {
  const location = useLocation();

  useEffect(() => {
    const language = (localStorage.getItem('venezia-language') as 'es' | 'en') || 'es';
    
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Venezia Tower House",
      "description": language === 'es' 
        ? "Proyecto de apartamentos de lujo en Cartagena, Colombia" 
        : "Luxury apartment project in Cartagena, Colombia",
      "url": "https://veneziatowerhouse.com",
      "logo": "https://veneziatowerhouse.com/images/venezia-logo-new.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cra 3 #65-109",
        "addressLocality": "Cartagena",
        "addressRegion": "Bolívar",
        "postalCode": "130001",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "10.4516",
        "longitude": "-75.5080"
      },
      "telephone": "+573204637230",
      "email": "veneziatowerhouse@gmail.com",
      "openingHours": ["Mo-Fr 07:00-17:00", "Sa-Su 07:00-12:00"],
      "sameAs": [
        "https://www.instagram.com/veneziatowerhouse",
        "https://www.facebook.com/veneziatowerhouse"
      ]
    };

    // Real Estate Project Schema
    const realEstateSchema = {
      "@context": "https://schema.org",
      "@type": "Residence",
      "name": "Venezia Tower House",
      "description": language === 'es'
        ? "Proyecto residencial de 16 niveles con 50 apartamentos exclusivos, amenidades premium y ubicación privilegiada en Crespo, Cartagena."
        : "16-level residential project with 50 exclusive apartments, premium amenities, and privileged location in Crespo, Cartagena.",
      "url": "https://veneziatowerhouse.com",
      "image": "https://veneziatowerhouse.com/images/fachada-01.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cra 3 #65-109, Crespo",
        "addressLocality": "Cartagena",
        "addressRegion": "Bolívar",
        "postalCode": "130001",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "10.4516",
        "longitude": "-75.5080"
      },
      "numberOfRooms": "1-3",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": language === 'es' ? "Piscina" : "Swimming Pool" },
        { "@type": "LocationFeatureSpecification", "name": language === 'es' ? "Gimnasio" : "Gym" },
        { "@type": "LocationFeatureSpecification", "name": language === 'es' ? "Zona BBQ" : "BBQ Area" },
        { "@type": "LocationFeatureSpecification", "name": language === 'es' ? "Salón de Eventos" : "Event Room" },
        { "@type": "LocationFeatureSpecification", "name": language === 'es' ? "Seguridad 24/7" : "24/7 Security" },
        { "@type": "LocationFeatureSpecification", "name": language === 'es' ? "Parqueadero" : "Parking" }
      ]
    };

    // Breadcrumb Schema based on route
    const getBreadcrumbSchema = () => {
      const path = location.pathname;
      const breadcrumbs = [
        { name: language === 'es' ? "Inicio" : "Home", url: "https://veneziatowerhouse.com/" }
      ];

      const routeNames: Record<string, { es: string; en: string }> = {
        '/proyecto': { es: 'El Proyecto', en: 'The Project' },
        '/amenidades': { es: 'Amenidades', en: 'Amenities' },
        '/tipologias': { es: 'Tipologías', en: 'Floor Plans' },
        '/ubicacion': { es: 'Ubicación', en: 'Location' },
        '/trayectoria': { es: 'Trayectoria', en: 'Track Record' },
        '/galeria': { es: 'Galería', en: 'Gallery' },
        '/contacto': { es: 'Contacto', en: 'Contact' },
        '/agendar-visita': { es: 'Agendar Visita', en: 'Schedule Visit' }
      };

      if (path !== '/' && routeNames[path]) {
        breadcrumbs.push({
          name: routeNames[path][language],
          url: `https://veneziatowerhouse.com${path}`
        });
      }

      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
    };

    // FAQ Schema for common questions
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": language === 'es' ? "¿Dónde está ubicado Venezia Tower House?" : "Where is Venezia Tower House located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": language === 'es' 
              ? "Venezia Tower House está ubicado en Crespo, Cartagena, Colombia. Una zona estratégica cerca del aeropuerto, centro histórico y playas."
              : "Venezia Tower House is located in Crespo, Cartagena, Colombia. A strategic area near the airport, historic center, and beaches."
          }
        },
        {
          "@type": "Question",
          "name": language === 'es' ? "¿Cuántas tipologías de apartamentos hay?" : "How many apartment types are there?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": language === 'es'
              ? "Venezia Tower House ofrece 7 tipologías diferentes, desde estudios hasta apartamentos de 3 habitaciones, adaptadas a diferentes estilos de vida."
              : "Venezia Tower House offers 7 different floor plans, from studios to 3-bedroom apartments, adapted to different lifestyles."
          }
        },
        {
          "@type": "Question",
          "name": language === 'es' ? "¿Qué amenidades incluye el proyecto?" : "What amenities does the project include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": language === 'es'
              ? "El proyecto incluye piscina, salón para gimnasio, zona BBQ, salón de eventos, zonas verdes, parque infantil y seguridad 24/7."
              : "The project includes a pool, gym room, BBQ area, event room, green areas, playground, and 24/7 security."
          }
        }
      ]
    };

    // Remove existing schema scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add new schema scripts
    const schemas = [organizationSchema, realEstateSchema, getBreadcrumbSchema(), faqSchema];
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `json-ld-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`json-ld-schema-${index}`);
        if (script) script.remove();
      });
    };
  }, [location.pathname]);

  return null;
};

export default JsonLdSchema;
