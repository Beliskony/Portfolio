
const PourquoiNous = () => {
    return (
        <section className="w-full justify-center items-center bg-white  flex flex-row py-20 px-20 md:flex-row md:px-5 lg:flex-row max-sm:flex-col max-sm:px-5 max-sm:gap-y-10 max-sm:py-5">
          <div className="w-[60%] flex flex-col text-left justify-between items-center gap-y-5 md:w-[70%] max-sm:w-full lg:px-20">
                <h1 className="text-3xl w-full text-left font-bold text-[#0B162C] underline max-sm:text-xl">Pourquoi choisir Digital-Gick ?</h1>
                <div className="flex flex-col justify-center items-left w-full">
                    <p className="w-[75%] text-left max-sm:w-full">Un site moderne, rapide et sur mesure, conçu avec passion et expertise. Ne laissez pas votre présence en ligne au hasard, faites confiance à des professionnels.</p>
                    <ul className='list-image-[url("/images/doubleCheck.png")] list-inside text-xl font-bold text-[#0B162C] mt-3 justify-center items-center w-full grid grid-cols-2 md:gap-x-4 max-sm:grid-cols-1'>
                        <li>Solutions Personnalisées</li>
                        <li>Expertise & Créativité</li>
                        <li>Sites Performants & Optimisés</li>
                        <li>Accompagnement et Support</li>
                        <li>Des Tarifs Adaptés</li>
                    </ul>
                </div>
          </div>

          <div className="w-[40%] flex justify-center items-center object-cover md:w-[30%] max-sm:w-full">
            <img src="/images/LogoRemove.png" className="h-60 w-60 object-center md:h-52 md:w-52"/>
          </div>

        </section>
    );
}

export default PourquoiNous;
