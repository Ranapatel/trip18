export default function Solution() {
  const steps = [
    { step: "01", title: "Tell us your vibe", desc: "Budget, destination, dates, and travel style — takes 30 seconds." },
    { step: "02", title: "AI builds your plan", desc: "Our AI bundles flights, stays, transport, and events instantly." },
    { step: "03", title: "Review and go", desc: "Tweak anything you like, then head out. Zero confusion." },
  ];

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-4 bg-accent-muted px-4 py-2 rounded-full border border-accent/20">
              The Solution
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
              Meet Your AI{" "}
              <span className="text-accent">Travel Planner</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
              TripSage understands your budget, preferences, and travel style —
              then builds a complete trip plan instantly. No guesswork, no tab
              overload, no regrets.
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-muted text-accent rounded-xl flex items-center justify-center font-black text-sm group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-gray-950 text-white rounded-3xl p-8 shadow-2xl shadow-gray-900/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-sm">TS</div>
                <div>
                  <p className="font-semibold text-white text-sm">TripSage AI</p>
                  <p className="text-gray-400 text-xs">Building your plan...</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: "✈️", label: "Analysing flight routes...", done: true },
                  { icon: "🏨", label: "Matching budget hotels...", done: true },
                  { icon: "🗺️", label: "Curating local experiences...", done: true },
                  { icon: "💰", label: "Optimising total cost...", done: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-gray-300 flex-1">{item.label}</span>
                    {item.done ? (
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-accent/50 border-t-accent animate-spin" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-accent/10 border border-accent/20 rounded-xl px-4 py-3">
                <p className="text-accent text-sm font-semibold">
                  ✦ Ready in ~3 seconds. 100% within your ₹15,000 budget.
                </p>
              </div>
            </div>

            {/* Stat cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-3">
              <p className="text-2xl font-black text-gray-900">10x</p>
              <p className="text-xs text-gray-500">faster than manual planning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
