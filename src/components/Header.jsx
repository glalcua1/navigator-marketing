/**
 * Fixed Header - Global Navigation
 * Shows Navigator logo, key section links, and CTAs (Start Free Trial, Login).
 */

import React from 'react';

const Header = () => {
  const handleStartTrial = (e) => {
    e.preventDefault();
    try {
      window.dispatchEvent(new CustomEvent('openTrial'));
    } catch {}
    // Also scroll to hero for context
    const hero = document.getElementById('hero');
    hero?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/85 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <span className="text-xl font-extrabold text-white">Navigator</span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-200">
            <a href="#how" onClick={(e) => { e.preventDefault(); document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white">How it works</a>
            <a href="#ecosystem" onClick={(e) => { e.preventDefault(); document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white">Ecosystem</a>
            <a href="#compare" onClick={(e) => { e.preventDefault(); document.getElementById('compare')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white">Compare</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white">Testimonials</a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <a href="https://navigator-263010608613.us-east4.run.app" className="px-4 py-2 rounded-lg border border-white/40 text-white hover:bg-white/10">Login</a>
            <button onClick={handleStartTrial} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90">Start Free Trial</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


