import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, strengths } from "@data/portfolio-data";
import SectionHeader from "@components/common/SectionHeader";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container px-4 mx-auto">
        
        <SectionHeader 
          subtitle="Get to know me"
          title="About Me"
          description="Passionate developer crafting digital experiences with creativity and precision"
          isInView={isInView}
        />

        <div className="grid lg:grid-cols-2 xl:gap-16 lg:gap-12 gap-8 items-center mb-16">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate web developer with expertise in modern frontend technologies. 
              My journey combines professional training with hands-on experience in building real-world applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in creating responsive, user-focused web applications using React, JavaScript, 
              and modern CSS frameworks. My approach emphasizes clean code, optimal performance, and 
              exceptional user experiences.
            </p>
            
            {/* Contact Info */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-blue-600"></i>
                <span className="text-gray-700">{personalInfo.contact.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-blue-600"></i>
                <span className="text-gray-700">{personalInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-blue-600"></i>
                <span className="text-gray-700">{personalInfo.contact.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-80 h-80 mx-auto relative">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-2">
                <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-8xl text-gray-400"></i>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Available for work
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats & Strengths Combined */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{personalInfo.experience}</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{personalInfo.projects}</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* Strengths */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Core Strengths</h3>
            <p className="text-gray-600">Key qualities that drive my professional success</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.name}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                  <i className={`${strength.icon} text-blue-600 group-hover:text-white text-xl transition-colors duration-300`}></i>
                </div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-sm">
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