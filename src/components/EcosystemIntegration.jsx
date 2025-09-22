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
      {/* overlay for legibility on left (lightened to show more image) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
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
          {/* Right: glass panel with three option cards (narrower and lighter so image shows through) */}
          <div className="md:justify-self-end w-full max-w-md md:translate-x-2 lg:translate-x-4">
            <div className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-lg p-4 sm:p-5 lg:p-6">
              <div className="grid grid-cols-1 gap-4">
                {/* Card 1: Navigator UI */}
                <div
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#1800FF]/40 to-[#008FFF]/40 transition-transform duration-300 hover:from-[#1800FF] hover:to-[#008FFF] hover:-translate-y-0.5"
                  aria-label="Navigator UI option"
                >
                  <div className="rounded-2xl h-full bg-slate-900/30 backdrop-blur-lg p-4 md:p-5">
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
                  <div className="rounded-2xl h-full bg-slate-900/30 backdrop-blur-lg p-4 md:p-5">
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
                  <div className="rounded-2xl h-full bg-slate-900/30 backdrop-blur-lg p-4 md:p-5">
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


