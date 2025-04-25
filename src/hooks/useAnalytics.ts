import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event',
      targetId: string,
      params?: Record<string, any>
    ) => void;
  }
}

export const GA_ID = import.meta.env.VITE_GA_ID;

export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    try {
      if (GA_ID && typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_ID, {
          page_path: location.pathname + location.search
        });
      }
    } catch (error) {
      console.warn('Analytics error:', error);
    }
  }, [location]);

  const trackEvent = useCallback((
    eventName: string,
    params?: Record<string, any>
  ) => {
    try {
      if (GA_ID && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
      }
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }, []);

  return { trackEvent };
}