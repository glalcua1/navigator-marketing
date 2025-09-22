/**
 * EcosystemIntegration Section
 * 
 * Displays a hero-like integration visual with headline and subhead,
 * designed to match the provided inspiration in the project's theme.
 */

import React from 'react';

const EcosystemIntegration = () => {
  return (
    <section
      className="relative py-20 min-h-[680px] md:min-h-[760px]"
      style={{
        backgroundImage: "url('/209165475_12afdcf0-ee57-4cd4-bc17-67c5c457e3ac.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {/* overlay for legibility on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="min-h-[680px] md:min-h-[760px] flex items-center">
          <div className="grid md:grid-cols-2 gap-10 items-center w-full">
          {/* Left text aligned with tree */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Built to Plug <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1800FF] to-[#008FFF]">into Your Ecosystem</span>
            </h2>
            <p className="mt-4 text-blue-100 text-lg max-w-xl">
              Whether you need a full UI experience or raw rate feeds into your BI stack, Navigator adapts to your workflows.
            </p>
          </div>
          {/* Right glass card */}
          <div className="md:justify-self-end w-full max-w-xl">
            <div className="rounded-3xl border border-white/30 bg-white/15 backdrop-blur-xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-300"></span>
                  <span className="text-white font-semibold">Navigator UI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-300"></span>
                  <span className="text-white font-semibold">API for all leading RMSs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-300"></span>
                  <span className="text-white font-semibold">API for BI System</span>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemIntegration;


