import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
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
    if (GA_ID) {
      window.gtag('config', GA_ID, {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  const trackEvent = useCallback((
    eventName: string,
    params?: Record<string, any>
  ) => {
    if (GA_ID) {
      window.gtag('event', eventName, params);
    }
  }, []);

  return { trackEvent };
}