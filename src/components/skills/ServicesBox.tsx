import React from "react";

interface Services{
    nom: string;
    image: string;
    texte: string;
    chiffre: string;
    ligne?:string;
}

const ServicesBox: React.FC<Services> = ({nom,image,texte,chiffre,ligne}) => {
  return (
    <div
  className={`w-full bg-[#FFFFFF] border-b flex justify-center items-center space-y-4 p-5 md:p-0 max-sm:w-full max-sm:p-0 max-sm:flex max-sm:flex-col-reverse ${
    ligne === "reverse" ? "flex-row-reverse" : "flex-row"
  }`}
>
      <div className="flex flex-col w-[60%] justify-center items-center gap-4 max-sm:w-[85%] max-sm:gap-0 md:w-[80%]"> 
        <div className="flex flex-col w-full text-left text-wrap">
          <h2 className="lg:text-[70px] font-bold text-[#0B162C]  max-sm:text-3xl md:text-3xl">{nom}</h2>
          <hr className="w-20 h-2 bg-[#0B162C] border-none max-sm:w-9 max-sm:h-1" />
        </div>
        <p className="text-left text-base w-[80%] font-medium text-[#1C2942] max-sm:text-sm max-sm:w-full md:w-full">{texte}</p>
      </div>
        
      <div className=" flex text-[420px] w-[35%] mx-10 border justify-center font-bold leading-none max-sm:text-[200px] max-sm:mx-1 max-sm:w-[50%] md:text-[300px] " 
        style={{backgroundImage: `url(${image})`,WebkitBackgroundClip: "text",backgroundClip: "text",color: "transparent",backgroundSize: "cover",backgroundPosition: "center",
        WebkitTextStroke: "3px black"}}>
  
        {chiffre}
      </div>
    </div>
  )
}

export default ServicesBox