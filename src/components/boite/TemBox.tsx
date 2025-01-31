import React from "react";

interface Temoins{
    nom: string;
    image: string;
    texte: string;
    bg: string;
}

const TemBox: React.FC<Temoins> = ({nom,image,texte,bg}) => {
  return (
    <div className="w-80 bg-white flex flex-col justify-center text-center items-center my-5 shadow-xl rounded-t-xl">
        <img src={image} className="rounded-full h-24 w-24 object-cover my-1"/>
      <div className="justify-center h-44 w-full py-4" style={{backgroundColor:bg}}>
        <h2 className="text-3xl font-bold text-[#0B162C] underline">{nom}</h2>
        <p className="text-center text-base font-medium text-[#1C2942]">{texte}</p>
      </div>
    </div>
  )
}

export default TemBox