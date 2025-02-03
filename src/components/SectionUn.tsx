"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function SectionUn() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsVisible(true)
  }, [])

 

  if (!mounted) {
    return null // Prevent SSR issues with client-side only styles
  }

  return (
    <>
      <style>{`
        @keyframes gradientScroll {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-text {
          background: linear-gradient(to right, #1C2942, #00A9FF, #1C2942);
          background-size: 200% auto;
          animation: gradientScroll 5s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
      <section id="presentation" className="bg-[url('/images/bgOne.png')] object-cover bg-cover bg-top h-[650px] w-full px-20 justify-between flex flex-row items-start md:px-5 max-sm:px-5 max-sm:h-[400px] max-sm:items-start max-sm:bg-left">
        <motion.div
          className="h-full flex flex-col items-center justify-center my-14 space-y-5 max-sm:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <motion.h3
            className="text-5xl text-[#1C2942] font-bold my-5 max-sm:text-2xl md:text-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 4, delay: 0.2 }}
          >
            Bienvenue sur Digital-Gick
          </motion.h3>
          <motion.p
            className="text-center font-medium text-3xl my-5 text-[#1C2942]"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 5, delay: 0.4 }}
          >
            Je suis{" "}
            <span className="text-5xl font-bold gradient-text max-sm:text-3xl text-wrap">N'Guessan Axel. S</span>
          </motion.p>
          <motion.p
            className="text-center font-bold text-5xl my-2 text-[#1C2942] max-sm:text-3xl md:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 6, delay: 0.6 }}
          >
            Développeur Front-end
          </motion.p>
        </motion.div>
      </section>
    </>
  )
}

export default SectionUn

