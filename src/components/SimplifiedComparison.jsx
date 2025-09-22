/**
 * Navigator Solutions Component - Professional Customer Segmentation
 * 
 * This component presents Navigator's intelligent solutions for different
 * hotel business types using professional segmentation and Ogilvy design
 * principles. Focuses on customer-specific value propositions.
 * 
 * Design Elements:
 * - Professional tabbed interface
 * - Customer segment-specific messaging  
 * - Enterprise-grade visual design
 * - Benefit-focused value propositions
 * 
 * @author Navigator Marketing Team
 * @version 3.0.0
 */

import React, { useState, useEffect, useRef } from 'react';
import LeadGenerationDrawer from './LeadGenerationDrawer';

/**
 * SegmentedSolutions Component
 * 
 * Professional tabbed interface showing Navigator solutions for different hotel segments
 * Inspired by Lighthouse's segmentation approach with Ogilvy design principles
 * 
 * @param {boolean} isVisible - Controls animation triggers
 */
const SegmentedSolutions = ({ isVisible, onStartTrial }) => {
  const [activeTab, setActiveTab] = useState('enterprise');

  const segments = {
    enterprise: {
      title: 'Enterprise & Chain Hotels',
      subtitle: 'Portfolio intelligence at scale',
      description: 'Manage multiple properties with unified insights, centralized control, and enterprise-grade API integration.',
      features: [
        'Multi-property dashboard with portfolio analytics',
        'Enterprise API integration (2-week implementation)',
        'Custom reporting for C-level executives', 
        'Dedicated success manager and priority support',
        'SOC 2 compliance with 99.9% uptime SLA',
        'White-label options for management companies'
      ],
      metrics: {
        implementation: '2 weeks',
        properties: '10-10,000+',
        savings: '40% efficiency'
      },
      cta: 'Schedule Enterprise Demo'
    },
    independent: {
      title: 'Independent Hotels',
      subtitle: 'Maximum revenue, minimum complexity',
      description: 'Perfect for boutique hotels and independent properties. Get enterprise-level intelligence without the enterprise complexity.',
      features: [
        'One-click setup with immediate insights',
        'Automated pricing recommendations', 
        'Simple dashboard designed for busy owners',
        'No long-term contracts or setup fees',
        'Built-in training and support materials',
        'Mobile-first design for on-the-go management'
      ],
      metrics: {
        implementation: '24 hours',
        properties: '1-10',
        savings: '23% ADR boost'
      },
      cta: 'Start Free Trial'
    },
    management: {
      title: 'Revenue Management Companies',
      subtitle: 'Data intelligence that scales',
      description: 'Professional tools for revenue management consultants and companies managing multiple client properties.',
      features: [
        'Client portal with branded reporting',
        'Bulk property management tools',
        'Advanced analytics and forecasting',
        'Custom KPI tracking and alerts',
        'White-label client presentations',
        'Revenue consultant certification program'
      ],
      metrics: {
        implementation: '1 week',
        properties: 'Unlimited',
        savings: '60% time saved'
      },
      cta: 'Partner with Navigator'
    }
  };

  return (
    <div className={`transition-all duration-1000 delay-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 bg-white rounded-2xl p-2 shadow-lg max-w-4xl mx-auto">
        {Object.entries(segments).map(([key, segment]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex-1 min-w-0 ${
              activeTab === key
                ? 'bg-gradient-to-r from-[#1800FF] to-[#008FFF] text-white shadow-lg transform scale-105'
                : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            <div className="text-sm md:text-base font-bold truncate">
              {segment.title.split(' ')[0]} {segment.title.split(' ')[1]}
            </div>
            <div className="text-xs opacity-80 truncate">
              {segment.title.split(' ').slice(2).join(' ')}
            </div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {Object.entries(segments).map(([key, segment]) => (
          <div
            key={key}
            className={`transition-all duration-500 ${
              activeTab === key ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
          >
            {activeTab === key && (
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left Content */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                      {segment.title}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-6">
                      {segment.subtitle}
                    </p>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {segment.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-slate-50 rounded-xl">
                        <div className="text-2xl font-bold text-slate-800">
                          {segment.metrics.implementation}
                        </div>
                        <div className="text-sm text-slate-600">Setup Time</div>
                      </div>
                      <div className="text-center p-4 bg-slate-50 rounded-xl">
                        <div className="text-2xl font-bold text-slate-800">
                          {segment.metrics.properties}
                        </div>
                        <div className="text-sm text-slate-600">Properties</div>
                      </div>
                      <div className="text-center p-4 bg-slate-50 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">
                          {segment.metrics.savings}
                        </div>
                        <div className="text-sm text-slate-600">Average Impact</div>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        console.log(`[SegmentedSolutions] ${segment.cta} clicked for ${segment.title}`);
                        onStartTrial();
                      }}
                      className="px-8 py-4 bg-gradient-to-r from-[#1800FF] to-[#008FFF] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      {segment.cta}
                    </button>
                  </div>

                  {/* Right Content - Features */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-6">
                      What's included:
                    </h4>
                    <div className="space-y-4">
                      {segment.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <span className="mt-1 mr-3 inline-flex h-6 w-6 items-center justify-center flex-shrink-0">
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <defs>
                                <linearGradient id="segTickGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stopColor="#1800FF" />
                                  <stop offset="1" stopColor="#008FFF" />
                                </linearGradient>
                              </defs>
                              <rect x="1.25" y="1.25" width="21.5" height="21.5" rx="6" stroke="url(#segTickGrad)" strokeWidth="1.6" fill="none" />
                              <path d="M6 12l4 4 8-8" stroke="url(#segTickGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          </span>
                          <span className="text-slate-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Navigator Solutions Component
 * 
 * Professional segmented solutions interface showing Navigator's offerings
 * for different hotel business types. Implements Ogilvy design principles
 * with intelligent customer segmentation and benefit-focused messaging.
 * 
 * @param {Function} onSectionView - Callback for analytics tracking
 */
const SimplifiedComparison = ({ onSectionView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const sectionRef = useRef(null);
  
  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onSectionView?.();
          console.log('[NavigatorSolutions] Solutions section visible');
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, [onSectionView]);

  // Handle opening the lead generation drawer
  const handleStartTrial = () => {
    setIsDrawerOpen(true);
    console.log('[SimplifiedComparison] Opening lead generation drawer');
  };

  // Handle closing the lead generation drawer
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    console.log('[SimplifiedComparison] Closing lead generation drawer');
  };
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            One Platform, Intelligent Revenue Growth
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Navigator adapts to your hotel's unique needs. Whether you're managing a single property 
            or a global portfolio, our AI-powered platform delivers the right solution for your business.
          </p>
        </div>

        {/* Segmented Solutions */}
        <SegmentedSolutions isVisible={isVisible} onStartTrial={handleStartTrial} />
        
      </div>

      {/* Lead Generation Drawer */}
      <LeadGenerationDrawer 
        isOpen={isDrawerOpen} 
        onClose={handleCloseDrawer} 
      />
    </section>
  );
};

export default SimplifiedComparison;

/**
 * Verification Methods:
 * 
 * 1. Clarity Testing:
 *    - Key differentiator is immediately obvious
 *    - Benefits are specific and quantifiable
 *    - Comparison avoids feature overwhelm
 * 
 * 2. Credibility Check:
 *    - Claims are realistic and believable
 *    - No exaggerated promises
 *    - Professional presentation builds trust
 * 
 * 3. Ogilvy Compliance:
 *    - Respects reader's intelligence
 *    - Focuses on primary benefit (decision-making vs. data)
 *    - Uses clear, professional language
 * 
 * 4. Visual Hierarchy:
 *    - Clean layout without clutter
 *    - Clear visual differentiation
 *    - Professional color scheme
 */