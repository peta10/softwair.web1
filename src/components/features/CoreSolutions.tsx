import { motion } from 'framer-motion';
import { Code, Zap } from 'lucide-react';

const solutions = [
  {
    icon: <Code className="w-12 h-12 text-[#248AFF]" />,
    title: "Custom Software Development",
    description: "A fully customized business software platform designed to fit your unique needs. Think of it as your own CRM, Jobber, or operations tool—but built specifically for you.",
    benefits: [
      "No bloated features—only what your business needs",
      "Centralize operations into one platform",
      "Future-proof & scalable as you grow",
      "Full control over features & updates",
      "Seamless integration with existing tools"
    ]
  },
  {
    icon: <Zap className="w-12 h-12 text-[#248AFF]" />,
    title: "Business Automations",
    description: "Automate repetitive, time-consuming tasks to streamline your operations and increase efficiency. Our automation solutions help businesses scale without adding more workload.",
    benefits: [
      "Eliminate repetitive manual tasks",
      "Boost efficiency & productivity",
      "Reduce operational costs",
      "Integrate with existing software",
      "Scale without hiring more staff"
    ]
  }
];

export function CoreSolutions() {
  return (
    <div className="py-16 sm:py-24 md:py-32 bg-[#0A0B0D]">
      <div className="container mx-auto px-4 sm:px-8 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-16 tracking-tight text-center">
          Core Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-[#248AFF]/5 p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#248AFF]/20 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#248AFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-center sm:text-left">
                {solution.icon}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
                  {solution.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-[#99999A] leading-relaxed mb-6 sm:mb-8 text-center sm:text-left">
                {solution.description}
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-[#00FC61]">✓</span>
                    <span className="text-[#99999A] text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}