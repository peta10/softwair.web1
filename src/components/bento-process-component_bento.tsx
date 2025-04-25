import React, { useState, useEffect, useRef } from 'react';

// Define types for props
interface BentoBoxProps {
  title: string;
  description: string;
  iconComponent: React.ReactElement;
  gridClass: string;
  stats?: string;
  accentColor?: string;
}

interface IconProps {
  isHovered: boolean;
}

// Define interface for the process content props
export interface ProcessContentProps {
  serviceTitle?: string;
  serviceSubtitle?: string;
  introText?: string;
  steps: {
    discovery: { description: string; stats: string; };
    solution: { description: string; stats: string; };
    development: { description: string; stats: string; };
    monitoring: { description: string; stats: string; };
    testing: { description: string; stats: string; };
    launch: { description: string; stats: string; };
  };
  ctaText?: string;
  ctaButtonText?: string;
}

// Default content if no specific service content is provided
const defaultProcessContent: ProcessContentProps = {
  serviceTitle: "Our Process",
  serviceSubtitle: "Step by Step",
  introText: "From the initial proposal to the final product at your hand. A clear view of what you can expect at every stage!",
  steps: {
    discovery: {
      description: "Define your pain points and time-wasters with a click. We take care of the analysis.",
      stats: "97% reduction in manual tasks"
    },
    solution: {
      description: "Built for your unique needs. Use any integrations you want.",
      stats: "Average 30+ hours saved per month"
    },
    development: {
      description: "Fully managed and data secured service. Zero stress about maintenance updates or upgrades.",
      stats: "Custom integration with 150+ tools"
    },
    monitoring: {
      description: "Connect to any real-time API like OpenAI, Google Maps, Weaviate, etc.",
      stats: "Live monitoring with 24/7 alerts"
    },
    testing: {
      description: "Comprehensive testing with multiple validation layers. We use automated unit tests, integration tests, and real-world user scenarios to ensure flawless performance.",
      stats: "99.8% uptime with zero critical bugs"
    },
    launch: {
      description: "Easy to start and scale infinitely. No setup time for infrastructure. Our robust technology scales for you.",
      stats: "Unlimited scaling with no downtime"
    }
  },
  ctaText: "Custom Software Solutions in One Place. No Hassle. No Complexity. Just Results.",
  ctaButtonText: "Try for free"
};

