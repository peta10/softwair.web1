import { useEffect, useRef } from 'react';
import { getBrowser, browserFeatures, applySafariFixes, applyPolyfills, applyBrowserClasses } from '../utils/browserUtils';

interface Props {
  children: React.ReactNode;
}

export function BrowserCompatibility({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const init = async () => {
      // Apply polyfills
      await applyPolyfills();
      
      // Add browser-specific classes
      applyBrowserClasses();
      
      // Apply Safari-specific fixes
      if (containerRef.current) {
        applySafariFixes(containerRef.current);
      }
      
      // Check for WebGL support (needed for 3D elements)
      const hasWebGL = browserFeatures.webgl();
      if (!hasWebGL) {
        console.warn('WebGL not supported - 3D features will be disabled');
        document.documentElement.classList.add('no-webgl');
      }
      
      // Check for WebP support
      const hasWebP = await browserFeatures.webp();
      if (!hasWebP) {
        document.documentElement.classList.add('no-webp');
      }
    };
    
    init();
  }, []);
  
  return (
    <div ref={containerRef} className="browser-compatibility-wrapper">
      {children}
    </div>
  );
}