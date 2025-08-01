/**
 * Problem-Solution Section Component - The Ogilvy Hook
 * 
 * This component combines problem agitation with solution presentation
 * following Ogilvy's principle of clear, focused messaging without
 * overwhelming the reader with excessive content or poor-quality icons.
 * 
 * Design Elements:
 * - Clean, professional typography
 * - Minimal visual elements
 * - Direct benefit statements
 * - Credible, specific claims
 * 
 * @author Navigator Marketing Team
 * @version 2.0.0
 */

import React, { useState, useEffect, useRef } from 'react';

/**
 * Problem-Solution Section Component
 * 
 * Presents the core problem and Navigator's solution in a clean,
 * focused format that respects the reader's intelligence.
 * 
 * @param {Function} onSectionView - Callback for analytics tracking
 */
const ProblemSolutionSection = ({ onSectionView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onSectionView?.();
          console.log('[ProblemSolutionSection] Core message section visible');
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, [onSectionView]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* The Problem - Direct and Honest */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            You're losing money every night
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              While you sleep, competitors undercut your rates. While you analyze spreadsheets, 
              demand surges happen without you. While you manage data, revenue opportunities slip away.
            </p>
            <p className="text-2xl font-bold text-red-600">
              The average hotel loses $2,400 daily to preventable rate violations.
            </p>
          </div>
        </div>
        
        {/* The Solution - Clear and Powerful */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border border-blue-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Navigator solves this in three ways
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Solution 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  24/7 Monitoring
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Automatically detects rate violations and market changes 
                  while you sleep. No more 3 AM panic checks.
                </p>
              </div>
              
              {/* Solution 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Predictive Intelligence
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Forecasts demand surges 48 hours ahead. Position your rates 
                  before competitors even know what's coming.
                </p>
              </div>
              
              {/* Solution 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Automated Optimization
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Makes pricing decisions for you based on real-time data. 
                  Spend time on strategy, not spreadsheets.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* The Proof - Simple and Credible */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              The result? Revenue managers sleep better and earn more.
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">23%</div>
                <p className="text-slate-600">Average ADR increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">4 hrs</div>
                <p className="text-slate-600">Daily time saved</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
                <p className="text-slate-600">Hotels using Navigator</p>
              </div>
            </div>
            
            {/* Enhanced Testimonial Card - Compact Design */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center gap-6">
                {/* Large Professional Image */}
                <div className="flex-shrink-0">
                  <img 
                    src="/medium-shot-man-working-as-real-estate-agent.jpg" 
                    alt="Michael Rodriguez, Revenue Manager"
                    className="w-24 h-24 rounded-2xl object-cover border-3 border-blue-400 shadow-lg"
                    onError={(e) => {
                      console.log('[ProblemSolutionSection] Testimonial image failed to load');
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Content Side - Left Aligned */}
                <div className="flex-1">
                  <blockquote className="text-lg italic text-slate-800 mb-4 font-medium leading-relaxed text-left">
                    "Navigator transformed our revenue management completely. What used to take hours of manual analysis now happens automatically. Our ADR increased 23% in three months, and I can finally focus on strategic planning instead of data crunching."
                  </blockquote>
                  
                  <div className="flex items-start justify-between">
                    <div className="text-left">
                      <cite className="text-slate-700 font-semibold text-lg block">
                        Michael Rodriguez
                      </cite>
                      <div className="text-blue-600 font-medium text-sm">Revenue Manager, Dubai Luxury Hotels</div>
                    </div>
                    
                    {/* Compact rating */}
                    <div className="flex items-center text-yellow-500 mt-1">
                      ★★★★★
                      <span className="ml-2 text-slate-600 text-xs">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

/**
 * Verification Methods:
 * 
 * 1. Message Clarity:
 *    - Problem is immediately clear and relatable
 *    - Solution is presented in simple, logical steps
 *    - Benefits are quantifiable and credible
 * 
 * 2. Visual Hierarchy:
 *    - Clean typography without visual clutter
 *    - Professional color scheme (blue gradient)
 *    - Proper spacing and white space usage
 * 
 * 3. Ogilvy Principles:
 *    - Respects reader's intelligence
 *    - Leads with benefits, not features
 *    - Uses specific, believable claims
 *    - Maintains professional credibility
 * 
 * 4. Content Effectiveness:
 *    - Addresses core pain point ($2,400 daily loss)
 *    - Provides clear, logical solution path
 *    - Includes credible social proof
 */