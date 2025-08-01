/**
 * Main Application Component - Navigator Marketing Site
 * 
 * This is the root component for Navigator's marketing website,
 * implementing Ogilvy marketing principles with modern React
 * and beautiful animations using Tailwind CSS.
 * 
 * Design Philosophy:
 * - Professional, kind, and simple tone
 * - Focus on revenue manager pain points
 * - Clear value proposition throughout
 * - Competitive differentiation from Lighthouse
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import MarketingPage from './pages/MarketingPage';
import './index.css';

/**
 * Main App Component
 * 
 * Handles global app initialization, analytics setup,
 * and provides the main marketing page experience.
 */
function App() {
  
  // Initialize app tracking and debugging
  useEffect(() => {
    console.log('[Navigator App] Marketing site initialized');
    
    // Track page load performance
    const startTime = performance.now();
    
    // Set up global error handling
    const handleGlobalError = (error) => {
      console.error('[Navigator App] Global error:', error);
      // In production, would send to error tracking service
    };
    
    window.addEventListener('error', handleGlobalError);
    
    // Track initial page load time
    const loadCompleteTimer = setTimeout(() => {
      const loadTime = performance.now() - startTime;
      console.log(`[Navigator App] Initial load completed in ${loadTime.toFixed(2)}ms`);
    }, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('error', handleGlobalError);
      clearTimeout(loadCompleteTimer);
    };
  }, []);
  
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          console.log(`[Navigator App] Smooth scroll to: ${targetId}`);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <div className="App">
      {/* SEO Meta Tags would be handled by React Helmet in production */}
      <MarketingPage />
      
      {/* Development Tools */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50">
          <div className="font-bold mb-1">🧑‍💻 Dev Tools</div>
          <div>Navigator Marketing v2.1</div>
          <div>React {React.version}</div>
          <div>Environment: {process.env.NODE_ENV}</div>
        </div>
      )}
    </div>
  );
}

export default App;

/**
 * Verification Methods:
 * 
 * 1. Performance Monitoring:
 *    - Check console logs for load times
 *    - Monitor memory usage during navigation
 *    - Verify smooth scrolling performance
 * 
 * 2. Error Handling:
 *    - Test global error catching works
 *    - Verify graceful degradation on failures
 *    - Check console for any JavaScript errors
 * 
 * 3. Navigation Testing:
 *    - Test anchor link smooth scrolling
 *    - Verify all internal navigation works
 *    - Check responsive behavior on mobile
 * 
 * 4. Browser Compatibility:
 *    - Test on Chrome, Firefox, Safari, Edge
 *    - Verify animations work across browsers
 *    - Check for any CSS/JS compatibility issues
 * 
 * 5. SEO Readiness:
 *    - Verify semantic HTML structure
 *    - Check for proper heading hierarchy
 *    - Ensure meta tags are properly configured
 */