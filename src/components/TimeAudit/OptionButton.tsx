import { motion } from 'framer-motion';

interface OptionButtonProps {
  option: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

export const OptionButton: React.FC<OptionButtonProps> = ({ 
  option, 
  isSelected, 
  onClick,
  className = ''
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`p-4 rounded-xl text-left transition-all duration-300 ${
        isSelected
          ? 'bg-[#00FF79] text-[#121316]'
          : 'bg-[#248AFF]/5 hover:bg-[#248AFF]/10 text-white'
      } ${className}`}
    >
      {option}
    </motion.button>
  );
}; 