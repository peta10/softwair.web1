import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  currentStep, 
  totalSteps 
}) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8" aria-label={`Step ${currentStep} of ${totalSteps}`}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: currentStep === index + 1 ? 1 : 0.8,
            backgroundColor: currentStep === index + 1 
              ? '#00FF79' 
              : index + 1 < currentStep 
                ? '#00FF79' 
                : 'rgba(255, 255, 255, 0.2)'
          }}
          className={`h-2 rounded-full transition-all duration-300 ${
            currentStep === index + 1 
              ? 'w-10' 
              : 'w-6'
          }`}
        />
      ))}
    </div>
  );
}; 