import { motion } from "framer-motion";
import { personalInfo } from "@/lib/portfolio-data";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "fab fa-linkedin", href: personalInfo.social.linkedin, color: "hover:text-blue-500" },
    { icon: "fab fa-github", href: personalInfo.social.github, color: "hover:text-gray-300" },
    { icon: "fab fa-twitter", href: personalInfo.social.twitter, color: "hover:text-blue-400" },
    { icon: "fab fa-instagram", href: personalInfo.social.instagram, color: "hover:text-pink-400" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-blue-200 text-lg font-medium mb-4">
                {personalInfo.title}
              </p>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Passionate about creating beautiful, functional web experiences that make a difference. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-cyan-400 w-5"></i>
                <span className="text-gray-300">{personalInfo.contact.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-cyan-400 w-5"></i>
                <span className="text-gray-300">{personalInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-cyan-400 w-5"></i>
                <span className="text-gray-300">{personalInfo.contact.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                    <span>{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Frontend Design",
                "React Applications",
                "UI/UX Design",
                "Responsive Design"
              ].map((service) => (
                <li key={service} className="text-gray-300 flex items-center space-x-2">
                  <i className="fas fa-code text-cyan-400 text-xs"></i>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => scrollToSection("#home")}
          className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      </div>
    </footer>
  );
}