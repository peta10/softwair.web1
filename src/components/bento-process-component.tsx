import React, { useState, useEffect, useRef } from 'react';
import './bento-process-animations.css';

// Interface for icon components
interface IconProps {
  isHovered: boolean;
}

// Enhanced version with premium features
const EnhancedGlassFlowBentoGrid: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [, setActiveSection] = useState(0); // Used to track scroll position
    const gridRef = useRef<HTMLDivElement>(null);
    
    // Parallax scroll effect and section detection
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
        
        // Update active section based on scroll position
        if (gridRef.current) {
          const rect = gridRef.current.getBoundingClientRect();
          const gridCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          
          // Normalize position - 0 when grid center is at viewport center
          const relativePos = (gridCenter - viewportCenter) / rect.height;
          
          // Map to section index
          if (relativePos < -0.3) {
            setActiveSection(5); // Footer
          } else if (relativePos < -0.1) {
            setActiveSection(4); // Bottom row
          } else if (relativePos < 0.1) {
            setActiveSection(3); // Middle
          } else if (relativePos < 0.3) {
            setActiveSection(2); // Top row
          } else if (relativePos < 0.5) {
            setActiveSection(1); // Header
          } else {
            setActiveSection(0); // Above grid
          }
        }
      };
      
      // Check for reduced motion preference
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Custom cursor position
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };
    
    const handleMouseLeave = () => {
      setCursorVisible(false);
    };
    
    useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);
    
    // Feature metrics/stats
    const stats = [
      "97% reduction in manual tasks",
      "Average 30+ hours saved per month",
      "Custom integration with 150+ tools",
      "Ready to deploy in 2-3 weeks"
    ];
    
    return (
      <div 
        className="w-full py-16 px-4 relative overflow-hidden" 
        style={{ 
          backgroundColor: '#1a1b1f',
          minHeight: '100vh'
        }}
      >
        {/* Custom cursor */}
        {cursorVisible && !prefersReducedMotion && (
          <div
            className="fixed w-6 h-6 rounded-full pointer-events-none z-50 hidden md:block mix-blend-difference"
            style={{
              border: '2px solid #00ff79',
              transform: 'translate(-50%, -50%)',
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transition: 'width 0.2s, height 0.2s, opacity 0.2s, border 0.2s',
              opacity: 0.6
            }}
          >
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                backgroundColor: '#00ff79',
              }}
            />
          </div>
        )}
        
        {/* Background parallax effect */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            opacity: 0.03,
            backgroundImage: 'radial-gradient(circle at center, #00ff79 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: !prefersReducedMotion ? `translateY(${scrollY * 0.1}px)` : 'none'
          }}
        />
        
        {/* Animated particles */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => {
              const size = Math.random() * 3 + 1;
              const startY = Math.random() * 100;
              const startX = Math.random() * 100;
              const duration = Math.random() * 20 + 10;
              
              return (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: '#00ff79',
                    top: `${startY}%`,
                    left: `${startX}%`,
                    opacity: 0.2,
                    filter: 'blur(1px)',
                    animation: `float-around ${duration}s infinite ease-in-out`,
                    animationDelay: `${i * -2}s`
                  }}
                ></div>
              );
            })}
          </div>
        )}
        
        <div className="max-w-6xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#00ff79" strokeWidth="1">
              <circle cx="50" cy="50" r="40" />
              <circle cx="50" cy="50" r="30" />
              <circle cx="50" cy="50" r="20" />
              <path d="M50 10V90M10 50H90" />
            </svg>
          </div>
          <div className="absolute bottom-40 left-10 opacity-10 hidden lg:block">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#00ff79" strokeWidth="1">
              <rect x="10" y="10" width="80" height="80" />
              <rect x="25" y="25" width="50" height="50" />
              <rect x="40" y="40" width="20" height="20" />
            </svg>
          </div>
          
          {/* Audio wave animation (suggestion of sound) */}
          <div className="absolute top-60 right-20 opacity-10 hidden lg:block">
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
              {Array.from({ length: 6 }).map((_, i) => (
                <rect 
                  key={i}
                  x={i * 10}
                  y="15"
                  width="3"
                  height="15"
                  fill="#00ff79"
                  style={{
                    transformOrigin: 'bottom',
                    animation: `sound-wave 1.5s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                    transform: 'scaleY(0.3)'
                  }}
                />
              ))}
            </svg>
          </div>
          
          {/* Brand Code Symbol */}
          <div className="absolute -bottom-10 right-5 opacity-5 lg:opacity-10 hidden lg:block" style={{ transform: 'rotate(10deg)' }}>
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="#00ff79" strokeWidth="0.5">
              <path d="M25 33.3L50 16.7L75 33.3V66.7L50 83.3L25 66.7V33.3Z" />
              <path d="M50 16.7V50M25 33.3L50 50M50 50L75 33.3M50 50V83.3" />
            </svg>
          </div>
          
          {/* Accessibility controls */}
          <div className="flex justify-end mb-8">
            <button 
              className="text-xs text-gray-500 hover:text-white transition-colors duration-300 flex items-center"
            onClick={() => setPrefersReducedMotion(!prefersReducedMotion)}
          >
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4v16m-8-8h16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
            {prefersReducedMotion ? "Enable animations" : "Reduce motion"}
          </button>
      </div>
      
        {/* Bento Grid Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" 
            style={{
              backgroundColor: 'rgba(0, 255, 121, 0.1)', 
              color: '#00ff79',
              border: '1px solid rgba(0, 255, 121, 0.3)'
            }}>
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How We Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our streamlined, proven process to turn your manual tasks into an automated solution.
          </p>
        </div>
        
        {/* Bento Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          {/* Process Step 1 */}
          <BentoBox 
            title="Problem Discovery Audit"
            description="We identify your pain points and manual tasks through a comprehensive discovery process"
            iconComponent={<DiscoveryIcon isHovered={false} />}
            gridClass="lg:col-span-2"
            stats={stats[0]}
            index={0}
          />
          
          {/* Process Step 2 */}
          <BentoBox 
            title="Custom Solution Plan"
            description="We create a detailed wireframe and proposal tailored specifically to solve your business challenges"
            iconComponent={<WireframeIcon isHovered={false} />}
            gridClass=""
            stats={stats[1]}
            index={1}
          />
          
          {/* Process Step 3 */}
          <BentoBox 
            title="Development"
            description="Our experts build your custom solution with ongoing communication throughout the development process"
            iconComponent={<DevelopmentIcon isHovered={false} />}
            gridClass="lg:col-span-2"
            stats={stats[2]}
            index={2}
          />
          
          {/* Process Step 4 */}
          <BentoBox 
            title="Advanced Testing & QA"
            description="Rigorous quality assurance testing ensures your solution is bug-free and works flawlessly before launch"
            iconComponent={<TestingIcon isHovered={false} />}
            gridClass=""
            stats="99.9% reliability ratings"
            index={3}
          />
          
          {/* Process Step 5 */}
          <BentoBox 
            title="Launch & Support"
            description="We deliver your solution and provide ongoing maintenance to ensure it grows with your business"
            iconComponent={<LaunchIcon isHovered={false} />}
            gridClass="lg:col-span-3"
            stats={stats[3]}
            index={4}
          />
              </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button
            className="px-8 py-4 rounded-lg font-bold text-black transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#00ff79',
              boxShadow: '0 0 25px rgba(0, 255, 121, 0.5)'
            }}
          >
            Start Your Problem Discovery Audit →
          </button>
          </div>
        </div>
    </div>
  );
};

// Enhanced Problem Discovery (Bullseye)
const DiscoveryIcon: React.FC<IconProps> = ({ isHovered }) => {
  const [targetLocked, setTargetLocked] = useState(false);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      timer = setTimeout(() => {
        setTargetLocked(true);
      }, 1500);
    } else {
      setTargetLocked(false);
    }
    
    return () => clearTimeout(timer);
  }, [isHovered]);
  
  return (
    <div className="relative w-40 h-40">
      {/* Base glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(0, 255, 121, 0.4) 0%, rgba(0, 255, 121, 0.05) 70%)',
            filter: 'blur(20px)',
            animation: 'pulse 4s ease-in-out infinite'
          }}>
        </div>
      </div>
      
      {/* Radar sweep animation */}
      {isHovered && !targetLocked && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-full h-full origin-center" style={{ 
                animation: 'radar-sweep 3s linear infinite',
              }}>
                <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{
                  background: 'linear-gradient(90deg, transparent, rgba(0, 255, 121, 0.5))',
                  transform: 'rotate(0deg)',
                  transformOrigin: 'bottom center',
                  borderTopRightRadius: '100%',
                  opacity: 0.6
                }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hidden problems revealed by scan */}
      {isHovered && !targetLocked && Array.from({ length: 6 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 6;
        const distance = 30 + Math.random() * 10;
        const x = 50 + Math.cos(angle) * distance;
        const y = 50 + Math.sin(angle) * distance;
        
        return (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              backgroundColor: `rgba(255, ${Math.floor(Math.random()*100)}, ${Math.floor(Math.random()*100)}, 0.6)`,
              transform: 'translate(-50%, -50%)',
              opacity: 0,
              animation: `problem-appear 0.5s ease-out forwards`,
              animationDelay: `${i * 0.4 + 0.2}s`,
              boxShadow: '0 0 10px rgba(255, 0, 0, 0.3)',
            }}
          ></div>
        );
      })}
      
      {/* Target/Bullseye animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="transition-all duration-300" style={{ 
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          filter: targetLocked ? 'drop-shadow(0 0 8px rgba(0, 255, 121, 0.7))' : 'none'
        }}>
          {/* Concentric target circles */}
          <circle 
            cx="50" cy="50" r="40" 
            stroke="#00ff79" 
            strokeWidth="2" 
            strokeOpacity="0.3" 
            strokeDasharray={isHovered ? "0" : "251.2"}
            strokeDashoffset={isHovered ? "0" : "251.2"}
            style={{ 
              animation: isHovered ? 'draw-circle 1s ease-in-out forwards' : 'none',
            }}
          />
          <circle 
            cx="50" cy="50" r="30" 
            stroke="#00ff79" 
            strokeWidth="2" 
            strokeOpacity="0.5" 
            strokeDasharray={isHovered ? "0" : "188.4"}
            strokeDashoffset={isHovered ? "0" : "188.4"}
            style={{ 
              animation: isHovered ? 'draw-circle 1s ease-in-out forwards 0.2s' : 'none',
            }}
          />
          <circle 
            cx="50" cy="50" r="20" 
            stroke="#00ff79" 
            strokeWidth="2" 
            strokeOpacity="0.7" 
            strokeDasharray={isHovered ? "0" : "125.6"}
            strokeDashoffset={isHovered ? "0" : "125.6"}
            style={{ 
              animation: isHovered ? 'draw-circle 1s ease-in-out forwards 0.4s' : 'none',
            }}
          />
          <circle 
            cx="50" cy="50" r="10" 
            fill="none"
            stroke="#00ff79" 
            strokeWidth="2"
            strokeOpacity="0.9"
            strokeDasharray={isHovered ? "0" : "62.8"}
            strokeDashoffset={isHovered ? "0" : "62.8"}
            style={{ 
              animation: isHovered ? 'draw-circle 1s ease-in-out forwards 0.6s' : 'none',
            }}
          />
          
          {/* Bullseye center point */}
          {targetLocked && (
            <circle 
              cx="50" cy="50" r="5" 
              fill="#00ff79" 
              style={{
                animation: 'pulse-scale 1s ease-in-out infinite',
                filter: 'drop-shadow(0 0 5px #00ff79)'
              }}
            />
          )}
          
          {/* Moving crosshair animation */}
          {isHovered && !targetLocked && (
            <>
              <line 
                x1="50" y1="10" x2="50" y2="90" 
                stroke="#00ff79" 
                strokeWidth="1" 
                strokeOpacity="0.5"
                strokeDasharray="2 2"
                style={{ 
                  animation: 'crosshair-move-x 1.5s ease-in-out infinite alternate',
                }}
              />
              <line 
                x1="10" y1="50" x2="90" y2="50" 
                stroke="#00ff79" 
                strokeWidth="1" 
                strokeOpacity="0.5"
                strokeDasharray="2 2"
                style={{ 
                  animation: 'crosshair-move-y 1.5s ease-in-out infinite alternate',
                }}
              />
            </>
          )}
          
          {/* Locked crosshair lines */}
          {targetLocked && (
            <>
              <line 
                x1="50" y1="10" x2="50" y2="90" 
                stroke="#00ff79" 
                strokeWidth="1.5" 
                strokeOpacity="0.8"
                style={{ animation: 'pulse-opacity 2s ease-in-out infinite' }}
              />
              <line 
                x1="10" y1="50" x2="90" y2="50" 
                stroke="#00ff79" 
                strokeWidth="1.5" 
                strokeOpacity="0.8"
                style={{ animation: 'pulse-opacity 2s ease-in-out infinite' }}
              />
            </>
          )}
        </svg>
      </div>
      
      {/* Converging crosshairs on lock */}
      {isHovered && !targetLocked && (
        <>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 w-px h-8 bg-green-500 opacity-50 left-1/2 transform -translate-x-1/2" 
              style={{ animation: 'converge-y 1.5s ease-in-out infinite' }}></div>
            <div className="absolute bottom-0 w-px h-8 bg-green-500 opacity-50 left-1/2 transform -translate-x-1/2" 
              style={{ animation: 'converge-y 1.5s ease-in-out infinite' }}></div>
            <div className="absolute left-0 h-px w-8 bg-green-500 opacity-50 top-1/2 transform -translate-y-1/2" 
              style={{ animation: 'converge-x 1.5s ease-in-out infinite' }}></div>
            <div className="absolute right-0 h-px w-8 bg-green-500 opacity-50 top-1/2 transform -translate-y-1/2" 
              style={{ animation: 'converge-x 1.5s ease-in-out infinite' }}></div>
          </div>
        </>
      )}
      
      {/* Data points flying to center when target is locked */}
      {targetLocked && Array.from({ length: 8 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 8;
        const startDistance = 50;
        const x = 50 + Math.cos(angle) * startDistance;
        const y = 50 + Math.sin(angle) * startDistance;
        
        return (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              opacity: 0.8,
              animation: `fly-to-center 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
              animationDelay: `${i * 0.05}s`,
            }}
          ></div>
        );
      })}
      
      {/* Lock-on effect */}
      {targetLocked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full" style={{
            border: '2px solid #00ff79',
            animation: 'lock-on-pulse 1s cubic-bezier(0.22, 1, 0.36, 1) forwards'
          }}></div>
        </div>
      )}
      
      {/* Target status text */}
      {targetLocked ? (
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white bg-black bg-opacity-30 px-2 py-1 rounded"
          style={{
            animation: 'fade-in-up 0.5s ease-in-out forwards',
            background: 'rgba(0, 255, 121, 0.3)',
            border: '1px solid rgba(0, 255, 121, 0.3)',
            boxShadow: '0 0 10px rgba(0, 255, 121, 0.2)'
          }}
        >
          <span style={{ color: '#00ff79' }}>● </span>
          Target Acquired
        </div>
      ) : isHovered ? (
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white bg-black bg-opacity-30 px-2 py-1 rounded"
          style={{
            animation: 'fade-in-up 0.5s ease-in-out forwards'
          }}
        >
          <span className="inline-block" style={{ animation: 'blink 1s ease-in-out infinite' }}>●</span> Scanning...
        </div>
      ) : null}
    </div>
  );
};

