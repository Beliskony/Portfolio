import React from 'react';

interface card{
    typeSite: string;
    prix: string;
    texte: string;
    pointForts: string[];
    bgCouleur?: string;
    texteCouleur?: string;
    populaire?: boolean;
}

const CardPrice: React.FC<card> = ({typeSite,prix,texte,pointForts,bgCouleur,texteCouleur, populaire=false}) => {
    return (
        <div className="relative w-80 h-[500px] flex flex-col text-left border px-1 py-1 rounded-lg overflow-hidden ">
           {/*Couleur de bordure*/}
          <div className='absolute inset-0 bg-gradient-to-r from-[#DA7B27] to-[#C23028] rounded-lg z-10'>
          </div>

          {/*Contenu*/}
          <div className="w-full h-full justify-start flex flex-col text-left rounded-lg p-1 z-20 pt-15" style={{ backgroundColor: bgCouleur, color: texteCouleur }}>
          {populaire && (
          <span className="absolute top-22 right-5 bg-gradient-to-r from-[#DA7B27] to-[#C23028] text-white text-xs font-semibold px-3 py-1 rounded-tr-lg rounded-bl-lg">
            Populaire
          </span>
        )}
            <div className='flex flex-col mx-5 border-b text-left gap-y-4 py-5 justify-center'>
                 <h1 className='text-2xl font-medium underline'>{typeSite}</h1>
                 <h3 className='text-5xl bold'>{prix} <span className='text-lg font-light'>FCFA</span></h3>
                 <p className='text-sm'>{texte}</p>
            </div>

            <div className='flex flex-col mx-5 border-b text-left space-y-5 py-5 justify-start'>
                <ul className='list-image-[url("/images/doubleCheckColorer.png")] list-inside text-sm font-light'>
                        {pointForts.map((pointForts, index) => (
                            <li key={index} className='text-xl'>{pointForts}</li>
                        ))}       
                </ul>
            </div>
         </div>
            
        </div>
    );
}

export default CardPrice;
