import CardPrice from './cardPrice';

const Wordpress = () => {

    return (
        <div className='gap-x-5 justify-center items-center overflow-hidden md:grid md:grid-cols-2 md:w-full md:px-16 md:gap-y-5 md:justify-center
                        md:items-center lg:grid-cols-3 lg:gap-x-5 lg:px-1 lg:items-center lg:justify-center xl:px-40 max-sm:justify-center max-sm:flex 
                        max-sm:flex-col max-sm:gap-y-4'>

                    <CardPrice typeSite='Site Vitrine'
                               prix='175.000'
                               texte='Avec wordpress la conception est rapide et offres de nombreuses perspectives '
                               pointForts={["Simple d'utilisation", "S'adapte aux besoins", "Maintence facile", "Hebergement 1 an", "10 mailsPro"]}
                               bgCouleur='white'
                               texteCouleur='black'
                               populaire={true}/>

                    <CardPrice typeSite='Site E-commerce'
                               prix='300.000'
                               texte='Avec wordpress la conception est rapide et offres de nombreuses perspectives '
                               pointForts={["Simple d'utilisation", "S'adapte aux besoins", "Maintence facile", "Hebergement 1 an", "10 mailsPro"]}
                               bgCouleur='white'
                               texteCouleur='black'
                               populaire={true}/>

                    <CardPrice typeSite='Site Portfolio'
                               prix='175.000'
                               texte='Avec wordpress la conception est rapide et offres de nombreuses perspectives '
                               pointForts={["Simple d'utilisation", "S'adapte aux besoins", "Maintence facile", "Hebergement 1 an"]}
                               bgCouleur='white'
                               texteCouleur='black'
                               />
            
            
        </div>
    );
}

export default Wordpress;
