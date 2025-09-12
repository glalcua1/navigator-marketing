/**
 * Lead Generation Drawer Component - Professional Form Collection
 * 
 * This component provides a professional sliding drawer for collecting
 * lead information when users click "Start Free Trial" CTAs. Features
 * smooth animations, auto-population, and enterprise-grade design.
 * 
 * Design Elements:
 * - Right-side sliding animation
 * - Professional form design
 * - Auto-population for hotel categories and regions
 * - Mobile responsive layout
 * - Validation and error handling
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';

/**
 * Lead Generation Drawer Component
 * 
 * Professional sliding drawer with lead capture form
 * including auto-population features and smooth animations.
 * 
 * @param {boolean} isOpen - Controls drawer visibility
 * @param {Function} onClose - Callback to close the drawer
 */
const LeadGenerationDrawer = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    hotelName: '',
    category: '',
    region: '',
    email: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState('form'); // form | ai | review | onboarding
  const [recommendedCompetitors, setRecommendedCompetitors] = useState(['Hilton', 'Marriott', 'Hyatt', 'IHG', 'Accor']);
  const allOTAs = ['Booking.com', 'Expedia', 'Agoda', 'Hotels.com', 'Trip.com', 'Priceline'];
  const [selectedOTAs, setSelectedOTAs] = useState(['Booking.com', 'Expedia', 'Agoda']);

  // Hotel database for auto-population of category and region
  const hotelDatabase = [
    // Luxury International Chains
    { name: 'Four Seasons Hotels', category: 'Luxury Resort', region: 'North America' },
    { name: 'Ritz-Carlton', category: 'Luxury Resort', region: 'North America' },
    { name: 'St. Regis Hotels', category: 'Luxury Resort', region: 'North America' },
    { name: 'Park Hyatt', category: 'Luxury Resort', region: 'Asia Pacific' },
    { name: 'Mandarin Oriental', category: 'Luxury Resort', region: 'Asia Pacific' },
    { name: 'Aman Resorts', category: 'Resort & Spa', region: 'Asia Pacific' },
    { name: 'Bulgari Hotels', category: 'Luxury Resort', region: 'Europe' },
    { name: 'Edition Hotels', category: 'Boutique Hotel', region: 'Europe' },
    
    // Business Hotels
    { name: 'Hilton Hotels', category: 'Business Hotel', region: 'North America' },
    { name: 'Marriott Hotels', category: 'Business Hotel', region: 'North America' },
    { name: 'Hyatt Hotels', category: 'Business Hotel', region: 'North America' },
    { name: 'InterContinental', category: 'Business Hotel', region: 'Europe' },
    { name: 'Westin Hotels', category: 'Business Hotel', region: 'North America' },
    { name: 'Sheraton Hotels', category: 'Business Hotel', region: 'North America' },
    { name: 'Crowne Plaza', category: 'Business Hotel', region: 'Europe' },
    
    // Boutique & Independent
    { name: 'Kimpton Hotels', category: 'Boutique Hotel', region: 'North America' },
    { name: 'Thompson Hotels', category: 'Boutique Hotel', region: 'North America' },
    { name: 'SLS Hotels', category: 'Boutique Hotel', region: 'North America' },
    { name: 'Morgans Hotel Group', category: 'Boutique Hotel', region: 'North America' },
    { name: 'Design Hotels', category: 'Boutique Hotel', region: 'Europe' },
    
    // Resort & Spa
    { name: 'Grand Hyatt', category: 'Resort & Spa', region: 'Asia Pacific' },
    { name: 'JW Marriott', category: 'Resort & Spa', region: 'North America' },
    { name: 'Conrad Hotels', category: 'Resort & Spa', region: 'Asia Pacific' },
    { name: 'Waldorf Astoria', category: 'Resort & Spa', region: 'North America' },
    { name: 'Six Senses', category: 'Resort & Spa', region: 'Asia Pacific' },
    
    // Middle East & Africa
    { name: 'Jumeirah Hotels', category: 'Luxury Resort', region: 'Middle East & Africa' },
    { name: 'Atlantis Resorts', category: 'Resort & Spa', region: 'Middle East & Africa' },
    { name: 'One&Only Resorts', category: 'Luxury Resort', region: 'Middle East & Africa' },
    
    // Budget & Extended Stay
    { name: 'Hampton Inn', category: 'Budget Hotel', region: 'North America' },
    { name: 'Holiday Inn Express', category: 'Budget Hotel', region: 'North America' },
    { name: 'Extended Stay America', category: 'Extended Stay', region: 'North America' },
    { name: 'Homewood Suites', category: 'Extended Stay', region: 'North America' },
    
    // European Chains
    { name: 'Accor Hotels', category: 'Hotel Chain', region: 'Europe' },
    { name: 'NH Hotel Group', category: 'Business Hotel', region: 'Europe' },
    { name: 'Scandic Hotels', category: 'Business Hotel', region: 'Nordic Countries' },
    
    // Independent Option
    { name: 'Independent Hotel', category: 'Independent Hotel', region: 'North America' },
    { name: 'Other/Custom Hotel', category: '', region: '' }
  ];

  // Hotel categories for manual selection
  const hotelCategories = [
    'Luxury Resort',
    'Business Hotel',
    'Boutique Hotel',
    'Budget Hotel',
    'Extended Stay',
    'Vacation Rental',
    'Hotel Chain',
    'Independent Hotel',
    'Resort & Spa',
    'Conference Center'
  ];

  // Regions for manual selection
  const regions = [
    'North America',
    'Europe',
    'Asia Pacific',
    'Middle East & Africa',
    'Latin America',
    'Caribbean',
    'Southeast Asia',
    'Australia & New Zealand',
    'Central Asia',
    'Nordic Countries'
  ];

  // Handle form input changes with auto-population
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle hotel selection with auto-population
    if (name === 'hotelName') {
      const selectedHotel = hotelDatabase.find(hotel => hotel.name === value);
      
      if (selectedHotel && selectedHotel.category && selectedHotel.region) {
        console.log('[LeadGenerationDrawer] Auto-populating category and region for:', selectedHotel.name);
        setFormData(prev => ({
          ...prev,
          [name]: value,
          category: selectedHotel.category,
          region: selectedHotel.region
        }));
      } else {
        // For "Other/Custom Hotel" or manual entry, just update the hotel name
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } else {
      // Handle other form fields normally
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.hotelName.trim()) newErrors.hotelName = 'Hotel name is required';
    if (!formData.category) newErrors.category = 'Hotel category is required';
    if (!formData.region) newErrors.region = 'Region is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Step 1: AI thinking simulation
    console.log('[LeadGenerationDrawer] Valid form. Entering AI recommendation step');
    setIsSubmitting(true);
    setStep('ai');

    try {
      // Simulate AI generating recommendations based on category/region
      await new Promise(resolve => setTimeout(resolve, 1800));

      const region = formData.region;
      const category = formData.category;
      const byRegion = {
        'North America': ['Hilton', 'Marriott', 'Hyatt', 'IHG', 'Wyndham'],
        'Europe': ['Accor', 'NH Hotels', 'Scandic', 'Radisson', 'Meliá'],
        'Asia Pacific': ['Shangri-La', 'Mandarin Oriental', 'Taj', 'Hyatt', 'Hilton'],
      };
      const byCategory = {
        'Luxury Resort': ['Four Seasons', 'Ritz-Carlton', 'St. Regis', 'Aman', 'Mandarin Oriental'],
        'Business Hotel': ['Hilton', 'Marriott', 'IHG', 'Hyatt', 'Radisson'],
        'Boutique Hotel': ['Kimpton', 'Thompson', 'Moxy', 'CitizenM', 'SLS'],
      };

      const regionList = byRegion[region] || [];
      const categoryList = byCategory[category] || [];
      const combined = [...new Set([...categoryList, ...regionList, ...recommendedCompetitors])].slice(0, 5);
      setRecommendedCompetitors(combined.length ? combined : recommendedCompetitors);
      setSelectedOTAs(['Booking.com', 'Expedia', 'Agoda']);

      // Proceed to review/edit step
      setStep('review');
    } catch (error) {
      console.error('[LeadGenerationDrawer] AI step failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle OTA selection with max 3 constraint
  const toggleOTA = (ota) => {
    setSelectedOTAs(prev => {
      if (prev.includes(ota)) return prev.filter(o => o !== ota);
      if (prev.length >= 3) return prev; // limit to 3
      return [...prev, ota];
    });
  };

  // Confirm recommendations and redirect
  const handleConfirmRecommendations = () => {
    console.log('[LeadGenerationDrawer] Confirmed competitors:', recommendedCompetitors, 'OTAs:', selectedOTAs);
    setStep('onboarding');
    // Simulate onboarding handoff and redirect to app
    setTimeout(() => {
      window.location.href = 'https://navigator-263010608613.us-east4.run.app';
    }, 1500);
  };

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset flow when drawer opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Start Your Free Trial</h2>
              <p className="text-blue-100">Get started with Navigator in 2 minutes</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              aria-label="Close drawer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Drawer Content - Scrollable Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
          {step === 'form' && (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Hotel Name Dropdown */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Hotel Brand/Chain *
              </label>
              <select
                name="hotelName"
                value={formData.hotelName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.hotelName ? 'border-red-500' : 'border-slate-300'
                }`}
              >
                <option value="">Select your hotel brand/chain</option>
                
                {/* Luxury Hotels */}
                <optgroup label="🏆 Luxury Hotels">
                  <option value="Four Seasons Hotels">Four Seasons Hotels</option>
                  <option value="Ritz-Carlton">Ritz-Carlton</option>
                  <option value="St. Regis Hotels">St. Regis Hotels</option>
                  <option value="Park Hyatt">Park Hyatt</option>
                  <option value="Mandarin Oriental">Mandarin Oriental</option>
                  <option value="Bulgari Hotels">Bulgari Hotels</option>
                  <option value="Jumeirah Hotels">Jumeirah Hotels</option>
                  <option value="One&Only Resorts">One&Only Resorts</option>
                </optgroup>
                
                {/* Business Hotels */}
                <optgroup label="🏢 Business Hotels">
                  <option value="Hilton Hotels">Hilton Hotels</option>
                  <option value="Marriott Hotels">Marriott Hotels</option>
                  <option value="Hyatt Hotels">Hyatt Hotels</option>
                  <option value="InterContinental">InterContinental</option>
                  <option value="Westin Hotels">Westin Hotels</option>
                  <option value="Sheraton Hotels">Sheraton Hotels</option>
                  <option value="Crowne Plaza">Crowne Plaza</option>
                  <option value="NH Hotel Group">NH Hotel Group</option>
                  <option value="Scandic Hotels">Scandic Hotels</option>
                </optgroup>
                
                {/* Boutique Hotels */}
                <optgroup label="🎨 Boutique Hotels">
                  <option value="Kimpton Hotels">Kimpton Hotels</option>
                  <option value="Thompson Hotels">Thompson Hotels</option>
                  <option value="SLS Hotels">SLS Hotels</option>
                  <option value="Morgans Hotel Group">Morgans Hotel Group</option>
                  <option value="Design Hotels">Design Hotels</option>
                  <option value="Edition Hotels">Edition Hotels</option>
                </optgroup>
                
                {/* Resort & Spa */}
                <optgroup label="🏖️ Resort & Spa">
                  <option value="Grand Hyatt">Grand Hyatt</option>
                  <option value="JW Marriott">JW Marriott</option>
                  <option value="Conrad Hotels">Conrad Hotels</option>
                  <option value="Waldorf Astoria">Waldorf Astoria</option>
                  <option value="Six Senses">Six Senses</option>
                  <option value="Aman Resorts">Aman Resorts</option>
                  <option value="Atlantis Resorts">Atlantis Resorts</option>
                </optgroup>
                
                {/* Budget & Extended Stay */}
                <optgroup label="💰 Budget & Extended Stay">
                  <option value="Hampton Inn">Hampton Inn</option>
                  <option value="Holiday Inn Express">Holiday Inn Express</option>
                  <option value="Extended Stay America">Extended Stay America</option>
                  <option value="Homewood Suites">Homewood Suites</option>
                </optgroup>
                
                {/* Hotel Chains */}
                <optgroup label="🔗 Hotel Chains">
                  <option value="Accor Hotels">Accor Hotels</option>
                </optgroup>
                
                {/* Independent */}
                <optgroup label="🏠 Independent">
                  <option value="Independent Hotel">Independent Hotel</option>
                  <option value="Other/Custom Hotel">Other/Custom Hotel</option>
                </optgroup>
              </select>
              {errors.hotelName && <p className="text-red-500 text-sm mt-1">{errors.hotelName}</p>}
              
              {/* Auto-population indicator */}
              {formData.hotelName && formData.hotelName !== 'Other/Custom Hotel' && formData.category && (
                <p className="text-green-600 text-sm mt-1 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Category and region auto-populated
                </p>
              )}
            </div>

            {/* Hotel Category Dropdown */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Hotel Category * 
                {formData.category && formData.hotelName && formData.hotelName !== 'Other/Custom Hotel' && (
                  <span className="text-green-600 text-xs ml-2">(Auto-populated - can override)</span>
                )}
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.category ? 'border-red-500' : 'border-slate-300'
                }`}
              >
                <option value="">Select hotel category</option>
                {hotelCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

            {/* Region Dropdown */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Region * 
                {formData.region && formData.hotelName && formData.hotelName !== 'Other/Custom Hotel' && (
                  <span className="text-green-600 text-xs ml-2">(Auto-populated - can override)</span>
                )}
              </label>
              <select
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.region ? 'border-red-500' : 'border-slate-300'
                }`}
              >
                <option value="">Select your region</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {errors.region && <p className="text-red-500 text-sm mt-1">{errors.region}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Work Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Enter your work email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Trust Indicators */}
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center text-sm text-slate-600 space-y-2 flex-col">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Free 30-day trial
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  No credit card required
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Setup in under 2 weeks
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                isSubmitting
                  ? 'bg-slate-400 cursor-not-allowed text-white'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Thinking with AI...
                </div>
              ) : (
                'Start Free Trial Now'
              )}
            </button>

          </form>
          )}

          {step === 'ai' && (
            <div className="py-16 text-center">
              <div className="mx-auto w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <div className="text-slate-700 font-semibold">Analyzing your market and compset...</div>
              <div className="text-slate-500 text-sm mt-2">Finding competitors and best OTAs for your property</div>
            </div>
          )}

          {step === 'review' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Recommended Competitors</h3>
                <p className="text-slate-600 text-sm">Edit if needed. We suggest 5 based on your category and region.</p>
                <div className="mt-3 space-y-2">
                  {recommendedCompetitors.map((name, idx) => (
                    <input
                      key={idx}
                      type="text"
                      value={name}
                      onChange={(e) => {
                        const copy = [...recommendedCompetitors];
                        copy[idx] = e.target.value;
                        setRecommendedCompetitors(copy);
                      }}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800">Select 3 OTAs</h3>
                <p className="text-slate-600 text-sm">Choose up to three distribution partners to monitor first.</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {allOTAs.map((ota) => (
                    <label key={ota} className={`flex items-center gap-2 p-2 rounded-lg border ${selectedOTAs.includes(ota) ? 'border-blue-500 bg-blue-50' : 'border-slate-300'}`}>
                      <input
                        type="checkbox"
                        checked={selectedOTAs.includes(ota)}
                        onChange={() => toggleOTA(ota)}
                      />
                      <span className="text-slate-700">{ota}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-1">Currently selected: {selectedOTAs.join(', ') || 'none'} (max 3)</p>
              </div>

              <button
                onClick={handleConfirmRecommendations}
                className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-95"
              >
                Confirm & Continue
              </button>
            </div>
          )}

          {step === 'onboarding' && (
            <div className="py-16 text-center">
              <div className="mx-auto w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <div className="text-slate-700 font-semibold">Onboarding you to Navigator...</div>
              <div className="text-slate-500 text-sm mt-2">Redirecting you to your dashboard</div>
            </div>
          )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-6 bg-slate-50 flex-shrink-0">
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            By submitting this form, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
            We'll contact you within 24 hours to set up your trial.
          </p>
        </div>
      </div>
    </>
  );
};

export default LeadGenerationDrawer;

/**
 * Component Features:
 * 
 * 1. Professional Design:
 *    - Smooth right-slide animation
 *    - Professional form layout with proper spacing
 *    - Gradient header with clear messaging
 *    - Mobile-responsive design
 * 
 * 2. Form Functionality:
 *    - All requested fields with validation
 *    - Auto-populated dropdowns for categories and regions
 *    - Real-time error handling
 *    - Form submission with loading states
 * 
 * 3. User Experience:
 *    - Escape key to close
 *    - Backdrop click to close
 *    - Body scroll prevention when open
 *    - Trust indicators and guarantees
 * 
 * 4. Technical Excellence:
 *    - Proper accessibility labels
 *    - Form validation and error handling
 *    - Loading states and success feedback
 *    - Console logging for debugging
 */