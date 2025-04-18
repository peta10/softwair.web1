import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text = 'Analyzing your responses...' }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 border-4 border-[#00FF79] border-t-transparent rounded-full"
        aria-label="Loading"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xl text-[#99999A]"
      >
        {text}
      </motion.div>
      <div className="flex gap-4 mt-4" role="presentation">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-[#00FF79]"
            animate={{
              y: [-10, 0, -10],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}; 