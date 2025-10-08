import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById("skills")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-white relative overflow-hidden flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Colonne Texte - Côté Gauche */}
          <motion.div 
            className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
          >
            {/* Badge d'introduction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700">
                Disponible pour de nouveaux projets
              </span>
            </motion.div>

            {/* Titre Principal */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
            >
              Créateur d'
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                expériences
              </span>{" "}
              digitales
            </motion.h1>

            {/* Sous-titre avec nom */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.5 }} 
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
                Je suis <span className="font-bold text-gray-900">N'Guessan Axel S.</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                <span className="hidden sm:inline text-lg text-gray-500">—</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg text-sm sm:text-base">
                  Développeur Front-end
                </span>
                <span className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg text-sm sm:text-base">
                  UI/UX Designer
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.7 }} 
            >
              Je spécialise dans la création d'interfaces modernes et performantes avec{" "}
              <strong>React</strong>, <strong>TypeScript</strong> et <strong>Tailwind CSS</strong>. 
              Mon objectif : transformer vos idées en expériences digitales mémorables.
            </motion.p>

            {/* CTA Buttons & Social */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.9 }} 
            >
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button 
                  onClick={scrollToNext}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base"
                >
                  Voir mon travail
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-sm sm:text-base">
                  Télécharger CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center lg:justify-start">
                <a href="#" className="p-2 sm:p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-200">
                  <Github size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="p-2 sm:p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-200">
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="p-2 sm:p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-200">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne Visuelle - Côté Droit */}
          <motion.div 
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Fond décoratif */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20 animate-pulse" />
              
              {/* Carte principale */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Placeholder pour image */}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center p-6 sm:p-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <span className="text-white text-xl sm:text-2xl font-bold">AS</span>
                    </div>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">
                      Votre image ici
                    </p>
                  </div>
                </div>
                
                {/* Badges de compétences flottants */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 py-1 sm:px-4 sm:py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg transform rotate-6 text-xs sm:text-sm">
                  React
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform -rotate-6 text-xs sm:text-sm">
                  TypeScript
                </div>
              </div>
            </div>

            {/* Éléments décoratifs animés - Masqués sur mobile */}
            <motion.div
              className="hidden lg:block absolute -top-8 -right-8 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-60"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="hidden lg:block absolute -bottom-8 -left-8 w-20 h-20 bg-pink-400 rounded-full blur-xl opacity-60"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.4, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors duration-200 group"
        >
          <span className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 group-hover:translate-y-1 transition-transform">
            Explorer
          </span>
          <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;