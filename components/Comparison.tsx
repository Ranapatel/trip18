const rows = [
  { feature: "Search for options", traditional: "Manual — hours of effort", tripsage: "AI builds plan automatically" },
  { feature: "Booking process", traditional: "Separate apps per category", tripsage: "All-in-one bundle" },
  { feature: "Budget tracking", traditional: "No clarity upfront", tripsage: "Full cost shown instantly" },
  { feature: "Time to plan", traditional: "4–8 hours", tripsage: "Under 5 seconds" },
  { feature: "Price monitoring", traditional: "You do it manually", tripsage: "AI adapts in real-time" },
  { feature: "Personalization", traditional: "Generic results", tripsage: "Matched to your vibe" },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-4 bg-accent-muted px-4 py-2 rounded-full border border-accent/20">
            Why TripSage Wins
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4">
            The Old Way vs{" "}
            <span className="text-accent">The Smart Way</span>
          </h2>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-100 overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-gray-950 text-white">
            <div className="px-6 py-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">What you&apos;re comparing</p>
            </div>
            <div className="px-6 py-5 border-l border-white/10">
              <p className="text-sm font-bold text-gray-300">😩 Traditional Apps</p>
            </div>
            <div className="px-6 py-5 border-l border-white/10 bg-accent/20">
              <p className="text-sm font-bold text-accent-light">✦ TripSage AI</p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-t border-gray-100 hover:bg-gray-50/50 transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/30"
              }`}
            >
              <div className="px-6 py-4">
                <p className="text-sm font-semibold text-gray-700">{row.feature}</p>
              </div>
              <div className="px-6 py-4 border-l border-gray-100">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 text-sm mt-0.5 shrink-0">✕</span>
                  <p className="text-sm text-gray-500">{row.traditional}</p>
                </div>
              </div>
              <div className="px-6 py-4 border-l border-gray-100 bg-accent-muted/30">
                <div className="flex items-start gap-2">
                  <span className="text-accent text-sm mt-0.5 shrink-0">✓</span>
                  <p className="text-sm font-medium text-gray-800">{row.tripsage}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Footer row */}
          <div className="grid grid-cols-3 border-t border-gray-100 bg-gray-50">
            <div className="px-6 py-5">
              <p className="text-sm font-bold text-gray-900">Overall verdict</p>
            </div>
            <div className="px-6 py-5 border-l border-gray-100">
              <span className="inline-block bg-red-50 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full border border-red-200">
                Time-consuming & fragmented
              </span>
            </div>
            <div className="px-6 py-5 border-l border-gray-100 bg-accent-muted/30">
              <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Instant. Smart. Complete. ✓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
