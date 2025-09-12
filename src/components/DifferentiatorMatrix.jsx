/**
 * DifferentiatorMatrix Section
 * 
 * Decision-style comparison table that clearly highlights how Navigator
 * outperforms alternatives. Icons are intentionally avoided for a
 * professional, executive-friendly read.
 */

const rows = [
  { label: 'OTA & Meta Coverage', navigator: '800+ channels globally', other: 'Limited scope' },
  { label: 'Rate Accuracy & Freshness', navigator: 'Real-time, validated snapshots', other: 'Delays or stale data' },
  { label: 'Parity Comparison Logic', navigator: 'True apple-to-apple comparisons', other: 'Mismatched or estimated rates' },
  { label: 'Test Booking Engine', navigator: 'Scalable, reliable on all OTAs', other: 'Frequent failures on key sites' },
  { label: 'Demand Signals', navigator: 'Data across hotels, events, airlines, cruises', other: 'Limited to events' },
  { label: 'API Flexibility', navigator: 'Plug-and-play integrations', other: 'Rigid or slow to adapt' },
  { label: 'Customer Support', navigator: 'Dedicated 24/7 hotel support', other: 'Delayed, templated responses' },
];

const DifferentiatorMatrix = () => {
  return (
    <section className="relative py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Navigator</span> Different?
          </h2>
          <p className="mt-3 text-slate-600">A clear decision table—so you can see the operational reality, not marketing gloss.</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
          {/* Header */}
          <div className="grid grid-cols-12">
            <div className="col-span-4 px-6 py-5 font-semibold text-slate-700 bg-slate-50">Comparison</div>
            <div className="col-span-4 px-6 py-5 text-center font-bold bg-gradient-to-r from-blue-700 to-indigo-700 text-white">Navigator</div>
            <div className="col-span-4 px-6 py-5 text-center font-semibold text-slate-700 bg-slate-50">Other Solutions</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-slate-200">
            {rows.map((r, idx) => (
              <div key={r.label} className="grid grid-cols-12">
                {/* Feature label */}
                <div className={`col-span-4 px-6 py-5 font-medium ${idx % 2 ? 'bg-slate-50/60' : 'bg-white'} text-slate-700`}>{r.label}</div>
                {/* Navigator cell emphasized */}
                <div className={`col-span-4 px-6 py-5 ${idx % 2 ? 'bg-blue-50' : 'bg-blue-50/70'} text-slate-900`}> 
                  <span className="inline-block rounded-md bg-white/60 border border-blue-200 px-2 py-1 text-sm font-semibold text-blue-900">
                    {r.navigator}
                  </span>
                </div>
                {/* Other solutions de-emphasized */}
                <div className={`col-span-4 px-6 py-5 ${idx % 2 ? 'bg-slate-50' : 'bg-slate-100'} text-slate-600`}>{r.other}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorMatrix;


