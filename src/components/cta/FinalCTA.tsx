import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <div className="py-32 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00FC61]/5 via-transparent to-[#248AFF]/5 opacity-30 pointer-events-none"></div>
      <div className="container mx-auto px-8 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent"
        >
          🚀 Start Optimizing Your Business Today!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[#99999A] mb-8 md:mb-12 max-w-2xl mx-auto"
        >
          Take the Free Problem Discovery Audit Now & See How Much Time You Could Save!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 200
          }}
          className="group relative inline-block mx-auto"
        >
          <Link
            to="/time-audit"
            className="group relative px-6 md:px-10 py-4 md:py-6 bg-[#00FF79] hover:bg-[#00FF79]/90 rounded-xl md:rounded-2xl text-lg md:text-xl font-semibold text-[#121316] transition-all duration-300 inline-flex items-center gap-4 mx-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FC61] to-[#00FF79] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative">
              Start the Audit →
            </span>
            <span className="relative transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}