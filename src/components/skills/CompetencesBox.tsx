import React from "react";

interface Competences{
    nom: string;
    image: string;
    texte?: string;
}

const CompetencesBox: React.FC<Competences> = ({nom,image,texte}) => {
  return (
    <div className="flex justify-center items-center space-y-5 flex-col h-60 w-60 bg-[#0B162C] max-sm:w-full max-sm:px-5 hover:bg-[#0C0F0A]
    hover:shadow-2xl hover:text-[#0B162C]">

      <div className=" flex flex-row text-center items-center justify-center px-5 shadow-2xl">
        <img src={image} sizes="20" className="rounded-full max-sm:p-1 max-sm:h-16 max-sm:w-16"/>
        <h3 className="text-xl items-center font-medium text-white p-1 max-sm:h-10 max-sm:text-2xl">{nom}</h3>
      </div>
        <p className="text-wrap text-center font-light text-[#FFFFFF] text-sm px-1">{texte}</p>
      
    </div>
  )
}

export default CompetencesBox;
