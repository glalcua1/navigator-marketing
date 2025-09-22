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
        
        {/* Stats-style intro row (designed like attached, in Navigator theme) */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-3xl p-8 border border-slate-200">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">$2.4K</div>
            <div className="text-slate-500">Avg daily revenue leakage</div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">24/7</div>
            <div className="text-slate-500">Rate and parity violations</div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">48h</div>
            <div className="text-slate-500">Early demand surge signals</div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">1100+</div>
            <div className="text-slate-500">Data sources monitored</div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">4 hrs</div>
            <div className="text-slate-500">Manual work saved daily</div>
          </div>
        </div>
        
        
        {/* Introducing Navigator - Hospitality-specific AI section (replaces previous 3-ways block) */}
        <div className={`reveal ${isVisible ? 'revealed' : ''}`}>
          {/* Full-width container without causing horizontal scroll */}
          <div className="relative -mx-6 md:-mx-12 lg:-mx-24">
            <div className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-slate-50 border border-slate-200">
              {/* Header */}
              <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="text-slate-500 font-semibold tracking-wide mb-3">Introducing Navigator</div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Powering Decisions with <span className="text-blue-600">AI</span> that Gets Hospitality
              </h3>
              <p className="text-lg text-slate-700 mb-2">Navigator doesn’t just track data—it understands it.</p>
              <p className="text-lg text-slate-600">Built with hospitality-specific AI, Navigator helps commercial teams make sharper, faster pricing decisions by identifying patterns no human could spot in time.</p>
              </div>

              {/* Feature Cards */}
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group relative bg-white rounded-2xl p-0 border border-slate-200 hover:border-blue-200 transition-all duration-300 overflow-hidden">
                  {/* Illustration: Rate Tracking (image) */}
                  <div className="relative z-10 w-full h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                    <img src="/19456.jpg" alt="Rate tracking visualization" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Rate Tracking</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Detects rate discrepancies and parity violations automatically—even the subtle ones—across hundreds of OTAs and POS combinations.
                  </p>
                  </div>
                  {/* Hover gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative bg-white rounded-2xl p-0 border border-slate-200 hover:border-blue-200 transition-all duration-300 overflow-hidden">
                  {/* Illustration: Predictive Demand Signals (svg image) */}
                  <div className="relative z-10 w-full h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                    <img src="/420946224_fb6c1e98-bc72-4bb3-8f68-384948186b85.svg" alt="Predictive Demand Signals" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Predictive Demand Signals</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Uses AI to surface spikes and dips in demand before they happen, so you can adjust rates proactively.
                  </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative bg-white rounded-2xl p-0 border border-slate-200 hover:border-blue-200 transition-all duration-300 overflow-hidden">
                  {/* Illustration: Smarter Filtering (image) */}
                  <div className="relative z-10 w-full h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                    <img src="/1570.jpg" alt="Smarter filtering" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Smarter Filtering, Less Noise</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Cuts through the clutter by flagging only the violations and shifts that actually matter to your market segment.
                  </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative bg-white rounded-2xl p-0 border border-slate-200 hover:border-blue-200 transition-all duration-300 overflow-hidden">
                  {/* Illustration: AI-Powered Recommendations (image) */}
                  <div className="relative z-10 w-full h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                    <img src="/6841.jpg" alt="AI-powered recommendations" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-3">AI-Powered Recommendations</h4>
                  <p className="text-slate-600 leading-relaxed">
                    From price positioning to parity resolution paths, Navigator guides your next move with data-backed intelligence.
                  </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              </div>
          </div>
        </div>
        
        {/* How Navigator Works - Core Flow */}
        <div className={`mt-16 reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-10 lg:hidden">
              <div className="text-slate-600 font-semibold tracking-wide uppercase mb-1">How navigator works:</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#1800FF] to-[#008FFF]">
                From Market Signals to Better Pricing Decisions
              </h3>
              <p className="text-slate-600 mt-2 max-w-4xl">
                To solve this, Navigator does the heavy lifting across four layers:
              </p>
            </div>

            {/* Two-column: Video left, Steps right */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Sticky media + header on desktop */}
              <div className="lg:sticky lg:top-24 self-start">
                <div className="hidden lg:block mb-6">
                  <div className="text-slate-600 font-semibold tracking-wide uppercase mb-1">How navigator works:</div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#1800FF] to-[#008FFF]">From Market Signals to Better Pricing Decisions</h3>
                  <p className="text-slate-600 mt-2">To solve this, Navigator does the heavy lifting across four layers:</p>
                </div>
                <div className="relative rounded-3xl overflow-hidden bg-slate-900/5 border border-slate-200">
                  <img src="/11706.jpg" alt="Navigator market signals" className="w-full h-[420px] md:h-[520px] object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-2xl px-4 py-3 text-sm md:text-base flex items-start">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                      <span>
                        Navigator is built to help hotel commercial teams answer one critical question: “Are we priced right — right now?”
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps list */}
              <ol className="grid grid-cols-1 gap-6">
              {/* Step 1 */}
              <li className="group relative rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300">
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center">1</div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Multi-Source Market Scanning</h4>
                <p className="text-slate-600 mb-3">Navigator continuously scans and collects pricing and demand signals from over 1,100 data sources, including:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>800+ OTAs, brand.com sites, metasearch platforms</li>
                  <li>Global demand indicators: events, airline data, car rentals, cruises, and more</li>
                  <li>Member-only rates, mobile rates, and multi-POS visibility</li>
                </ul>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  This ensures you always see what guests see—wherever they’re booking.
                </div>
              </li>

              {/* Step 2 */}
              <li className="group relative rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300">
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center">2</div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Data Cleaning, Matching & Validation</h4>
                <p className="text-slate-600 mb-3">Raw data is useless without refinement. Navigator uses proprietary algorithms to:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Match room types and rate plans apple-to-apple</li>
                  <li>Remove outliers and anomalies</li>
                  <li>Ensure real-time freshness — no cached or outdated pricing</li>
                </ul>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Clean, accurate, immediately actionable rate intelligence.
                </div>
              </li>

              {/* Step 3 */}
              <li className="group relative rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300">
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center">3</div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Unified Commercial Intelligence</h4>
                <p className="text-slate-600 mb-3">Navigator doesn’t just give you a rate table — it synthesizes:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Competitor pricing movements</li>
                  <li>Demand surges in feeder markets</li>
                  <li>Parity violations across distribution</li>
                  <li>Impact areas that need immediate action</li>
                </ul>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  One dashboard. All the signals you need. No spreadsheets.
                </div>
              </li>

              {/* Step 4 */}
              <li className="group relative rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300">
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-pink-600 text-white font-bold flex items-center justify-center">4</div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Decision Support via AI</h4>
                <p className="text-slate-600 mb-3">AI models surface the most urgent and revenue-impacting insights:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Detect potential underpricing or overpricing</li>
                  <li>Flag parity leak sources in real time</li>
                  <li>Recommend optimal rate changes to stay ahead</li>
                </ul>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Not just data—your 24×7 virtual revenue analyst.
                </div>
              </li>
              </ol>
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