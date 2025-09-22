/**
 * Footer Component - Final Trust & Navigation
 * 
 * This component provides the final trust signals and navigation
 * elements following Ogilvy's principle of maintaining credibility
 * throughout the entire customer journey.
 * 
 * Design Elements:
 * - Contact information and support
 * - Legal compliance and trust badges
 * - Additional navigation options
 * - Social proof integration
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

 

/**
 * Footer Component
 * 
 * Provides comprehensive footer information including:
 * - Contact details for different departments
 * - Legal and compliance information
 * - Additional navigation links
 * - Final trust signals
 */
const Footer = () => {
  
  // Debug logging for footer interactions (simplified)
  const handleLinkClick = (label, href) => {
    console.log(`[Footer] Link clicked: ${label} -> ${href}`);
  };
  
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        {/* Removed purple accent; use brand blue only */}
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12">
          {/* Navigator Logo and Tagline */}
          <div className="text-center mb-12">
            <div className="mb-3 flex justify-center">
              <img src="/Navigator Logo-04.png" alt="Navigator" className="h-10 md:h-12 w-auto" />
            </div>
            <p className="text-lg text-slate-300">
              Revenue Intelligence That Works While You Sleep
            </p>
          </div>
          
          {/* Essential Contact Information */}
          <div className="text-center mb-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-6">Ready to get started?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Sales & Demos</h4>
                  <p className="text-slate-300 mb-3">Get started with Navigator</p>
                  <a
                    href="mailto:sales@navigator.com"
                    className="text-white hover:text-blue-300 transition-colors duration-300 block"
                  >
                    sales@navigator.com
                  </a>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-white hover:text-blue-300 transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">API Integration</h4>
                  <p className="text-slate-300 mb-3">Enterprise & hotel chains</p>
                  <a
                    href="mailto:developers@navigator.com"
                    className="text-white hover:text-blue-300 transition-colors duration-300 block"
                  >
                    developers@navigator.com
                  </a>
                  <a
                    href="tel:+1-555-123-4568"
                    className="text-white hover:text-blue-300 transition-colors duration-300"
                  >
                    +1 (555) 123-4568
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Customer Support</h4>
                  <p className="text-slate-300 mb-3">We're here to help</p>
                  <a
                    href="mailto:support@navigator.com"
                    className="text-white hover:text-blue-300 transition-colors duration-300 block"
                  >
                    support@navigator.com
                  </a>
                  <a
                    href="tel:+1-555-123-4569"
                    className="text-white hover:text-blue-300 transition-colors duration-300"
                  >
                    +1 (555) 123-4569
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Indicators - Simplified */}
          <div className="text-center mb-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-xl mx-auto">
              <div>
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <p className="text-slate-300 text-sm">Hotels using Navigator</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <p className="text-slate-300 text-sm">Uptime guarantee</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">SOC 2</div>
                <p className="text-slate-300 text-sm">Security certified</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Navigator. All rights reserved. | Revenue Intelligence Platform for Hotels
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a 
                href="/privacy" 
                className="text-slate-400 hover:text-white transition-colors duration-300"
                onClick={() => handleLinkClick('Privacy Policy', '/privacy')}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-slate-400 hover:text-white transition-colors duration-300"
                onClick={() => handleLinkClick('Terms of Service', '/terms')}
              >
                Terms of Service
              </a>
              <a 
                href="/cookies" 
                className="text-slate-400 hover:text-white transition-colors duration-300"
                onClick={() => handleLinkClick('Cookie Policy', '/cookies')}
              >
                Cookie Policy
              </a>
            </div>
            
            <div className="text-slate-400 text-sm">
              Made with ❤️ for revenue managers worldwide
            </div>
          </div>
        </div>
        
        {/* Version and Debug Info (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="border-t border-slate-800 py-4">
            <div className="text-center text-slate-500 text-xs">
              Navigator Marketing v2.1 | Built with React & Tailwind | 
              Page Load: {new Date().toLocaleTimeString()}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;

/**
 * Verification Methods:
 * 
 * 1. Contact Information Validation:
 *    - Verify all email addresses are functional
 *    - Test phone numbers route correctly
 *    - Check department-specific routing works
 * 
 * 2. Link Functionality:
 *    - Test all navigation links work correctly
 *    - Verify external links open properly
 *    - Check anchor links scroll to correct sections
 * 
 * 3. Legal Compliance:
 *    - Ensure privacy policy link is prominent
 *    - Verify terms of service are accessible
 *    - Check cookie policy compliance
 * 
 * 4. Trust Signal Validation:
 *    - Verify all compliance badges are accurate
 *    - Check security certifications are current
 *    - Ensure uptime SLA claims are truthful
 * 
 * 5. User Experience:
 *    - Test responsive design on mobile devices
 *    - Verify hover effects work smoothly
 *    - Check that contact methods are easily accessible
 */