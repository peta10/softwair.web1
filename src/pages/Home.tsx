import { FinalCTA } from '../components/cta/FinalCTA';
import InteractiveServices from '../components/features/InteractiveServices';
import EnhancedGlassFlowBentoGrid from '../components/bento-process-component_bento';
import FAQSection from '../components/FAQSection';
import { HeroGeometric } from '../components/ui/shape-landing-hero';

export function Home() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Hero section */}
      <HeroGeometric 
        badge="Softwair"
        title1="Automate Your"
        title2="Business Operations"
      />
      
      <InteractiveServices />
      <EnhancedGlassFlowBentoGrid />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}

export default Home;