// Launch & Support Icon with Rocket Animation
const LaunchIcon: React.FC<IconProps> = ({ isHovered }) => {
  const [launchState, setLaunchState] = useState('idle');
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      // Launch sequence
      setLaunchState('preparing');
      timer = setTimeout(() => {
        setLaunchState('countdown');
        setTimeout(() => {
          setLaunchState('launch');
          setTimeout(() => {
            setLaunchState('orbit');
          }, 2000);
        }, 1500);
      }, 500);
    } else {
      setLaunchState('idle');
    }
    
    return () => clearTimeout(timer);
  }, [isHovered]);
  
  return (
    <div className="relative w-44 h-44">
      {/* Base glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-36 h-36 rounded-full" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(0, 255, 121, 0.4) 0%, rgba(0, 255, 121, 0.05) 70%)',
            filter: 'blur(20px)'
          }}>
        </div>
      </div>
      
      {/* Launch pad */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-gray-700 rounded-lg"
        style={{
          boxShadow: launchState === 'launch' ? '0 0 15px rgba(0, 255, 121, 0.7)' : 'none',
          transition: 'all 0.5s ease-in-out'
        }}
      ></div>
      
      {/* Rocket */}
      <div className="absolute left-1/2 transform -translate-x-1/2"
        style={{
          bottom: launchState === 'idle' ? '6px' : 
                  launchState === 'preparing' ? '6px' :
                  launchState === 'countdown' ? '8px' :
                  launchState === 'launch' ? '60px' : '120px',
          transition: launchState === 'launch' ? 'bottom 2s cubic-bezier(0.5, 0, 0.75, 0)' : 'bottom 0.3s ease-in-out',
          animation: launchState === 'countdown' ? 'rocket-prepare 0.2s ease-in-out infinite alternate' : 'none'
        }}
      >
        <svg width="24" height="48" viewBox="0 0 24 48" fill="none">
          {/* Rocket body */}
          <path d="M12 2L4 18V38H20V18L12 2Z" fill="#1a1b1f" stroke="#00ff79" strokeWidth="1.5" />
          {/* Rocket window */}
          <circle cx="12" cy="18" r="3" fill="rgba(0, 255, 121, 0.3)" stroke="#00ff79" strokeWidth="1" />
          {/* Rocket fins */}
          <path d="M4 30L0 35V38H4" stroke="#00ff79" strokeWidth="1.5" fill="#1a1b1f" />
          <path d="M20 30L24 35V38H20" stroke="#00ff79" strokeWidth="1.5" fill="#1a1b1f" />
          {/* Rocket bottom */}
          <path d="M7 38H17L15 42H9L7 38Z" fill="#1a1b1f" stroke="#00ff79" strokeWidth="1.5" />
          
          {/* Rocket flame */}
          {(launchState === 'countdown' || launchState === 'launch' || launchState === 'orbit') && (
            <>
              <path 
                d="M10 42C10 45 12 48 12 48C12 48 14 45 14 42C14 40.9 13.1 40 12 40C10.9 40 10 40.9 10 42Z"
                fill="#00ff79"
                style={{
                  animation: 'flame-flicker 0.2s ease-in-out infinite alternate',
                  transformOrigin: 'center bottom'
                }}
              />
              <path 
                d="M11 43C11 44.5 12 46 12 46C12 46 13 44.5 13 43C13 42.45 12.55 42 12 42C11.45 42 11 42.45 11 43Z"
                fill="white"
                style={{
                  animation: 'flame-flicker 0.15s ease-in-out infinite alternate',
                  transformOrigin: 'center bottom',
                  animationDelay: '0.1s'
                }}
              />
            </>
          )}
        </svg>
      </div>
      
      {/* Countdown display */}
      {launchState === 'countdown' && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-bold text-green-400 mb-1"
            style={{
              fontFamily: 'monospace',
              animation: 'countdown 1.5s steps(3, end) forwards'
            }}
          >
            3
          </div>
          <div className="text-xs text-green-400">LAUNCHING</div>
        </div>
      )}
      
      {/* Launch effect */}
      {launchState === 'launch' && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-24" style={{
            background: 'radial-gradient(ellipse at top, rgba(0, 255, 121, 0.7) 0%, rgba(0, 255, 121, 0) 70%)',
            animation: 'launch-plume 2s forwards'
          }}></div>
        </div>
      )}
      
      {/* Orbit visualization */}
      {launchState === 'orbit' && (
        <div className="absolute inset-0">
          {/* Planet/target */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #1a1b1f 0%, #252630 100%)',
              boxShadow: 'inset 1px 1px 5px rgba(255, 255, 255, 0.1), 0 0 20px rgba(0, 255, 121, 0.2)',
              border: '1px solid rgba(0, 255, 121, 0.2)'
            }}
          ></div>
          
          {/* Orbit path */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
            style={{
              border: '1px dashed rgba(0, 255, 121, 0.3)',
              animation: 'rotate 10s linear infinite'
            }}
          ></div>
          
          {/* Satellite in orbit */}
          <div className="absolute w-6 h-6"
            style={{
              top: '28%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'orbit-circle 5s linear infinite'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="6" y="8" width="12" height="8" fill="#1a1b1f" stroke="#00ff79" strokeWidth="1.5" />
              <rect x="8" y="6" width="8" height="2" fill="#1a1b1f" stroke="#00ff79" strokeWidth="1" />
              <rect x="8" y="16" width="8" height="2" fill="#1a1b1f" stroke="#00ff79" strokeWidth="1" />
              <path d="M10 10h4M10 12h4M10 14h2" stroke="#00ff79" strokeWidth="1" />
            </svg>
          </div>
          
          {/* Success indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-white px-2 py-1 rounded"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              border: '1px solid rgba(0, 255, 121, 0.3)',
            }}
          >
            <span className="text-green-400">● </span>
            System Online
          </div>
          
          {/* User happiness meter */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32">
            <div className="text-center text-xs text-white mb-1">User Satisfaction</div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-300 to-green-500"
                style={{
                  width: '0%',
                  animation: 'satisfaction-fill 2s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Status label */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white px-2 py-1 rounded-full"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          background: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 255, 121, 0.3)',
        }}
      >
        {launchState === 'idle' ? 'Ready for launch' : 
         launchState === 'preparing' ? 'Preparing...' : 
         launchState === 'countdown' ? 'Countdown...' : 
         launchState === 'launch' ? 'Launching!' : 
         'Deployed Successfully!'}
      </div>
    </div>
  );
};

// Enhanced Wireframe Icon with Blueprint Animation
const WireframeIcon: React.FC<IconProps> = ({ isHovered }) => {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      // Progress through animation stages
      timer = setTimeout(() => {
        setAnimationStage(1);
        setTimeout(() => {
          setAnimationStage(2);
          setTimeout(() => {
            setAnimationStage(3);
          }, 800);
        }, 1000);
      }, 300);
    } else {
      setAnimationStage(0);
    }
    
    return () => clearTimeout(timer);
  }, [isHovered]);
  
  return (
    <div className="relative w-44 h-44">
      {/* Base glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-36 h-36 rounded-lg" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(0, 255, 121, 0.4) 0%, rgba(0, 255, 121, 0.05) 70%)',
            filter: 'blur(20px)'
          }}>
        </div>
      </div>
      
      {/* Blueprint grid */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full absolute" 
          style={{
            opacity: isHovered ? 0.2 : 0,
            transition: 'opacity 0.5s ease-in-out',
            backgroundImage: 'linear-gradient(to right, rgba(0, 255, 121, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 121, 0.3) 1px, transparent 1px)',
            backgroundSize: '8px 8px',
          }}
        ></div>
      </div>
      
      {/* Main wireframe with staged animations */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="transition-transform duration-300" style={{ 
          transform: isHovered ? 'scale(1.1) rotateY(10deg)' : 'scale(1) rotateY(0deg)',
          transformStyle: 'preserve-3d',
          perspective: '800px'
        }}>
          {/* Device outline */}
          <rect 
            x="20" y="10" 
            width="80" height="100" 
            rx="4" 
            stroke="#00ff79" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray={isHovered ? "0" : "360"}
            strokeDashoffset={isHovered ? "0" : "360"}
            style={{ 
              animation: isHovered ? 'draw-rect 0.8s ease-in-out forwards' : 'none',
            }}
          />
          
          {/* Screen area */}
          <rect 
            x="25" y="20" 
            width="70" height="80" 
            stroke="#00ff79" 
            strokeWidth="1" 
            strokeOpacity="0.7"
            strokeDasharray={isHovered && animationStage >= 1 ? "0" : "300"}
            strokeDashoffset={isHovered && animationStage >= 1 ? "0" : "300"}
            style={{ 
              animation: isHovered && animationStage >= 1 ? 'draw-rect 0.6s ease-in-out forwards' : 'none',
              animationDelay: '0.8s'
            }}
          />
          
          {/* Header bar */}
          <rect 
            x="25" y="20" 
            width="70" height="10" 
            stroke="#00ff79" 
            strokeWidth="1" 
            strokeOpacity="0.8"
            fill="rgba(0, 255, 121, 0.1)"
            strokeDasharray={isHovered && animationStage >= 2 ? "0" : "160"}
            strokeDashoffset={isHovered && animationStage >= 2 ? "0" : "160"}
            style={{ 
              animation: isHovered && animationStage >= 2 ? 'draw-rect 0.4s ease-in-out forwards' : 'none',
              animationDelay: '1.2s'
            }}
          />
          
          {/* Content blocks - conditional rendering based on animation stage */}
          {(animationStage >= 2) && (
            <>
              <rect 
                x="30" y="35" 
                width="60" height="8" 
                fill="none"
                stroke="#00ff79" 
                strokeWidth="1" 
                strokeOpacity="0.6"
                strokeDasharray="136"
                strokeDashoffset={isHovered ? "0" : "136"}
                style={{ 
                  animation: isHovered ? 'draw-rect 0.3s ease-in-out forwards' : 'none',
                  animationDelay: '1.4s'
                }}
              />
              
              <rect 
                x="30" y="48" 
                width="40" height="6" 
                fill="none"
                stroke="#00ff79" 
                strokeWidth="1" 
                strokeOpacity="0.5"
                strokeDasharray="92"
                strokeDashoffset={isHovered ? "0" : "92"}
                style={{ 
                  animation: isHovered ? 'draw-rect 0.3s ease-in-out forwards' : 'none',
                  animationDelay: '1.6s'
                }}
              />
            </>
          )}
          
          {/* UI Elements - only shown in final stage */}
          {(animationStage >= 3) && (
            <>
              <rect 
                x="30" y="60" 
                width="25" height="25" 
                rx="2"
                fill="none"
                stroke="#00ff79" 
                strokeWidth="1" 
                strokeOpacity="0.7"
                style={{ 
                  animation: 'fade-in 0.3s ease-in-out forwards',
                  animationDelay: '2.0s'
                }}
              />
              
              <rect 
                x="30" y="90" 
                width="60" height="6" 
                rx="1"
                fill="none"
                stroke="#00ff79" 
                strokeWidth="1" 
                strokeOpacity="0.6"
                style={{ 
                  animation: 'fade-in 0.3s ease-in-out forwards',
                  animationDelay: '2.2s'
                }}
              />
            </>
          )}
          
          {/* Home button */}
          <circle 
            cx="60" cy="105" 
            r="3" 
            stroke="#00ff79" 
            strokeWidth="1" 
            strokeOpacity="0.8"
            fill="none"
            style={{ 
              animation: isHovered ? 'fade-in 0.5s ease-in-out forwards' : 'none',
              animationDelay: '2.3s'
            }}
          />
        </svg>
      </div>
      
      {/* Drawing cursor animation */}
      {isHovered && (
        <div className="absolute w-3 h-3 pointer-events-none" style={{
          borderRadius: '50%',
          border: '2px solid #00ff79',
          transform: 'translate(-50%, -50%)',
          animation: animationStage === 0 ? 'cursor-device-outline 0.8s linear forwards' :
                     animationStage === 1 ? 'cursor-screen-area 0.6s linear forwards' :
                     animationStage === 2 ? 'cursor-header 0.8s linear forwards' :
                     'cursor-elements 1.2s linear forwards',
          opacity: 0.8
        }}></div>
      )}
      
      {/* Annotation labels */}
      {isHovered && animationStage >= 3 && (
        <>
          <div className="absolute text-xs text-green-400 font-mono" style={{
            top: '20%',
            right: '10%',
            animation: 'fade-in 0.3s ease-in-out forwards',
            animationDelay: '2.4s',
            textShadow: '0 0 5px rgba(0, 255, 121, 0.5)'
          }}>
            // Header
          </div>
          
          <div className="absolute text-xs text-green-400 font-mono" style={{
            bottom: '40%',
            left: '10%',
            animation: 'fade-in 0.3s ease-in-out forwards',
            animationDelay: '2.5s',
            textShadow: '0 0 5px rgba(0, 255, 121, 0.5)'
          }}>
            // Content
          </div>
          
          <div className="absolute text-xs text-green-400 font-mono" style={{
            bottom: '10%',
            right: '15%',
            animation: 'fade-in 0.3s ease-in-out forwards',
            animationDelay: '2.6s',
            textShadow: '0 0 5px rgba(0, 255, 121, 0.5)'
          }}>
            // Navigation
          </div>
        </>
      )}
      
      {/* Status label */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white px-2 py-1 rounded-full"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          background: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 255, 121, 0.3)',
        }}
      >
        {animationStage === 0 ? 'Drawing outlines...' : 
         animationStage === 1 ? 'Adding screens...' : 
         animationStage === 2 ? 'Creating layout...' : 'Finalizing wireframe'}
      </div>
    </div>
  );
};

// Add a new DevelopmentIcon component after the WireframeIcon component
const DevelopmentIcon: React.FC<IconProps> = ({ isHovered }) => {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      // Progress through animation stages
      timer = setTimeout(() => {
        setAnimationStage(1);
        setTimeout(() => {
          setAnimationStage(2);
          setTimeout(() => {
            setAnimationStage(3);
          }, 800);
        }, 1000);
      }, 300);
    } else {
      setAnimationStage(0);
    }
    
    return () => clearTimeout(timer);
  }, [isHovered]);
  
  return (
    <div className="relative w-44 h-44">
      {/* Base glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-36 h-36 rounded-lg" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(0, 255, 121, 0.4) 0%, rgba(0, 255, 121, 0.05) 70%)',
            filter: 'blur(20px)'
          }}>
        </div>
      </div>
      
      {/* Code editor background */}
      <div className="absolute inset-10 rounded-lg overflow-hidden" style={{
        backgroundColor: '#1a1b1f',
        border: '1px solid rgba(0, 255, 121, 0.3)',
        boxShadow: isHovered ? '0 0 15px rgba(0, 255, 121, 0.3)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        {/* Editor header */}
        <div className="h-6 bg-black bg-opacity-30 flex items-center px-2">
          <div className="flex space-x-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500 opacity-80"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-80"></div>
            <div className="w-2 h-2 rounded-full bg-green-500 opacity-80"></div>
          </div>
          <div className="text-xs text-center flex-grow text-gray-400 font-mono">
            {isHovered && animationStage >= 1 ? "app.js" : ""}
          </div>
        </div>
        
        {/* Code content */}
        <div className="p-3 text-left font-mono text-xs overflow-hidden" style={{
          height: 'calc(100% - 1.5rem)',
          opacity: isHovered ? 1 : 0.7,
          transform: isHovered ? 'translateY(0)' : 'translateY(5px)',
          transition: 'all 0.5s ease'
        }}>
          {/* Line numbers */}
          <div className="absolute left-3 top-9 text-gray-600 select-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-4">{i + 1}</div>
            ))}
          </div>
          
          {/* Actual code - animated appearance */}
          <div className="ml-5">
            <div className="h-4 flex items-center" style={{
              opacity: animationStage >= 1 ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}>
              <span className="text-purple-400">function</span> <span className="text-blue-400">createApp</span><span className="text-gray-400">() {'{'}</span>
            </div>
            <div className="h-4 flex items-center" style={{
              opacity: animationStage >= 1 ? 1 : 0,
              transition: 'opacity 0.3s ease',
              transitionDelay: '0.1s'
            }}>
              <span className="ml-4 text-purple-400">const</span> <span className="text-blue-300">app</span> <span className="text-gray-400">=</span> <span className="text-purple-400">new</span> <span className="text-green-400">App</span><span className="text-gray-400">();</span>
            </div>
            <div className="h-4 flex items-center" style={{
              opacity: animationStage >= 2 ? 1 : 0,
              transition: 'opacity 0.3s ease',
              transitionDelay: '0.2s'
            }}>
              <span className="ml-4 text-blue-300">app</span><span className="text-gray-400">.</span><span className="text-yellow-400">init</span><span className="text-gray-400">();</span>
            </div>
            <div className="h-4 flex items-center" style={{
              opacity: animationStage >= 2 ? 1 : 0,
              transition: 'opacity 0.3s ease',
              transitionDelay: '0.3s'
            }}></div>
            <div className="h-4 flex items-center" style={{
              opacity: animationStage >= 3 ? 1 : 0,
              transition: 'opacity 0.3s ease',
              transitionDelay: '0.4s'
            }}>
              <span className="ml-4 text-purple-400">return</span> <span className="text-blue-300">app</span><span className="text-gray-400">;</span>
            </div>
            <div className="h-4 flex items-center" style={{
              opacity: animationStage >= 3 ? 1 : 0,
              transition: 'opacity 0.3s ease',
              transitionDelay: '0.5s'
            }}>
              <span className="text-gray-400">{'}'}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Typing cursor animation */}
      {isHovered && animationStage >= 1 && (
        <div className="absolute bg-green-400" style={{
          left: `${animationStage >= 3 ? '94px' : '60px'}`,
          top: `${24 + (animationStage >= 3 ? 20 : (animationStage >= 2 ? 12 : 8))*1.5}px`,
          width: '1px',
          height: '12px',
          opacity: 0.7,
          transform: 'translateY(-50%)',
          animation: 'blink 1s step-end infinite',
          transition: 'all 0.4s ease'
        }}></div>
      )}
      
      {/* Build success indicator */}
      {isHovered && animationStage >= 3 && (
        <div className="absolute bottom-4 right-5 bg-black bg-opacity-70 rounded text-green-400 text-xs px-2 py-1 flex items-center" style={{
          border: '1px solid rgba(0, 255, 121, 0.3)',
          animation: 'fade-in 0.5s ease-in-out forwards'
        }}>
          <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse"></div>
          Build Success
        </div>
      )}
      
      {/* Status label */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white px-2 py-1 rounded-full"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          background: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 255, 121, 0.3)',
        }}
      >
        {animationStage === 0 ? 'Starting IDE...' : 
         animationStage === 1 ? 'Writing code...' : 
         animationStage === 2 ? 'Adding functionality...' : 'Build complete'}
      </div>
    </div>
  );
};

