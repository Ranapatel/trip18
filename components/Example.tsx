"use client";

export default function Example() {
   const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const tripItems = [
    {
      icon: "🚆",
      category: "Travel",
      detail: "Train (HYD → GOA) + Return",
      cost: "₹3,200",
      badge: "Best Value",
      badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      icon: "🏨",
      category: "Stay",
      detail: "Budget beach hostel — 3 nights",
      cost: "₹4,500",
      badge: "4.2★",
      badgeColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
    },
    {
      icon: "🎉",
      category: "Events",
      detail: "2 beach parties + 1 activity",
      cost: "₹3,100",
      badge: "Popular",
      badgeColor: "bg-pink-50 text-pink-600 border-pink-200",
    },
    {
      icon: "🍜",
      category: "Food Budget",
      detail: "Local restaurants & cafes",
      cost: "₹2,400",
      badge: "Flexible",
      badgeColor: "bg-green-50 text-green-600 border-green-200",
    },
    {
      icon: "🛺",
      category: "Local Transport",
      detail: "Auto + bikes within Goa",
      cost: "₹1,600",
      badge: "Included",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
    },
  ];

  const total = "₹14,800";
  const budget = "₹15,000";

  return (
    <section id="example" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-4 bg-accent-muted px-4 py-2 rounded-full border border-accent/20">
            See It in Action
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4">
            A Real Plan,{" "}
            <span className="text-accent">Built in 3 Seconds</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">
            Here&apos;s exactly what TripSage builds when you say{" "}
            <em>&quot;3 days in Goa under ₹15,000 from Hyderabad.&quot;</em>
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Input prompt */}
          <div className="lg:col-span-2">
            <div className="bg-gray-950 rounded-3xl p-6 text-white sticky top-24">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-semibold">
                Your prompt
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
                <p className="text-white text-sm leading-relaxed">
                  &ldquo;Plan a{" "}
                  <span className="text-accent-light font-semibold">3-day trip to Goa</span>{" "}
                  from Hyderabad, budget under{" "}
                  <span className="text-green-400 font-semibold">₹15,000</span>.
                  I want beach parties and a chill vibe.&rdquo;
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Flights & trains checked
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Hotels & hostels scanned
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Events & activities found
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Budget optimized ✓
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center text-accent">✦</div>
                Generated in 2.8 seconds
              </div>
            </div>
          </div>

          {/* Right: Trip breakdown */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-100 overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-r from-accent to-accent-light px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black">3-Day Goa Trip 🌊</h3>
                    <p className="text-white/70 text-sm">Hyderabad → Goa · Budget Chill Vibe</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black">{total}</p>
                    <p className="text-white/70 text-xs">of {budget} budget</p>
                  </div>
                </div>

                {/* Budget progress */}
                <div className="mt-4">
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "98.7%" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>₹0</span>
                    <span className="text-white/90 font-semibold">₹200 saved 🎉</span>
                    <span>{budget}</span>
                  </div>
                </div>
              </div>

              {/* Line items */}
              <div className="divide-y divide-gray-50">
                {tripItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{item.category}</p>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-800 truncate">{item.detail}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 shrink-0">{item.cost}</p>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      This plan is ready for you ✓
                    </p>
                    <p className="text-xs text-gray-400">Prices locked for 24h. Book in one tap.</p>
                  </div>
                  <button
                    onClick={() => scrollTo("waitlist")}
                    className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    Try Your Plan →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
