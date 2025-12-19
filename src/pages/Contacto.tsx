import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
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

const Contacto = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert(t("contacto.camposObligatorios"));
      setIsSubmitting(false);
      return;
    }

    const phoneNumber = "573204637230";
    const messageTemplate = language === 'es' 
      ? `Hola, me llamo ${formData.name}.\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje: ${formData.message || "Solicito información sobre Venezia Tower House"}`
      : `Hello, my name is ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message || "I'm requesting information about Venezia Tower House"}`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageTemplate)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 500);
  };

  return (
    <div className="min-h-screen pt-20 bg-background overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[50vh] sm:h-[45vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/psicina.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="text-accent">{t("contacto.title1")}</span>
          </h1>
          <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light">
            {t("contacto.description")}
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start">
            {/* CONTACT INFO */}
            <motion.div
              className="space-y-6 sm:space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                  {t("contacto.formTitle")} <span className="text-accent">{t("contacto.formTitle2")}</span>
                </h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-4 sm:mb-6" />
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("contacto.formDescription")}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Location Card */}
                <motion.div
                  className="p-6 sm:p-8 bg-gradient-to-br from-muted to-muted/50 rounded-xl border border-transparent hover:border-accent/20 hover:from-accent/5 hover:to-accent/10 transition-all duration-500 group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <motion.div
                      className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <MapPin className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{t("contacto.direccion")}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{t("contacto.direccionValor")}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("contacto.ciudad")}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                  className="p-6 sm:p-8 bg-gradient-to-br from-muted to-muted/50 rounded-xl border border-transparent hover:border-accent/20 hover:from-accent/5 hover:to-accent/10 transition-all duration-500 group cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => window.open("tel:+573204637230")}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <motion.div
                      className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                    >
                      <Phone className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{t("contacto.telefono")}</h3>
                      <p className="text-accent hover:text-accent/80 transition-colors font-semibold text-sm sm:text-base">
                        {t("contacto.telefonoValor")}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("contacto.diasSemana")}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  className="p-6 sm:p-8 bg-gradient-to-br from-muted to-muted/50 rounded-xl border border-transparent hover:border-accent/20 hover:from-accent/5 hover:to-accent/10 transition-all duration-500 group cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => window.open("mailto:veneziatowerhouse@gmail.com")}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <motion.div
                      className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Mail className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{t("contacto.email")}</h3>
                      <p className="text-accent hover:text-accent/80 transition-colors font-semibold text-sm sm:text-base break-all">
                        {t("contacto.emailValor")}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("contacto.respuestaRapida")}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Hours Card */}
                <motion.div
                  className="p-6 sm:p-8 bg-gradient-to-br from-muted to-muted/50 rounded-xl border border-transparent hover:border-accent/20 hover:from-accent/5 hover:to-accent/10 transition-all duration-500 group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <motion.div
                      className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                    >
                      <Clock className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{t("contacto.horarios")}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{t("contacto.horariosLV")}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-1">{t("contacto.horariosSD")}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* CONTACT FORM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="bg-gradient-to-br from-muted to-muted/50 p-6 sm:p-10 lg:p-12 rounded-2xl shadow-lg border border-accent/10 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {submitSuccess && (
                  <motion.div
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 text-sm sm:text-base font-medium">
                      {t("contacto.mensajeEnviado")}
                    </p>
                  </motion.div>
                )}

                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-accent" />
                  {t("contacto.enviarMensaje")}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-primary mb-2 tracking-wide">
                      {t("contacto.nombreCompleto")} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contacto.tuNombre")}
                      className="w-full px-4 py-3 sm:py-4 bg-background text-primary placeholder-muted-foreground border border-accent/20 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-primary mb-2 tracking-wide">
                      {t("contacto.email")} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contacto.tuEmail")}
                      className="w-full px-4 py-3 sm:py-4 bg-background text-primary placeholder-muted-foreground border border-accent/20 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-primary mb-2 tracking-wide">
                      {t("contacto.telefono")} *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contacto.tuTelefono")}
                      className="w-full px-4 py-3 sm:py-4 bg-background text-primary placeholder-muted-foreground border border-accent/20 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-primary mb-2 tracking-wide">
                      {t("contacto.mensaje")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contacto.escribeTuMensaje")}
                      className="w-full px-4 py-3 sm:py-4 bg-background text-primary placeholder-muted-foreground border border-accent/20 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all min-h-[100px] sm:min-h-[120px] resize-none text-sm sm:text-base"
                      rows={4}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-primary font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    {isSubmitting ? t("contacto.enviando") : t("contacto.enviar")}
                    <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.button>

                  <p className="text-xs text-muted-foreground text-center">
                    {t("contacto.enviarFooter")}
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16 sm:py-24 bg-muted relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-primary text-center">
              {t("contacto.mapaTitle")} <span className="text-accent">{t("contacto.mapaTitle2")}</span>
            </h2>
          </motion.div>

          <motion.div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-accent/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7847.337682450095!2d-75.5198927!3d10.4478313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef6250019e7cde9%3A0xedb4e8300131baad!2sVENEZIA%20TOWER%20HOUSE!5e0!3m2!1ses-419!2sco!4v1765310316025!5m2!1ses-419!2sco"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;