// Enhanced BentoBox with reduced animations and larger text
const BentoBox: React.FC<BentoBoxProps> = ({ 
  title, 
  description, 
  iconComponent, 
  gridClass, 
  stats, 
  accentColor = '#00ff79' 
}) => {
  const [animated, setAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Handle 3D tilt effect (reduced for more static appearance)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      // Reduced tilt effect by dividing values by 2
      setTiltPosition({ x: x/2, y: y/2 });
    }
  };
  
  // Animation on component mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  return (
    <div 
      ref={cardRef}
      className={`${gridClass} relative overflow-hidden group`}
      style={{ 
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTiltPosition({ x: 0, y: 0 });
      }}
      aria-label={title}
      role="article"
    >
      {/* Card with reduced 3D transform */}
      <div 
        className={`h-full rounded-xl overflow-hidden transition-all duration-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ 
          backgroundColor: '#1a1b1f',
          border: `1px solid ${isHovered ? `rgba(${accentColor.replace('#', '').match(/../g)?.map(c => parseInt(c, 16)).join(', ') || '0, 255, 121'}, 0.3)` : 'rgba(0, 255, 121, 0.07)'}`,
          boxShadow: isHovered 
            ? `0 10px 30px rgba(0, 0, 0, 0.4), 0 0 30px rgba(${accentColor.replace('#', '').match(/../g)?.map(c => parseInt(c, 16)).join(', ') || '0, 255, 121'}, 0.1)`
            : '0 4px 30px rgba(0, 0, 0, 0.4)',
          transform: isHovered 
            ? `rotateX(${tiltPosition.y * -3}deg) rotateY(${tiltPosition.x * 3}deg) scale(1.01)`
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Card inner gradient overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${50 + tiltPosition.x * 50}% ${50 + tiltPosition.y * 50}%, rgba(${accentColor.replace('#', '').match(/../g)?.map(c => parseInt(c, 16)).join(', ') || '0, 255, 121'}, 0.4) 0%, rgba(0, 0, 0, 0) 70%)`,
          }}
        ></div>
        
        {/* Main content with larger font sizes */}
        <div className="relative p-6 h-full flex flex-col z-10">
          {/* Numbered step indicator */}
          <div className="absolute top-4 right-4 bg-opacity-80 rounded-full w-8 h-8 flex items-center justify-center font-bold" 
            style={{ backgroundColor: `${accentColor}20` }}>
            {title.includes("Discovery") ? "1" : 
             title.includes("Solution") ? "2" : 
             title.includes("Development") ? "3" : 
             title.includes("Monitoring") ? "4" : 
             title.includes("Testing") ? "5" : 
             title.includes("Launch") ? "6" : ""}
          </div>
          
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-3 text-white flex items-center">
              {title}
              {isHovered && (
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Stats with larger font */}
          {stats && (
            <div className="mt-3 mb-4">
              <div className="flex items-center text-sm text-gray-300 font-medium">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: accentColor }}></div>
                {stats}
              </div>
            </div>
          )}
          
          {/* Icon area with reduced 3D transform */}
          <div 
            className="mt-auto flex justify-center items-center"
            style={{
              transform: isHovered ? `translateZ(10px)` : 'translateZ(0px)',
            }}
          >
            {React.cloneElement(iconComponent, { isHovered })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Simplified Icon Components with reduced animations
const DiscoveryIcon: React.FC<IconProps> = ({ isHovered }) => (
  <div className="relative w-40 h-40">
    {/* Base glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full" 
        style={{ 
          background: 'radial-gradient(circle at center, rgba(0, 255, 121, 0.4) 0%, rgba(0, 255, 121, 0.05) 70%)',
          filter: 'blur(20px)',
          opacity: isHovered ? 0.8 : 0.5
        }}>
      </div>
    </div>
    
    {/* Target/Bullseye */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        {/* Concentric target circles */}
        <circle cx="50" cy="50" r="40" stroke="#00ff79" strokeWidth="2" strokeOpacity={isHovered ? "0.5" : "0.3"} />
        <circle cx="50" cy="50" r="30" stroke="#00ff79" strokeWidth="2" strokeOpacity={isHovered ? "0.7" : "0.5"} />
        <circle cx="50" cy="50" r="20" stroke="#00ff79" strokeWidth="2" strokeOpacity={isHovered ? "0.9" : "0.7"} />
        <circle cx="50" cy="50" r="10" fill="none" stroke="#00ff79" strokeWidth="2" strokeOpacity="0.9" />
        
        {/* Bullseye center point */}
        <circle cx="50" cy="50" r="5" fill="#00ff79" opacity={isHovered ? 1 : 0.8} />
        
        {/* Crosshair lines */}
        <line x1="50" y1="5" x2="50" y2="25" stroke="#00ff79" strokeWidth="2" strokeOpacity="0.8" />
        <line x1="50" y1="75" x2="50" y2="95" stroke="#00ff79" strokeWidth="2" strokeOpacity="0.8" />
        <line x1="5" y1="50" x2="25" y2="50" stroke="#00ff79" strokeWidth="2" strokeOpacity="0.8" />
        <line x1="75" y1="50" x2="95" y2="50" stroke="#00ff79" strokeWidth="2" strokeOpacity="0.8" />
      </svg>
    </div>
  </div>
);

const WireframeIcon: React.FC<IconProps> = ({ isHovered }) => (
  <div className="relative w-40 h-40">
    {/* Base glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-lg" 
        style={{ 
          background: 'radial-gradient(circle at center, rgba(0, 255, 121, 0.4) 0%, rgba(0, 255, 121, 0.05) 70%)',
          filter: 'blur(20px)',
          opacity: isHovered ? 0.8 : 0.5
        }}>
      </div>
    </div>
    
    {/* Main icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="20" width="60" height="60" rx="4" stroke="#00ff79" strokeWidth="2" strokeOpacity={isHovered ? 1 : 0.8} />
        <rect x="30" y="30" width="40" height="10" rx="2" stroke="#00ff79" strokeWidth="2" strokeOpacity={isHovered ? 0.8 : 0.6} />
        <rect x="30" y="45" width="40" height="5" rx="2" stroke="#00ff79" strokeWidth="2" strokeOpacity={isHovered ? 0.8 : 0.6} />
        <rect x="30" y="55" width="40" height="5" rx="2" stroke="#00ff79" strokeWidth="2" strokeOpacity={isHovered ? 0.8 : 0.6} />
        <rect x="30" y="65" width="20" height="5" rx="2" stroke="#00ff79" strokeWidth="2" strokeOpacity={isHovered ? 0.8 : 0.6} />
      </svg>
    </div>
  </div>
);

const DevelopmentIcon: React.FC<IconProps> = ({ isHovered }) => (
  <div className="relative w-40 h-40">
    {/* Base glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-lg" 
        style={{ 
          background: 'radial-gradient(circle at center, rgba(0, 255, 121, 0.4) 0%, rgba(0, 255, 121, 0.05) 70%)',
          filter: 'blur(20px)',
          opacity: isHovered ? 0.8 : 0.5
        }}>
      </div>
    </div>
    
    {/* Main icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path d="M30 40L20 50L30 60" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M70 40L80 50L70 60" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 20L40 80" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} strokeLinecap="round" />
      </svg>
    </div>
  </div>
);

// Enhanced Testing & QA Icon
const QAIcon: React.FC<IconProps> = ({ isHovered }) => (
  <div className="relative w-40 h-40">
    {/* Base glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full" 
        style={{ 
          background: 'radial-gradient(circle at center, rgba(0, 255, 121, 0.4) 0%, rgba(0, 255, 121, 0.05) 70%)',
          filter: 'blur(20px)',
          opacity: isHovered ? 0.8 : 0.5
        }}>
      </div>
    </div>
    
    {/* Main checklist icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        {/* Clipboard background */}
        <rect x="20" y="10" width="60" height="80" rx="4" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} />
        <rect x="30" y="4" width="40" height="12" rx="6" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} />
        
        {/* Checklist items */}
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i}>
            <rect 
              x="30" 
              y={25 + i * 12} 
              width="8" 
              height="8" 
              rx="2" 
              stroke="#00ff79" 
              strokeWidth="2" 
              fill={isHovered ? "#00ff79" : "none"}
            />
            <line 
              x1="45" 
              y1={29 + i * 12} 
              x2="70" 
              y2={29 + i * 12} 
              stroke="#00ff79" 
              strokeWidth="2" 
              strokeOpacity={0.8 - i * 0.1}
            />
          </g>
        ))}
      </svg>
    </div>
  </div>
);

