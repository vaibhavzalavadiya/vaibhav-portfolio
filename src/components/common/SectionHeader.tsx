import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  isInView: boolean;
}

export default function SectionHeader({ subtitle, title, description, isInView }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center lg:mb-12 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-blue-600 font-semibold text-lg mb-2 block">{subtitle}</span>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}