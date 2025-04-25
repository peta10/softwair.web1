import { motion } from 'framer-motion';
import { LoadingSpinner } from './LoadingSpinner';
import { useState, useEffect } from 'react';

interface Step4Props {
  onFinish?: () => void; // Add onFinish prop to handle automatic progression
}

export const Step4Loading: React.FC<Step4Props> = ({ onFinish }) => {
  // Automatically progress to results after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3500); // A bit longer to show the animation properly

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center space-y-8"
      aria-live="polite"
      aria-busy="true"
    >
      <LoadingSpinner />
    </motion.div>
  );
}; 