import { Routes, Route } from 'react-router-dom';
import { useAnalytics } from './hooks/useAnalytics';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BrowserCompatibility } from './components/BrowserCompatibility';
import Home from './pages/Home';
import { BusinessAutomations } from './pages/services/BusinessAutomations';
import { CustomSoftware } from './pages/services/CustomSoftware';
import { WebDevelopment } from './pages/services/WebDevelopment';
import { Pricing } from './pages/Pricing';
import { TimeAudit } from './pages/TimeAudit';
import { Privacy } from './pages/Privacy';
import HeroDemo from './pages/HeroDemo';
import NewHero from './pages/NewHero';
import { ThemeProvider } from './components/ui/theme-provider';

// Background Component - Simple solid background
const SiteBackground = () => (
  <div className="absolute inset-0 -z-10 bg-[#1a1b1f] overflow-hidden">
    {/* Simple solid background */}
  </div>
);

function App() {
  // Initialize analytics tracking
  useAnalytics();

  return (
    <ThemeProvider>
      <BrowserCompatibility>
        <div className="relative min-h-screen flex flex-col">
          <SiteBackground />
          <div className="flex flex-col flex-grow z-10">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/BusinessAutomations" element={<BusinessAutomations />} />
                <Route path="/services/CustomSoftware" element={<CustomSoftware />} />
                <Route path="/services/WebDevelopment" element={<WebDevelopment />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/time-audit" element={<TimeAudit />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/hero-demo" element={<HeroDemo />} />
                <Route path="/new-hero" element={<NewHero />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </BrowserCompatibility>
    </ThemeProvider>
  );
}

export default App;