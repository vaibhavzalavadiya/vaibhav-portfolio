import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, strengths } from "@/lib/portfolio-data";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to my portfolio! I'm a passionate web developer with a strong foundation in 
              front-end technologies. I've completed a professional front-end development course 
              and gained real-world experience at <span className="text-blue-600 font-semibold">Workdo</span>, 
              where I contributed to live projects and sharpened my development skills.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I specialize in creating clean, responsive, and user-focused web designs. I take pride 
              in being a quick learner, having strong communication and decision-making skills, and 
              solving complex problems creatively.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="text-center p-4 bg-gray-50 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{personalInfo.experience}</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-gray-50 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{personalInfo.projects}</div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Core Strengths</h3>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.name}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <i className={`${strength.icon} text-amber-400 text-xl`}></i>
                    <span className="text-lg">{strength.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
