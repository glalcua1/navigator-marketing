/**
 * Solution Section Component - Navigate to Success
 * 
 * This component presents Navigator as the intelligent solution to all
 * the pain points identified in the problem section. Following Ogilvy's
 * principle of providing clear, benefit-focused solutions.
 * 
 * Design Elements:
 * - Light gradient background (hope/relief)
 * - Progressive feature reveals
 * - Before/after comparisons
 * - Confident, empowering tone
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

import React, { useState, useEffect, useRef } from 'react';

/**
 * Solution Section Component
 * 
 * Presents Navigator as the intelligent evolution in revenue management:
 * - Automated decision-making
 * - Predictive insights
 * - Real-time optimization
 * - Peace of mind
 * 
 * @param {Function} onSectionView - Callback for analytics tracking
 */
const SolutionSection = ({ onSectionView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [visibleSolutions, setVisibleSolutions] = useState([]);
  const sectionRef = useRef(null);
  
  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onSectionView?.();
          console.log('[SolutionSection] Section visible, starting solution reveals');
          
          // Progressive solution reveal for impact
          const solutions = [0, 1, 2, 3];
          solutions.forEach((index) => {
            setTimeout(() => {
              setVisibleSolutions(prev => [...prev, index]);
              console.log(`[SolutionSection] Solution ${index} revealed`);
            }, index * 500);
          });
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, [onSectionView]);
  
  // Auto-cycle through features for demonstration
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % solutions.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);
  
  const solutions = [
    {
      problem: "3 AM wake-ups checking rates",
      solution: "Sleep peacefully with 24/7 automated monitoring",
      icon: "😴",
      feature: "Real-time alerts send notifications instantly when action is needed",
      benefit: "Never miss a revenue opportunity, even while sleeping",
      color: "from-blue-500 to-indigo-600"
    },
    {
      problem: "Data overload paralysis",
      solution: "Get clear, actionable insights in seconds",
      icon: "⚡",
      feature: "AI-powered recommendations with one-click implementation",
      benefit: "Spend 90% less time analyzing, 90% more time optimizing",
      color: "from-indigo-500 to-purple-600"
    },
    {
      problem: "Rate parity violations costing $2,400/day",
      solution: "Instant violation detection and auto-correction",
      icon: "🎯",
      feature: "Real-time rate monitoring across all channels with automatic fixes",
      benefit: "Protect revenue 24/7 without manual intervention",
      color: "from-purple-500 to-pink-600"
    },
    {
      problem: "Always playing catch-up with competitors",
      solution: "Predict market changes before they happen",
      icon: "🔮",
      feature: "Predictive analytics identify demand surges 48 hours ahead",
      benefit: "Stay ahead of the market with intelligent forecasting",
      color: "from-pink-500 to-red-600"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Success particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Introducing
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Navigator
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The revenue management platform that actually manages revenue. 
            <strong className="text-slate-800"> Intelligent. Automated. Effortless.</strong>
          </p>
        </div>
        
        {/* Core Promise */}
        <div className={`text-center mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              "While Lighthouse collects data, Navigator delivers decisions."
            </h3>
            <p className="text-lg text-slate-600">
              Navigator doesn't just show you what happened – it tells you what to do next, 
              and often does it for you automatically.
            </p>
          </div>
        </div>
        
        {/* Solution Transformations */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                visibleSolutions.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                activeFeature === index ? 'ring-4 ring-blue-300 scale-105' : 'hover:scale-102'
              }`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-90`}></div>
                
                {/* Content */}
                <div className="relative p-8 text-white">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  
                  {/* Before (Problem) */}
                  <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-wide opacity-80 mb-2">Before Navigator</h4>
                    <p className="text-white/90 line-through">{solution.problem}</p>
                  </div>
                  
                  {/* After (Solution) */}
                  <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-wide opacity-80 mb-2">With Navigator</h4>
                    <h3 className="text-xl font-bold mb-2">{solution.solution}</h3>
                    <p className="text-white/90 text-sm">{solution.feature}</p>
                  </div>
                  
                  {/* Benefit */}
                  <div className="p-4 bg-white/20 rounded-lg border border-white/30">
                    <p className="font-semibold">✨ {solution.benefit}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Key Differentiators */}
        <div className={`transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Why Navigator Outperforms Traditional Platforms
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4x
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Faster Insights</h4>
              <p className="text-slate-600">Get actionable intelligence 4x faster than traditional platforms</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                90%
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Less Manual Work</h4>
              <p className="text-slate-600">Automation handles routine tasks so you focus on strategy</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                24/7
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Revenue Protection</h4>
              <p className="text-slate-600">Continuous monitoring ensures you never miss opportunities</p>
            </div>
          </div>
        </div>
        
        {/* Emotional Payoff */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12 border border-green-200">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Finally, Revenue Management That Actually Works For You
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Imagine ending each day confident that your revenue is optimized, your rates are competitive, 
              and your hotel is capturing every possible opportunity. With Navigator, this isn't a dream—it's your new reality.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border border-blue-200">
              <p className="text-2xl text-slate-800 font-semibold mb-2">
                "I sleep better knowing Navigator is watching my revenue 24/7."
              </p>
              <p className="text-slate-600">— Sarah Chen, Revenue Manager, Dubai Luxury Hotels</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Debug information */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-4 right-4 bg-black/50 text-white p-2 text-xs rounded">
          Active feature: {activeFeature} | Visible solutions: {visibleSolutions.length}/4
        </div>
      )}
    </section>
  );
};

export default SolutionSection;

/**
 * Verification Methods:
 * 
 * 1. Animation Verification:
 *    - Check progressive solution reveals (500ms intervals)
 *    - Verify auto-cycling feature highlights work
 *    - Test hover effects and scale animations
 * 
 * 2. Message Effectiveness:
 *    - Validate before/after comparisons are clear
 *    - Ensure benefits are quantifiable and compelling
 *    - Check emotional payoff resonates with target audience
 * 
 * 3. Visual Design Testing:
 *    - Verify gradient backgrounds render smoothly
 *    - Test color combinations for accessibility
 *    - Check responsive layout on all devices
 * 
 * 4. Content Validation:
 *    - Ensure solution directly addresses each pain point
 *    - Verify statistics are accurate and believable
 *    - Check tone shift from problem (dark) to solution (light)
 * 
 * 5. Performance Monitoring:
 *    - Monitor auto-cycling interval performance
 *    - Check smooth transitions between states
 *    - Verify no performance issues with multiple animations
 */