// Add a QA Testing Icon
const TestingIcon: React.FC<IconProps> = ({ isHovered }) => {
  const [testProgress, setTestProgress] = useState(0);
  
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    
    if (isHovered) {
      // Progress through animation stages
      const interval = setInterval(() => {
        setTestProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 20;
        });
      }, 400);
      
      // Store interval ID for cleanup
      timer = interval;
    } else {
      setTestProgress(0);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isHovered]);
  
  return (
    <div className="relative w-44 h-44">
      {/* Base glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-36 h-36 rounded-full" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(0, 255, 121, 0.4) 0%, rgba(0, 255, 121, 0.05) 70%)',
            filter: 'blur(20px)'
          }}>
        </div>
      </div>
      
      {/* Testing dashboard */}
      <div className="absolute inset-10 bg-black bg-opacity-30 rounded-lg overflow-hidden flex flex-col" style={{
        border: '1px solid rgba(0, 255, 121, 0.3)',
        boxShadow: isHovered ? '0 0 15px rgba(0, 255, 121, 0.2)' : 'none',
      }}>
        {/* Dashboard header */}
        <div className="h-7 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-xs text-gray-300 font-semibold">
            QA Dashboard
          </div>
        </div>
        
        {/* Test results */}
        <div className="flex-grow p-3">
          {/* Test progress bar */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <div className="text-xs text-gray-400">Test Suite Progress</div>
              <div className="text-xs text-green-400">{testProgress}%</div>
            </div>
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-300 to-green-500"
                style={{ 
                  width: `${testProgress}%`,
                  transition: 'width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              ></div>
            </div>
          </div>
          
          {/* Test cases */}
          {[
            { name: 'User Authentication', completed: testProgress >= 20 },
            { name: 'Data Processing', completed: testProgress >= 40 },
            { name: 'UI Components', completed: testProgress >= 60 },
            { name: 'API Integration', completed: testProgress >= 80 },
            { name: 'Performance', completed: testProgress >= 100 }
          ].map((test, i) => (
            <div key={i} className="flex items-center mb-2" style={{
              opacity: test.completed ? 1 : 0.5,
              transform: test.completed ? 'translateX(0)' : 'translateX(-5px)',
              transition: 'all 0.3s ease'
            }}>
              <div className={`w-3 h-3 rounded-full mr-2 flex items-center justify-center ${test.completed ? 'bg-green-500' : 'bg-gray-700'}`}>
                {test.completed && (
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
              <div className="text-xs text-gray-300">{test.name}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated checkmark */}
      {testProgress >= 100 && (
        <div className="absolute inset-0 flex items-center justify-center" style={{
          animation: 'fade-in 0.5s ease-in-out forwards'
        }}>
          <div className="w-20 h-20 bg-black bg-opacity-30 rounded-full flex items-center justify-center" style={{
            border: '1px solid rgba(0, 255, 121, 0.3)',
          }}>
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
      )}
      
      {/* Status label */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white px-2 py-1 rounded-full"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          background: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 255, 121, 0.3)',
        }}
      >
        {testProgress < 20 ? 'Running tests...' : 
         testProgress < 60 ? 'Processing results...' : 
         testProgress < 100 ? 'Final checks...' : 'All tests passed!'}
      </div>
    </div>
  );
};

// Enhanced BentoBox with 3D effects and advanced interactions
interface BentoBoxProps {
  title: string;
  description: string;
  iconComponent: React.ReactElement<IconProps>;
  gridClass: string;
  stats?: string;
  accentColor?: string;
  index: number;
}

const BentoBox: React.FC<BentoBoxProps> = ({ 
  title, 
  description, 
  iconComponent, 
  gridClass, 
  stats, 
  accentColor = '#00ff79', 
  index 
}) => {
  const [animated, setAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 });
  const [, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Handle 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTiltPosition({ x, y });
    }
  };
  
  // Animation on component mount and scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setTimeout(() => {
            setAnimated(true);
          }, index * 200); // Stagger animation based on index
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
  }, [index]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // Parse color to RGB format for CSS
  const parseColor = (color: string) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return { r, g, b };
  };
  
  const rgb = parseColor(accentColor);
  
  return (
    <div 
      ref={cardRef}
      className={`${gridClass} relative overflow-hidden group`}
      style={{ 
        perspective: '1200px',
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
      {/* Card with 3D transform */}
      <div 
        className={`h-full rounded-xl overflow-hidden transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        style={{ 
          backgroundColor: '#1a1b1f',
          border: `1px solid ${isHovered ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)` : 'rgba(0, 255, 121, 0.07)'}`,
          boxShadow: isHovered 
            ? `0 15px 35px rgba(0, 0, 0, 0.5), 0 0 35px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`
            : '0 4px 30px rgba(0, 0, 0, 0.4)',
          transform: isHovered 
            ? `rotateX(${tiltPosition.y * -8}deg) rotateY(${tiltPosition.x * 8}deg) scale(1.03) translateZ(20px)`
            : 'rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)',
          transformStyle: 'preserve-3d',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
      >
        {/* Card inner gradient overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${50 + tiltPosition.x * 100}% ${50 + tiltPosition.y * 100}%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6) 0%, rgba(0, 0, 0, 0) 70%)`,
          }}
        ></div>
        
        {/* Particle effects container */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {isHovered && Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                background: accentColor,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                opacity: Math.random() * 0.5 + 0.2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translateY(${isHovered ? 0 : 100}px)`,
                transition: `transform ${Math.random() * 1 + 0.5}s ease-out, opacity ${Math.random() * 1 + 0.5}s ease-out`,
                animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Glowing border effect on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `inset 0 0 10px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`,
            border: `1px solid rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`,
            borderRadius: '0.75rem',
            pointerEvents: 'none'
          }}
        ></div>
        
        {/* Main content */}
        <div className="relative p-6 h-full flex flex-col z-10">
          <div className="mb-2 transform transition-transform duration-500" style={{ 
            transformStyle: 'preserve-3d',
            transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)'
          }}>
            <div className="flex items-center mb-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
                style={{ 
                  backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`,
                  border: `1px solid rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25)`
                }}
              >
                <span 
                  className="text-sm font-medium"
                  style={{ color: accentColor }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white flex items-center">
                {title}
                {isHovered && (
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              {description}
            </p>
          </div>
          
          {/* Stats with animated counter */}
          {stats && (
            <div className="mt-2 mb-4 transform transition-transform duration-500" style={{ 
              transformStyle: 'preserve-3d',
              transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)'
            }}>
              <div 
                className="flex items-center py-1 px-2 rounded text-xs" 
                style={{ 
                  background: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
                  border: `1px solid rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`
                }}
              >
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: accentColor }}></div>
                <span className="text-gray-300">{stats}</span>
              </div>
            </div>
          )}
          
          {/* Icon area with 3D transform */}
          <div 
            className="mt-auto flex justify-center items-center transition-all duration-500"
            style={{
              transformStyle: 'preserve-3d',
              transform: isHovered ? 'translateZ(40px) scale(1.05)' : 'translateZ(0) scale(1)',
            }}
          >
            {React.isValidElement(iconComponent) && 
              React.cloneElement(iconComponent, { isHovered })}
          </div>
        </div>
      </div>
      
      {/* Tooltip */}
      <div 
        className="absolute bg-gray-900 rounded-lg p-3 text-xs text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs pointer-events-none"
        style={{
          bottom: "calc(100% + 10px)",
          left: "50%",
          transform: "translateX(-50%)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          border: `1px solid ${accentColor}20`,
        }}
      >
        <div className="font-medium mb-1" style={{ color: accentColor }}>More About This Step:</div>
        Learn more about our {title.toLowerCase()} process and how it helps save time and eliminate manual tasks in your business
      </div>
    </div>
  );
};

export { DiscoveryIcon, WireframeIcon, DevelopmentIcon, TestingIcon, LaunchIcon };
export default EnhancedGlassFlowBentoGrid;