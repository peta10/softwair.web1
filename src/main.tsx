import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './app/globals.css';

// Define global window gtag type for TypeScript
declare global {
  interface Window {
    gtag?: (command: "config" | "event", targetId: string, params?: Record<string, any> | undefined) => void;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
