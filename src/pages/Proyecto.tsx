import { Building2, Home, TreePine, Shield, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Proyecto = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Building2,
      title: t("proyecto.arquitectura"),
      description: t("proyecto.arquitecturaDesc"),
    },
    {
      icon: Home,
      title: t("proyecto.espacios"),
      description: t("proyecto.espaciosDesc"),
    },
    {
      icon: TreePine,
      title: t("proyecto.areasVerdes"),
      description: t("proyecto.areasVerdesDesc"),
    },
    {
      icon: Shield,
      title: t("proyecto.seguridad"),
      description: t("proyecto.seguridadDesc"),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <style>{`
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(217, 119, 6, 0.3);
          }
          50% {
            opacity: 0.98;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 10px rgba(217, 119, 6, 0);
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/fachada-01.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.6)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            {t("proyecto.heroTitle1")} <span className="text-accent">{t("proyecto.heroTitle2")}</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("proyecto.heroDesc")}
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                {t("proyecto.descTitle")}
              </h2>
              <div className="w-24 h-1 bg-accent" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("proyecto.descP1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("proyecto.descP2")}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">16</div>
                  <div className="text-sm text-muted-foreground">{t("proyecto.niveles")}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">50</div>
                  <div className="text-sm text-muted-foreground">{t("proyecto.apartamentos")}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">7</div>
                  <div className="text-sm text-muted-foreground">{t("proyecto.tipologiasUnicas")}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">215,4 m²</div>
                  <div className="text-sm text-muted-foreground">{t("proyecto.areasComunes")}</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-elegant">
                <img 
                  src="/images/fachada-02.jpg"
                  alt="Render del proyecto"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-lg -z-10" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              {t("proyecto.caracteristicas")} <span className="text-accent">{t("proyecto.distintivas")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("proyecto.caracteristicasDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg shadow-elegant hover:shadow-lift transition-elegant group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline & Status */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              {t("proyecto.estadoProyecto")} <span className="text-accent">{t("proyecto.estadoProyectoTitle")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("proyecto.cronograma")}
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  phase: t("proyecto.inicioProyecto"),
                  title: t("proyecto.licencias"),
                  description: t("proyecto.licenciasDesc"),
                  icon: Building2,
                  status: "completed",
                },
                {
                  year: "2025-2028",
                  phase: t("proyecto.enConstruccion"),
                  title: t("proyecto.faseActual"),
                  description: t("proyecto.faseActualDesc"),
                  icon: Home,
                  status: "active",
                },
                {
                  year: "2028",
                  phase: t("proyecto.entrega"),
                  title: t("proyecto.entregaUnidades"),
                  description: t("proyecto.entregaDesc"),
                  icon: Shield,
                  status: "pending",
                }
              ].map((milestone, index) => {
                const Icon = milestone.icon;
                const isActive = milestone.status === 'active';
                const isCompleted = milestone.status === 'completed';

                return (
                  <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    {index < 2 && (
                      <div className="absolute left-8 top-24 w-0.5 h-16 bg-gradient-to-b from-accent/60 to-accent/20" />
                    )}

                    <div className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-lift hover:-translate-y-1 ${
                      isCompleted ? 'bg-green-50 border-green-200' :
                      isActive ? 'bg-amber-50 border-amber-200' :
                      'bg-blue-50 border-blue-200'
                    }`}>
                      
                      <div className="absolute -top-3 right-6">
                        {isCompleted && (
                          <span className="inline-flex items-center gap-1 bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                            <Check className="w-4 h-4" />
                            {t("proyecto.completado")}
                          </span>
                        )}
                        {isActive && (
                          <span className="inline-flex items-center gap-1 bg-accent text-primary px-4 py-1.5 rounded-full text-xs font-bold shadow-md animate-bounce" style={{ animationDuration: '2s' }}>
                            ⚡ {t("proyecto.enCurso")}
                          </span>
                        )}
                        {milestone.status === 'pending' && (
                          <span className="inline-flex items-center gap-1 bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                            {t("proyecto.proximo")}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-6">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCompleted ? 'bg-green-200 text-green-700' :
                          isActive ? 'bg-amber-200 text-amber-700' :
                          'bg-blue-200 text-blue-700'
                        }`}>
                          <Icon className="w-8 h-8" />
                        </div>

                        <div className="flex-1">
                          <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                            isCompleted ? 'text-green-700' :
                            isActive ? 'text-amber-700' :
                            'text-blue-700'
                          }`}>
                            {milestone.phase}
                          </p>
                          <h3 className="text-2xl font-bold text-primary mb-1">{milestone.year}</h3>
                          <h4 className="text-lg font-bold text-primary mb-2">{milestone.title}</h4>
                          <p className="text-muted-foreground text-sm">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Financing Plans */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-primary text-center mb-10">
              {t("proyecto.planesFinanciacion")} <span className="text-accent">{t("proyecto.financiacion")}</span>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                {t("proyecto.planesDesc")}
              </p>
            </h3>
            
            {/* Plan 1: Separación */}
            <div className="mb-12 animate-fade-in-up">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl overflow-hidden shadow-2xl hover:shadow-lift transition-all duration-300 transform hover:-translate-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/30">
                  <div className="px-6 py-8 lg:px-8 lg:py-10 text-center text-white hover:bg-white/10 transition-colors duration-300">
                    <p className="text-xs lg:text-sm font-bold uppercase tracking-widest mb-3 text-white/90">{t("proyecto.separacion")}</p>
                    <p className="text-4xl lg:text-5xl font-bold text-white">5%</p>
                    <p className="text-xs lg:text-sm mt-2 text-white/90">{t("proyecto.maxCuotas")}</p>
                  </div>
                  <div className="px-6 py-8 lg:px-8 lg:py-10 text-center text-white hover:bg-white/10 transition-colors duration-300">
                    <p className="text-xs lg:text-sm font-bold uppercase tracking-widest mb-3 text-white/90">{t("proyecto.cuotaInicial")}</p>
                    <p className="text-4xl lg:text-5xl font-bold text-white">25%</p>
                    <p className="text-xs lg:text-sm mt-2 text-white/90">{t("proyecto.momentoCompra")}</p>
                  </div>
                  <div className="px-6 py-8 lg:px-8 lg:py-10 text-center text-white hover:bg-white/10 transition-colors duration-300">
                    <p className="text-xs lg:text-sm font-bold uppercase tracking-widest mb-3 text-white/90">{t("proyecto.cuotasMensuales")}</p>
                    <p className="text-4xl lg:text-5xl font-bold text-white">36</p>
                    <p className="text-xs lg:text-sm mt-2 text-white/90">{t("proyecto.hastaEntrega")}</p>
                  </div>
                  <div className="px-6 py-8 lg:px-8 lg:py-10 text-center text-white hover:bg-white/10 transition-colors duration-300">
                    <p className="text-xs lg:text-sm font-bold uppercase tracking-widest mb-3 text-white/90">{t("proyecto.saldoFinal")}</p>
                    <p className="text-4xl lg:text-5xl font-bold text-white">70%</p>
                    <p className="text-xs lg:text-sm mt-2 text-white/90">{t("proyecto.momentoEntrega")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan 2: Hipotecario */}
            <div className="mb-12 animate-fade-in-up relative" style={{ animationDelay: '0.1s' }}>
              <div className="flex justify-center mb-6">
                <div className="animate-bounce" style={{ animationDuration: '2s' }}>
                  <span className="inline-flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                    ⭐ {t("proyecto.formaPagoPopular")} ⭐
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-3xl overflow-hidden shadow-2xl hover:shadow-lift transition-all duration-300 transform hover:-translate-y-2 animate-pulse-subtle">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                  <div className="px-4 sm:px-6 py-8 lg:px-8 lg:py-10 text-center text-primary hover:bg-white/20 transition-colors duration-300 border-b sm:border-b-0 sm:border-r border-white/30">
                    <p className="text-xs lg:text-sm font-bold uppercase tracking-widest mb-3 text-primary/90">{t("proyecto.cuotaInicial")}</p>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">30%</p>
                    <p className="text-xs lg:text-sm mt-2 text-primary/90">{t("proyecto.separacion")} + 25%</p>
                  </div>
                  <div className="px-4 sm:px-6 py-8 lg:px-8 lg:py-10 text-center text-primary hover:bg-white/20 transition-colors duration-300 border-b sm:border-b-0 sm:border-r border-white/30">
                    <p className="text-xs lg:text-sm font-bold uppercase tracking-widest mb-3 text-primary/90">{t("proyecto.cuotasOrdinarias")}</p>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">36</p>
                    <p className="text-xs lg:text-sm mt-2 text-primary/90">{t("proyecto.pagosMensuales")}</p>
                  </div>
                  <div className="px-4 sm:px-6 py-8 lg:px-8 lg:py-10 text-center text-primary hover:bg-white/20 transition-colors duration-300 border-b sm:border-b-0 sm:border-r border-white/30">
                    <p className="text-xs lg:text-sm font-bold uppercase tracking-widest mb-3 text-primary/90">{t("proyecto.creditoHipotecario")}</p>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">70%</p>
                    <p className="text-xs lg:text-sm mt-2 text-primary/90">{t("proyecto.hasta20Anos")}</p>
                  </div>
                  <div className="px-4 sm:px-6 py-8 lg:px-8 lg:py-10 text-center text-primary hover:bg-white/20 transition-colors duration-300">
                    <p className="text-xs lg:text-sm font-bold uppercase tracking-widest mb-3 text-primary/90">{t("proyecto.tasa")}</p>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">{t("proyecto.preferencial")}</p>
                    <p className="text-xs lg:text-sm mt-2 text-primary/90">{t("proyecto.dependeBanco")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan 3: Contado - Premium Design */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                  💎 {t("proyecto.mejorValor")}
                </span>
              </div>
              <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl overflow-hidden shadow-2xl hover:shadow-lift transition-all duration-300 transform hover:-translate-y-2">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
                
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0">
                  {/* Main Payment */}
                  <div className="px-8 py-12 text-center text-white border-b md:border-b-0 md:border-r border-white/20 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-3xl">💰</span>
                    </div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-3 text-white/90">{t("proyecto.pagoContado")}</p>
                    <p className="text-6xl font-bold text-white mb-2">100%</p>
                    <p className="text-sm text-white/80">{t("proyecto.pagoUnico")}</p>
                  </div>
                  
                  {/* Discount - Highlighted */}
                  <div className="px-8 py-12 text-center text-white border-b md:border-b-0 md:border-r border-white/20 bg-white/10 hover:bg-white/20 transition-colors duration-300 relative">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                      <div className="bg-accent text-primary px-4 py-1 rounded-b-lg text-xs font-bold shadow-lg">
                        ⭐ EXCLUSIVO
                      </div>
                    </div>
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/30 rounded-full flex items-center justify-center backdrop-blur-sm ring-4 ring-accent/50">
                      <span className="text-3xl">🎁</span>
                    </div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-3 text-accent">{t("proyecto.descuento")}</p>
                    <p className="text-6xl font-bold text-accent mb-2">{t("proyecto.descuentoValor")}</p>
                    <p className="text-sm text-white/90 font-medium">{t("proyecto.descuentoDesc")}</p>
                    <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm">
                      ✓ {t("proyecto.ahorroInmediato")}
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="px-8 py-12 text-white hover:bg-white/10 transition-colors duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-3xl">✨</span>
                    </div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-4 text-white/90 text-center">{t("proyecto.beneficios")}</p>
                    <ul className="space-y-3 text-sm text-white/90">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-accent/30 rounded-full flex items-center justify-center text-accent text-xs">✓</span>
                        {t("proyecto.sinIntereses")}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-accent/30 rounded-full flex items-center justify-center text-accent text-xs">✓</span>
                        {t("proyecto.procesoRapido")}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-accent/30 rounded-full flex items-center justify-center text-accent text-xs">✓</span>
                        {t("proyecto.prioridadSeleccion")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-3xl font-bold text-primary mb-4">
              {t("proyecto.ctaTitle")} <span className="text-accent">{t("proyecto.ctaTitle2")}</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("proyecto.ctaDesc")}
            </p>
            <Link to="/contacto">
              <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-bold text-lg rounded-lg transition-all shadow-lg hover:shadow-xl">
                {t("proyecto.contactarAsesor")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proyecto;