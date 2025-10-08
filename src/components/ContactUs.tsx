import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    contact: "",
    message: "",
    choix: "code",
    formule: "Personaliser"
  });

  const [status, setStatus] = useState<{ type: "idle" | "sending" | "success" | "error"; message: string }>({
    type: "idle",
    message: ""
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const envoie = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "sending", message: "Envoi en cours..." });

    try {
      await emailjs.send(
        "service_0l9vtvp",
        "template_5vbohud",
        formData,
        "BWC3FvpTi2fyHBRro"
      );
      
      setStatus({ type: "success", message: "Message envoyé avec succès !" });
      setFormData({
        nom: "",
        email: "",
        contact: "",
        message: "",
        choix: "code",
        formule: "Personaliser"
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
      
    } catch (error) {
      setStatus({ type: "error", message: "Erreur lors de l'envoi. Veuillez réessayer." });
    }
  };

  return (
    <section id='contact' className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Contact Info & Text */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.span
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Contact
              </motion.span>
              
              <motion.h2
                className="text-4xl lg:text-6xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Parlons de votre{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  projet
                </span>
              </motion.h2>
              
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Transformons vos idées en expériences digitales exceptionnelles. 
                Discutons de votre vision et créons ensemble quelque chose d'extraordinaire.
              </motion.p>
            </div>

            {/* Contact Methods */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "axel@digital-gick.com",
                  href: "mailto:axel@digital-gick.com"
                },
                {
                  icon: Phone,
                  label: "Téléphone",
                  value: "+33 XX XX XX XX",
                  href: "tel:+33XXXXXXXXX"
                },
                {
                  icon: MapPin,
                  label: "Localisation",
                  value: "Disponible en remote",
                  href: "#"
                }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Form Container */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 lg:p-12 shadow-2xl">
              
              {/* Form Header */}
              <div className="text-center mb-8">
                <motion.h3
                  className="text-3xl lg:text-4xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Commençons
                </motion.h3>
                <p className="text-gray-300">
                  Remplissez le formulaire et je vous recontacte sous 24h
                </p>
              </div>

              <form ref={formRef} onSubmit={envoie} className="space-y-6">
                {/* Name & Contact Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white font-medium mb-2">
                      Nom & Prénom
                    </label>
                    <input
                      type="text"
                      name="nom"
                      placeholder="Votre nom complet"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white font-medium mb-2">
                      Contact
                    </label>
                    <input
                      type="text"
                      name="contact"
                      placeholder="Votre numéro"
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                    />
                  </motion.div>
                </div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                    required
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Décrivez votre projet, vos besoins et vos attentes..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200 resize-none"
                    required
                  />
                </motion.div>

                {/* Technology Choice */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white font-medium">
                    Technologie préférée
                  </label>
                  <div className="flex gap-4">
                    {[
                      { value: "code", label: "Développement sur mesure" },
                      { value: "wordpress", label: "WordPress" }
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex-1 flex items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-200 has-[:checked]:bg-blue-500/20 has-[:checked]:border-blue-500"
                      >
                        <input
                          type="radio"
                          name="choix"
                          value={option.value}
                          checked={formData.choix === option.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                          {formData.choix === option.value && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="text-white text-sm font-medium">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </motion.div>

                {/* Project Type */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white font-medium mb-2">
                    Type de projet
                  </label>
                  <select
                    name="formule"
                    value={formData.formule}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                  >
                    <option value="Personaliser">Projet personnalisé</option>
                    <option value="Site Vitrine">Site vitrine</option>
                    <option value="Portfolio">Portfolio</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Application web">Application web</option>
                    <option value="Refonte">Refonte de site</option>
                  </select>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.type === "sending"}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  {status.type === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                <AnimatePresence>
                  {status.type !== "idle" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl flex items-center gap-3 ${
                        status.type === "success"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : status.type === "error"
                          ? "bg-red-500/20 text-red-300 border border-red-500/30"
                          : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle size={20} />
                      ) : status.type === "error" ? (
                        <AlertCircle size={20} />
                      ) : (
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      )}
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full blur-xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full blur-xl opacity-60 animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;