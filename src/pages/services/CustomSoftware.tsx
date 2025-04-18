import { motion } from 'framer-motion';
import { Code, Check, ArrowRight } from 'lucide-react';

export function CustomSoftware() {
  const benefits = [
    "No bloated features—only what your business needs",
    "Centralize operations into one platform",
    "Future-proof & scalable as you grow",
    "Full control over features & updates",
    "Seamless integration with existing tools"
  ];

  const features = [
    "Industry-Specific Software Solutions",
    "Custom CRM & Client Management",
    "Operations & Workflow Platforms",
    "Project Management Tools",
    "Inventory & Resource Management",
    "Data Analytics & Reporting Dashboards"
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#248AFF]/10 mb-6">
              <Code className="w-8 h-8 text-[#248AFF]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
              Custom Software Development
            </h1>
            <p className="text-xl text-[#99999A] max-w-3xl mx-auto">
              A fully customized business software platform designed to fit your unique needs. Think of it as your own CRM, operations tool, or management system—but built specifically for you.
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
            <h2 className="text-2xl font-bold mb-4">Ready to build your custom software?</h2>
            <p className="text-[#99999A] mb-6 max-w-2xl mx-auto">
              Book a free 15-minute consultation to discuss your business needs and how custom software can help you scale.
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