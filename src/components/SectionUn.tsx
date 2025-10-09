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
    <section className="w-full relative overflow-hidden bg-white dark:bg-black">
      {/* Layout Principal */}
      <div className="justify-center w-full h-[1400px] lg:h-[900px] px-4 lg:px-8 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-4 items-center">
          
          {/* Colonne Texte - Côté Gauche */}
          <motion.div className="space-y-8 lg:space-y-10 order-2 lg:order-1 w-full" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} >
            {/* Badge d'introduction */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} 
              className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-blue-50 border border-blue-200" >

              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700">
                Disponible pour de nouveaux projets
              </span>
            </motion.div>

            {/* Titre Principal */}
            <motion.h1
              className="text-2xl md:text-4xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} >

              Créateur d'
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                expériences
              </span>{" "}
              digitales

            </motion.h1>

            {/* Sous-titre avec nom */}
            <motion.div className="space-y-4 gap-x-10 item-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} >

              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-200">
                Je suis <span className="font-bold text-gray-900 dark:text-white">N'Guessan Axel S.</span>
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-lg text-gray-500 dark:text-gray-200">—</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg">
                  Développeur Full-stack
                </span>
                <span className="px-4 py-2 border border-gray-300 text-gray-700 dark:text-gray-200 font-medium rounded-lg max-sm:ml-8">
                  UI/UX Designer
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed lg:max-w-2xl"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} >

              Je spécialise dans la création d'interfaces modernes et performantes avec <strong>React</strong>, <strong>TypeScript</strong> et <strong>Tailwind CSS</strong>. 
              Mon objectif : transformer vos idées en expériences digitales mémorables.

            </motion.p>

            {/* CTA Buttons & Social */}
            <motion.div
              className="flex flex-col sm:flex-row w-full gap-6 md:gap-3 items-start sm:items-center"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} >

              <div className="flex gap-4 ">
                <button onClick={scrollToNext}
                 className="px-2 md:px-8 py-4 lg:w-52 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer" >
                  Voir mon travail
                </button>
                <a href="/documents/CVAxelSylvain.pdf" 
                download="Cv_Axel_Sylvain.Pdf"
                className="px-2 md:px-8 py-4 lg:w-52 border-2 border-gray-300 text-gray-700 dark:bg-white font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer">
                  Télécharger CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://github.com/Beliskony" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-200">
                  <Github size={20} className="dark:invert"/>
                </a>
                <a href="https://www.linkedin.com/in/axel-sylvain-n-guessan-a46661291" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-200">
                  <Linkedin size={20} className="dark:invert"/>
                </a>
                <a href="mailto:nguessanaxel21@gmail.com" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-200">
                  <Mail size={20} className="dark:invert"/>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne Visuelle - Côté Droit */}
          <motion.div className="relative order-1 lg:order-2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} >
            {/* Carte Principale avec Photo/Illustration */}
            <div className="relative">
              {/* Container de l'image */}
              <div className="relative max-w-lg mx-auto">
                {/* Fond décoratif */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20 animate-pulse" />
                
                {/* Carte principale */}
                <div className="relative rounded-2xl shadow-2xl border border-gray-100 overflow-hidden md:mb-24 xl:mb-0">
                  {/* Placeholder pour image - À remplacer par votre photo */}
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img src="/images/profil.webp" alt="Nguessan Axel Sylvain" className="object-cover object-top h-[360px] w-[360px] md:h-[520px] md:w-[520px] xl:h-[520px] xl:w-[520px]"/>
                  </div>
                  
                  {/* Badges de compétences flottants */}
                  <div className="absolute -top-1 -right-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg transform rotate-6">
                    React
                  </div>
                  <div className="absolute -bottom-1 -left-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform -rotate-6">
                    TypeScript
                  </div>
                </div>
              </div>

              {/* Éléments décoratifs animés */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-60"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{  duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-pink-400 rounded-full blur-xl opacity-60"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.4, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors duration-200 group cursor-pointer"
        >
          <span className="text-sm font-medium mb-2 group-hover:translate-y-1 transition-transform">
            Explorer
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;