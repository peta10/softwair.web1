import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scale your business with ease. Over 54+ startups trusted us and increased their revenue!
          </h2>
          
          <div className="mt-8">
            <Link to="/time-audit" className="px-8 py-3 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 inline-block">
              Book a 30-min call
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#99999A] mb-4">Social Media</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-[#00FF79] transition-colors">
                skale.solutions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}