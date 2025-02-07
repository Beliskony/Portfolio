import CardPrice from './cardPrice';

const Codes = () => {
    return (
        <div className='gap-x-5 justify-center items-center overflow-hidden md:grid md:grid-cols-2 md:w-full md:px-16 md:gap-y-5 md:justify-center
                        md:items-center lg:grid-cols-3 lg:gap-x-5 lg:px-1 lg:items-center lg:justify-center xl:px-40 max-sm:justify-center max-sm:flex 
                        max-sm:flex-col max-sm:gap-y-4'>

                    <CardPrice typeSite='Site Vitrine'
                               prix='200.000'
                               texte='Idéal pour présenter et mettre en valeur votre entreprise, profil personnel'
                               pointForts={['Code clean','Maintenabilité', 'Flexibité', 'Design Moderne' ]}
                               bgCouleur='black'
                               texteCouleur='white'
                               populaire={true}/>

                    <CardPrice typeSite='Site E-commerce'
                               prix='650.000'
                               texte="Parfait pour la mise en valeur et l'expension votre boutique et vos articles"
                               pointForts={['Code clean','Maintenabilité', 'Flexibité','back-end solide', 'Bonne gestion des articles' ]}
                               bgCouleur='black'
                               texteCouleur='white'
                               />

                    <CardPrice typeSite='Site Portfolio'
                               prix='250.000'
                               texte='Idéal pour présenter et mettre en valeur vos competences, vécus et projets'
                               pointForts={['Code clean','Maintenabilité', 'Flexibité', 'Design personnalisé', 'Attrayance', 'UI/UX' ]}
                               bgCouleur='black'
                               texteCouleur='white'
                               populaire={true}/>
            
        </div>
    );
}

export default Codes;
