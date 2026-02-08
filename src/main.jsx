import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'

// FORCE unregister ALL Service Workers - no backend needed
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    if (registrations.length > 0) {
      registrations.forEach((registration) => {
        registration.unregister().then(() => {
          console.log('🗑️ Service Worker unregistered - using frontend-only mock data');
        });
      });
      // Force reload to ensure service worker is completely removed
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      console.log('✅ No service workers found - clean start');
    }
  });
  
  // Also clear all caches
  if ('caches' in window) {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
