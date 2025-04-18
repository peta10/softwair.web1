import { motion } from 'framer-motion';
import { Layout, Check, ArrowRight } from 'lucide-react';

export function WebDevelopment() {
  const benefits = [
    "Professional, modern design that builds trust",
    "Mobile-responsive for all devices",
    "SEO-optimized to attract more visitors",
    "Fast loading speeds for better user experience",
    "Easy content management for your team"
  ];

  const features = [
    "Custom Website Design",
    "E-commerce Solutions",
    "Landing Pages & Sales Funnels",
    "Content Management Systems",
    "Progressive Web Applications",
    "Performance Optimization"
  ];

  return (
    <div className="min-h-screen text-white pt-32">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00FF79]/10 mb-6">
              <Layout className="w-8 h-8 text-[#00FF79]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
              Web Development
            </h1>
            <p className="text-xl text-[#99999A] max-w-3xl mx-auto">
              Professional, modern websites and web applications that drive conversions and deliver results for your business or organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-[#00FF79] mr-3 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-[#00FF79] mr-3 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#22232A] p-8 rounded-2xl border border-[#32333A] text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to build your perfect website?</h2>
            <p className="text-[#99999A] mb-6 max-w-2xl mx-auto">
              Book a free 15-minute consultation to discuss your project requirements and how we can help you achieve your online goals.
            </p>
            <a 
              href="https://calendly.com/your-calendar-link/15min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 