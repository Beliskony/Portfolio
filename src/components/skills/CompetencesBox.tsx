import React from "react";

interface Competences{
    nom: string;
    image: string;
    texte: string;
}

const CompetencesBox: React.FC<Competences> = ({nom,image,texte}) => {
  return (
    <div className="h-96 w-52 flex flex-col mx-3 bg-[#0B162C] text-center items-center justify-center shadow-2xl rounded-tl-2xl rounded-br-2xl space-y-9 
    max-sm:h-72 max-sm:w-32">
      <img src={image} sizes="15" className="bg-white rounded-full p-3 max-sm:p-1"/>
      <h3 className="text-xl items-center h-10 w-full font-medium text-[#3B556D] p-1 bg-white max-sm:h-10 max-sm:text-lg">{nom}</h3>
      <p className="text-wrap text-center font-light text-[#FFFFFF]">{texte}</p>
      
    </div>
  )
}

export default CompetencesBox;
