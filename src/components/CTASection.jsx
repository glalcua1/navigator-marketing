/**
 * Call-to-Action Section Component - Drive Conversion
 * 
 * This component implements the final conversion push using Ogilvy's
 * principle of clear, compelling calls-to-action. Creates urgency
 * while maintaining the professional, helpful tone throughout.
 * 
 * Design Elements:
 * - Multiple conversion paths
 * - Urgency without pressure
 * - Social proof integration
 * - Risk mitigation (free trial)
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

import React, { useState, useEffect, useRef } from 'react';

/**
 * Call-to-Action Section Component
 * 
 * Presents multiple conversion paths for different user types:
 * - Free trial for immediate action
 * - Demo request for consideration
 * - Enterprise consultation for large chains
 * 
 * @param {Function} onSectionView - Callback for analytics tracking
 */
const CTASection = ({ onSectionView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedPath, setSelectedPath] = useState('trial');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  
  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onSectionView?.();
          console.log('[CTASection] Final CTA section visible, driving conversion');
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, [onSectionView]);
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log(`[CTASection] Form submitted for path: ${selectedPath}, email: ${email}`);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      console.log('[CTASection] Form submission completed');
      // In real implementation, would redirect or show success message
    }, 2000);
  };
  
  const conversionPaths = [
    {
      id: 'trial',
      title: 'Start Free Trial',
      subtitle: 'Get immediate access',
      description: 'Experience Navigator\'s power with full platform access for 30 days',
      benefits: ['No credit card required', 'Full feature access', '2-minute setup', 'Cancel anytime'],
      cta: 'Start Free Trial Now',
      color: 'from-blue-600 to-indigo-700',
      icon: '🚀'
    },
    {
      id: 'demo',
      title: 'See Navigator in Action',
      subtitle: 'Watch it work live',
      description: 'Get a personalized demo showing Navigator optimizing your hotel\'s revenue',
      benefits: ['Live demonstration', 'Your property data', 'Q&A with experts', '30-minute session'],
      cta: 'Schedule Demo',
      color: 'from-purple-600 to-pink-700',
      icon: '📺'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Integration',
      subtitle: 'Custom API solution',
      description: 'Discuss white-label integration and custom development for hotel chains',
      benefits: ['API consultation', 'Integration planning', 'Custom development', 'Dedicated support'],
      cta: 'Schedule Consultation',
      color: 'from-indigo-600 to-purple-700',
      icon: '🏛️'
    }
  ];
  
  const urgencyFactors = [
    { text: 'Every day without Navigator costs you $2,400+ in lost revenue', icon: '💸' },
    { text: '500+ hotels already optimizing with Navigator', icon: '🏨' },
    { text: 'Implementation takes 2 weeks, not 6 months', icon: '⚡' },
    { text: '30-day money-back guarantee', icon: '🛡️' }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Conversion energy particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
              Revenue Management?
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Join the revenue managers who sleep peacefully knowing their hotel revenue 
            is optimized 24/7 with Navigator's intelligent automation.
          </p>
        </div>
        
        {/* Urgency Factors */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {urgencyFactors.map((factor, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{factor.icon}</div>
              <p className="text-white text-sm leading-relaxed">{factor.text}</p>
            </div>
          ))}
        </div>
        
        {/* Conversion Path Selection */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid md:grid-cols-3 gap-8">
            {conversionPaths.map((path, index) => (
              <div
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`cursor-pointer p-8 rounded-2xl transition-all duration-300 ${
                  selectedPath === path.id
                    ? 'bg-white/20 border-2 border-white/50 scale-105'
                    : 'bg-white/10 border border-white/20 hover:bg-white/15'
                }`}
              >
                <div className="text-center text-white">
                  <div className="text-4xl mb-4">{path.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                  <p className="text-blue-200 mb-4">{path.subtitle}</p>
                  <p className="text-white/90 mb-6 leading-relaxed">{path.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {path.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center justify-center text-sm">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-blue-100">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {selectedPath === path.id && (
                    <div className="text-green-400 font-semibold">Selected</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Email Capture Form */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {conversionPaths.find(p => p.id === selectedPath)?.title}
                </h3>
                <p className="text-slate-600">
                  Enter your email to get started. We'll set everything up for you.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="revenue.manager@hotel.com"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-slate-400 cursor-not-allowed'
                      : `bg-gradient-to-r ${conversionPaths.find(p => p.id === selectedPath)?.color} text-white hover:scale-105 shadow-lg`
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Setting up your account...
                    </div>
                  ) : (
                    conversionPaths.find(p => p.id === selectedPath)?.cta
                  )}
                </button>
              </div>
              
              <div className="text-center text-sm text-slate-500">
                <p>
                  By submitting, you agree to our Terms of Service and Privacy Policy.
                  <br />
                  We'll never spam you or share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
        
        {/* Final Social Proof */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-400/30">
            <p className="text-green-100 text-lg mb-4">
              <strong>"Navigator gave me my life back. I sleep through the night knowing my revenue is protected."</strong>
            </p>
            <p className="text-green-200">
              — Sarah Chen, Revenue Manager, Dubai Luxury Hotels
            </p>
          </div>
        </div>
        
        {/* Emergency Exit - Risk Mitigation */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-blue-200 text-lg">
            Questions? Call us at 
            <a href="tel:+1-555-123-4567" className="text-white font-semibold hover:text-blue-300 transition-colors duration-300">
              {" "}+1 (555) 123-4567
            </a>
            {" "}or email 
            <a href="mailto:success@navigator.com" className="text-white font-semibold hover:text-blue-300 transition-colors duration-300">
              success@navigator.com
            </a>
          </p>
        </div>
      </div>
      
      {/* Debug information */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 bg-black/50 text-white p-2 text-xs rounded">
          Selected path: {selectedPath} | Submitting: {isSubmitting ? 'Yes' : 'No'}
        </div>
      )}
    </section>
  );
};

export default CTASection;

/**
 * Verification Methods:
 * 
 * 1. Conversion Testing:
 *    - A/B test different CTA button copy
 *    - Test email capture form functionality
 *    - Monitor conversion rates by path type
 * 
 * 2. User Experience:
 *    - Verify smooth path selection interaction
 *    - Test form validation and error handling
 *    - Check loading states during submission
 * 
 * 3. Content Effectiveness:
 *    - Validate urgency factors are compelling but not pushy
 *    - Ensure CTAs are clear and benefit-focused
 *    - Check that risk mitigation (guarantees) is prominent
 * 
 * 4. Technical Validation:
 *    - Test form submission handling
 *    - Verify email validation works correctly
 *    - Check responsive design on mobile devices
 * 
 * 5. Analytics Integration:
 *    - Track conversion path preferences
 *    - Monitor form abandonment rates
 *    - Measure time spent in section before conversion
 */