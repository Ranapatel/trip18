"use client";



export default function Hero() {
   const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-indigo-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-50/80 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent-muted text-accent-dark text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              AI-Powered Travel Planning
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.08] mb-6">
              Plan Your Entire{" "}
              <span className="text-accent relative">
                Trip in Seconds
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10 Q75 2 150 6 Q225 10 298 4"
                    stroke="#6366f1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </span>{" "}
              with AI
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-light">
              Flights, hotels, local travel, and events — all bundled into one
              smart plan based on your{" "}
              <span className="text-gray-700 font-medium">budget and vibe.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => scrollTo("waitlist")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 active:translate-y-0"
              >
                🚀 Plan My Trip
              </button>
              <button
                onClick={() => scrollTo("example")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold text-base px-8 py-4 rounded-2xl border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                ▶️ See Demo
              </button>
            </div>

            {/* Trust line */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-400">
              <div className="flex -space-x-2">
                {["#6366f1", "#8b5cf6", "#a78bfa"].map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {["A", "B", "C"][i]}
                  </div>
                ))}
              </div>
              <span>No endless tabs. No confusion. Just one smart plan.</span>
            </div>
          </div>

          {/* Right: Trip Card Preview */}
          <div className="relative lg:pl-8">
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/80 border border-gray-100 p-6 max-w-md mx-auto">
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    AI Trip Plan
                  </p>
                  <h3 className="text-lg font-bold text-gray-900">
                    3-Day Goa Escape 🌊
                  </h3>
                </div>
                <div className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200">
                  ₹14,800
                </div>
              </div>

              {/* Trip items */}
              <div className="space-y-3">
                {[
                  { icon: "🚆", label: "Travel", value: "Train (Hyderabad → Goa)", color: "bg-blue-50 text-blue-600" },
                  { icon: "🏨", label: "Stay", value: "Budget beach hostel", color: "bg-purple-50 text-purple-600" },
                  { icon: "🎉", label: "Events", value: "2 parties + 1 beach activity", color: "bg-orange-50 text-orange-600" },
                  { icon: "💰", label: "Budget", value: "₹14,800 / ₹15,000", color: "bg-green-50 text-green-600" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                  >
                    <div className={`w-9 h-9 ${item.color} rounded-lg flex items-center justify-center text-base shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-800 truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Budget bar */}
              <div className="mt-5">
                <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                  <span>Budget used</span>
                  <span className="font-semibold text-green-600">98.7% — Great!</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-accent to-accent-light h-2 rounded-full"
                    style={{ width: "98.7%" }}
                  />
                </div>
              </div>

              {/* AI badge */}
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent text-xs">✦</span>
                </div>
                Generated by TripSage AI in 3 seconds
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-800 flex items-center gap-2">
              <span className="text-green-500">✓</span> Under Budget!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-white rounded-2xl shadow-lg px-4 py-2.5 text-sm font-semibold flex items-center gap-2">
              ⚡ 3 sec plan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
