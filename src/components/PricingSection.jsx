/**
 * Pricing Section Component - Commercial Offerings
 * 
 * This component presents Navigator's flexible pricing structure,
 * following Ogilvy's principle of clear, transparent pricing that
 * demonstrates value at every level. Addresses different hotel types
 * from independent properties to large chains.
 * 
 * Design Elements:
 * - Clear pricing tiers
 * - Feature comparison matrix
 * - Enterprise focus for API integration
 * - Risk-free trial emphasis
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

import React, { useState, useEffect, useRef } from 'react';

/**
 * Pricing Section Component
 * 
 * Presents three main pricing tiers:
 * - Essential: Independent hotels
 * - Professional: Hotel groups
 * - Enterprise: Large chains with API needs
 * 
 * @param {Function} onSectionView - Callback for analytics tracking
 */
const PricingSection = ({ onSectionView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleTiers, setVisibleTiers] = useState([]);
  const [selectedBilling, setSelectedBilling] = useState('monthly');
  const [hoveredTier, setHoveredTier] = useState(null);
  const sectionRef = useRef(null);
  
  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onSectionView?.();
          console.log('[PricingSection] Section visible, starting pricing reveals');
          
          // Stagger pricing tier reveals
          pricingTiers.forEach((_, index) => {
            setTimeout(() => {
              setVisibleTiers(prev => [...prev, index]);
              console.log(`[PricingSection] Pricing tier ${index} revealed`);
            }, index * 200);
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
  
  const pricingTiers = [
    {
      name: "Navigator Essential",
      subtitle: "Perfect for Independent Hotels",
      monthlyPrice: 299,
      yearlyPrice: 2690, // 10% discount
      description: "Everything you need to optimize revenue and outperform competitors",
      features: [
        "Real-time rate monitoring",
        "Demand forecasting",
        "Basic competitive intelligence",
        "Email support",
        "Rate parity alerts",
        "Monthly reporting",
        "Mobile app access",
        "Basic integrations"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-blue-500 to-indigo-600",
      icon: "🏨"
    },
    {
      name: "Navigator Professional",
      subtitle: "Ideal for Hotel Groups",
      monthlyPrice: 799,
      yearlyPrice: 7190, // 10% discount
      description: "Advanced features for multi-property revenue optimization",
      features: [
        "Everything in Essential",
        "Advanced analytics dashboard",
        "Multi-property management",
        "Priority phone support",
        "Custom reporting",
        "API access (basic)",
        "Team collaboration tools",
        "Advanced integrations",
        "Predictive pricing recommendations",
        "Market positioning insights"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "from-purple-500 to-pink-600",
      icon: "🏢"
    },
    {
      name: "Navigator Enterprise",
      subtitle: "Built for Hotel Chains",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      description: "Full API integration and white-label solutions for large operations",
      features: [
        "Everything in Professional",
        "Full API integration",
        "Custom data feeds",
        "Dedicated account manager",
        "White-label options",
        "SLA guarantees (99.9% uptime)",
        "Custom training programs",
        "Advanced security features",
        "Unlimited properties",
        "Custom integrations",
        "Priority feature requests"
      ],
      cta: "Schedule Consultation",
      popular: false,
      color: "from-indigo-600 to-purple-700",
      icon: "🏛️"
    }
  ];
  
  const apiFeatures = [
    {
      feature: "Implementation Speed",
      description: "Get integrated in 2 weeks, not 6 months",
      icon: "⚡"
    },
    {
      feature: "Flexible Data Exchange",
      description: "Real-time or batch processing to fit your needs",
      icon: "🔄"
    },
    {
      feature: "Scalable Architecture",
      description: "From 10 to 10,000 properties on the same platform",
      icon: "📈"
    },
    {
      feature: "Enterprise Security",
      description: "SOC 2 compliant with 99.9% uptime SLA",
      icon: "🔒"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Flexible Pricing for
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Every Hotel
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From independent properties to large chains, Navigator has the perfect plan 
            to fit your needs and budget.
          </p>
        </div>
        
        {/* Billing Toggle */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white p-2 rounded-lg shadow-lg border border-slate-200">
            <div className="flex">
              <button
                onClick={() => setSelectedBilling('monthly')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  selectedBilling === 'monthly'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedBilling('yearly')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 relative ${
                  selectedBilling === 'yearly'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 10%
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`transition-all duration-800 transform ${
                visibleTiers.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredTier(index)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              <div className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden transition-all duration-300 h-full ${
                tier.popular 
                  ? 'border-purple-500 scale-105' 
                  : hoveredTier === index 
                    ? 'border-blue-300 scale-102' 
                    : 'border-slate-200'
              }`}>
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Header */}
                <div className={`bg-gradient-to-r ${tier.color} p-8 text-white text-center`}>
                  <div className="text-4xl mb-4">{tier.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-white/90 mb-6">{tier.subtitle}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    {typeof tier.monthlyPrice === 'number' ? (
                      <>
                        <div className="text-4xl font-bold">
                          ${selectedBilling === 'monthly' ? tier.monthlyPrice : Math.round(tier.yearlyPrice / 12)}
                        </div>
                        <div className="text-white/80">
                          per month{selectedBilling === 'yearly' && ', billed annually'}
                        </div>
                        {selectedBilling === 'yearly' && (
                          <div className="text-green-200 text-sm mt-1">
                            Save ${(tier.monthlyPrice * 12) - tier.yearlyPrice} per year
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="text-4xl font-bold">{tier.monthlyPrice}</div>
                        <div className="text-white/80">Contact for pricing</div>
                      </>
                    )}
                  </div>
                  
                  <p className="text-white/90 text-sm">{tier.description}</p>
                </div>
                
                {/* Features */}
                <div className="p-8 flex-1">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">✓</div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 shadow-lg'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 shadow-lg'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enterprise API Section */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Enterprise API Integration
                </h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Seamlessly integrate Navigator into your existing tech stack with our 
                  enterprise-grade API. Built for hotel chains that need custom solutions 
                  and white-label integration.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                    Schedule API Demo
                  </button>
                  <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    View API Docs
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {apiFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className="font-semibold mb-2">{feature.feature}</h4>
                    <p className="text-slate-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Free Trial Guarantee */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 border border-green-200">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Risk-Free 30-Day Trial
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Try Navigator completely free for 30 days. If you don't see measurable revenue improvement, 
              we'll refund your first month and pay for your current platform subscription.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🆓</div>
                <h4 className="font-semibold text-slate-800 mb-2">No Setup Fees</h4>
                <p className="text-slate-600">Get started immediately without any upfront costs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💳</div>
                <h4 className="font-semibold text-slate-800 mb-2">No Credit Card Required</h4>
                <p className="text-slate-600">Experience full platform access without commitment</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="font-semibent text-slate-800 mb-2">Guaranteed Results</h4>
                <p className="text-slate-600">See revenue impact or get your money back</p>
              </div>
            </div>
            
            <button className="px-12 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold text-xl hover:scale-105 transition-all duration-300 shadow-xl">
              Start Your Free Trial Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Debug information */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 right-4 bg-black/50 text-white p-2 text-xs rounded">
          Billing: {selectedBilling} | Visible tiers: {visibleTiers.length}/3 | Hovered: {hoveredTier}
        </div>
      )}
    </section>
  );
};

export default PricingSection;

/**
 * Verification Methods:
 * 
 * 1. Pricing Accuracy:
 *    - Verify all pricing calculations are correct
 *    - Check yearly discount math (10% savings)
 *    - Ensure enterprise "custom" pricing is appropriate
 * 
 * 2. Feature Verification:
 *    - Validate feature lists are accurate and deliverable
 *    - Ensure no false promises or undeliverable features
 *    - Check that tiers progress logically in value
 * 
 * 3. Animation Testing:
 *    - Test billing toggle functionality
 *    - Verify staggered tier reveals work smoothly
 *    - Check hover effects on pricing cards
 * 
 * 4. Commercial Strategy:
 *    - Validate pricing positions Navigator competitively
 *    - Ensure enterprise focus on API integration is clear
 *    - Check free trial terms are realistic and compelling
 * 
 * 5. User Experience:
 *    - Test responsive design on mobile devices
 *    - Verify CTAs are clear and compelling
 *    - Check that pricing transparency builds trust
 */