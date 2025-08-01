/**
 * Problem Section Component - Agitate the Pain
 * 
 * This component implements Ogilvy's principle of agitating the problem
 * before presenting the solution. It emotionally connects with revenue
 * managers by highlighting their daily struggles and sleepless nights.
 * 
 * Design Elements:
 * - Dark blue gradient background
 * - Animated pain points reveal
 * - Empathetic, professional tone
 * - Visual metaphors for struggles
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

import React, { useState, useEffect, useRef } from 'react';

/**
 * Problem Section Component
 * 
 * Agitates the pain points that revenue managers face daily:
 * - Sleepless nights worrying about rates
 * - Manual data analysis
 * - Competitive threats
 * - Revenue leakage
 * 
 * @param {Function} onSectionView - Callback for analytics tracking
 */
const ProblemSection = ({ onSectionView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visiblePains, setVisiblePains] = useState([]);
  const sectionRef = useRef(null);
  
  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onSectionView?.();
          console.log('[ProblemSection] Section entered viewport, triggering animations');
          
          // Stagger pain point reveals for dramatic effect
          const painPoints = [0, 1, 2, 3];
          painPoints.forEach((index) => {
            setTimeout(() => {
              setVisiblePains(prev => [...prev, index]);
              console.log(`[ProblemSection] Pain point ${index} revealed`);
            }, index * 400);
          });
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, [onSectionView]);
  
  const painPoints = [
    {
      icon: "😰",
      title: "3 AM Wake-Up Calls",
      description: "Checking if competitors just undercut your rates while you were sleeping",
      impact: "Lost revenue opportunity every single night"
    },
    {
      icon: "📊",
      title: "Data Overload Paralysis",
      description: "Drowning in spreadsheets but starving for actionable insights",
      impact: "Hours wasted on analysis, minutes left for action"
    },
    {
      icon: "⚠️",
      title: "Rate Parity Violations",
      description: "OTAs showing lower rates than your direct channel",
      impact: "Losing $2,400+ daily to booking platforms"
    },
    {
      icon: "🏃‍♂️",
      title: "Always Playing Catch-Up",
      description: "Reacting to market changes instead of anticipating them",
      impact: "Missing demand surges and pricing opportunities"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Every Night, Revenue Managers
            <span className="block text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
              Lose Sleep Over Lost Revenue
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            You became a revenue manager to drive growth, not to fight spreadsheets and chase data. 
            Yet here you are, overwhelmed by complexity when what you need is clarity.
          </p>
        </div>
        
        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className={`transition-all duration-800 transform ${
                visiblePains.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                {/* Pain Point Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {pain.icon}
                </div>
                
                {/* Pain Point Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {pain.title}
                </h3>
                
                {/* Pain Description */}
                <p className="text-blue-200 mb-4 leading-relaxed">
                  {pain.description}
                </p>
                
                {/* Impact Statement */}
                <div className="p-4 bg-red-500/20 border-l-4 border-red-400 rounded-r-lg">
                  <p className="text-red-200 font-medium">
                    💸 {pain.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Emotional Hook - The Breaking Point */}
        <div className={`text-center transition-all duration-1000 delay-1600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-12 border border-purple-500/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              You Didn't Sign Up to Be a Data Analyst
            </h3>
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              You became a revenue manager to maximize profitability and drive growth. 
              You should be making strategic decisions, not wrestling with complex dashboards 
              or manually checking competitor rates at midnight.
            </p>
            
            {/* The Revelation */}
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <p className="text-2xl text-white font-semibold mb-2">
                "What if your revenue management platform actually managed revenue for you?"
              </p>
              <p className="text-blue-200">
                This isn't just wishful thinking. This is Navigator.
              </p>
            </div>
          </div>
        </div>
        
        {/* Transition to Solution */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-2000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-3 text-white">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-lg font-medium">There's a better way</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>
      </div>
      
      {/* Debug information for development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-4 left-4 bg-black/50 text-white p-2 text-xs rounded">
          Visible pains: {visiblePains.length}/4 | Section visible: {isVisible ? 'Yes' : 'No'}
        </div>
      )}
    </section>
  );
};

export default ProblemSection;

/**
 * Verification Methods:
 * 
 * 1. Animation Verification:
 *    - Check intersection observer triggers correctly
 *    - Verify staggered pain point reveals (400ms intervals)
 *    - Test hover effects on pain point cards
 * 
 * 2. Emotional Impact Testing:
 *    - Validate tone resonates with revenue managers
 *    - Ensure pain points are relatable and specific
 *    - Check that messaging builds urgency for solution
 * 
 * 3. Visual Design Testing:
 *    - Verify gradient backgrounds render smoothly
 *    - Test responsive grid layout on mobile
 *    - Check card hover animations perform well
 * 
 * 4. Content Validation:
 *    - Ensure pain points are accurate and current
 *    - Verify monetary impacts are realistic ($2,400/day)
 *    - Check that transition to solution is natural
 * 
 * 5. Performance Monitoring:
 *    - Monitor console logs for animation triggers
 *    - Check smooth scrolling between sections
 *    - Verify no memory leaks from observers
 */