const SupportIcon: React.FC<IconProps> = ({ isHovered }) => (
  <div className="relative w-40 h-40">
    {/* Base glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-lg" 
        style={{ 
          background: 'radial-gradient(circle at center, rgba(0, 255, 121, 0.4) 0%, rgba(0, 255, 121, 0.05) 70%)',
          filter: 'blur(20px)',
          opacity: isHovered ? 0.8 : 0.5
        }}>
      </div>
    </div>
    
    {/* Main icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
        <rect x="25" y="25" width="50" height="50" rx="4" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} />
        <path d="M35 40H65" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} strokeLinecap="round" />
        <path d="M35 50H65" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} strokeLinecap="round" />
        <path d="M35 60H55" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} strokeLinecap="round" />
        <path d="M25 15L75 15" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} strokeLinecap="round" />
        <path d="M25 85L75 85" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} strokeLinecap="round" />
        <path d="M15 25L15 75" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} strokeLinecap="round" />
        <path d="M85 25L85 75" stroke="#00ff79" strokeWidth={isHovered ? 3 : 2} strokeLinecap="round" />
      </svg>
    </div>
  </div>
);

const InfinityIcon: React.FC<IconProps> = ({ isHovered }) => (
  <div className="relative w-full h-40">
    {/* Background glow */}
    <div 
      className="absolute left-1/2 top-1/2 w-48 h-20 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        opacity: isHovered ? 0.6 : 0.4,
        background: 'linear-gradient(90deg, rgba(255, 107, 107, 0.4) 0%, rgba(0, 255, 121, 0.4) 50%, rgba(65, 88, 208, 0.4) 100%)',
        filter: 'blur(20px)',
        borderRadius: '40px'
      }}
    ></div>
  
    {/* SVG Infinity with gradient */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg 
        width="200" 
        height="80" 
        viewBox="0 0 200 80" 
        fill="none"
      >
        <path 
          d="M50 40 C 50 20, 70 20, 90 40 C 110 60, 130 60, 150 40 C 170 20, 190 20, 190 40 C 190 60, 170 60, 150 40 C 130 20, 110 20, 90 40 C 70 60, 50 60, 50 40 Z" 
          stroke="url(#gradient)" 
          strokeWidth={isHovered ? 4 : 3} 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="50%" stopColor="#00ff79" />
            <stop offset="100%" stopColor="#4158D0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

// Enhanced version with static appearance and larger text that accepts service-specific content
const EnhancedGlassFlowBentoGrid: React.FC<{ content?: ProcessContentProps }> = ({ content = defaultProcessContent }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      className="w-full py-16 px-4 relative overflow-hidden" 
      style={{ 
        minHeight: '90vh'
      }}
    >
      {/* Tech-themed background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#1a1b1f] overflow-hidden">
        {/* Tech-themed radial gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_30%)]" />
        </div>
        
        {/* Circuit Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
          <svg width="100%" height="100%" className="absolute">
            <pattern id="circuit-pattern-bento" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50h40c5.5 0 10 4.5 10 10s4.5 10 10 10h40M50 0v40c0 5.5 4.5 10 10 10s10 4.5 10 10v40"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-gray-400 dark:text-gray-600"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern-bento)" />
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
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header with larger text */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-bold mb-3 text-white">{content.serviceTitle}</h2>
          <h3 className="text-3xl font-bold mb-6 text-gray-300">{content.serviceSubtitle}</h3>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12">
            {content.introText}
          </p>
        </div>
        
        {/* Bento Grid Layout - First row with 3 boxes */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
        >
          <BentoBox
            title="Problem Discovery Audit"
            description={content.steps.discovery.description}
            iconComponent={<DiscoveryIcon isHovered={false} />}
            gridClass="col-span-1"
            stats={content.steps.discovery.stats}
          />
          
          <BentoBox
            title="Custom Solution Plan"
            description={content.steps.solution.description}
            iconComponent={<WireframeIcon isHovered={false} />}
            gridClass="col-span-1"
            stats={content.steps.solution.stats}
          />
          
          <BentoBox
            title="Development"
            description={content.steps.development.description}
            iconComponent={<DevelopmentIcon isHovered={false} />}
            gridClass="col-span-1"
            stats={content.steps.development.stats}
          />
        </div>
        
        {/* Second row - 3 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <BentoBox
            title="Real-time Monitoring"
            description={content.steps.monitoring.description}
            iconComponent={<SupportIcon isHovered={false} />}
            gridClass="col-span-1"
            accentColor="#4158D0"
            stats={content.steps.monitoring.stats}
          />
          
          <BentoBox
            title="Advanced Testing & QA"
            description={content.steps.testing.description}
            iconComponent={<QAIcon isHovered={false} />}
            gridClass="col-span-1"
            accentColor="#00ff79"
            stats={content.steps.testing.stats}
          />
          
          <BentoBox
            title="Launch & Support"
            description={content.steps.launch.description}
            iconComponent={<InfinityIcon isHovered={false} />}
            gridClass="col-span-1"
            stats={content.steps.launch.stats}
          />
        </div>
        
        {/* Footer - CTA with larger text */}
        <div className="mt-16 text-center relative">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-3 text-white">{content.ctaText?.split('.')[0] || "Custom Software Solutions in One Place"}</h2>
            <h3 className="text-2xl font-bold mb-6 text-gray-300">{content.ctaText?.split('.').slice(1).join('.').trim() || "No Hassle. No Complexity. Just Results."}</h3>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              A serverless and production-ready setup that empowers everyone in your business to save time and eliminate manual tasks.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <button 
              className="text-white text-lg font-bold py-4 px-10 rounded-lg transition-all duration-300"
              style={{ 
                background: 'linear-gradient(90deg, #00ff79 0%, #00cc61 100%)'
              }}
            >
              <span>{content.ctaButtonText || "Try for free"}</span>
            </button>
            
            <button 
              className="text-white text-lg font-bold py-4 px-10 rounded-lg transition-all duration-300"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <span>Documentation →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedGlassFlowBentoGrid;