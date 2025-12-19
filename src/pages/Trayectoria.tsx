import { Award, Building, CheckCircle, Clock, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const letter = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.4, 0, 0.2, 1] as const, duration: 0.4 },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const Trayectoria = () => {
  const { t } = useLanguage();

  const projects = [
    {
      year: "2018",
      name: t("trayectoria.proyecto1Name"),
      status: t("trayectoria.entregado"),
      units: 22,
      description: t("trayectoria.proyecto1Desc"),
      image: "images/turin.jpg",
    },
    {
      year: "2019",
      name: t("trayectoria.proyecto2Name"),
      status: t("trayectoria.entregado"),
      units: 48,
      description: t("trayectoria.proyecto2Desc"),
      image: "images/bilbao.jpg",
    },
    {
      year: "2022",
      name: t("trayectoria.proyecto3Name"),
      status: t("trayectoria.enEntrega"),
      units: 36,
      description: t("trayectoria.proyecto3Desc"),
      image: "images/barak.jpg",
    },
    {
      year: "2024",
      name: t("trayectoria.proyecto4Name"),
      status: t("trayectoria.enProceso"),
      units: 50,
      description: t("trayectoria.proyecto4Desc"),
      image: "images/fachada-02.jpg",
    },
  ];

  const achievements = [
    { icon: Building, number: "150+", text: t("estadisticas.unidadesEntregadas") },
    { icon: Award, number: "10+", text: t("estadisticas.anosExperiencia") },
    { icon: CheckCircle, number: "98%", text: t("estadisticas.clientesSatisfechos") },
    { icon: Clock, number: "100%", text: t("estadisticas.entregasATiempo") },
  ];

  const values = [
    {
      icon: Award,
      title: t("trayectoria.excelencia"),
      description: t("trayectoria.excelenciaDesc"),
    },
    {
      icon: CheckCircle,
      title: t("trayectoria.confianza"),
      description: t("trayectoria.confianzaDesc"),
    },
    {
      icon: Building,
      title: t("trayectoria.innovacion"),
      description: t("trayectoria.innovacionDesc"),
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/zona-social.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        </div>

        <motion.div className="hidden lg:block absolute top-20 left-10">
          <motion.div
            className="w-2 h-2 bg-accent rounded-full opacity-60"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {t("trayectoria.heroTitle1")} <span className="text-accent block sm:inline">{t("trayectoria.heroTitle2")}</span>
          </h1>
          <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light">
            {t("trayectoria.heroDesc")}
          </p>
        </motion.div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="py-16 sm:py-28 bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-16 items-center px-4 sm:px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 tracking-tight leading-tight"
              variants={container}
            >
              {t("trayectoria.historiaTitle1").split("").map((char, i) => (
                <motion.span key={i} variants={letter}>
                  {char}
                </motion.span>
              ))}
              {" "}
              <span className="text-accent">
                {t("trayectoria.historiaTitle2").split("").map((char, i) => (
                  <motion.span key={`h-${i}`} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            <motion.div
              className="w-16 h-1 bg-accent rounded-full"
              variants={fadeInUp}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-8 sm:leading-9 text-justify">
              {t("trayectoria.historiaDesc1")}
              <br />
              <br />
              {t("trayectoria.historiaDesc2")}
            </p>

            <div className="mt-8">
              <div className="w-16 h-px bg-accent mb-4" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-5xl font-bold text-primary mb-12 sm:mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("trayectoria.proyectosDestacados")} <span className="text-accent">{t("trayectoria.destacados")}</span>
          </motion.h2>

          <div className="space-y-12 sm:space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-6 sm:gap-12 items-center ${
                  index % 2 ? "lg:flex-row-reverse" : ""
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <motion.div
                  variants={index % 2 ? slideInRight : slideInLeft}
                  className={index % 2 ? "lg:order-2" : ""}
                >
                  <div className="relative group">
                    <div className="rounded-lg sm:rounded-2xl shadow-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full object-contain h-96 sm:h-[500px] lg:h-[600px] bg-muted group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <motion.div
                      className="absolute top-4 sm:top-6 left-4 sm:left-6"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-primary font-bold text-sm sm:text-lg">
                          {project.year}
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <span
                        className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-md ${
                          project.status === t("trayectoria.entregado")
                            ? "bg-primary/90 text-white"
                            : "bg-accent/90 text-primary"
                        }`}
                      >
                        {project.status}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={index % 2 ? slideInLeft : slideInRight}
                  className={`space-y-4 sm:space-y-6 ${index % 2 ? "lg:order-1" : ""}`}
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">
                      {project.name}
                    </h3>
                    <div className="w-12 sm:w-16 h-1 bg-accent rounded-full" />
                  </div>

                  <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-accent">
                        {project.units}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{t("trayectoria.unidades")}</p>
                    </div>
                    <div className="w-px h-10 sm:h-12 bg-accent/30" />
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-primary">
                        {project.status}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{t("trayectoria.estadoActual")}</p>
                    </div>
                  </div>

                  {project.status === t("trayectoria.entregado") && (
                    <motion.div
                      className="flex items-center gap-2 text-primary pt-2 sm:pt-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-medium text-sm sm:text-base">
                        {t("trayectoria.proyectoConcluido")}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGROS */}
      <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-center">
              {t("trayectoria.logrosTitle")} <span className="text-accent">{t("trayectoria.logrosTitle2")}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-muted to-muted/50 rounded-xl hover:from-accent/5 hover:to-accent/10 transition-all duration-500 border border-transparent hover:border-accent/20 h-full flex flex-col items-center justify-center">
                    <motion.div
                      className="w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-4 bg-accent/15 rounded-full flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="absolute inset-0 bg-accent/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-500" />
                      <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-accent relative z-10" />
                    </motion.div>

                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-center mb-2 tracking-tight">
                      {item.number}
                    </p>

                    <p className="text-center text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {item.text}
                    </p>

                    <motion.div
                      className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 sm:py-32 bg-muted relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-center">
              {t("trayectoria.valoresTitle")} <span className="text-accent">{t("trayectoria.valoresTitle2")}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="p-8 sm:p-10 bg-background rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-transparent hover:border-accent/30 relative overflow-hidden h-full flex flex-col">
                    <motion.div
                      className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-accent/5 rounded-full blur-3xl -z-10"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    <motion.div
                      className="w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 sm:mb-6 bg-accent/20 rounded-full flex items-center justify-center relative"
                      whileHover={{
                        scale: 1.2,
                        rotate: 15,
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-accent" />
                    </motion.div>

                    <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-3 sm:mb-4">
                      {value.title}
                    </h3>

                    <p className="text-muted-foreground text-center text-sm sm:text-base leading-relaxed flex-grow">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />

            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              {t("trayectoria.ctaTitle")} <span className="text-accent">{t("trayectoria.ctaTitle2")}</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {t("trayectoria.ctaDesc")}
            </p>

            <Link to="/agendar-visita">
              <motion.button
                className="px-8 sm:px-12 py-4 bg-accent text-primary font-bold text-lg rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("trayectoria.agendarVisita")}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Trayectoria;