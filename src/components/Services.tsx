import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code2, ShoppingCart, Globe, ArrowRight } from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 1,
      title: "Développement Front-end",
      description: "Création d'interfaces modernes et performantes avec React, TypeScript et Tailwind CSS. Des applications rapides, accessibles et optimisées pour une expérience utilisateur exceptionnelle.",
      icon: Code2,
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Performance", "Responsive Design"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      id: 2,
      title: "Sites E-commerce",
      description: "Développement de boutiques en ligne modernes avec des fonctionnalités avancées de paiement, gestion de stock et expérience d'achat optimisée.",
      icon: ShoppingCart,
      features: ["UI/UX E-commerce", "Paiements sécurisés", "Gestion produits", "SEO E-commerce", "Analytics"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4
    },
    {
      id: 3,
      title: "Sites Vitrines",
      description: "Conception de sites vitrines élégants qui représentent parfaitement votre marque et convertissent vos visiteurs en clients.",
      icon: Globe,
      features: ["Design sur mesure", "SEO Optimisé", "Intégration CMS", "Hébergement", "Maintenance"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mes Services
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ce que je{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              propose
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Des solutions web sur mesure adaptées à vos besoins, 
            alliant design moderne et performances optimales.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: service.delay,
                  ease: "easeOut" 
                }}
              >
                {/* Service Card */}
                <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-transparent h-full flex flex-col">
                  
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    0{service.id}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className="group/btn flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 mt-auto">
                    <span className="font-semibold text-gray-700 group-hover/btn:text-gray-900">
                      En savoir plus
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover/btn:text-gray-600 group-hover/btn:translate-x-1 transition-all duration-200" />
                  </button>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;