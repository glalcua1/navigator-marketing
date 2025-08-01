/**
 * Features Comparison Component - Build Credibility
 * 
 * This component implements direct competitive comparison with Lighthouse,
 * following Ogilvy's principle of building credibility through facts and
 * transparent comparisons. Shows Navigator's superiority clearly.
 * 
 * Design Elements:
 * - Split-screen comparison layout
 * - Animated feature reveals
 * - Color-coded advantages (green/red)
 * - Professional, factual tone
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

import React, { useState, useEffect, useRef } from 'react';

/**
 * Features Comparison Component
 * 
 * Direct comparison between Navigator and Lighthouse across key metrics:
 * - Implementation speed
 * - Feature complexity
 * - Decision support
 * - ROI timeline
 * 
 * @param {Function} onSectionView - Callback for analytics tracking
 */
const FeaturesComparison = ({ onSectionView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedRows, setAnimatedRows] = useState([]);
  const [selectedTab, setSelectedTab] = useState('features');
  const sectionRef = useRef(null);
  
  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onSectionView?.();
          console.log('[FeaturesComparison] Starting comparison table animations');
          
          // Animate comparison rows one by one
          setTimeout(() => {
            const totalRows = comparisonData[selectedTab].length;
            for (let i = 0; i < totalRows; i++) {
              setTimeout(() => {
                setAnimatedRows(prev => [...prev, i]);
                console.log(`[FeaturesComparison] Row ${i} animated`);
              }, i * 200);
            }
          }, 500);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, [onSectionView, selectedTab]);
  
  // Reset animations when tab changes
  useEffect(() => {
    setAnimatedRows([]);
    if (isVisible) {
      setTimeout(() => {
        const totalRows = comparisonData[selectedTab].length;
        for (let i = 0; i < totalRows; i++) {
          setTimeout(() => {
            setAnimatedRows(prev => [...prev, i]);
          }, i * 150);
        }
      }, 300);
    }
  }, [selectedTab, isVisible]);
  
  const comparisonData = {
    features: [
      {
        category: "Implementation",
        navigator: "2 weeks",
        lighthouse: "6+ months",
        advantage: "navigator",
        description: "Get up and running quickly"
      },
      {
        category: "Learning Curve",
        navigator: "Intuitive interface",
        lighthouse: "Complex training required",
        advantage: "navigator",
        description: "Start seeing value immediately"
      },
      {
        category: "Decision Support",
        navigator: "AI-powered recommendations",
        lighthouse: "Data visualization only",
        advantage: "navigator",
        description: "Know exactly what action to take"
      },
      {
        category: "Automation Level",
        navigator: "Fully automated",
        lighthouse: "Manual analysis required",
        advantage: "navigator",
        description: "Save 90% of your time"
      },
      {
        category: "Real-time Alerts",
        navigator: "Instant notifications",
        lighthouse: "Delayed reporting",
        advantage: "navigator",
        description: "Never miss critical moments"
      },
      {
        category: "API Integration",
        navigator: "2-week implementation",
        lighthouse: "6-month project",
        advantage: "navigator",
        description: "Seamless enterprise integration"
      }
    ],
    pricing: [
      {
        category: "Setup Cost",
        navigator: "$0",
        lighthouse: "$25,000+",
        advantage: "navigator",
        description: "No upfront investment"
      },
      {
        category: "Monthly Cost",
        navigator: "From $299",
        lighthouse: "From $2,000+",
        advantage: "navigator",
        description: "85% cost savings"
      },
      {
        category: "Training Cost",
        navigator: "Included",
        lighthouse: "$10,000+",
        advantage: "navigator",
        description: "No additional training fees"
      },
      {
        category: "ROI Timeline",
        navigator: "Day 1",
        lighthouse: "Month 6+",
        advantage: "navigator",
        description: "Immediate value delivery"
      }
    ],
    support: [
      {
        category: "Response Time",
        navigator: "< 2 hours",
        lighthouse: "24-48 hours",
        advantage: "navigator",
        description: "When you need help, we're there"
      },
      {
        category: "Support Quality",
        navigator: "Revenue management experts",
        lighthouse: "General tech support",
        advantage: "navigator",
        description: "Industry-specific expertise"
      },
      {
        category: "Account Management",
        navigator: "Dedicated success manager",
        lighthouse: "Shared rep",
        advantage: "navigator",
        description: "Personal attention for your success"
      },
      {
        category: "Implementation Support",
        navigator: "White-glove onboarding",
        lighthouse: "Self-service setup",
        advantage: "navigator",
        description: "We ensure your success"
      }
    ]
  };
  
  const tabs = [
    { id: 'features', label: 'Features & Performance', icon: '⚡' },
    { id: 'pricing', label: 'Cost Comparison', icon: '💰' },
    { id: 'support', label: 'Support & Service', icon: '🤝' }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Navigator vs.
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
              {" "}Lighthouse
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See why leading hotels are making the switch from Lighthouse's complex approach 
            to Navigator's intelligent simplicity.
          </p>
        </div>
        
        {/* Comparison Tabs */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-8 py-6">
              <div className="grid grid-cols-4 gap-6 items-center text-white">
                <div className="font-bold text-lg">Comparison</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">Navigator</div>
                  <div className="text-sm text-blue-200">The Intelligent Choice</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-300">Lighthouse</div>
                  <div className="text-sm text-orange-200">The Legacy Platform</div>
                </div>
                <div className="font-semibold">Why It Matters</div>
              </div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-slate-200">
              {comparisonData[selectedTab].map((row, index) => (
                <div
                  key={index}
                  className={`px-8 py-6 transition-all duration-500 ${
                    animatedRows.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  } ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="grid grid-cols-4 gap-6 items-center">
                    {/* Category */}
                    <div className="font-semibold text-slate-800">
                      {row.category}
                    </div>
                    
                    {/* Navigator Value */}
                    <div className="text-center">
                      <div className={`px-4 py-2 rounded-lg font-semibold ${
                        row.advantage === 'navigator' 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {row.navigator}
                      </div>
                    </div>
                    
                    {/* Lighthouse Value */}
                    <div className="text-center">
                      <div className={`px-4 py-2 rounded-lg font-semibold ${
                        row.advantage === 'lighthouse' 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-red-100 text-red-800 border border-red-200'
                      }`}>
                        {row.lighthouse}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="text-slate-600 text-sm">
                      {row.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Key Advantages Summary */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">85% Faster Setup</h3>
              <p className="text-green-700">
                While Lighthouse takes 6+ months to implement, Navigator has you optimizing revenue in 2 weeks.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Intelligent Automation</h3>
              <p className="text-blue-700">
                Navigator tells you what to do next. Lighthouse just shows you what happened.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-purple-800 mb-3">85% Cost Savings</h3>
              <p className="text-purple-700">
                Get enterprise-grade intelligence at a fraction of Lighthouse's cost.
              </p>
            </div>
          </div>
        </div>
        
        {/* Switching Call-to-Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Make the Switch?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the 500+ hotels that have already upgraded from complex legacy platforms to Navigator's intelligent approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300">
                Start Your Free Migration
              </button>
              <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Schedule Lighthouse Comparison
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Debug information */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 right-4 bg-black/50 text-white p-2 text-xs rounded">
          Tab: {selectedTab} | Animated rows: {animatedRows.length}/{comparisonData[selectedTab].length}
        </div>
      )}
    </section>
  );
};

export default FeaturesComparison;

/**
 * Verification Methods:
 * 
 * 1. Comparison Accuracy:
 *    - Verify all claims against actual Lighthouse features
 *    - Ensure timing estimates (2 weeks vs 6 months) are realistic
 *    - Check cost comparisons are current and accurate
 * 
 * 2. Animation Testing:
 *    - Test tab switching animations work smoothly
 *    - Verify row-by-row reveals are properly timed
 *    - Check hover effects on buttons and tabs
 * 
 * 3. Content Validation:
 *    - Ensure tone remains professional and factual
 *    - Verify no false or misleading claims
 *    - Check that advantages are clearly communicated
 * 
 * 4. Visual Design:
 *    - Test table responsiveness on mobile devices
 *    - Verify color coding (green/red) is accessible
 *    - Check gradient backgrounds render correctly
 * 
 * 5. User Experience:
 *    - Test tab switching functionality
 *    - Verify smooth scrolling within section
 *    - Check all interactive elements are accessible
 */