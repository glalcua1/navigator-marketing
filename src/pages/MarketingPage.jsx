/**
 * Navigator Marketing Page - Main Component
 * 
 * This component implements the Ogilvy marketing strategy for Navigator,
 * focusing on helping revenue managers increase hotel revenue through
 * intelligent automation and insights.
 * 
 * Design Philosophy:
 * - Professional, kind, and simple tone
 * - Clear value proposition
 * - Emotional connection with revenue managers
 * - Competitive differentiation from Lighthouse
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import EcosystemIntegration from '../components/EcosystemIntegration';
import DifferentiatorMatrix from '../components/DifferentiatorMatrix';
import SimplifiedComparison from '../components/SimplifiedComparison';
import SimplifiedCTA from '../components/SimplifiedCTA';
import Footer from '../components/Footer';
import Header from '../components/Header';

/**
 * Main Marketing Page Component
 * 
 * Orchestrates the simplified marketing flow following Ogilvy's focused principles:
 * 1. Hook (Hero) - Grab attention with clear value proposition
 * 2. Problem-Solution (Core) - Identify pain and present Navigator's solution
 * 3. Proof (Comparison) - Build credibility through clear differentiation
 * 4. Action (CTA) - One focused conversion path
 */
const MarketingPage = () => {
  // State for tracking user engagement and debugging
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  
  // Debug: Track page load performance
  useEffect(() => {
    const startTime = performance.now();
    
    // Simulate page load completion
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      const loadTime = performance.now() - startTime;
      console.log(`[Navigator Marketing] Page loaded in ${loadTime.toFixed(2)}ms`);
    }, 100);
    
    return () => clearTimeout(loadTimer);
  }, []);
  
  // Track section visibility for analytics
  const handleSectionView = (sectionName) => {
    setCurrentSection(sectionName);
    console.log(`[Navigator Marketing] User viewing: ${sectionName}`);
  };
  
  // Debug: Log render cycles
  console.log(`[Navigator Marketing] Rendering page, loaded: ${isLoaded}, section: ${currentSection}`);
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading Navigator...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Debug info in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-0 right-0 bg-black text-white p-2 text-xs z-50 rounded-bl">
          Section: {currentSection}
        </div>
      )}
      
      {/* Hero Section - The Hook */}
      <div id="hero">
        <HeroSection onSectionView={() => handleSectionView('hero')} />
      </div>
      
      {/* Problem-Solution - The Core Message */}
      <div id="how">
        <ProblemSolutionSection onSectionView={() => handleSectionView('problem-solution')} />
      </div>

      {/* Ecosystem + Differentiators (above SimplifiedComparison) */}
      <div id="ecosystem">
        <EcosystemIntegration />
      </div>
      <div id="compare">
        <DifferentiatorMatrix />
      </div>
      
      {/* Simplified Comparison - Clear Differentiation */}
      <SimplifiedComparison onSectionView={() => handleSectionView('comparison')} />
      
      {/* Call to Action - Drive Conversion */}
      <div id="testimonials">
        <SimplifiedCTA onSectionView={() => handleSectionView('cta')} />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketingPage;

/**
 * Verification Methods:
 * 
 * 1. Visual Testing:
 *    - Check responsive design across devices
 *    - Verify video background loads properly
 *    - Test all interactive elements
 * 
 * 2. Performance Testing:
 *    - Monitor console logs for load times
 *    - Check for smooth scrolling
 *    - Verify lazy loading of components
 * 
 * 3. Content Testing:
 *    - Review tone consistency (professional, kind, simple)
 *    - Validate CTAs are compelling
 *    - Ensure messaging focuses on revenue manager pain points
 * 
 * 4. Accessibility Testing:
 *    - Screen reader compatibility
 *    - Keyboard navigation
 *    - Color contrast ratios
 * 
 * 5. Analytics Verification:
 *    - Section view tracking in console
 *    - User engagement metrics
 *    - Conversion funnel analysis
 */