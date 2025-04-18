import { GrowthEngine } from '@/components/GrowthEngine';

export function BusinessAutomations() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative flex flex-col items-center">
      {/* Using the exact background from the App SiteBackground component */}
      <div className="absolute inset-0 bg-[#1a1b1f] -z-10 overflow-hidden"></div>
      
      {/* Very subtle decorative orbs that match the Home page aesthetics */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-[#00FF79]/5 rounded-full blur-[100px] -z-5 opacity-30"></div>
      <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-[#3d3e44]/5 rounded-full blur-[120px] -z-5 opacity-30"></div>
      
      {/* Main content section */}
      <div id="hero-section" className="w-full mx-auto">
        <GrowthEngine />
      </div>
      
      {/* Footer transition using the exact same color from InteractiveServices */}
      <div id="footer-transition" className="w-full bg-[#1A1B1F] py-8">
        {/* This empty div creates the color transition seen on the Home page */}
      </div>
    </div>
  );
} 