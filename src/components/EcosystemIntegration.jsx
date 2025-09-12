/**
 * EcosystemIntegration Section
 * 
 * Displays a hero-like integration visual with headline and subhead,
 * designed to match the provided inspiration in the project's theme.
 */

import React from 'react';

const EcosystemIntegration = () => {
  return (
    <section className="relative py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Built to Plug</span>{' '}into Your Ecosystem
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-4xl mx-auto">
            Whether you need a full UI experience or raw rate feeds into your BI stack, Navigator adapts to your workflows.
          </p>
        </div>

        {/* Center graphic placeholder in our theme */}
        <div className="relative mx-auto max-w-4xl">
          <div className="aspect-[4/3] rounded-3xl bg-white border border-slate-200 shadow-2xl grid place-items-center">
            <div className="grid grid-cols-3 gap-8 px-10">
              <div className="text-center">
                <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 shadow-lg grid place-items-center text-white text-3xl font-bold">UI</div>
                <div className="mt-4 text-slate-700 font-semibold">Navigator UI</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 shadow-lg grid place-items-center text-white text-3xl font-bold">RMS</div>
                <div className="mt-4 text-slate-700 font-semibold">API for RMSs</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 shadow-lg grid place-items-center text-white text-3xl font-bold">BI</div>
                <div className="mt-4 text-slate-700 font-semibold">API for BI</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EcosystemIntegration;


