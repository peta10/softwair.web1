import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureItemProps {
  text: string;
  index: number; // For staggering animations
}

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

export function FeatureItem({ text, index }: FeatureItemProps) {
  // Create a slight delay based on index for staggered animation
  const delay = index * 0.1;
  
  return (
    <motion.div 
      className="flex items-start p-4 rounded-lg bg-[#1A1D23] ring-1 ring-[#00E070]/20 hover:ring-[#00E070] transition-all duration-300 cursor-default backdrop-blur-sm hover:bg-[#1E222A] group"
      variants={itemVariants} 
      transition={{ delay }}
      whileHover={{ 
        y: -4,
        boxShadow: '0 10px 30px -15px rgba(0, 224, 112, 0.3)'
      }}
    >
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00E070]/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-[#00E070]/30 transition-colors duration-300">
        <Check className="w-4 h-4 text-[#00E070]" />
      </div>
      <div>
        <span className="text-[15px] leading-relaxed text-white group-hover:text-white transition-colors duration-300">{text}</span>
      </div>
    </motion.div>
  );
} 