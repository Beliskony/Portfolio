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
    <section id='services' className='w-full mb-5 py-20 px-20 bg-white flex flex-col justify-center items-center border-t-2 border-[#0B162C] md:px-10 max-sm:px-5 max-sm:py-10'>
        <div className="w-full text-center  font-bold mb-10 max-sm:font-bold">
           <h2 className="underline text-[#0B162C] lg:text-[50px] md:text-3xl max-sm:text-3xl">Que faisons nous ?</h2>
        </div>

    <div className="flex flex-col w-full justify-center items-center bg-white md:gap-y-5">
        <motion.div className="flex w-full lg:px-20 max-sm:px-1 md:px-5 md:my-5" initial={{ x: "-100%" }} animate={isVisible ? { x: 0 } : { x: "-100%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 160,
          duration: 2,
        }}>
            <ServicesBox  nom="Site Vitrine"
                          image="https://i.pinimg.com/736x/5a/ee/42/5aee4269e6d739468d8596fb610b18b7.jpg"
                          texte="Un site vitrine est un type de site web qui sert principalement à présenter une entreprise, un produit, 
                          ou un service, sans interaction complexe avec les utilisateurs. Il est généralement utilisé pour faire connaître
                          l’activité d'une entreprise, fournir des informations clés et donner une première impression professionnelle.Les sites vitrines
                          sont souvent utilisés par les petites et moyennes entreprises, les indépendants."
                          chiffre="01"/>
                          
          </motion.div>
        
        
          <motion.div className="flex w-full lg:px-20 max-sm:px-1 md:px-5 md:my-5" initial={{ x: "-100%" }} animate={isVisible ? { x: 0 } : { x: "-100%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 200,
          duration: 4,
        }}>
            <ServicesBox  nom="Site Wordpress"
                          image="https://i.pinimg.com/736x/c4/5d/56/c45d5656cf0fd3c4193c656033517664.jpg"
                          texte="Un site WordPress est un site web créé en utilisant WordPress, un système de gestion de contenu (CMS) 
                                 très populaire et open-source. WordPress permet aux utilisateurs de créer, gérer et modifier des sites web facilement, 
                                 sans nécessiter de compétences en programmation. Il est très flexible et peut être utilisé pour créer une grande variété de 
                                 sites, allant de simples blogs à des sites de commerce en ligne complexes."
                          chiffre="02"
                          ligne="reverse"/>
        </motion.div>

         <motion.div className="flex w-full lg:px-20 max-sm:px-1 md:px-5 md:my-5" initial={{ x: "-100%" }} animate={isVisible ? { x: 0 } : { x: "-100%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 250,
          duration: 5,
        }}>              
            <ServicesBox  nom="Site E-commerce"
                          image="https://i.pinimg.com/736x/e6/d5/9f/e6d59f36d2765bdcf04954f9258208c4.jpg"
                          texte="Un site eCommerce est un site web qui permet de vendre des produits ou services en ligne. Il offre une plateforme 
                                 permettant aux entreprises et aux particuliers de présenter leurs produits, gérer les commandes, traiter les paiements, 
                                 et livrer les articles à leurs clients. Les sites eCommerce peuvent être aussi bien simples que complexes, selon la 
                                 taille et les fonctionnalités de l'entreprise."
                          chiffre="03"/>

        </motion.div>
        </div>

    </section>
  )
}

export default Services