import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MessageCircle, Palette, Code2, Rocket, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  const processSteps = [
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "Nous discutons de votre projet, vos objectifs et vos besoins spécifiques pour établir un cahier des charges détaillé.",
      duration: "1-2 jours"
    },
    {
      icon: Palette,
      title: "Design & Prototypage",
      description: "Création de maquettes interactives et validation de l'expérience utilisateur avant le développement.",
      duration: "3-5 jours"
    },
    {
      icon: Code2,
      title: "Développement",
      description: "Implémentation technique avec les meilleures pratiques, code propre et tests rigoureux.",
      duration: "Variable"
    },
    {
      icon: Rocket,
      title: "Livraison & Déploiement",
      description: "Mise en production, formation et support pour garantir le succès de votre projet.",
      duration: "1-2 jours"
    }
  ];

  const guarantees = [
    "Code maintenable et documenté",
    "Responsive design optimisé",
    "Performance et SEO intégrés",
    "Support post-livraison",
    "Formation utilisateur",
    "Hébergement conseillé"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comment je travaille
          </motion.span>
          
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mon{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Processus
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Une méthodologie éprouvée pour transformer vos idées en solutions digitales performantes, 
            avec une communication transparente à chaque étape.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-3">
                  {step.description}
                </p>
                
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {step.duration}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mes <span className="text-green-600">Engagements</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Je m'engage à fournir un travail de qualité avec des standards professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{guarantee}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;