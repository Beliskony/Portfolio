import React from "react";
import { motion } from "framer-motion";

interface Competences {
  nom: string;
  image: string;
  texte?: string;
}

const CompetencesBox: React.FC<Competences> = ({ nom, image, texte }) => {
  return (
    <motion.div
      className="group relative bg-black dark:bg-white rounded-2xl p-6 xl:p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-300 h-full flex flex-col"
      whileHover={{ 
        scale: 1.05,
        y: -8
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      
      {/* Content Container */}
      <div className="flex flex-col items-center text-center space-y-4 flex-1">
        
        {/* Image/Icon Container */}
        <motion.div 
          className="relative w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center p-4 group-hover:shadow-lg transition-all duration-300"
          whileHover={{ rotate: 5 }}
        >
          <img 
            src={image} 
            alt={nom}
            className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 text-black dark:text-gray-200" 
          />
          
          {/* Hover Effect Ring */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-300" />
        </motion.div>

        {/* Title */}
        <motion.h3 
          className="text-xl lg:text-2xl font-bold text-white dark:text-gray-900 group-hover:text-gray-800 transition-colors duration-200"
          layout
        >
          {nom}
        </motion.h3>

        {/* Description */}
        {texte && (
          <motion.p 
            className="text-gray-400 dark:text-gray-600 leading-relaxed text-sm lg:text-base flex-1"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {texte}
          </motion.p>
        )}

      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.div>
  );
};

export default CompetencesBox;