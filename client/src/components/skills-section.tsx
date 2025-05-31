import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills, tools, strengths } from "@/lib/portfolio-data";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryColors = {
    Expert: "from-emerald-500 to-green-600",
    Advanced: "from-blue-500 to-indigo-600", 
    Intermediate: "from-amber-500 to-orange-600"
  };

  const categoryBorders = {
    Expert: "border-emerald-200",
    Advanced: "border-blue-200",
    Intermediate: "border-amber-200"
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set spanning modern web development technologies and design tools
          </p>
        </motion.div>

        {/* Skills Grid - All Skills in One Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              {/* Category Badge */}
              <div className="absolute -top-2 -right-2 z-10">
                <span className={`px-2 py-1 text-xs font-bold rounded-full text-white ${
                  skill.category === 'Expert' ? 'bg-emerald-500' :
                  skill.category === 'Advanced' ? 'bg-blue-500' :
                  'bg-amber-500'
                }`}>
                  {skill.category.charAt(0)}
                </span>
              </div>

              {/* Skill Icon */}
              <div className="flex justify-center mb-3 md:mb-4">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${skill.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <i className={`${skill.icon} text-white text-lg md:text-2xl`}></i>
                </div>
              </div>

              {/* Skill Name */}
              <div className="text-center mb-2">
                <h4 className="text-sm md:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {skill.name}
                </h4>
              </div>

              {/* Description - Hidden on mobile for compactness */}
              <p className="hidden md:block text-xs md:text-sm text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {skill.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Category Legend */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Expert</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Advanced</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Intermediate</span>
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
              Development Tools
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Essential tools and technologies that power my development workflow
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 md:px-8 md:py-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <i className={`${tool.icon} ${tool.color} text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300`}></i>
                  <span className="font-semibold text-sm md:text-base text-gray-800 group-hover:text-gray-900 transition-colors">
                    {tool.name}
                  </span>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Strengths */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-4">
              Personal Strengths
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Core qualities that drive my professional success and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.name}
                className="group relative bg-gradient-to-br from-white to-purple-50 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -6, scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <i className={`${strength.icon} text-white text-lg md:text-xl`}></i>
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                    {strength.name}
                  </h4>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}