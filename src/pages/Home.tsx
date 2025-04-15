import { Hero } from '../components/hero/Hero';
import { CoreSolutions } from '../components/features/CoreSolutions';
import { Features } from '../components/features/Features';
import { Steps } from '../components/features/Steps';
import { FinalCTA } from '../components/cta/FinalCTA';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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

export function Home() {
  return (
    <div className="min-h-screen bg-[#121316] text-white overflow-hidden relative">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxSection offset={-100}>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#248AFF]/10 rounded-full blur-3xl"></div>
        </ParallaxSection>
        <ParallaxSection offset={100}>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00E100]/10 rounded-full blur-3xl"></div>
        </ParallaxSection>
      </div>

      <Hero />
      <CoreSolutions />
      <Features />
      <Steps />
      <FinalCTA />
    </div>
  );
}

export default Home;