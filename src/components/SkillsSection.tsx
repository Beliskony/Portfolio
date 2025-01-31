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
      className="w-full  py-20 px-20  flex flex-col justify-center border-[#0B162C] max-sm:px-5"
    >
      <div className="w-full text-center text-5xl mb-10">
        <h2 className="underline text-[#0B162C]">Compétences</h2>
      </div>
      <div className="flex flex-row w-full items-center grid-cols-5 flex-wrap gap-8 justify-center my-5 border-t py-5 max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:gap-y-5 max-sm:gap-x-1">
        {[
          { nom: "React", image: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000" },
          { nom: "TypeScript", image: "https://img.icons8.com/?size=100&id=HcQEdKCkXUs3&format=png&color=000000" },
          { nom: "HTML", image: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
          { nom: "CSS", image: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
          { nom: "SQL", image: "https://img.icons8.com/?size=100&id=MBA5vPE4dGz2&format=png&color=000000" },
          { nom: "React Native", image: "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000" },
          { nom: "Tailwind CSS", image: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
          { nom: "WordPress", image: "https://img.icons8.com/?size=100&id=v9uZbuVoWleB&format=png&color=000000" },
        ].map((skill, index) => (
          <motion.div
            key={skill.nom}
            className="p-1 rounded shadow text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.3,
              ease: "easeOut",
            }}
          >
            <CompetencesBox nom={skill.nom} image={skill.image} texte="Une" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
