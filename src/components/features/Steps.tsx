import { motion } from 'framer-motion';
import { Workflow, GitMerge, Zap } from 'lucide-react';

const steps = [
  {
    icon: <Workflow className="w-16 h-16 text-[#248AFF]" />,
    title: "Problem Discovery Audit",
    description: "Take our free assessment to see how much time you're losing on manual tasks."
  },
  {
    icon: <GitMerge className="w-16 h-16 text-[#248AFF]" />,
    title: "Custom Solution Plan",
    description: "We identify inefficiencies and create a tailored solution plan for your business."
  },
  {
    icon: <Zap className="w-16 h-16 text-[#248AFF]" />,
    title: "Deploy & Optimize",
    description: "We handle everything from development to deployment, with ongoing optimization."
  }
];

export function Steps() {
  return (
    <div className="py-32 bg-[#0A0B0D]">
      <div className="container mx-auto px-8 md:px-12 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#248AFF]/5 via-transparent to-[#00FC61]/5 opacity-30 pointer-events-none"></div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12 md:mb-20 tracking-tight bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent"
        >
          📊 How We Help You Identify Your Biggest Time-Wasters
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateY: [0, 360],
                scale: [0.8, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.3,
                rotateY: {
                  duration: 1.2,
                  ease: "easeOut"
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center bg-[#248AFF]/5 p-8 rounded-2xl border border-[#248AFF]/20 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#248AFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                className="mb-6"
                animate={{ 
                  rotateZ: [0, -10, 10, -10, 0],
                  y: [0, -5, 5, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
                {step.title}
              </h3>
              <p className="text-[#99999A] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}