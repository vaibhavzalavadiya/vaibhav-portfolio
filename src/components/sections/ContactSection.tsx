import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@data/portfolio-data";
import SectionHeader from "@components/common/SectionHeader";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mailto link for now
    const mailtoLink = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: "fab fa-linkedin-in", color: "bg-blue-600 hover:bg-blue-700", href: personalInfo.social.linkedin },
    { icon: "fab fa-github", color: "bg-gray-800 hover:bg-gray-900", href: personalInfo.social.github },
    { icon: "fa-brands fa-x", color: "bg-blue-500 hover:bg-blue-600", href: personalInfo.social.twitter },
    { icon: "fab fa-instagram", color: "bg-red-600 hover:bg-red-700", href: personalInfo.social.instagram }
  ];

  return (
    <section id="contact" className="lg:py-16 py-10 bg-gray-50" ref={ref}>
      <div className="container px-4 mx-auto">
        <SectionHeader 
          subtitle="Let's connect"
          title="Get In Touch"
          description="Ready to bring your ideas to life? Let's discuss your next project!"
          isInView={isInView}
        />
        
        <div className="grid md:grid-cols-2 lg:gap-12 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 lg:mb-6 mb-4">Get In Touch</h3>
            <p className="lg:text-lg text-gray-600 lg:mb-8 mb-5">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
            
            <div className="lg:space-y-6 space-y-4">
              {[
                { icon: "fas fa-envelope", label: "Email", value: personalInfo.contact.email },
                { icon: "fas fa-phone", label: "Phone", value: personalInfo.contact.phone },
                { icon: "fas fa-map-marker-alt", label: "Location", value: personalInfo.contact.location }
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="md:w-12 md:h-12 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <i className={`${contact.icon} text-white`}></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{contact.label}</div>
                    <div className="text-gray-600 lg:text-base text-sm">{contact.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="lg:mt-8 mt-5">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white transition-colors`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg lg:p-8 p-4 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="lg:space-y-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
