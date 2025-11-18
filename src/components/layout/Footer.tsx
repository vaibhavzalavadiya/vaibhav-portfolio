import { motion } from "framer-motion";
import { personalInfo } from "@data/portfolio-data";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: "fab fa-linkedin", 
      href: personalInfo.social.linkedin, 
      color: "hover:bg-blue-600",
      name: "LinkedIn"
    },
    { 
      icon: "fab fa-github", 
      href: personalInfo.social.github, 
      color: "hover:bg-gray-800",
      name: "GitHub"
    },
    { 
      icon: "fa-brands fa-x", 
      href: personalInfo.social.twitter, 
      color: "hover:bg-blue-500",
      name: "Twitter"
    },
    { 
      icon: "fab fa-instagram", 
      href: personalInfo.social.instagram, 
      color: "hover:bg-pink-600",
      name: "Instagram"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home", icon: "fas fa-home" },
    { name: "About", href: "#about", icon: "fas fa-user" },
    { name: "Skills", href: "#skills", icon: "fas fa-code" },
    { name: "Projects", href: "#projects", icon: "fas fa-briefcase" },
    { name: "Contact", href: "#contact", icon: "fas fa-envelope" }
  ];

  const services = [
    { name: "Web Development", icon: "fas fa-laptop-code" },
    { name: "Frontend Design", icon: "fas fa-paint-brush" },
    { name: "React Applications", icon: "fab fa-react" },
    { name: "UI/UX Design", icon: "fas fa-mobile-alt" },
    { name: "Responsive Design", icon: "fas fa-desktop" }
  ];

  const contactInfo = [
    { icon: "fas fa-envelope", value: personalInfo.contact.email, type: "email" },
    { icon: "fas fa-phone", value: personalInfo.contact.phone, type: "phone" },
    { icon: "fas fa-map-marker-alt", value: personalInfo.contact.location, type: "location" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative container px-4 mx-auto">
        {/* Main Footer Content */}
        <div className="py-10 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
            {/* Brand & About Section */}
            <motion.div
              className="lg:col-span-2 lg:space-y-6 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo & Brand */}
              <div className="flex items-center space-x-4 lg:mb-6 mb-4">
                <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-xl">VZ</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </h3>
                  <p className="text-blue-200 font-medium text-sm mt-1">
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed lg:text-lg text-base max-w-lg">
                Passionate about creating beautiful, functional web experiences that make a difference. 
                Let's collaborate and build something amazing together.
              </p>

            </motion.div>

            {/* Quick Navigation */}
            <motion.div
              className="lg:space-y-6 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white md:mb-5 mb-3">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="group flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 w-full text-left"
                    >
                      <div className="w-8 h-8 bg-white/5 group-hover:bg-cyan-400/20 rounded-lg flex items-center justify-center transition-all duration-300">
                        <i className={`${link.icon} text-xs`}></i>
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white md:mb-5 mb-3">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={service.name}
                    className="group flex items-center space-x-3 text-gray-300"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 bg-white/5 group-hover:bg-purple-400/20 rounded-lg flex items-center justify-center transition-all duration-300">
                      <i className={`${service.icon} text-purple-400 text-xs`}></i>
                    </div>
                    <span className="font-medium group-hover:text-white transition-colors duration-300">
                      {service.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-white font-medium lg:text-base text-sm">Follow me on:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Copyright & Tech Stack */}
            <div className="text-center lg:text-right space-y-2">
              <p className="text-white font-medium lg:text-base text-sm">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-sm text-white md:flex hidden items-center justify-center lg:justify-end space-x-2">
                <span>Built with</span>
                <i className="fab fa-react text-blue-400"></i>
                <span>React,</span>
                <i className="fab fa-js-square text-yellow-400"></i>
                <span>TypeScript &</span>
                <i className="fas fa-wind text-cyan-400"></i>
                <span>Tailwind CSS</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => scrollToSection("#home")}
          className="fixed md:bottom-8 bottom-5 md:right-8 right-5 md:w-14 md:h-14 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 z-10"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-arrow-up text-lg"></i>
        </motion.button>
      </div>
    </footer>
  );
}