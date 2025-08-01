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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                <span className="block text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">
                  That Works While You Sleep
                </span>
              </h1>
            </div>
            
            {/* Clean Subheadline */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-xl lg:text-2xl mb-8 text-slate-200 leading-relaxed max-w-2xl">
                Stop losing $2,400/day to rate violations. Navigator monitors, predicts, 
                and optimizes your revenue 24/7 while you focus on your guests.
              </p>
            </div>
            
            {/* Single Primary CTA */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button 
                  onClick={handleStartTrial}
                  className="group px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span>Start Free Trial</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                
                <button className="px-8 py-5 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                  Watch Demo
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
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Why hotels choose Navigator</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">23%</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Average ADR increase</div>
                    <div className="text-slate-300 text-sm">Revenue improvement in 90 days</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">2w</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Implementation time</div>
                    <div className="text-slate-300 text-sm">vs 6 months with Lighthouse</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">24/7</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Automated monitoring</div>
                    <div className="text-slate-300 text-sm">Never miss a revenue opportunity</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-500/20 rounded-2xl border border-green-400/30">
                <div className="flex items-start space-x-4">
                  <img 
                    src="/portrait-woman-playing-poker-casino.jpg" 
                    alt="Sarah Chen, Revenue Manager"
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-400/50"
                    onError={(e) => {
                      console.log('[HeroSection] Sarah Chen portrait failed to load');
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="flex-1">
                    <p className="text-green-100 text-sm font-medium leading-relaxed">
                      "Navigator gave me my life back. I sleep through the night knowing my revenue is protected."
                    </p>
                    <div className="flex items-center mt-2">
                      <div>
                        <div className="text-green-200 text-xs font-semibold">Sarah Chen</div>
                        <div className="text-green-300 text-xs">Revenue Manager</div>
                      </div>
                    </div>
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