import { motion, useAnimation } from 'framer-motion';
import { Zap, ArrowRight, Terminal } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import StickyScrollRevealDemo from '@/components/sticky-scroll-reveal-demo';
import { FeatureItem } from '@/components/FeatureItem';
import { ScrollAnimatedSection } from '@/components/ui/scroll-animated-section';
import { MinimalDashboard } from './MinimalDashboard';

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
  // State for interactive elements
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showNotification, setShowNotification] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [user, setUser] = useState({
    name: "Sarah",
    company: "Astral Design",
    role: "Marketing Director"
  });
  const containerRef = useRef(null);
  const controls = useAnimation();
  
  // Personal welcome messages
  const welcomeMessages = [
    `Welcome back, ${user.name}`,
    `Good ${new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'}, ${user.name}`,
    `${user.name}'s Dashboard`,
    `${user.company} Analytics`
  ];
  const [welcomeMessage, setWelcomeMessage] = useState(welcomeMessages[0]);
  
  // Success stories for storytelling element
  const successStories = [
    { metric: "Time Saved", value: "23 hrs/week", roi: "+32%" },
    { metric: "Lead Response", value: "2.4 minutes", roi: "+78%" },
    { metric: "Client Retention", value: "93%", roi: "+15%" },
    { metric: "Team Productivity", value: "41 tasks/day", roi: "+27%" }
  ];
  const [currentStory, setCurrentStory] = useState(0);

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Show notifications periodically
  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 15000);
    
    return () => clearInterval(notificationInterval);
  }, []);

  // Change welcome message periodically
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setWelcomeMessage(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);
    }, 10000);
    
    return () => clearInterval(messageInterval);
  }, []);
  
  // Rotate success stories
  useEffect(() => {
    const storyInterval = setInterval(() => {
      setCurrentStory(prev => (prev + 1) % successStories.length);
    }, 8000);
    
    return () => clearInterval(storyInterval);
  }, []);

  // Subtle float animation for dashboard
  useEffect(() => {
    controls.start({
      y: [0, -6, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "reverse"
      }
    });
  }, [controls]);

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

  // Format current time
  const formattedTime = currentTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  // Format current date
  const formattedDate = `${currentTime.getFullYear()}-${String(currentTime.getMonth() + 1).padStart(2, '0')}-${String(currentTime.getDate()).padStart(2, '0')}`;

  return (
    <div className="relative">
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Section 1: Hero section with matching black background */}
      <div className="w-full bg-[#1a1b1f] pt-24 pb-16 relative">
        {/* Decorative elements */}
        <div className="absolute top-32 -left-16 w-36 h-36 bg-[#00FF79]/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-96 -right-16 w-48 h-48 bg-[#00FF79]/5 rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <ScrollAnimatedSection direction="up" delayMultiplier={0}>
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-6 text-center md:text-left order-2 md:order-1">
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
                <p className="text-lg md:text-xl text-white max-w-3xl mx-auto md:mx-0 leading-relaxed">
                  One unified system that automates 
                  <span className="text-[#00FF79]"> lead capture</span>, 
                  <span className="text-[#00FF79]"> booking</span>, 
                  <span className="text-[#00FF79]"> invoicing</span>, and 
                  <span className="text-[#00FF79]"> client follow‑ups</span>
                  —so you scale faster with less overhead.
                </p>
                
                {/* Interactive CTA with micro-interactions */}
                <motion.div 
                  className="mt-8 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a 
                    href="#integrated-automation-system" 
                    className="px-6 py-3 bg-[#00FF79] text-black font-medium rounded-xl transition-all duration-300 group flex items-center relative overflow-hidden"
                  >
                    <Zap className="w-4 h-4 mr-2 text-black" />
                    <span className="relative z-10">Explore Our Solution</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  </a>
                </motion.div>
                
                {/* Visual bridge to connect sections */}
                <div className="py-6 mt-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-col items-center md:items-start"
                  >
                    <div className="flex space-x-2 mb-4">
                      {[0, 1, 2].map((i) => (
                        <div 
                          key={i} 
                          className="w-2 h-2 rounded-none bg-[#00FF79]/60"
                        ></div>
                      ))}
                    </div>
                    <p className="text-sm text-[#99999A] font-light">Scroll to explore our complete system</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Minimalistic Dashboard Section */}
              <div className="col-span-12 md:col-span-6 order-1 md:order-2 mb-8 md:mb-0">
                <motion.div
                  ref={containerRef}
                  animate={controls}
                >
                  <MinimalDashboard
                    formattedTime={formattedTime}
                    formattedDate={formattedDate}
                  />
                </motion.div>
                
                {/* Minimalistic Caption */}
                <motion.div
                  className="mt-2 text-center md:text-right text-[10px] text-[#99999A] font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  v1.4.2 // STATUS: Nominal
                </motion.div>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
        
      {/* Section divider with animation - matching Home page style */}
      <div className="w-full relative">
        <motion.div 
          className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#333333]/50 to-transparent"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ></motion.div>
        
        {/* Subtle glow effect under divider */}
        <div className="absolute left-0 right-0 top-0 h-[8px] bg-[#333333]/10 blur-[3px]"></div>
      </div>

      {/* Section 2: Integrated System */}
      <div id="integrated-automation-system" className="w-full py-12 relative">
        {/* Background gradient transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1b1f] via-[#151617] to-[#0f1011] -z-10"></div>
        
        {/* Strong visual divider */}
        <div className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#333333]/15 to-transparent h-16 backdrop-blur-sm -z-5"></div>
        <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#444444]/50 to-transparent"></div>
        
        {/* Decorative orbs */}
        <div className="absolute -top-24 right-1/4 w-64 h-64 bg-[#333333]/10 rounded-full blur-[80px] opacity-40"></div>
        <div className="absolute bottom-1/4 -left-16 w-80 h-80 bg-[#222222]/15 rounded-full blur-[100px] opacity-50"></div>
        
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
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#333333]/50 to-transparent"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>

      {/* Section 3: Benefits & Features Grids */}
      <div className="w-full py-12 relative">
        {/* Background gradient transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1011] via-[#12120f] to-[#141410] -z-10"></div>
        
        {/* Decorative accent */}
        <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#333333]/50 to-transparent"></div>
        <div className="absolute left-0 top-1 w-full h-8 bg-gradient-to-b from-[#333333]/10 to-transparent blur-sm"></div>
        
        {/* Additional visual elements */}
        <div className="absolute right-0 top-1/4 w-72 h-72 bg-[#292929]/10 rounded-full blur-[120px] opacity-40"></div>
        
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
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#333333]/50 to-transparent"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>

      {/* Section 4: Enhanced CTA - with matching background color */}
      <div className="w-full py-12 relative">
        {/* Background gradient transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141410] via-[#17171a] to-[#1A1B1F] -z-10"></div>
        
        {/* Decorative accent */}
        <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#444444]/40 to-transparent"></div>
        <div className="absolute left-0 top-1 w-full h-8 bg-gradient-to-b from-[#444444]/10 to-transparent blur-sm"></div>
        
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