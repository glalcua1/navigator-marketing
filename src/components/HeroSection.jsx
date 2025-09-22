/**
 * Hero Section Component - The Hook
 * 
 * This component creates the first impression using Ogilvy's hook principle.
 * Features a video background with compelling messaging about Navigator's
 * ability to help revenue managers increase hotel revenue while they sleep.
 * 
 * Design Elements:
 * - Blue to purple gradient overlay
 * - Smooth fade-in animations
 * - Professional tone with emotional appeal
 * - Clear value proposition
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import LeadGenerationDrawer from './LeadGenerationDrawer';

/**
 * Hero Section Component
 * 
 * Implements the opening hook of our Ogilvy marketing strategy:
 * "Revenue Intelligence That Works While You Sleep"
 * 
 * @param {Function} onSectionView - Callback for analytics tracking
 */
const HeroSection = ({ onSectionView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Animation trigger on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      onSectionView?.();
      console.log('[HeroSection] Animation triggered, section now visible');
    }, 300);
    
    return () => clearTimeout(timer);
  }, [onSectionView]);

  // Listen for global Start Free Trial trigger from header
  useEffect(() => {
    const handler = () => setIsDrawerOpen(true);
    window.addEventListener('openTrial', handler);
    return () => window.removeEventListener('openTrial', handler);
  }, []);
  
  // Handle video load for smooth experience
  const handleVideoLoad = () => {
    setVideoLoaded(true);
    console.log('[HeroSection] Background video loaded successfully');
  };
  
  // Handle video error for debugging
  const handleVideoError = (error) => {
    console.error('[HeroSection] Video failed to load:', error);
    setVideoLoaded(false);
  };

  // Handle opening the lead generation drawer
  const handleStartTrial = () => {
    setIsDrawerOpen(true);
    console.log('[HeroSection] Opening lead generation drawer');
  };

  // Handle closing the lead generation drawer
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    console.log('[HeroSection] Closing lead generation drawer');
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        >
          <source src="/6459533_Animation_Glowing_1920x1080.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900"></div>
        </video>
        
        {/* Clean Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      {/* Content - Modern & Clean */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-left">
            {/* Main Headline - Clean & Powerful */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white">
                Revenue Intelligence
                <span className="block text-transparent bg-gradient-to-r from-[#1800FF] to-[#008FFF] bg-clip-text">
                  That Works While You Sleep
                </span>
              </h1>
            </div>
            
            {/* Clean Subheadline (moved to right card as requested) */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Intentionally left empty after moving copy to the right card */}
            </div>
            
            {/* Single Primary CTA */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button 
                  onClick={handleStartTrial}
                  className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-[#1800FF] to-[#008FFF] transition-all duration-300 hover:opacity-95"
                >
                  <span className="block px-10 py-5 rounded-[14px] text-white font-bold text-xl bg-transparent">
                    <span>Start Free Trial</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
                
                <button className="px-8 py-5 border-2 border-white/80 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                  Book a Demo
                </button>
              </div>
              
              <div className="mt-6 flex items-center text-slate-300 text-sm">
                <div className="flex items-center mr-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  No credit card required
                </div>
                <div className="flex items-center mr-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  2-minute setup
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  500+ hotels trust Navigator
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Clean Stats */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-[#1800FF]/60 to-[#008FFF]/60">
              <div className="relative bg-blue-950/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
                <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">Why hotels choose Navigator</h3>
                </div>

              {/* Removed duplicate highlighted statement per request */}

              {/* Value proposition subtitle and visual bullet list */}
              <p className="text-slate-200 italic">
                The Most Reliable Rate Intelligence Platform
              </p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="mt-1 mr-3 inline-flex h-6 w-6 items-center justify-center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <defs>
                        <linearGradient id="icoGrad1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#1800FF" />
                          <stop offset="1" stopColor="#008FFF" />
                        </linearGradient>
                      </defs>
                      <rect x="1.25" y="1.25" width="21.5" height="21.5" rx="6" stroke="url(#icoGrad1)" strokeWidth="2.5" fill="none" />
                      <path d="M6 12l4 4 8-8" stroke="url(#icoGrad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  <span className="text-white">Most accurate rate shopping across 1100+ sources</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 inline-flex h-6 w-6 items-center justify-center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <defs>
                        <linearGradient id="icoGrad2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#1800FF" />
                          <stop offset="1" stopColor="#008FFF" />
                        </linearGradient>
                      </defs>
                      <rect x="1.25" y="1.25" width="21.5" height="21.5" rx="6" stroke="url(#icoGrad2)" strokeWidth="2.5" fill="none" />
                      <path d="M6 12l4 4 8-8" stroke="url(#icoGrad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  <span className="text-white">Real-time parity breach detection & resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 inline-flex h-6 w-6 items-center justify-center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <defs>
                        <linearGradient id="icoGrad3" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#1800FF" />
                          <stop offset="1" stopColor="#008FFF" />
                        </linearGradient>
                      </defs>
                      <rect x="1.25" y="1.25" width="21.5" height="21.5" rx="6" stroke="url(#icoGrad3)" strokeWidth="2.5" fill="none" />
                      <path d="M6 12l4 4 8-8" stroke="url(#icoGrad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  <span className="text-white">Early signals on demand shifts & market trends</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 inline-flex h-6 w-6 items-center justify-center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <defs>
                        <linearGradient id="icoGrad4" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#1800FF" />
                          <stop offset="1" stopColor="#008FFF" />
                        </linearGradient>
                      </defs>
                      <rect x="1.25" y="1.25" width="21.5" height="21.5" rx="6" stroke="url(#icoGrad4)" strokeWidth="2.5" fill="none" />
                      <path d="M6 12l4 4 8-8" stroke="url(#icoGrad4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  <span className="text-white">Flexible APIs for smooth integration</span>
                </li>
              </ul>

              {/* Pill badge with glass effect highlighting the key positioning statement */}
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 pl-6 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base font-semibold shadow-lg shadow-black/20">
                  Beyond Light, uncover every competitor insight for maximum revenue gain.
                </span>
              </div>

                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Debug info for video loading */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 bg-black/50 text-white p-2 text-xs rounded">
          Video: {videoLoaded ? '✅ Loaded' : '⏳ Loading...'}
        </div>
      )}

      {/* Lead Generation Drawer */}
      <LeadGenerationDrawer 
        isOpen={isDrawerOpen} 
        onClose={handleCloseDrawer} 
      />
    </section>
  );
};

export default HeroSection;

/**
 * Verification Methods:
 * 
 * 1. Visual Verification:
 *    - Check gradient overlay renders correctly
 *    - Verify smooth animation sequences
 *    - Test responsive design on mobile/tablet
 * 
 * 2. Animation Testing:
 *    - Confirm staggered entrance animations
 *    - Verify hover effects on buttons
 *    - Check particle animation performance
 * 
 * 3. Video Background Testing:
 *    - Monitor video load status in console
 *    - Test fallback gradient if video fails
 *    - Verify autoplay works across browsers
 * 
 * 4. Content Validation:
 *    - Ensure messaging reflects revenue manager pain points
 *    - Verify tone is professional yet empathetic
 *    - Check competitive positioning against Lighthouse
 * 
 * 5. Performance Monitoring:
 *    - Check console logs for animation triggers
 *    - Monitor memory usage during animations
 *    - Verify smooth scrolling to next section
 */