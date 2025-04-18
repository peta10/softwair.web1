import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface NavigationButtonProps {
  onClick: () => void;
  direction?: 'back' | 'forward';
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  onClick,
  direction = 'forward',
  children,
  className = '',
  disabled = false
}) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 
        ${direction === 'forward' 
          ? 'bg-[#00FF79] text-[#121316] hover:bg-[#00FF79]/90' 
          : 'bg-[#248AFF]/20 text-white hover:bg-[#248AFF]/30'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}`}
    >
      {direction === 'back' && <ChevronLeft className="w-5 h-5" />}
      {children}
      {direction === 'forward' && <ChevronRight className="w-5 h-5" />}
    </motion.button>
  );
}; 