import { motion } from 'framer-motion';
import { useState } from 'react';
import { Rocket, BarChart, Lock, Zap } from 'lucide-react';
import { useEmailSubmission } from '../hooks/useEmailSubmission';

export function Product() {
  const { submitEmail, isSubmitting, error, success } = useEmailSubmission();
  const [formData, setFormData] = useState<string>('');

  return (
    <div className="min-h-screen bg-[#121316] text-white pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-[#248AFF]/10 text-[#248AFF] text-sm font-medium mb-4">
              Introducing
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
              The Data Platform for Your Workflow
            </h1>
            <p className="text-lg md:text-xl text-[#99999A] max-w-3xl mx-auto">
              High-quality solutions for all your data management and analysis needs.
              Designed to scale with your business.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center mt-10"
          >
            <a href="#features" className="px-8 py-3 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 text-center">
              Explore Features
            </a>
            <a href="#contact" className="px-8 py-3 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/5 transition-all duration-300 text-center">
              Contact Sales
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#1A1B1F] py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-[#99999A] max-w-2xl mx-auto">
              Our platform provides everything you need to manage, analyze, and scale your data operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-[#22232A] p-6 rounded-2xl border border-[#32333A]"
            >
              <BarChart className="w-12 h-12 text-[#00FF79] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
              <p className="text-[#99999A]">
                Powerful analytics tools to help you understand and visualize your data in real-time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-[#22232A] p-6 rounded-2xl border border-[#32333A]"
            >
              <Lock className="w-12 h-12 text-[#248AFF] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Secure Storage</h3>
              <p className="text-[#99999A]">
                Enterprise-grade security for all your sensitive data with end-to-end encryption.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-[#22232A] p-6 rounded-2xl border border-[#32333A]"
            >
              <Zap className="w-12 h-12 text-[#00FF79] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast Processing</h3>
              <p className="text-[#99999A]">
                Advanced algorithms that process your data efficiently, saving time and resources.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-[#99999A] max-w-2xl mx-auto">
              Our platform is designed to be simple and intuitive, allowing you to focus on what matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-[#248AFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#248AFF] text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-[#99999A]">
                Easily connect your data sources to our platform through our simple API.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-[#00FF79]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#00FF79] text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Process</h3>
              <p className="text-[#99999A]">
                Our platform processes and analyzes your data, providing valuable insights.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-[#248AFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#248AFF] text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scale</h3>
              <p className="text-[#99999A]">
                As your needs grow, our platform scales with you, handling increasing data loads.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#1A1B1F] py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-[#22232A] rounded-2xl border border-[#32333A] p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <Rocket className="w-12 h-12 text-[#248AFF] mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Get Notified When We Launch
              </h2>
              <p className="text-[#99999A]">
                Leave your email to be the first to know when our product details are available
              </p>
            </div>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                onChange={(e) => setFormData(e.target.value)}
                className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#00FC61]"
              />
              <button
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  if (formData) {
                    await submitEmail('product', formData);
                  }
                }}
                className={`px-8 py-3 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Notify Me'}
              </button>
            </form>
            
            {error && (
              <p className="text-red-500 mt-4 text-center">{error}</p>
            )}
            {success && (
              <p className="text-[#00FF79] mt-4 text-center">
                Thanks! We'll notify you when we launch.
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}