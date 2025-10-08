import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Temoins {
  nom: string;
  image: string;
  texte: string;
  bg: string;
}

const TemBox: React.FC<Temoins> = ({ nom, image, texte, bg }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col"
      whileHover={{ 
        scale: 1.02,
        y: -4
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Content */}
      <div className="flex flex-col h-full">
        
        {/* Header with Image */}
        <div className="relative px-6 pt-8 pb-4 flex flex-col items-center text-center">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{ backgroundColor: bg }}
          />
          
          {/* Client Image */}
          <motion.div 
            className="relative z-10 w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 2 }}
          >
            <img 
              src={image} 
              alt={nom}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />
          </motion.div>

          {/* Client Name */}
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-2 relative z-10"
            layout
          >
            {nom}
          </motion.h3>

          {/* Quote Icon */}
          <motion.div 
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-200"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
          >
            <Quote size={16} />
          </motion.div>
        </div>

        {/* Testimonial Text */}
        <div 
          className="flex-1 px-6 pb-8 pt-4 relative"
          style={{ backgroundColor: bg }}
        >
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-6 h-6 bg-white rounded-br-full" />
          <div className="absolute top-0 right-0 w-6 h-6 bg-white rounded-bl-full" />
          
          {/* Text Content */}
          <motion.p 
            className="text-gray-800 leading-relaxed text-center relative z-10 italic font-medium"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            "{texte}"
          </motion.p>

          {/* Rating Stars */}
          <motion.div 
            className="flex justify-center gap-1 mt-4"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-yellow-400"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </motion.svg>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.div>
  );
};

export default TemBox;