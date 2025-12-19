import { Link } from "react-router-dom";
import { ArrowLeft, Maximize, Bed, Bath, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const planoTipologiaA = "/images/planta-tipo-a1.png";

const TipologiaA = () => {
  const { t } = useLanguage();

  const tipologia = {
    id: "a",
    name: t("tipologiaDetail.tipologiaA.name"),
    subtitle: t("tipologiaDetail.tipologiaA.subtitle"),
    price: "$925.020.000",
    status: t("tipologiaDetail.tipologiaA.status"),
    size: "114,2",
    rooms: "3",
    bathrooms: "2",
    description: t("tipologiaDetail.tipologiaA.description"),
    images: [
      "/images/sala-comedor-01.jpg",
      "/images/habitacion-04.jpg",
      "/images/cocina-03.jpg",
    ],
  };

  const features = [
    t("tipologiaDetail.tipologiaA.features.0"),
    t("tipologiaDetail.tipologiaA.features.1"),
    t("tipologiaDetail.tipologiaA.features.2"),
    t("tipologiaDetail.tipologiaA.features.3"),
    t("tipologiaDetail.tipologiaA.features.4"),
    t("tipologiaDetail.tipologiaA.features.5"),
    t("tipologiaDetail.tipologiaA.features.6"),
    t("tipologiaDetail.tipologiaA.features.7"),
  ];

  const finishes = [
    t("tipologiaDetail.tipologiaA.finishes.0"),
    t("tipologiaDetail.tipologiaA.finishes.1"),
    t("tipologiaDetail.tipologiaA.finishes.2"),
    t("tipologiaDetail.tipologiaA.finishes.3"),
    t("tipologiaDetail.tipologiaA.finishes.4"),
    t("tipologiaDetail.tipologiaA.finishes.5"),
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/tipologias" className="inline-flex items-center text-accent hover:text-accent/80 transition-smooth mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>{t("tipologiaDetail.volverTipologias")}</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground">{tipologia.name}</h1>
              <p className="text-xl text-accent font-light">{tipologia.subtitle}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-foreground">
                {tipologia.status}
              </span>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{t("tipologiaDetail.desde")}</p>
                <p className="text-3xl font-bold text-accent">{tipologia.price} COP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
                <img 
                  src={tipologia.images[0]}
                  alt={`${tipologia.name} - Vista principal`}
                  className="w-full h-full object-cover hover:scale-105 transition-elegant"
                />
              </div>
            </div>
            <div className="aspect-video lg:aspect-auto rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={tipologia.images[1]}
                alt={`${tipologia.name} - Detalle 1`}
                className="w-full h-full object-cover hover:scale-105 transition-elegant"
              />
            </div>
            <div className="aspect-video lg:aspect-auto rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={tipologia.images[2]}
                alt={`${tipologia.name} - Detalle 2`}
                className="w-full h-full object-cover hover:scale-105 transition-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-3 lg:px-8">
          <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-background rounded-lg shadow-elegant">
              <Maximize className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">{tipologia.size}</p>
              <p className="text-sm text-muted-foreground">{t("tipologiaDetail.mTotales")}</p>
            </div>
            <div className="text-center p-3 bg-background rounded-lg shadow-elegant">
              <Bed className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">{tipologia.rooms}</p>
              <p className="text-sm text-muted-foreground">{t("tipologiaDetail.habitaciones")}</p>
            </div>
            <div className="text-center p-3 bg-background rounded-lg shadow-elegant">
              <Bath className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">{tipologia.bathrooms}</p>
              <p className="text-sm text-muted-foreground">{t("tipologiaDetail.banos")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">{t("tipologiaDetail.descripcion")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{tipologia.description}</p>
          </div>
        </div>
      </section>

      {/* Floor Plan */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">{t("tipologiaDetail.planoArquitectonico")}</h2>
            <div className="bg-background rounded-lg shadow-elegant overflow-hidden">
              <img 
                src={planoTipologiaA}
                alt={`${t("tipologiaDetail.planoArquitectonico")} - ${tipologia.name}`}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Finishes */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">{t("tipologiaDetail.caracteristicas")}</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">{t("tipologiaDetail.acabadosLujo")}</h2>
              <ul className="space-y-3">
                {finishes.map((finish, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{finish}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TipologiaA;
