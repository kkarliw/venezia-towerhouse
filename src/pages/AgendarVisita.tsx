import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, MessageCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

const AgendarVisita = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [dateError, setDateError] = useState("");

  const getAvailableHours = (dateString: string) => {
    if (!dateString) return [];

    const date = new Date(dateString + "T00:00:00");
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0) {
      return [];
    }

    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      return [
        { value: "07:00", label: "7:00 AM" },
        { value: "08:00", label: "8:00 AM" },
        { value: "09:00", label: "9:00 AM" },
        { value: "10:00", label: "10:00 AM" },
        { value: "11:00", label: "11:00 AM" },
        { value: "12:00", label: "12:00 PM" },
        { value: "13:00", label: "1:00 PM" },
        { value: "14:00", label: "2:00 PM" },
        { value: "15:00", label: "3:00 PM" },
        { value: "16:00", label: "4:00 PM" },
        { value: "17:00", label: "5:00 PM" }
      ];
    }

    if (dayOfWeek === 6) {
      return [
        { value: "07:00", label: "7:00 AM" },
        { value: "08:00", label: "8:00 AM" },
        { value: "09:00", label: "9:00 AM" },
        { value: "10:00", label: "10:00 AM" },
        { value: "11:00", label: "11:00 AM" },
        { value: "12:00", label: "12:00 PM" }
      ];
    }

    return [];
  };

  const getDayName = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString + "T00:00:00");
    const dayKeys = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    return t(`agendarVisita.dias.${dayKeys[date.getDay()]}`);
  };

  const getScheduleInfo = (dateString: string) => {
    if (!dateString) return "";

    const date = new Date(dateString + "T00:00:00");
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0) {
      return `${t("agendarVisita.dias.domingo")} - ${t("agendarVisita.cerrado")}`;
    } else if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      return `${t("agendarVisita.lunesViernes")} 7:00 a.m. - 5:00 p.m.`;
    } else if (dayOfWeek === 6) {
      return `${t("agendarVisita.dias.sabado")} - 7:00 a.m. - 12:00 p.m.`;
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.date || !formData.time) {
      toast({
        title: t("agendarVisita.error"),
        description: t("agendarVisita.completaCampos"),
        variant: "destructive",
      });
      return;
    }

    const date = new Date(formData.date + "T00:00:00");
    const dayKeys = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    const monthKeys = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    const dayName = t(`agendarVisita.dias.${dayKeys[date.getDay()]}`);
    const monthName = t(`agendarVisita.meses.${monthKeys[date.getMonth()]}`);
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${dayName}, ${day} ${language === 'es' ? 'de' : ''} ${monthName} ${language === 'es' ? 'de' : ''} ${year}`;

    const availableHours = getAvailableHours(formData.date);
    const selectedHour = availableHours.find(h => h.value === formData.time);
    const timeLabel = selectedHour ? selectedHour.label : formData.time;

    const phoneNumber = "573204637230";
    const message = language === 'es' 
      ? `Solicitud de Visita - Venezia Tower House\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nFecha: ${formattedDate}\nHora: ${timeLabel}\n\n¿Podrían confirmar la disponibilidad?`
      : `Visit Request - Venezia Tower House\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formattedDate}\nTime: ${timeLabel}\n\nCould you confirm availability?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    toast({
      title: t("agendarVisita.solicitudEnviada"),
      description: t("agendarVisita.teContactaremos"),
    });

    setFormData({ name: "", email: "", phone: "", date: "", time: "" });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFormData({
      ...formData,
      date: selectedDate,
      time: "",
    });

    const date = new Date(selectedDate + "T00:00:00");
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) {
      setDateError(t("agendarVisita.noDomingos"));
    } else {
      setDateError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const availableHours = getAvailableHours(formData.date);
  const scheduleInfo = getScheduleInfo(formData.date);
  const dayName = getDayName(formData.date);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <Calendar className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse-opacity" />
          <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            {t("agendarVisita.heroTitle1")} <span className="text-accent">{t("agendarVisita.heroTitle2")}</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("agendarVisita.heroDesc")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column - Info */}
              <div className="space-y-8 animate-slide-in-left">
                <div>
                  <h2 className="text-4xl font-bold text-primary mb-4">
                    {t("agendarVisita.queIncluye")}
                  </h2>
                  <div className="w-24 h-1 bg-accent mb-6" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("agendarVisita.queIncluyeDesc")}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-6 bg-muted rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">{t("agendarVisita.duracion")}</h3>
                      <p className="text-muted-foreground">{t("agendarVisita.duracionValor")}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-muted rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">{t("agendarVisita.asesoria")}</h3>
                      <p className="text-muted-foreground">{t("agendarVisita.asesoriaDesc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-muted rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">{t("agendarVisita.infoCompleta")}</h3>
                      <p className="text-muted-foreground">{t("agendarVisita.infoCompletaDesc")}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-lg shadow-lift">
                  <h3 className="text-xl font-bold mb-3 text-white">{t("agendarVisita.horariosAtencion")}</h3>
                  <div className="space-y-2">
                    <p className="flex justify-between text-white">
                      <span>{t("agendarVisita.lunesViernes")}</span>
                      <span className="font-medium">7:00 a.m. - 5:00 p.m.</span>
                    </p>
                    <p className="flex justify-between text-white">
                      <span>{t("agendarVisita.sabados")}</span>
                      <span className="font-medium">7:00 a.m. - 12:00 p.m.</span>
                    </p>
                    <p className="flex justify-between text-white/80">
                      <span>{t("agendarVisita.domingos")}</span>
                      <span className="font-medium">{t("agendarVisita.cerrado")}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="animate-slide-in-right">
                <div className="bg-muted p-8 lg:p-10 rounded-lg shadow-elegant">
                  <h3 className="text-2xl font-bold text-primary mb-6">{t("agendarVisita.completaDatos")}</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {t("agendarVisita.nombreCompleto")}
                        </div>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("agendarVisita.tuNombre")}
                        className="bg-background border-border focus:border-accent"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {t("agendarVisita.email")}
                        </div>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="bg-background border-border focus:border-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {t("agendarVisita.telefono")}
                        </div>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+57 123 456 7890"
                        className="bg-background border-border focus:border-accent"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-primary mb-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {t("agendarVisita.fechaPreferida")}
                        </div>
                      </label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleDateChange}
                        className="bg-background border-border focus:border-accent"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                      {dateError && (
                        <div className="flex items-center gap-2 mt-2 p-3 bg-red-50 border border-red-200 rounded-md">
                          <AlertCircle className="w-4 h-4 text-red-600" />
                          <p className="text-sm text-red-600">{dateError}</p>
                        </div>
                      )}
                      {formData.date && !dateError && (
                        <div className="flex items-center gap-2 mt-2 p-3 bg-green-50 border border-green-200 rounded-md">
                          <Calendar className="w-4 h-4 text-green-600" />
                          <p className="text-sm text-green-700">
                            <span className="font-semibold">{dayName}</span> - {scheduleInfo}
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-primary mb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {t("agendarVisita.horaPreferida")}
                        </div>
                      </label>

                      {availableHours.length > 0 ? (
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                          required
                        >
                          <option value="">{t("agendarVisita.seleccionaHora")}</option>
                          {availableHours.map((hour) => (
                            <option key={hour.value} value={hour.value}>
                              {hour.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <div className="w-full px-3 py-3 bg-red-50 border border-red-300 rounded-md">
                          <p className="text-red-700 font-semibold flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            {t("agendarVisita.noDisponible")}
                          </p>
                          <p className="text-sm text-red-600 mt-1">
                            {t("agendarVisita.seleccionaFecha")}
                          </p>
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={availableHours.length === 0 || !formData.time}
                      className="w-full bg-accent hover:bg-accent/90 text-primary font-medium shadow-lg text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t("agendarVisita.confirmarVisita")}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      {t("agendarVisita.confirmarWhatsApp")}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {t("agendarVisita.prefieresDirecto")}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t("agendarVisita.llamaOWhatsApp")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+573204637230">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="mr-2" />
                  {t("agendarVisita.llamarAhora")}
                </Button>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=573204637230&text=Hola%2C+deseo+recibir+informaci%C3%B3n+sobre+el+proyecto+Venezia+Tower+House.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-medium shadow-gold">
                  <MessageCircle className="mr-2" />
                  {t("agendarVisita.escribirWhatsApp")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgendarVisita;