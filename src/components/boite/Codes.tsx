import CardPrice from './cardPrice';

const Codes = () => {
    return (
        <div className='gap-x-5 justify-center items-center overflow-hidden md:grid md:grid-cols-2 md:w-full md:px-16 md:gap-y-5 md:justify-center
                        md:items-center lg:grid-cols-3 lg:gap-x-5 lg:px-1 lg:items-center lg:justify-center xl:px-40 max-sm:justify-center max-sm:flex 
                        max-sm:flex-col max-sm:gap-y-4'>

                    <CardPrice typeSite='Site Vitrine'
                               prix='250.000'
                               texte='idéal pour présenter et mettre en valeur votre entreprise, boutique, activités ...'
                               pointForts={['code clean','maintenabilité', 'flexibité', ]}
                               bgCouleur='black'
                               texteCouleur='white'
                               populaire={true}/>

                    <CardPrice typeSite='Site E-commerce'
                               prix='450.000'
                               texte='idéal pour présenter et mettre en valeur votre entreprise, boutique, activités ...'
                               pointForts={['code clean','maintenabilité', 'flexibité', ]}
                               bgCouleur='black'
                               texteCouleur='white'
                               />

                    <CardPrice typeSite='Site Portfolio'
                               prix='200.000'
                               texte='idéal pour présenter et mettre en valeur votre entreprise, boutique, activités ...'
                               pointForts={['code clean','maintenabilité', 'flexibité', ]}
                               bgCouleur='black'
                               texteCouleur='white'
                               populaire={true}/>
            
        </div>
    );
}

export default Codes;
