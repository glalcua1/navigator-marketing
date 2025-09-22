/**
 * EcosystemIntegration Section
 *
 * Hero-style section showcasing how customers can use Navigator in three ways.
 * Right side presents three interactive glass cards with gradient outlines:
 *  - Navigator UI (full product experience)
 *  - API for all leading RMSs (RMS integrations)
 *  - API for BI System (feeds for BI/warehouse)
 */

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
          {/* Right: glass panel with three interactive option cards */}
          <div className="md:justify-self-end w-full max-w-xl">
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 gap-4">
                {/* Card 1: Navigator UI */}
                <div
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#1800FF]/40 to-[#008FFF]/40 transition-transform duration-300 hover:from-[#1800FF] hover:to-[#008FFF] hover:-translate-y-0.5"
                  aria-label="Navigator UI option"
                >
                  <div className="rounded-2xl h-full bg-slate-900/40 backdrop-blur-xl p-5 md:p-6 flex gap-4">
                    <div className="shrink-0 mt-1 h-10 w-10 rounded-xl bg-white/5 grid place-items-center">
                      {/* simple window icon */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="url(#grad-ui)" strokeWidth="1.6"/>
                        <path d="M3 8H21" stroke="url(#grad-ui)" strokeWidth="1.6"/>
                        <defs>
                          <linearGradient id="grad-ui" x1="3" y1="5" x2="21" y2="19" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1800FF"/>
                            <stop offset="1" stopColor="#008FFF"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold tracking-tight">Navigator UI</h3>
                      <p className="text-slate-200/80 text-sm mt-1">
                        Out-of-the-box, fast UI built for hotel revenue teams. No engineering required.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: API for all leading RMSs */}
                <div
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#1800FF]/40 to-[#008FFF]/40 transition-transform duration-300 hover:from-[#1800FF] hover:to-[#008FFF] hover:-translate-y-0.5"
                  aria-label="API for all leading RMSs option"
                >
                  <div className="rounded-2xl h-full bg-slate-900/40 backdrop-blur-xl p-5 md:p-6 flex gap-4">
                    <div className="shrink-0 mt-1 h-10 w-10 rounded-xl bg-white/5 grid place-items-center">
                      {/* plug icon */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 7v4m6-4v4M7 11h10m-5 0v6a3 3 0 1 1-6 0v-1" stroke="url(#grad-plug)" strokeWidth="1.6" strokeLinecap="round"/>
                        <defs>
                          <linearGradient id="grad-plug" x1="6" y1="7" x2="18" y2="20" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1800FF"/>
                            <stop offset="1" stopColor="#008FFF"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold tracking-tight">API for all leading RMSs</h3>
                      <p className="text-slate-200/80 text-sm mt-1">
                        Deliver clean, matched rate intelligence directly into your RMS via secure APIs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3: API for BI System */}
                <div
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#1800FF]/40 to-[#008FFF]/40 transition-transform duration-300 hover:from-[#1800FF] hover:to-[#008FFF] hover:-translate-y-0.5"
                  aria-label="API for BI System option"
                >
                  <div className="rounded-2xl h-full bg-slate-900/40 backdrop-blur-xl p-5 md:p-6 flex gap-4">
                    <div className="shrink-0 mt-1 h-10 w-10 rounded-xl bg-white/5 grid place-items-center">
                      {/* database/chart icon */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="url(#grad-db)" strokeWidth="1.6"/>
                        <path d="M5 10c0 1.657 3.134 3 7 3s7-1.343 7-3M5 14c0 1.657 3.134 3 7 3s7-1.343 7-3" stroke="url(#grad-db)" strokeWidth="1.6"/>
                        <path d="M8 13v3m3-2v2m3-3v3" stroke="url(#grad-db)" strokeWidth="1.6" strokeLinecap="round"/>
                        <defs>
                          <linearGradient id="grad-db" x1="5" y1="6" x2="19" y2="17" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1800FF"/>
                            <stop offset="1" stopColor="#008FFF"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold tracking-tight">API for BI System</h3>
                      <p className="text-slate-200/80 text-sm mt-1">
                        Stream ready-to-use datasets into your BI tools and warehouse for analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemIntegration;


