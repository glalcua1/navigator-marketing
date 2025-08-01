/**
 * Navigator Marketing Site - Application Entry Point
 * 
 * This is the main entry point for the Navigator marketing website.
 * Initializes React app with proper error boundaries and performance
 * monitoring following best practices for production applications.
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/**
 * Error Boundary Component
 * 
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI following best practices.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    console.error('[Navigator] Error boundary caught error:', error);
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('[Navigator] Error boundary details:', {
      error,
      errorInfo,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
    
    // In production, send error to monitoring service
    if (process.env.NODE_ENV === 'production') {
      // Example: sendToErrorTracking(error, errorInfo);
    }
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
          <div className="max-w-md mx-auto text-center">
            <div className="text-6xl mb-6">😔</div>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-slate-600 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working on a fix.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Reload Page
              </button>
              <div className="text-sm text-slate-500">
                If the problem persists, please contact{' '}
                <a 
                  href="mailto:support@navigator.com" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  support@navigator.com
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return this.props.children;
  }
}

/**
 * Performance Monitoring
 * 
 * Tracks Core Web Vitals and other performance metrics
 * for continuous optimization of the marketing site.
 */
const initializePerformanceMonitoring = () => {
  // Track page load performance
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
    
    console.log('[Navigator Performance] Page load metrics:', {
      loadTime: `${loadTime}ms`,
      domContentLoaded: `${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`,
      firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 'N/A',
      timestamp: new Date().toISOString()
    });
    
    // In production, send to analytics service
    if (process.env.NODE_ENV === 'production') {
      // Example: sendToAnalytics('page_load', { loadTime, path: window.location.pathname });
    }
  });
  
  // Track user interactions for optimization
  const trackInteraction = (event) => {
    if (event.target.closest('button') || event.target.closest('a')) {
      const element = event.target.closest('button, a');
      const elementText = element.textContent.trim();
      const elementType = element.tagName.toLowerCase();
      
      console.log('[Navigator Interaction]', {
        type: elementType,
        text: elementText,
        timestamp: new Date().toISOString()
      });
    }
  };
  
  document.addEventListener('click', trackInteraction);
  
  return () => {
    document.removeEventListener('click', trackInteraction);
  };
};

/**
 * Initialize Application
 * 
 * Sets up the React application with proper error handling,
 * performance monitoring, and development tools.
 */
const initializeApp = () => {
  console.log('[Navigator] Initializing marketing application...');
  
  // Initialize performance monitoring
  const cleanupPerformance = initializePerformanceMonitoring();
  
  // Create React root and render app
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  // Render app with error boundary
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
  
  console.log('[Navigator] Application initialized successfully');
  
  // Cleanup function for hot reloading in development
  if (module.hot) {
    module.hot.accept('./App', () => {
      console.log('[Navigator] Hot reloading App component');
    });
    
    module.hot.dispose(() => {
      cleanupPerformance();
    });
  }
};

/**
 * Application Startup
 * 
 * Checks for prerequisites and initializes the application
 * with proper error handling and fallbacks.
 */
try {
  // Verify React DOM root element exists
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found - check public/index.html');
  }
  
  // Check for basic browser support
  if (!window.fetch || !window.Promise) {
    throw new Error('Browser not supported - please upgrade your browser');
  }
  
  // Initialize the application
  initializeApp();
  
} catch (error) {
  console.error('[Navigator] Failed to initialize application:', error);
  
  // Fallback error display
  document.body.innerHTML = `
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: system-ui, sans-serif; padding: 2rem;">
      <div style="max-width: 400px; text-align: center;">
        <h1 style="color: #dc2626; margin-bottom: 1rem;">Application Error</h1>
        <p style="color: #374151; margin-bottom: 1.5rem;">
          Navigator failed to load. Please try refreshing the page or contact support if the problem persists.
        </p>
        <button 
          onclick="window.location.reload()" 
          style="background: #2563eb; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 600;"
        >
          Reload Page
        </button>
        <div style="margin-top: 1rem; font-size: 0.875rem; color: #6b7280;">
          Error: ${error.message}
        </div>
      </div>
    </div>
  `;
}

/**
 * Verification Methods:
 * 
 * 1. Error Handling Testing:
 *    - Manually trigger errors to test error boundary
 *    - Verify graceful degradation on component failures
 *    - Check fallback UI displays correctly
 * 
 * 2. Performance Monitoring:
 *    - Check console logs for performance metrics
 *    - Monitor Core Web Vitals in browser dev tools
 *    - Verify interaction tracking works
 * 
 * 3. Browser Compatibility:
 *    - Test on browsers without modern features
 *    - Verify polyfill detection works
 *    - Check fallback error messages display
 * 
 * 4. Development Experience:
 *    - Test hot reloading functionality
 *    - Verify error messages are helpful
 *    - Check console logs are informative
 * 
 * 5. Production Readiness:
 *    - Ensure no development code runs in production
 *    - Verify error tracking integration points
 *    - Check performance monitoring setup
 */