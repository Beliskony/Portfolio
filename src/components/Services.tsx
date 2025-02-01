import ServicesBox from "./skills/ServicesBox"
import {motion} from "framer-motion"
import { useState, useEffect } from "react"


function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 20)
    return () => clearTimeout(timer)
  }, [])
  return (
    <section id='services' className='w-full mb-5 py-20 px-20 bg-[#EBF2FA] flex flex-col justify-center items-center border-t-2 border-[#0B162C] md:px-1 max-sm:px-5 max-sm:py-10'>
        <div className="w-full text-center text-5xl mb-10 max-sm:text-3xl max-sm:font-bold">
           <h2 className="underline text-[#0B162C]">Que faisons nous ?</h2>
        </div>

        <div className="flex flex-row w-full justify-center items-center space-x-5 max-sm:w-full max-sm:flex-col max-md:space-y-4 max-md:space-x-0 md:gap-5 md:grid min-md:grid-cols-2 lg:grid-cols-3 max-sm:space-y-5 max-sm:space-x-0">
        <motion.div
        className="flex justify-center"
        initial={{ x: "-100%" }}
        animate={isVisible ? { x: 0 } : { x: "-100%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 100,
          duration: 3,
        }}
        >
            <ServicesBox nom="Site Vitrine"
                          image="https://img.icons8.com/?size=100&id=VJz2Ob51dvZJ&format=png&color=000000"
                          texte="Un site vitrine est un type de site web qui sert principalement à présenter une entreprise, un produit, 
                          ou un service, sans interaction complexe avec les utilisateurs. Il est généralement utilisé pour faire connaître
                          l’activité d'une entreprise, fournir des informations clés et donner une première impression professionnelle.Les sites vitrines
                          sont souvent utilisés par les petites et moyennes entreprises, les indépendants."/>
          </motion.div>

          <motion.div
        className="flex justify-center"
        initial={{ x: "-100%" }}
        animate={isVisible ? { x: 0 } : { x: "-100%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 60,
          duration: 1.5,
        }}
        >
            <ServicesBox nom="Site Wordpress"
                          image="https://img.icons8.com/?size=100&id=46972&format=png&color=000000"
                          texte="Un site WordPress est un site web créé en utilisant WordPress, un système de gestion de contenu (CMS) 
                                 très populaire et open-source. WordPress permet aux utilisateurs de créer, gérer et modifier des sites web facilement, 
                                 sans nécessiter de compétences en programmation. Il est très flexible et peut être utilisé pour créer une grande variété de 
                                 sites, allant de simples blogs à des sites de commerce en ligne complexes."/>
        </motion.div>


         <motion.div
        className="flex justify-center"
        initial={{ x: "-100%" }}
        animate={isVisible ? { x: 0 } : { x: "-100%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
        >              
            <ServicesBox nom="Site E-commerce"
                          image="https://img.icons8.com/?size=100&id=55378&format=png&color=000000"
                          texte="Un site eCommerce est un site web qui permet de vendre des produits ou services en ligne. Il offre une plateforme 
                                 permettant aux entreprises et aux particuliers de présenter leurs produits, gérer les commandes, traiter les paiements, 
                                 et livrer les articles à leurs clients. Les sites eCommerce peuvent être aussi bien simples que complexes, selon la 
                                 taille et les fonctionnalités de l'entreprise."/>

        </motion.div>
        </div>

    </section>
  )
}

export default Services