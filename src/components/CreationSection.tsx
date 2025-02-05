import Creation from "./boite/Creation"
import { motion} from "framer-motion"
import { useState, useEffect} from "react"

function CreationSection() {
  const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 20)
      return () => clearTimeout(timer)
    }, [])
  return (
    <section id="creation"  className="w-full justify-center items-center flex flex-col my-10 lg:px-5 max-sm:px-5 md:px-1 ">
      
      <h2 className="font-bold underline text-center my-10 md:text-3xl lg:text-[50px]">Quelques inspirations & projets</h2>
       
       <div className="grid gap-y-5 md:grid-cols-2 lg:grid-cols-3 max-sm:space-y-5 max-sm:grid-cols-1">
        {[ 
          {image:"https://i.pinimg.com/736x/3f/7f/1e/3f7f1e9486dc3acc9b196ae5c5155ffe.jpg", textExplicatif:"Un Site d'Entreprise qui Inspire Confiance et Professionnalisme", dam:150, temps:1},
          {image:"/images/siteUn.png",textExplicatif:"Un Univers Web Qui Parle de Vous et Pour Vous", dam:200, temps:2},
          {image:"https://i.pinimg.com/736x/04/ae/d6/04aed634429791c6a8e298ec28e31856.jpg",textExplicatif:"Élégance et Modernité : Un Site Vitrine qui Captive", dam:250, temps:3},
          {image:"https://i.pinimg.com/736x/60/3a/8d/603a8d0670813f2d0d99856ebf760397.jpg",textExplicatif:"Innovation Digitale : Quand Créativité et Performance se Rencontrent", dam:300, temps:4},
          {image:"https://i.pinimg.com/736x/a9/be/c1/a9bec1cd989fa24fe67a2d41e779f8ce.jpg",textExplicatif:"Un site Puissant pour Booster votre activité", dam:350, temps:5},
          {image:"https://i.pinimg.com/736x/d2/43/0c/d2430c7a2b9300e369ab9a2a47cb37d7.jpg",textExplicatif:"Une Présence Digitale Unique pour Se Démarquer", dam:450, temps:6}
  
        ].map((creation, index) => (
          <motion.div key={index} className="flex w-full justify-center items-center md:px-1 lg:px-1 2xl:px-2 max-sm:px-5" 
           initial={{x: "-100%"}} 
           animate={isVisible ? {x: 0 }: {x: "-100%"}} 
          transition={{
            type: "spring",
            stiffness: 260,
            damping: creation.dam,
            duration: creation.temps,
         }}>
          <Creation image={creation.image} textExplicatif={creation.textExplicatif} />
        </motion.div>
        ))}
       </div>      

    </section>
  )
}

export default CreationSection