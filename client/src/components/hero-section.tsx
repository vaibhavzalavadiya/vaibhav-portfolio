import { motion } from "framer-motion";
import { personalInfo } from "@/lib/portfolio-data";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20"></div>
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-4 md:left-10 text-white/20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <i className="fab fa-react text-4xl md:text-6xl"></i>
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-4 md:right-20 text-white/15"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }}
      >
        <i className="fab fa-js-square text-3xl md:text-5xl"></i>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-4 md:left-20 text-white/20"
        animate={{ 
          y: [0, -10, 0],
          x: [0, 5, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 2, ease: "easeInOut" }}
      >
        <i className="fab fa-css3-alt text-4xl md:text-5xl"></i>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 md:right-10 text-white/15"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
      >
        <i className="fab fa-html5 text-3xl md:text-4xl"></i>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Avatar */}
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                <i className="fas fa-user text-2xl md:text-4xl text-gray-700"></i>
              </div>
            </motion.div>
            
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm md:text-base font-medium border border-white/20">
                👋 Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vaibhav
              </span>
            </motion.h1>
            
            <motion.h2
              className="text-xl md:text-3xl lg:text-4xl text-white/90 mb-6 md:mb-8 font-medium leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-cyan-300">Front-End Developer</span> &{" "}
              <span className="text-purple-300">Problem Solver</span>
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Passionate about creating beautiful, functional web experiences with modern technologies.
              I turn ideas into digital reality.
            </motion.p>
            
            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{personalInfo.experience}</div>
                <div className="text-sm md:text-base text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400">{personalInfo.projects}</div>
                <div className="text-sm md:text-base text-white/70">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-400">9+</div>
                <div className="text-sm md:text-base text-white/70">Technologies</div>
              </div>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.button
                onClick={() => scrollToSection("#projects")}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-rocket mr-2"></i>
                View My Work
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
