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
      className="w-full py-20 px-20  flex flex-col justify-center items-center border-[#0B162C] max-sm:px-1 md:px-1">

      <div className="w-full text-center text-5xl mb-10">
        <h2 className="underline text-[#0B162C]">Compétences</h2>
      </div>
      <div className="w-full items-center grid flex-wrap justify-center my-5 border-t md:gap-2 py-5 max-sm:grid-cols-2 max-sm:gap-y-5 max-sm:gap-x-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-3 lg:px-20 lg:items-center">
        {[
          { nom: "React", image: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000", texte:"React est une bibliothèque pour des interfaces utilisateurs web et natives. " },
          { nom: "TypeScript", image: "https://img.icons8.com/?size=100&id=HcQEdKCkXUs3&format=png&color=000000", texte:"TypeScript est un langage de programmation fortement typé qui s'appuie sur JavaScript," },
          { nom: "HTML", image: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", texte:"Le HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour écrire les pages web"},
          { nom: "CSS", image: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", texte:"CSS est utilisé pour mettre en forme et organiser le contenu sur page web" },
          { nom: "SQL", image: "https://img.icons8.com/?size=100&id=MBA5vPE4dGz2&format=png&color=000000", texte:"Le SQL (Structured Query Language) est un langage permettant de communiquer avec une base de données." },
          { nom: "React Native", image: "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000", texte:"React Native apporte les meilleurs éléments du développement avec React au développement natif." },
          { nom: "Tailwind CSS", image: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000", texte:"Tailwind CSS fonctionne en analysant tous vos fichiers HTML, composants JavaScript et tous les autres modèles pour les noms de classe" },
          { nom: "WordPress", image: "https://img.icons8.com/?size=100&id=v9uZbuVoWleB&format=png&color=000000", texte:"WordPress est le moyen le plus simple et le plus populaire de créer votre propre site Web ou blog. " },
        ].map((skill, index) => (
          <motion.div
            key={skill.nom}
            className="justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.3,
              ease: "easeOut",
            }}
          >
            <CompetencesBox nom={skill.nom} image={skill.image} texte={skill.texte} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
