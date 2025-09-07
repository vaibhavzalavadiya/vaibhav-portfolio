import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@data/portfolio-data";
import SectionHeader from "@components/common/SectionHeader";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpanded = (projectId: number) => {
    setExpandedCards(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <section id="projects" className="lg:py-16 py-10 bg-white" ref={ref}>
      <div className="container px-4 mx-auto">
        
        <SectionHeader 
          subtitle="My work"
          title="Featured Projects"
          description="Explore some of my recent work and the technologies behind them"
          isInView={isInView}
        />
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.i
                    className={`${project.icon} text-white text-4xl drop-shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Quick Actions Overlay */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors shadow-lg"
                  >
                    <i className="fas fa-external-link-alt text-sm"></i>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors shadow-lg"
                  >
                    <i className="fab fa-github text-sm"></i>
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="xl:p-5 p-4 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description with Read More */}
                  <div className="mb-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {expandedCards.includes(project.id) || project.description.length <= 120
                        ? project.description
                        : `${project.description.substring(0, 120)}...`
                      }
                    </p>
                    {project.description.length > 120 && (
                      <button 
                        onClick={() => toggleExpanded(project.id)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 transition-colors"
                      >
                        {expandedCards.includes(project.id) ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons - Always at bottom */}
                <div className="flex space-x-3 mt-6">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fas fa-eye text-xs"></i>
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fab fa-github text-sm"></i>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/vaibhavzalavadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 space-x-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github text-xl"></i>
            <span>View All Projects on GitHub</span>
            <i className="fas fa-arrow-right text-sm"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}