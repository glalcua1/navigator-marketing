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
          {/* Full-width breakout container */}
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
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
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300">
                  {/* Illustration: Rate Tracking (badges + grid) */}
                  <div className="mb-4">
                    <svg viewBox="0 0 180 80" className="w-full h-16" aria-hidden="true">
                      <defs>
                        <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2563eb"/>
                          <stop offset="100%" stopColor="#6366f1"/>
                        </linearGradient>
                        <linearGradient id="gradRed" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ef4444"/>
                          <stop offset="100%" stopColor="#fb7185"/>
                        </linearGradient>
                      </defs>
                      <rect x="6" y="6" rx="10" ry="10" width="46" height="30" fill="url(#gradBlue)" opacity="0.95"/>
                      <rect x="6" y="44" rx="10" ry="10" width="46" height="30" fill="url(#gradRed)" opacity="0.95"/>
                      {/* mini grid */}
                      {Array.from({length:6}).map((_,r)=>
                        Array.from({length:9}).map((_,c)=>{
                          const x=70+c*12; const y=10+r*12; const red=(r%2===1 && c%3===1);
                          return <rect key={`g-${r}-${c}`} x={x} y={y} width="8" height="8" rx="2" fill={red? '#f87171' : '#93c5fd'} opacity={c%4===0?1:0.75}/>;
                        })
                      )}
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Rate Tracking</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Detects rate discrepancies and parity violations automatically—even the subtle ones—across hundreds of OTAs and POS combinations.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300">
                  {/* Illustration: Predictive Demand Signals (wave) */}
                  <div className="mb-4">
                    <svg viewBox="0 0 180 80" className="w-full h-16" aria-hidden="true">
                      <rect x="0" y="0" width="180" height="80" rx="10" fill="#eef2ff" />
                      <polyline points="0,60 20,55 40,50 60,40 80,30 100,35 120,25 140,38 160,22 180,28" fill="none" stroke="#7c3aed" strokeWidth="3" />
                      <circle cx="120" cy="25" r="4" fill="#7c3aed"/>
                      <circle cx="160" cy="22" r="4" fill="#7c3aed"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Predictive Demand Signals</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Uses AI to surface spikes and dips in demand before they happen, so you can adjust rates proactively.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300">
                  {/* Illustration: Smarter Filtering (funnel) */}
                  <div className="mb-4">
                    <svg viewBox="0 0 180 80" className="w-full h-16" aria-hidden="true">
                      <rect x="0" y="0" width="180" height="80" rx="10" fill="#f5f3ff" />
                      <rect x="20" y="14" width="140" height="12" rx="6" fill="#a78bfa"/>
                      <rect x="40" y="30" width="100" height="10" rx="5" fill="#8b5cf6"/>
                      <polygon points="70,44 110,44 95,64 85,64" fill="#7c3aed"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Smarter Filtering, Less Noise</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Cuts through the clutter by flagging only the violations and shifts that actually matter to your market segment.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300">
                  {/* Illustration: AI-Powered Recommendations (spark + arrow) */}
                  <div className="mb-4">
                    <svg viewBox="0 0 180 80" className="w-full h-16" aria-hidden="true">
                      <rect x="0" y="0" width="180" height="80" rx="10" fill="#eff6ff" />
                      <path d="M20 60 L80 30 L100 40 L140 20" stroke="#2563eb" strokeWidth="3" fill="none"/>
                      <polygon points="140,20 132,22 136,28" fill="#2563eb"/>
                      <g fill="#fbbf24">
                        <circle cx="110" cy="22" r="3"/>
                        <circle cx="118" cy="18" r="2"/>
                        <circle cx="122" cy="26" r="2"/>
                      </g>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">AI-Powered Recommendations</h4>
                  <p className="text-slate-600 leading-relaxed">
                    From price positioning to parity resolution paths, Navigator guides your next move with data-backed intelligence.
                  </p>
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
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
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
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">From Market Signals to Better Pricing Decisions</h3>
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