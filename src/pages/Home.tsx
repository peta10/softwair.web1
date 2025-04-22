import { HeroDemo } from '../components/hero/HeroDemo';
// import { CoreSolutions } from '../components/features/CoreSolutions';
// import { Features } from '../components/features/Features'; // Removed import
// import { Steps } from '../components/features/Steps'; // Removed import
import { FinalCTA } from '../components/cta/FinalCTA';
// import { ServicesSection } from '../components/features/ServicesSection';
import InteractiveServices from '../components/features/InteractiveServices';
// import ProjectScope from '../components/blocks/ProjectScope';
// import ServiceNetwork3D from '../components/features/ServiceNetwork3D';
// import { ServiceNetworkSVG } from '../components/features/ServiceNetworkSVG';
import React from 'react';
// import InteractiveProcessFlow from '../components/process/InteractiveProcessFlow';
import EnhancedGlassFlowBentoGrid from '../components/bento-process-component';
import FAQSection from '../components/FAQSection';

export function Home() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Remove background color and patterns to allow site-wide background to show through */}
      
      <HeroDemo />
      <InteractiveServices />
      <EnhancedGlassFlowBentoGrid />
      <FAQSection />
      {/* <CoreSolutions /> */}{/* Removed duplicate Services section */}
      {/* <Steps /> */}{/* Removed Steps component */}
      {/* <ServiceNetworkSVG /> */}{/* Removed SVG network from Home */}
      {/* <Features /> */}{/* Removed Features component */}
      <FinalCTA />
    </div>
  );
}

export default Home;