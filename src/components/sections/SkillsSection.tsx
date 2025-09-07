import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills, tools } from "@data/portfolio-data";
import SectionHeader from "@components/common/SectionHeader";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="lg:py-16 py-10 bg-gray-50" ref={ref}>
      <div className="container px-4 mx-auto">
        
        <SectionHeader 
          subtitle="My expertise"
          title="Technical Skills"
          description="Comprehensive skill set spanning modern web development technologies"
          isInView={isInView}
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:gap-6 gap-4 lg:mb-14 mb-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white rounded-lg lg:p-6 p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <i className={`${skill.icon} text-white text-lg`}></i>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">{skill.name}</h4>
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                skill.category === 'Expert' ? 'bg-green-100 text-green-700' :
                skill.category === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                'bg-orange-100 text-orange-700'
              }`}>
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          className="bg-white rounded-lg p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Development Tools</h3>
            <p className="text-gray-600">Essential tools that power my development workflow</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="group bg-gray-50 hover:bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className="mb-3">
                  <i className={`${tool.icon} ${tool.color} text-3xl group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">{tool.name}</h4>
                <span className="text-xs text-gray-500 font-medium">{tool.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}