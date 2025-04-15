// Browser Detection
export const getBrowser = (): string => {
  const ua = navigator.userAgent;
  
  if (ua.includes('Firefox')) return 'firefox';
  if (ua.includes('SamsungBrowser')) return 'samsung';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'opera';
  if (ua.includes('Edg')) return 'edge';
  if (ua.includes('Chrome')) return 'chrome';
  if (ua.includes('Safari')) return 'safari';
  
  return 'unknown';
};

// Feature Detection
export const browserFeatures = {
  webp: async (): Promise<boolean> => {
    const webP = new Image();
    return new Promise((resolve) => {
      webP.onload = () => resolve(true);
      webP.onerror = () => resolve(false);
      webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    });
  },
  
  webgl: (): boolean => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  },
  
  backdropFilter: (): boolean => {
    const html = document.querySelector('html');
    if (!html) return false;
    const computed = window.getComputedStyle(html);
    return computed.backdropFilter !== undefined;
  }
};

// CSS Prefixer
export const cssPrefix = (property: string, value: string): Record<string, string> => {
  const prefixes = ['', '-webkit-', '-moz-', '-ms-', '-o-'];
  return prefixes.reduce((acc, prefix) => {
    acc[prefix + property] = value;
    return acc;
  }, {} as Record<string, string>);
};

// Safari-specific fixes
export const applySafariFixes = (element: HTMLElement): void => {
  if (getBrowser() === 'safari') {
    // Fix for backdrop-filter
    if (!browserFeatures.backdropFilter()) {
      element.style.backgroundColor = 'rgba(18, 19, 22, 0.95)';
    }
    
    // Fix for gradient text
    const hasGradientText = element.classList.contains('bg-gradient-to-r');
    if (hasGradientText) {
      element.style.webkitBackgroundClip = 'text';
      element.style.webkitTextFillColor = 'transparent';
    }
  }
};

// Feature-based polyfills
export const applyPolyfills = async (): Promise<void> => {
  // Smooth scroll polyfill
  // Removed external polyfill dependency
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Intersection Observer polyfill for older browsers
  // Using native IntersectionObserver or graceful degradation
  if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported - some features may be disabled');
  }
};

// Browser-specific class application
export const applyBrowserClasses = (): void => {
  const browser = getBrowser();
  document.documentElement.classList.add(`browser-${browser}`);
};