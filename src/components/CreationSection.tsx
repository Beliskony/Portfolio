import Creation from "./boite/Creation"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function CreationSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
     once:true,// L'animation se joue une seule fois
     amount: 0.2, // Déclenchement lorsque 20% de la section est visible
  })
  return (
    <section id="creation" ref={sectionRef} className="w-full justify-center items-center flex flex-col my-10 lg:px-5 max-sm:px-5 md:px-1 ">
      
      <h2 className="font-bold underline text-center my-10 md:text-3xl lg:text-[50px]">Quelques inspirations & projets</h2>
       
       <div className="grid gap-y-5 md:grid-cols-2 lg:grid-cols-3 max-sm:space-y-5 max-sm:grid-cols-1">
        {[ 
          {image:"https://i.pinimg.com/736x/3f/7f/1e/3f7f1e9486dc3acc9b196ae5c5155ffe.jpg", textExplicatif:"Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed omnis nobis est iste cupiditate aut facilis ipsum"},
          {image:"/images/siteUn.png",textExplicatif:"Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed omnis nobis est iste cupiditate aut facilis ipsum"},
          {image:"https://i.pinimg.com/736x/04/ae/d6/04aed634429791c6a8e298ec28e31856.jpg",textExplicatif:"Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed omnis nobis est iste cupiditate aut facilis ipsum"},
          {image:"https://i.pinimg.com/736x/60/3a/8d/603a8d0670813f2d0d99856ebf760397.jpg",textExplicatif:"Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed omnis nobis est iste cupiditate aut facilis ipsum"},
          {image:"https://i.pinimg.com/736x/a9/be/c1/a9bec1cd989fa24fe67a2d41e779f8ce.jpg",textExplicatif:"Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed omnis nobis est iste cupiditate aut facilis ipsum"},
          {image:"https://i.pinimg.com/736x/d2/43/0c/d2430c7a2b9300e369ab9a2a47cb37d7.jpg",textExplicatif:"Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed omnis nobis est iste cupiditate aut facilis ipsum"}
  
        ].map((creation, index) => (
          <motion.div key={index} className="flex w-full justify-center items-center md:px-1 lg:px-1 2xl:px-2 max-sm:px-5" 
           initial={{opacity: 0, x: -50}} 
           animate={isInView ? {opacity: 1, x: 0 }: {}} 
          transition={{
           duration: 0.5,
           delay: index * 0.3,
           ease: "easeOut",
         }}>
          <Creation image={creation.image} textExplicatif={creation.textExplicatif} />
        </motion.div>
        ))}
       </div>      

    </section>
  )
}

export default CreationSection