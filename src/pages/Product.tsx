import { motion } from 'framer-motion';
import { useState } from 'react';
import { Rocket } from 'lucide-react';
import { useEmailSubmission } from '../hooks/useEmailSubmission';

export function Product() {
  const { submitEmail, isSubmitting, error, success } = useEmailSubmission();
  const [formData, setFormData] = useState<string>('');

  return (
    <div className="min-h-screen bg-[#121316] text-white pt-32">
      <div className="container mx-auto px-8 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
            Product Details Coming Soon
          </h1>
          <p className="text-lg md:text-2xl text-[#99999A] mb-8 md:mb-12">
            We're crafting the perfect presentation of our solutions
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#248AFF]/5 p-6 md:p-12 rounded-2xl md:rounded-3xl border border-[#248AFF]/20 max-w-2xl mx-auto mt-8 md:mt-12"
          >
            <Rocket className="w-16 h-16 text-[#248AFF] mx-auto mb-6" />
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Get Notified When We Launch
            </h2>
            <p className="text-[#99999A] mb-6 md:mb-8">
              Leave your email to be the first to know when our product details are available
            </p>
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
        </motion.div>
      </div>
    </div>
  );
}