import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { projectsData } from "../data/ProjectsData";

function CreationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });


  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <section 
      id="creation" 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white dark:bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mes Réalisations
          </motion.span>
          
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-200 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Projets{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sélectionnés
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Découvrez une sélection de mes réalisations les plus significatives, 
            alliant design moderne, performance et expérience utilisateur optimale.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.h3
            className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-200 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Projets <span className="text-blue-600">Phares</span>
          </motion.h3>

          <div className="grid gap-8 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row items-stretch`}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                {/* Image Container */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-[500px] object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={18} className="text-gray-900" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github size={18} className="text-gray-900" />
                    </a>
                  </div>
                </div>

                {/* Content Container */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  {/* Category */}
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4 self-start">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Eye size={18} />
                      Voir le projet
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-6 py-3 border-2 dark:bg-white border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors duration-200"
                    >
                      <Github size={18} />
                      Code source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h3
            className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-200 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Autres <span className="text-purple-600">Réalisations</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-200"
                    >
                      <ExternalLink size={18} className="text-gray-900 dark:text-gray-200" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-200"
                    >
                      <Github size={18} className="text-gray-900" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-3 self-start">
                    {project.category}
                  </span>
                  
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default CreationSection;