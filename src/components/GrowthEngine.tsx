import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import StickyScrollRevealDemo from '@/components/sticky-scroll-reveal-demo';
import { FeatureItem } from '@/components/FeatureItem';
import { ScrollAnimatedSection } from '@/components/ui/scroll-animated-section';

// Animation for the grid container (stagger children)
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animation for divider lines
const lineVariants = {
  hidden: { width: 0 },
  visible: { 
    width: "100%", 
    transition: { duration: 0.8, ease: "easeInOut" } 
  }
};

export function GrowthEngine() {
  // Updated copy
  const benefits = [
    "Eliminate repetitive manual tasks",
    "Boost efficiency & productivity",
    "Reduce operational costs",
    "Integrate with your existing tech stack",
    "Scale without hiring more staff",
    "Maintain consistent customer experience" // Added 6th item
  ];

  const features = [
    "Automated Scheduling & Booking",
    "Invoicing & Payment Collection",
    "Client Follow-up Sequences",
    "Data Entry & Management",
    "Document Processing",
    "Project Management Automation"
  ];

  return (
    <div className="relative">
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Section 1: Hero section with matching black background */}
      <div className="w-full bg-[#1a1b1f] pt-24 pb-16">
        {/* Decorative elements */}
        <div className="absolute top-32 -left-16 w-36 h-36 bg-[#00FF79]/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-96 -right-16 w-48 h-48 bg-[#00FF79]/5 rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <ScrollAnimatedSection direction="up" delayMultiplier={0}>
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 text-center">
                {/* Enhanced icon with animation and glow */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00FF79]/10 mb-8
                              before:absolute before:inset-0 before:rounded-full before:bg-[#00FF79]/10 before:animate-pulse before:blur-lg before:-z-10">
                  <Zap className="w-8 h-8 text-[#00FF79]" />
                </div>
                
                {/* Typography matching Home page */}
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                  The Softwair Growth Engine
                </h1>
                
                {/* Enhanced description matching Home page */}
                <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                  One unified system that automates 
                  <span className="text-[#00FF79]"> lead capture</span>, 
                  <span className="text-[#00FF79]"> booking</span>, 
                  <span className="text-[#00FF79]"> invoicing</span>, and 
                  <span className="text-[#00FF79]"> client follow‑ups</span>
                  —so you scale faster with less overhead.
                </p>
                
                {/* Visual bridge to connect sections */}
                <div className="py-6 mt-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex space-x-2 mb-4">
                      {[0, 1, 2].map((i) => (
                        <div 
                          key={i} 
                          className="w-2 h-2 rounded-full bg-[#00FF79]/60"
                        ></div>
                      ))}
                    </div>
                    <p className="text-sm text-[#99999A] font-light">Scroll to explore our complete system</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
        
      {/* Section divider with animation - matching Home page style */}
      <motion.div 
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#00FF79]/30 to-transparent"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>

      {/* Section 2: Integrated System */}
      <div id="integrated-automation-system" className="w-full bg-[#1a1b1f] py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <ScrollAnimatedSection direction="up" delayMultiplier={2} className="relative">
            {/* Enhanced section heading with left border accent */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left text-white pl-4 border-l-4 border-[#00FF79]">
                An Integrated Automation System
              </h2>
              <p className="text-lg text-white max-w-3xl mb-6 text-left pl-4">
                Each service seamlessly connects, automating workflows from lead generation and nurturing to sales and customer re-engagement.
              </p>
              
              <div className="pl-4 mb-8">
                <span className="inline-flex items-center px-3 py-1 bg-[#00FF79]/10 text-[#00FF79] text-sm rounded-full">
                  <span className="font-mono mr-1">6</span> integrated services
                </span>
              </div>
            </div>
            
            {/* Improved container for the scroll component */}
            <div>
              <StickyScrollRevealDemo />
              
              {/* Step indicator overlay */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-white border border-[#32333A]/50">
                Step <span className="text-[#00FF79]" id="current-step">1</span> of 6
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
        
      {/* Section divider with animation */}
      <motion.div 
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#00FF79]/30 to-transparent"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>

      {/* Section 3: Benefits & Features Grids */}
      <div className="w-full bg-[#1a1b1f] py-12">
        <div className="relative">
          {/* Subtle glow in the background */}
          <div className="absolute inset-0 bg-[#00FF79]/5 mix-blend-overlay opacity-30"></div>
          
          <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
            <ScrollAnimatedSection direction="up" delayMultiplier={3}>
              {/* Section transition text */}
              <div className="text-center mb-10">
                <p className="text-lg text-white max-w-2xl mx-auto">
                  Discover how our comprehensive solution helps your business
                  <span className="text-[#00FF79] font-medium"> grow smarter</span>, not harder
                </p>
              </div>
              
              <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
                <ScrollAnimatedSection direction="up" delayMultiplier={4} className="md:col-span-6 space-y-6">
                  {/* Enhanced heading with icon */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-1 h-8 bg-[#00FF79] rounded-full"></div>
                    <h3 className="text-2xl font-bold text-white">Key Benefits</h3>
                  </div>
                  
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {benefits.map((benefit, index) => (
                      <FeatureItem key={index} text={benefit} index={index} />
                    ))}
                  </motion.div>
                </ScrollAnimatedSection>
                
                <ScrollAnimatedSection direction="up" delayMultiplier={5} className="md:col-span-6 space-y-6">
                  {/* Enhanced heading with icon */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-1 h-8 bg-[#00FF79] rounded-full"></div>
                    <h3 className="text-2xl font-bold text-white">Core Automation Features</h3>
                  </div>
                  
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {features.map((feature, index) => (
                      <FeatureItem key={index} text={feature} index={index} />
                    ))}
                  </motion.div>
                </ScrollAnimatedSection>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
        
      {/* Section divider with animation */}
      <motion.div 
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#00FF79]/30 to-transparent"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>

      {/* Section 4: Enhanced CTA - with matching background color */}
      <div className="w-full bg-[#1A1B1F] py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <ScrollAnimatedSection direction="up" delayMultiplier={6}>
            {/* Enhanced CTA container with better gradients and shadows */}
            <div className="relative overflow-hidden bg-[#22232A] p-8 md:p-12 rounded-2xl border border-[#32333A] shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#00FF79]/10 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#00FF79]/10 rounded-full blur-3xl opacity-30"></div>
              
              <span className="inline-block text-sm font-medium text-[#00FF79] mb-4 uppercase tracking-wider">Ready to get started?</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">Let's accelerate your growth</h2>
              <p className="text-white mb-8 max-w-2xl mx-auto">
                Book a 15-minute discovery call to explore how the 
                <span className="text-[#00FF79] font-medium"> Softwair Growth Engine</span> can transform your business operations.
              </p>
              
              {/* Enhanced CTA button with icon and animation */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a 
                  href="https://calendly.com/your-calendar-link/15min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto px-8 py-4 bg-[#00FF79] rounded-xl text-slate-900 font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:shadow-[#00FF79]/30 group"
                >
                  <span className="flex items-center justify-center">
                    Book a 15-min discovery call
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </motion.div>
              
              {/* Trust indicators */}
              <div className="mt-8 text-sm text-[#99999A]">
                <p>No commitments • Free consultation • Learn what's possible</p>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </div>
  );
} 