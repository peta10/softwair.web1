import { Routes, Route } from 'react-router-dom';
import { useAnalytics } from './hooks/useAnalytics';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BrowserCompatibility } from './components/BrowserCompatibility';
import Home from './pages/Home';
import { Product } from './pages/Product';
import { Pricing } from './pages/Pricing';
import { TimeAudit } from './pages/TimeAudit';
import { Privacy } from './pages/Privacy';

function App() {
  // Initialize analytics tracking
  useAnalytics();

  return (
    <BrowserCompatibility>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/time-audit" element={<TimeAudit />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserCompatibility>
  );
}

export default App;