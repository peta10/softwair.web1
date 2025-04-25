import React, { useEffect, ErrorInfo, Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import { BusinessAutomations } from './pages/services/BusinessAutomations';
import { CustomSoftware } from './pages/services/CustomSoftware';
import { WebDevelopment } from './pages/services/WebDevelopment';
import { Pricing } from './pages/Pricing';
import { TimeAudit } from './pages/TimeAudit';
import { Privacy } from './pages/Privacy';
import { ThemeProvider } from './components/ui/theme-provider';

// Error Boundary component to catch rendering errors
class ErrorBoundary extends Component<
  { children: React.ReactNode, componentName: string },
  { hasError: boolean, error: Error | null }
> {
  constructor(props: { children: React.ReactNode, componentName: string }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Error in ${this.props.componentName}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-900/20 border border-red-500 rounded-md m-2">
          <h2 className="text-red-400 font-bold">Error in {this.props.componentName}</h2>
          <p className="text-red-300">{this.state.error?.message || 'Unknown error'}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Simplified analytics hook that won't break the app
const useAnalytics = () => {
  // Safe implementation that won't cause errors
  useEffect(() => {
    const path = window.location.pathname + window.location.search;
    
    try {
      // Only use analytics if window.gtag is defined
      if (typeof window !== 'undefined' && 'gtag' in window) {
        // @ts-expect-error gtag may not be defined
        window.gtag('config', 'GA-PLACEHOLDER', { page_path: path });
      }
    } catch (error) {
      console.warn('Analytics error:', error);
    }
  }, [window.location.pathname, window.location.search]);
  
  return { 
    trackEvent: (event: string, params?: Record<string, unknown>) => {
      try {
        if (typeof window !== 'undefined' && 'gtag' in window) {
          // @ts-expect-error gtag may not be defined
          window.gtag('event', event, params);
        }
      } catch (error) {
        console.warn('Event tracking error:', error);
      }
    }
  };
};

// Background Component - Tech-themed background
const SiteBackground = () => (
  <div className="absolute inset-0 -z-10 bg-white dark:bg-[#1a1b1f] overflow-hidden bg-tech-pattern">
    {/* Circuit Lines */}
    <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
      <svg width="100%" height="100%" className="absolute">
        <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path
            d="M0 50h40c5.5 0 10 4.5 10 10s4.5 10 10 10h40M50 0v40c0 5.5 4.5 10 10 10s10 4.5 10 10v40"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-gray-400 dark:text-gray-600"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
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
);

function App() {
  // Safe analytics tracking
  useAnalytics();

  return (
    <ErrorBoundary componentName="App Root">
      <ThemeProvider>
        <div className="layout-container perspective-1000">
          <SiteBackground />
          <div className="content-container">
            <ErrorBoundary componentName="Navigation">
              <Navigation />
            </ErrorBoundary>
            
            <main className="main-content">
              <Routes>
                <Route path="/" element={
                  <ErrorBoundary componentName="Home">
                    <Home />
                  </ErrorBoundary>
                } />
                <Route path="/services/BusinessAutomations" element={
                  <ErrorBoundary componentName="BusinessAutomations">
                    <BusinessAutomations />
                  </ErrorBoundary>
                } />
                <Route path="/services/CustomSoftware" element={
                  <ErrorBoundary componentName="CustomSoftware">
                    <CustomSoftware />
                  </ErrorBoundary>
                } />
                <Route path="/services/WebDevelopment" element={
                  <ErrorBoundary componentName="WebDevelopment">
                    <WebDevelopment />
                  </ErrorBoundary>
                } />
                <Route path="/pricing" element={
                  <ErrorBoundary componentName="Pricing">
                    <Pricing />
                  </ErrorBoundary>
                } />
                <Route path="/time-audit" element={
                  <ErrorBoundary componentName="TimeAudit">
                    <TimeAudit />
                  </ErrorBoundary>
                } />
                <Route path="/privacy" element={
                  <ErrorBoundary componentName="Privacy">
                    <Privacy />
                  </ErrorBoundary>
                } />
              </Routes>
            </main>
            
            <ErrorBoundary componentName="Footer">
              <Footer />
            </ErrorBoundary>
          </div>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;