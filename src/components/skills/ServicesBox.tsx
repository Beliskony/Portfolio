import React from "react";

interface Services{
    nom: string;
    image: string;
    texte: string;
}

const ServicesBox: React.FC<Services> = ({nom,image,texte}) => {
  return (
    <div className="h-[500px] w-[450px] bg-[#FFFFFF] flex flex-col justify-center text-center items-center space-y-4 p-5 max-sm:w-full max-sm:h-80">
      <div className="flex flex-row w-full justify-center items-center">
        <img src={image} className="h-24 w-24 max-sm:h-16 max-sm:w-16"/>
        <h2 className="text-3xl font-bold text-[#0B162C] underline max-sm:text-xl">{nom}</h2>
      </div>
        <p className="text-left text-base font-medium text-[#1C2942] max-sm:text-sm">{texte}</p>
    </div>
  )
}

export default ServicesBox