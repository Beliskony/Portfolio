import React from "react";
import { motion } from "framer-motion";

interface Competences{
    nom: string;
    image: string;
    texte?: string;
}

const CompetencesBox: React.FC<Competences> = ({nom,image,texte}) => {
  return (
    <motion.div className="flex justify-center items-center flex-col h-60 w-60 bg-[#0B162C] max-sm:w-full max-sm:px-5 hover:bg-[#0C0F0A]
    hover:shadow-2xl text-xl max-sm:text-2xl hover:text-3xl" whileHover={{scale:1.1}} transition={{type:"spring", stiffness:200}}>

      <div className=" flex flex-row text-center items-center justify-center px-5 shadow-2xl">
        <img src={image} sizes="20" className="rounded-full max-sm:p-1 max-sm:h-16 max-sm:w-16"/>
        <h3 className="items-center font-medium text-white p-1 max-sm:h-10 ">{nom}</h3>
      </div>
        <p className="text-wrap text-center font-light text-[#FFFFFF] text-sm px-1">{texte}</p>
      
    </motion.div>
  )
}

export default CompetencesBox;
