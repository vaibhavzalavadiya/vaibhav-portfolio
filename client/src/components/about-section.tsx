import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, strengths } from "@/lib/portfolio-data";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with creativity and precision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to my digital world! I'm a passionate web developer with a strong foundation in 
                front-end technologies and a growing expertise in full-stack development. My journey includes 
                professional training and hands-on experience at{" "}
                <span className="relative inline-block">
                  <span className="text-blue-600 font-semibold">Workdo</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
                </span>, 
                where I contributed to live projects and refined my technical skills.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in creating clean, responsive, and user-focused web applications that not only look 
                beautiful but also deliver exceptional user experiences. My approach combines technical expertise 
                with creative problem-solving to bring ideas to life.
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: "fas fa-code", title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
                { icon: "fas fa-mobile-alt", title: "Responsive Design", desc: "Perfect on every device" },
                { icon: "fas fa-rocket", title: "Performance", desc: "Fast, optimized applications" },
                { icon: "fas fa-users", title: "User-Focused", desc: "Creating meaningful experiences" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-white text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { value: personalInfo.experience, label: "Years Experience", icon: "fas fa-calendar-alt" },
                { value: personalInfo.projects, label: "Projects Completed", icon: "fas fa-project-diagram" },
                { value: "10+", label: "Technologies", icon: "fas fa-code-branch" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className={`${stat.icon} text-white text-xl`}></i>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Profile Circle */}
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 mx-auto relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                    <i className="fas fa-user text-6xl md:text-8xl text-gray-400"></i>
                    
                    {/* Decorative rings */}
                    <div className="absolute inset-4 border-2 border-blue-200 rounded-full"></div>
                    <div className="absolute inset-8 border-2 border-purple-200 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {[
                { icon: "fab fa-react", position: "top-4 -right-4", color: "bg-blue-500", delay: 0 },
                { icon: "fab fa-js-square", position: "bottom-8 -left-8", color: "bg-yellow-500", delay: 1 },
                { icon: "fab fa-css3-alt", position: "top-1/2 -left-4", color: "bg-blue-600", delay: 2 },
                { icon: "fab fa-html5", position: "top-8 left-8", color: "bg-orange-500", delay: 0.5 },
                { icon: "fab fa-python", position: "bottom-4 right-8", color: "bg-green-500", delay: 1.5 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} w-12 h-12 md:w-16 md:h-16 ${item.color} rounded-full flex items-center justify-center shadow-lg text-white`}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: item.delay,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <i className={`${item.icon} text-lg md:text-xl`}></i>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Strengths */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-4">
              Core Strengths
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The qualities that drive my success and make me a valuable team member
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.name}
                className="group text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 10, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`${strength.icon} text-white text-xl md:text-2xl`}></i>
                </motion.div>
                <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 text-sm md:text-base">
                  {strength.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}