import CompetencesBox from "./skills/CompetencesBox"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function SkillsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
     once:true,// L'animation se joue une seule fois
    amount: 0.2, // Déclenchement lorsque 20% de la section est visible
  })

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full my-20 flex flex-col justify-center items-center border-[#0B162C] lg:px-5 max-sm:px-5 md:px-1">

      <div className="w-full text-center mb-10">
        <h2 className="underline text-[#0B162C] font-bold lg:text-[50px] lg:text-4xl md:text-3xl max-sm:text-3xl">Compétences</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-1 gap-y-5 gap-x-2">
        {[
          { nom: "React", image: "/images/react.png", texte:"React est une bibliothèque pour des interfaces utilisateurs web et natives. " },
          { nom: "TypeScript", image: "/images/typescript.png", texte:"TypeScript est un langage de programmation fortement typé qui s'appuie sur JavaScript," },
          { nom: "HTML", image: "/images/html.png", texte:"Le HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour écrire les pages web"},
          { nom: "CSS", image: "/images/css.png", texte:"CSS est utilisé pour mettre en forme et organiser le contenu sur page web" },
          { nom: "SQL", image: "/images/sql.png", texte:"Le SQL (Structured Query Language) est un langage permettant de communiquer avec une base de données." },
          { nom: "React Native", image: "/images/react.png", texte:"React Native apporte les meilleurs éléments du développement avec React au développement natif."},
          { nom: "Tailwind CSS", image: "/images/tailwindcss.png", texte:"Tailwind CSS fonctionne en analysant tous vos fichiers HTML, composants JavaScript et tous les autres modèles pour les noms de classe" },
          { nom: "WordPress", image: "/images/wordpress.png", texte:"WordPress est le moyen le plus simple et le plus populaire de créer votre propre site Web ou blog. " },
        ].map((skill, index) => (
          <motion.div
            key={skill.nom}
            className="flex w-full justify-center items-center max-sm:px-5 md:px-2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.3,
              ease: "easeOut",
            }}>
            <CompetencesBox nom={skill.nom} image={skill.image} texte={skill.texte} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
