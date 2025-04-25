import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { useEffect, useState } from 'react';

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
    <div className="min-h-screen text-white relative">
      {/* Tech-themed background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0d0d0d] overflow-hidden">
        {/* Tech-themed radial gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.15),transparent_30%)]" />
        </div>
        
        {/* Circuit Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
          <svg width="100%" height="100%" className="absolute">
            <pattern id="circuit-pattern-cs" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50h40c5.5 0 10 4.5 10 10s4.5 10 10 10h40M50 0v40c0 5.5 4.5 10 10 10s10 4.5 10 10v40"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-gray-400 dark:text-gray-600"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-cs)" />
          </svg>
        </div>
        
        {/* Binary numbers */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute left-[10%] top-[15%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
          <div className="absolute left-[20%] top-[25%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
          <div className="absolute left-[30%] top-[45%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
          <div className="absolute left-[40%] top-[65%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
          <div className="absolute left-[50%] top-[85%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
          <div className="absolute left-[60%] top-[35%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
          <div className="absolute left-[70%] top-[55%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
          <div className="absolute left-[80%] top-[75%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
          <div className="absolute left-[90%] top-[5%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="custom-software-hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Custom Software
                <span className="bg-gradient-to-r from-[#00e070] to-[#00e070]/50 bg-clip-text text-transparent">
                  {" "}Development
                </span>
              </motion.h1>
              <p className="mt-6 text-xl text-gray-400 max-w-2xl">
                A fully customized business software platform designed to fit your unique needs. Think of it as your own CRM, operations tool, or management system—but built specifically for you.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://calendly.com/your-calendar-link/15min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#00e070] text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#00e070]/90 transition-colors"
                >
                  Book a Free Consultation
                </a>
                <span className="border border-[#00e070] text-[#00e070] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#00e070]/10 transition-colors cursor-pointer">
                  Learn More
                </span>
              </div>
            </div>
            <div className="flex-1">
              <AnimatedDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits-grid" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-[#00e070]/50 transition-colors">
                <div className="w-12 h-12 bg-[#00e070]/10 rounded-full flex items-center justify-center mb-6">
                  <Code className="text-[#00e070] text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.split('—')[0]}</h3>
                <p className="text-gray-400">{benefit.split('—')[1] || benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {benefits.slice(3).map((benefit, index) => (
              <div key={index} className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-[#00e070]/50 transition-colors">
                <div className="w-12 h-12 bg-[#00e070]/10 rounded-full flex items-center justify-center mb-6">
                  <Code className="text-[#00e070] text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.split('—')[0]}</h3>
                <p className="text-gray-400">{benefit.split('—')[1] || benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-[#00e070]/50 transition-colors">
                <div className="w-16 h-16 bg-[#00e070]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-[#00e070] text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Development Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#00e070] rounded-full flex items-center justify-center mb-6 text-black font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-400 text-center">Understanding your business needs</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#00e070] rounded-full flex items-center justify-center mb-6 text-black font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-400 text-center">Creating intuitive workflows</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#00e070] rounded-full flex items-center justify-center mb-6 text-black font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-gray-400 text-center">Building custom solutions</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#00e070] rounded-full flex items-center justify-center mb-6 text-black font-bold text-xl">4</div>
              <h3 className="text-xl font-semibold mb-3">Deployment</h3>
              <p className="text-gray-400 text-center">Launch and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Build Your Custom Software?</h2>
          <p className="mt-6 text-xl text-gray-400">
            Book a free 15-minute consultation to discuss your business needs and how custom software can help you scale.
          </p>
          <div className="mt-10">
            <a 
              href="https://calendly.com/your-calendar-link/15min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#00e070] text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#00e070]/90 transition-colors"
            >
              Book a Free Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function AnimatedDashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[500px]"
    >
      <div className="absolute w-full h-full bg-[#121212] rounded-2xl border border-gray-800 shadow-xl overflow-hidden flex items-center justify-center">
        {/* Main Dashboard Container - No tilt/rotation animation */}
        <div className="relative w-[95%] h-[95%] bg-[#0d0d0d] rounded-xl border border-gray-800 p-4 flex flex-col">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white text-lg font-medium">Dashboard Overview</h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c841]"></div>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="grid grid-cols-3 gap-4 flex-1">
            {/* Line Chart */}
            <div className="relative col-span-2 bg-[#1a1a1a] rounded-lg border border-gray-800 p-3 overflow-hidden">
              <h4 className="text-gray-300 text-sm mb-2">Revenue Trends</h4>
              <AnimatedLineChart />
            </div>
            
            {/* Stats Cards */}
            <div className="flex flex-col space-y-4">
              {/* Stats Card 1 */}
              <motion.div 
                className="flex-1 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg p-3"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <h4 className="text-white text-sm font-medium mb-1">Active Users</h4>
                <AnimatedCounter end={8632} duration={3} />
                <small className="text-white/70">+12.5% from last month</small>
              </motion.div>
              
              {/* Stats Card 2 */}
              <motion.div 
                className="flex-1 bg-[#1a1a1a] rounded-lg p-3"
                animate={{ 
                  borderColor: ['#00e070', '#00a0ff', '#00e070'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ borderWidth: '1px' }}
              >
                <h4 className="text-gray-300 text-sm font-medium mb-1">Completion Rate</h4>
                <AnimatedCircularProgress />
              </motion.div>
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* Bar Chart */}
            <div className="col-span-1 bg-[#1a1a1a] rounded-lg border border-gray-800 p-3">
              <h4 className="text-gray-300 text-sm mb-2">Performance</h4>
              <AnimatedBarChart />
            </div>
            
            {/* Pie Chart */}
            <div className="col-span-1 bg-[#1a1a1a] rounded-lg border border-gray-800 p-3">
              <h4 className="text-gray-300 text-sm mb-2">Distribution</h4>
              <AnimatedPieChart />
            </div>
            
            {/* Activity Log */}
            <div className="col-span-1 bg-[#1a1a1a] rounded-lg border border-gray-800 p-3">
              <h4 className="text-gray-300 text-sm mb-2">Recent Activity</h4>
              <AnimatedActivityLog />
            </div>
          </div>
          
          {/* Glowing Effects */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00e070]/20 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute -top-5 -left-5 w-20 h-20 bg-purple-500/20 rounded-full filter blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedCounter({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | undefined;
    let animFrame: number | undefined;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animFrame = requestAnimationFrame(updateCount);
    
    return () => {
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, [end, duration]);
  
  return (
    <h3 className="text-2xl font-bold text-white">{count.toLocaleString()}</h3>
  );
}

function AnimatedCircularProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          return 0;
        }
        return prevProgress + 2;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-center justify-center h-12">
      <div className="relative w-12 h-12">
        {/* Background Circle */}
        <div className="w-full h-full rounded-full bg-gray-700 absolute"></div>
        
        {/* Progress Arc */}
        <svg className="w-full h-full absolute top-0 left-0 transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="#00e070"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={`${progress * 1.256} 126`}
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        
        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-semibold text-xs">{progress}%</span>
        </div>
      </div>
      <div className="ml-3 text-right">
        <p className="text-xl font-bold text-white">{progress}%</p>
        <small className="text-green-400">Target: 85%</small>
      </div>
    </div>
  );
}

function AnimatedLineChart() {
  const [points, setPoints] = useState<number[]>(generateLinePoints());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(generateLinePoints());
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  function generateLinePoints(): number[] {
    const numPoints = 12;
    return Array.from({ length: numPoints }, () => 
      Math.floor(Math.random() * 40) + 10
    );
  }
  
  // Create the SVG path data
  const maxValue = Math.max(...points);
  const pathData = points.map((point, index) => {
    const x = (index / (points.length - 1)) * 100;
    const y = 100 - ((point / maxValue) * 80);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
  
  return (
    <div className="w-full h-full relative">
      <motion.svg 
        viewBox="0 0 100 100"
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Grid Lines */}
        {[20, 40, 60, 80].map((value, i) => (
          <line 
            key={i}
            x1="0" 
            y1={value} 
            x2="100" 
            y2={value} 
            stroke="#333" 
            strokeWidth="0.5" 
          />
        ))}
        
        {/* Line graph */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Fill area under the curve */}
        <motion.path
          d={`${pathData} L 100 100 L 0 100 Z`}
          fill="url(#areaGradient)"
          opacity="0.2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Data points */}
        {points.map((point, index) => {
          const x = (index / (points.length - 1)) * 100;
          const y = 100 - ((point / maxValue) * 80);
          
          return (
            <motion.circle
              key={index}
              cx={x}
              cy={y}
              r="1.5"
              fill="#00e070"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            />
          );
        })}
        
        {/* Gradients */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e070" />
            <stop offset="100%" stopColor="#00a0ff" />
          </linearGradient>
          
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00e070" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00e070" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
      
      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-gray-500 text-xs">
        <span>Jan</span>
        <span>Apr</span>
        <span>Jul</span>
        <span>Oct</span>
      </div>
    </div>
  );
}

function AnimatedBarChart() {
  const [values, setValues] = useState<number[]>([35, 65, 45, 70, 55]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setValues(values.map(() => Math.floor(Math.random() * 70) + 10));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [values]);
  
  return (
    <div className="w-full h-full flex items-end justify-between pt-5">
      {values.map((value, index) => (
        <div key={index} className="flex flex-col items-center">
          <motion.div 
            className="w-6 bg-gradient-to-t from-[#00e070] to-[#00a0ff]"
            style={{
              borderRadius: '3px 3px 0 0',
            }}
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <span className="text-xs text-gray-500 mt-1">{`Q${index + 1}`}</span>
        </div>
      ))}
    </div>
  );
}

function AnimatedPieChart() {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 45) % 360);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-center justify-center h-full">
      <motion.svg 
        width="80" 
        height="80" 
        viewBox="0 0 100 100"
        animate={{ rotate: rotation }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <circle cx="50" cy="50" r="40" fill="#121212" />
        
        {/* Pie segments */}
        <path d="M50,50 L90,50 A40,40 0 0,1 75,85 z" fill="#00e070" />
        <path d="M50,50 L75,85 A40,40 0 0,1 30,83 z" fill="#00a0ff" />
        <path d="M50,50 L30,83 A40,40 0 0,1 10,50 z" fill="#7C3AED" />
        <path d="M50,50 L10,50 A40,40 0 0,1 50,10 z" fill="#F59E0B" />
        <path d="M50,50 L50,10 A40,40 0 0,1 90,50 z" fill="#EC4899" />
        
        {/* Center circle */}
        <circle cx="50" cy="50" r="15" fill="#121212" />
      </motion.svg>
    </div>
  );
}

function AnimatedActivityLog() {
  const activities = [
    { text: "New user registered", time: "2m ago" },
    { text: "Payment processed", time: "15m ago" },
    { text: "System update completed", time: "1h ago" },
    { text: "New feature launched", time: "3h ago" }
  ];
  
  return (
    <div className="space-y-3 mt-1">
      {activities.map((activity, index) => (
        <motion.div 
          key={index}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="flex items-center"
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-[#00e070] mr-2"
            animate={{ 
              scale: [1, 1.5, 1],
              backgroundColor: ['#00e070', '#00a0ff', '#00e070']
            }}
            transition={{ duration: 2, repeat: Infinity, delay: index }}
          />
          <div className="flex-1">
            <p className="text-xs text-white truncate">{activity.text}</p>
            <p className="text-[10px] text-gray-500">{activity.time}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 