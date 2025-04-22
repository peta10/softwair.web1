import { motion } from 'framer-motion';
import { Terminal, ZapIcon, Activity, CodeIcon, ServerIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface MinimalDashboardProps {
  formattedTime: string;
  formattedDate: string;
}

export function MinimalDashboard({
  formattedTime,
  formattedDate,
}: MinimalDashboardProps) {
  // State for mouse position to create 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [debug, setDebug] = useState(false);
  
  // Binary data animation
  const [binaryRows, setBinaryRows] = useState<string[]>([]);
  
  // Generate binary rows for tech effect
  useEffect(() => {
    const generateBinaryRow = () => {
      return Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('');
    };
    
    setBinaryRows(Array(8).fill(0).map(() => generateBinaryRow()));
    
    const interval = setInterval(() => {
      setBinaryRows(prev => {
        const newRows = [...prev];
        const randomIndex = Math.floor(Math.random() * newRows.length);
        newRows[randomIndex] = generateBinaryRow();
        return newRows;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    setMousePosition({ x, y });
  };

  return (
    <div className="relative">
      {/* Toggle debug mode button */}
      <button 
        className="absolute bottom-2 left-2 z-50 p-1 text-xs text-[#00FF79]/80 bg-black/30 rounded-full hover:bg-black/50 transition-colors"
        onClick={() => setDebug(!debug)}
        title={debug ? "Hide 3D Debug" : "Show 3D Debug"}
      >
        {debug ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
      </button>

      <div className="relative border border-[#00FF79]/20 overflow-hidden bg-gradient-to-br from-black/90 to-black/70 h-[400px]" 
        style={{ 
          perspective: "1000px",
        }}
      >
        <motion.div 
          className="absolute inset-0 w-full h-full"
          onMouseMove={handleMouseMove}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${mousePosition.x * 25}deg) rotateX(${mousePosition.y * -25}deg) translateZ(20px)`,
            transition: "transform 0.1s ease-out"
          }}
        >
          {/* Tech code pattern background */}
          <div className="absolute inset-0 overflow-hidden opacity-5 select-none pointer-events-none">
            <div className="absolute left-1 top-1/4 font-mono text-[8px] text-[#00FF79] opacity-60 z-0 leading-tight tracking-tighter">
              {binaryRows.map((row, i) => (
                <div key={i} style={{ 
                  transform: `translateZ(${i * 10}px)`,
                  color: debug ? 'red' : undefined,
                  border: debug ? '1px solid red' : undefined,
                  opacity: debug ? 0.7 : undefined
                }}>{row}</div>
              ))}
            </div>
            <div className="absolute right-2 top-2/3 font-mono text-[8px] text-[#00FF79] opacity-60 z-0 leading-tight tracking-tighter">
              {binaryRows.slice().reverse().map((row, i) => (
                <div key={i} style={{ 
                  transform: `translateZ(${i * 10}px)`,
                  color: debug ? 'red' : undefined,
                  border: debug ? '1px solid red' : undefined,
                  opacity: debug ? 0.7 : undefined
                }}>{row}</div>
              ))}
            </div>
          </div>
          
          {/* Tech-inspired background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#00FF79] to-transparent" style={{ 
              transform: 'translateZ(10px)',
              backgroundColor: debug ? 'blue' : undefined,
              opacity: debug ? 0.3 : undefined
            }}></div>
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#00FF79] to-transparent" style={{ 
              transform: 'translateZ(10px)',
              backgroundColor: debug ? 'blue' : undefined,
              opacity: debug ? 0.3 : undefined
            }}></div>
            
            {/* Circuit patterns */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00FF79]/30" style={{ 
                transform: 'translateZ(15px)',
                backgroundColor: debug ? 'green' : undefined,
                height: debug ? '2px' : undefined,
                opacity: debug ? 0.3 : undefined
              }}></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00FF79]/30" style={{ transform: 'translateZ(15px)' }}></div>
              <div className="absolute left-0 top-0 h-full w-[1px] bg-[#00FF79]/30" style={{ transform: 'translateZ(15px)' }}></div>
              <div className="absolute right-0 top-0 h-full w-[1px] bg-[#00FF79]/30" style={{ transform: 'translateZ(15px)' }}></div>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#00FF79]/20" style={{ transform: 'translateZ(20px)' }}></div>
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-[#00FF79]/20" style={{ transform: 'translateZ(20px)' }}></div>
            </div>
            
            <motion.div 
              className="absolute top-1/4 left-1/2 w-64 h-64 rounded-full border border-[#00FF79]/30"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut"
              }}
              style={{ 
                transform: 'translateZ(5px)',
                borderColor: debug ? 'yellow' : undefined,
                borderWidth: debug ? '1px' : undefined,
                opacity: debug ? 0.3 : undefined
              }}
            />
            <div className="absolute inset-0 bg-grid-small-white/[0.05]" style={{ transform: 'translateZ(5px)' }}></div>
          </div>
          
          {/* Dashboard UI */}
          <div className="flex flex-col h-full relative z-10" style={{ 
            transform: 'translateZ(30px)',
            border: debug ? '1px solid rgba(128, 0, 128, 0.3)' : undefined,
            backgroundColor: debug ? 'rgba(128, 0, 128, 0.05)' : undefined
          }}>
            {/* Header bar with time and date */}
            <motion.div 
              className="flex justify-between items-center p-4 border-b-2 border-[#00FF79]/20 bg-black/50 backdrop-blur-sm"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-[#00FF79] text-sm font-mono flex items-center space-x-1.5">
                <Terminal className="w-4 h-4 opacity-70" style={{ transform: 'translateZ(5px)' }} />
                <CodeIcon className="w-4 h-4 opacity-70" style={{ transform: 'translateZ(8px)' }} />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{ transform: 'translateZ(10px)' }}
                >
                  $ {formattedDate}
                </motion.span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 bg-[#00FF79] rounded-full mr-2"
                  animate={{ 
                    opacity: [1, 0.5, 1], 
                  }} 
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "easeInOut" 
                  }}
                  style={{ transform: 'translateZ(15px)' }}
                />
                <span className="text-[#00FF79] text-sm font-mono" style={{ transform: 'translateZ(10px)' }}>{formattedTime}</span>
              </div>
            </motion.div>
            
            {/* Main dashboard area */}
            <div className="p-6 flex justify-center items-center flex-grow relative">
              <div className="relative">
                {/* Rings */}
                <motion.div 
                  className="absolute -z-10 inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{ 
                    transform: 'translateZ(20px)',
                    border: debug ? '1px solid rgba(0, 255, 255, 0.3)' : undefined,
                    backgroundColor: debug ? 'rgba(0, 255, 255, 0.05)' : undefined
                  }}
                >
                  <motion.div 
                    className="w-[280px] h-[280px] rounded-full border-2 border-[#00FF79]/10 absolute"
                    animate={{ 
                      rotate: 360
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 40, 
                      ease: "linear" 
                    }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#00FF79]/40 rounded-full" style={{ transform: 'translateZ(5px)' }} />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#00FF79]/40 rounded-full" style={{ transform: 'translateZ(5px)' }} />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#00FF79]/40 rounded-full" style={{ transform: 'translateZ(5px)' }} />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#00FF79]/40 rounded-full" style={{ transform: 'translateZ(5px)' }} />
                  </motion.div>
                  <motion.div 
                    className="w-[200px] h-[200px] rounded-full border border-[#00FF79]/20 absolute"
                    animate={{ 
                      rotate: -360
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 20, 
                      ease: "linear" 
                    }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00FF79]/60 rounded-full" style={{ transform: 'translateZ(10px)' }} />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00FF79]/60 rounded-full" style={{ transform: 'translateZ(10px)' }} />
                  </motion.div>
                </motion.div>
                
                {/* Main element with glowing lightning */}
                <motion.div 
                  className="w-60 h-60 flex flex-col items-center justify-center relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{ 
                    transform: 'translateZ(100px)',
                  }}
                >
                  <motion.div 
                    className="flex items-center justify-center"
                    animate={{
                      filter: ['drop-shadow(0 0 15px rgba(0, 255, 121, 0.4))', 'drop-shadow(0 0 25px rgba(0, 255, 121, 0.6))', 'drop-shadow(0 0 15px rgba(0, 255, 121, 0.4))'],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut"
                    }}
                  >
                    <ZapIcon className="w-56 h-56 text-[#00FF79]/70" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            {/* Footer status bar */}
            <motion.div 
              className="flex justify-between items-center p-4 border-t-2 border-[#00FF79]/20 bg-black/50 backdrop-blur-sm"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ transform: 'translateZ(30px)' }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-2.5 h-2.5 bg-[#00FF79]" 
                  animate={{ 
                    opacity: [1, 0.3, 1], 
                  }} 
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5, 
                    ease: "easeInOut" 
                  }}
                  style={{ transform: 'translateZ(5px)' }}
                />
                <span className="text-[#00FF79] text-sm font-mono" style={{ transform: 'translateZ(8px)' }}>SYS_ACTIVE</span>
              </div>
              
              {/* Animated graph bars */}
              <div className="flex items-end space-x-1 h-6" style={{ transform: 'translateZ(15px)' }}>
                {[30, 45, 25, 60, 35, 50, 40, 55].map((height, i) => (
                  <motion.div 
                    key={i}
                    className="w-1 bg-[#00FF79]/70"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ 
                      duration: 0.5,
                      delay: i * 0.05,
                    }}
                    style={{ transform: `translateZ(${i * 2}px)` }}
                  />
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <ServerIcon className="w-4 h-4 text-[#00FF79] mr-1" style={{ transform: 'translateZ(5px)' }} />
                <Activity className="w-4 h-4 text-[#00FF79]" style={{ transform: 'translateZ(8px)' }} />
                <span className="text-[#00FF79] text-sm font-mono" style={{ transform: 'translateZ(5px)' }}>LIVE</span>
              </div>
            </motion.div>

            {/* 3D Tech Element Decorations */}
            <div className="absolute -right-1 top-1/4 w-2 h-12 bg-[#00FF79]/10 border-l border-[#00FF79]/30" style={{ transform: 'translateZ(40px)' }}></div>
            <div className="absolute -left-1 bottom-1/3 w-2 h-8 bg-[#00FF79]/10 border-r border-[#00FF79]/30" style={{ transform: 'translateZ(40px)' }}></div>
          </div>

          {/* Floating elements */}
          <motion.div 
            className="absolute bottom-10 right-10 w-3 h-3 border border-[#00FF79]/40 bg-transparent"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            style={{ transform: 'translateZ(60px)' }}
          />
          <motion.div 
            className="absolute top-16 left-12 w-2 h-2 border border-[#00FF79]/40 bg-transparent"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: 1,
            }}
            style={{ transform: 'translateZ(70px)' }}
          />
        </motion.div>
      </div>
    </div>
  );
} 