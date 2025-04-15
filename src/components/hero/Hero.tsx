import { motion, useScroll, useTransform, useSpring, LazyMotion, domAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const SplineScene = lazy(() => import('./SplineScene'));

const ParallaxSection = ({ children, offset = 50 }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  const springY = useSpring(y, { stiffness: 400, damping: 90 });
  
  return (
    <motion.div style={{ y: springY }} className="relative">
      {children}
    </motion.div>
  );
};

export function Hero() {
  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxSection offset={-100}>
          <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#248AFF]/10 rounded-full blur-3xl"></div>
        </ParallaxSection>
        <ParallaxSection offset={100}>
          <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#00E100]/10 rounded-full blur-3xl"></div>
        </ParallaxSection>
      </div>

      {/* 3D Background */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-[90vh] md:h-screen z-0 opacity-20 md:opacity-100 hidden sm:block" style={{ pointerEvents: 'none' }}>
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00FF79]"></div>
          </div>
        }>
          <SplineScene />
        </Suspense>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 z-10 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl md:ml-12 space-y-4 md:space-y-9"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.2] md:leading-[1.1] mb-4 md:mb-6 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
            Custom Software & Automations to Grow Your Business
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
            We help business owners take back their time by eliminating manual tasks through custom software solutions and automations tailored to their operations.
          </p>
          <Link to="/time-audit" className="group mt-6 md:mt-12 px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 bg-primary hover:bg-primary-hover rounded-lg sm:rounded-xl md:rounded-2xl text-base sm:text-lg md:text-xl font-semibold text-dark transition-all duration-300 inline-flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center">
            Take the Time Audit →
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}