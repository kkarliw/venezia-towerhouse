import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/573204637230?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const navLinks = language === 'en' 
    ? [
        { name: "Home", path: "/" },
        { name: "Floor Plans", path: "/tipologias" },
        { name: "Location", path: "/ubicacion" },
        { name: "Gallery", path: "/galeria" },
        { name: "Track Record", path: "/trayectoria" },
        { name: "Contact", path: "/contacto" },
      ]
    : [
        { name: "Inicio", path: "/" },
        { name: "Tipologías", path: "/tipologias" },
        { name: "Ubicación", path: "/ubicacion" },
        { name: "Galería", path: "/galeria" },
        { name: "Trayectoria", path: "/trayectoria" },
        { name: "Contacto", path: "/contacto" },
      ];

  return (
    <footer className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none" />

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-14 py-16 sm:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-12">
          {/* LOGO + INFO */}
          <div className="space-y-5">
            <img src="/images/venezia-logo-light.png" alt="Venezia Tower House" className="h-14" loading="lazy" />
            <p className="text-xs text-accent font-display font-bold tracking-widest uppercase">Cartagena, Bolívar</p>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">{t('footer.descripcion')}</p>
            <p className="text-white/60 text-xs uppercase tracking-wide">PROMOTORA VENEZIA TOWER HOUSE SAS<br />NIT: 901670453</p>
            <div className="flex gap-3 pt-3">
              <button onClick={() => openWhatsApp(t('whatsapp.mensaje'))} title="WhatsApp" className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition">
                <FaWhatsapp className="w-5 h-5" />
              </button>
              <a href="https://www.instagram.com/veneziatowerhouse.ctg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/1ZLoZm55cB/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="font-display font-bold text-base mb-4 uppercase tracking-wide text-accent">
              {language === 'en' ? 'Navigation' : 'Navegación'}
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              {navLinks.map((link) => (
                <li key={link.path}><a href={link.path} className="hover:text-accent transition">{link.name}</a></li>
              ))}
            </ul>
          </div>

          {/* CENTRO DE VENTAS */}
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="font-display font-bold text-base mb-4 uppercase tracking-wide text-accent">
              {language === 'en' ? 'Sales Center' : 'Centro de Ventas'}
            </h3>
            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="text-xs uppercase text-white/50 mb-1">{language === 'en' ? 'Location' : 'Ubicación'}</p>
                Cartagena, Bolívar
              </div>
              <div>
                <p className="text-xs uppercase text-white/50 mb-1">{language === 'en' ? 'Hours' : 'Horario'}</p>
                {language === 'en' ? 'Mon - Fri: 7:00 AM - 5:00 PM' : 'Lun - Vie: 7:00 a.m - 05:00 p.m'}<br />
                {language === 'en' ? 'Sat: 7:00 AM - 12:00 PM' : 'Sáb: 7:00 a.m - 12:00 p.m'}
              </div>
              <div>
                <p className="text-xs uppercase text-white/50 mb-1">{language === 'en' ? 'Phone' : 'Teléfono'}</p>
                <a href="tel:+573204637230" className="hover:text-accent transition">+57 (320) 463-7230</a>
                <button onClick={() => openWhatsApp(t('whatsapp.mensaje'))} className="mt-3 w-full bg-accent text-accent-foreground font-bold py-2.5 rounded-lg hover:scale-105 transition">
                  {language === 'en' ? 'Contact Now' : 'Contactar ahora'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} Venezia Tower House. {t('footer.derechos')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
