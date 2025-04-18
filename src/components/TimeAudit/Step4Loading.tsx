import { motion } from 'framer-motion';
import { LoadingSpinner } from './LoadingSpinner';

interface Step4Props {
  // No props needed for this step
}

export const Step4Loading: React.FC<Step4Props> = () => {
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