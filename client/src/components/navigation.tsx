import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      // Change navbar background on scroll
      setScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: "fas fa-home" },
    { href: "#about", label: "About", icon: "fas fa-user" },
    { href: "#skills", label: "Skills", icon: "fas fa-code" },
    { href: "#projects", label: "Projects", icon: "fas fa-briefcase" },
    { href: "#contact", label: "Contact", icon: "fas fa-envelope" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
            : 'bg-white/10 backdrop-blur-sm border-b border-white/20'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 cursor-pointer"
              onClick={() => scrollToSection("#home")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className={`text-2xl font-bold transition-all duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                VZ
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      activeSection === item.href.substring(1)
                        ? scrolled 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-cyan-300 bg-white/10"
                        : scrolled
                          ? "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          scrolled ? 'bg-blue-600' : 'bg-cyan-300'
                        }`}
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-50' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-16 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 z-50 md:hidden overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                      activeSection === item.href.substring(1)
                        ? "text-blue-600 bg-blue-50 font-semibold shadow-sm"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className={`${item.icon} text-lg w-5`}></i>
                    <span className="text-lg">{item.label}</span>
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
                
                {/* Social links in mobile menu */}
                <motion.div
                  className="pt-4 mt-4 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-gray-500 mb-3">Connect with me</p>
                  <div className="flex space-x-4">
                    {[
                      { icon: "fab fa-linkedin", color: "text-blue-600" },
                      { icon: "fab fa-github", color: "text-gray-800" },
                      { icon: "fab fa-twitter", color: "text-blue-400" }
                    ].map((social, index) => (
                      <motion.button
                        key={index}
                        className={`w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors ${social.color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className={social.icon}></i>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
