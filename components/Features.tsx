type Feature = {
  icon: string;
  title: string;
  description: string;
  color: string;
  bg: string;
};

const features: Feature[] = [
  {
    icon: "🎒",
    title: "Smart Bundling",
    description:
      "Get flights + stays + transport + events combined into one seamless, conflict-free plan. No switching apps.",
    color: "text-accent",
    bg: "bg-accent-muted",
  },
  {
    icon: "💰",
    title: "Budget Optimization",
    description:
      "AI ensures your entire trip stays within your budget — down to the last rupee. No hidden surprises.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: "🎯",
    title: "Personalized Plans",
    description:
      "Party, chill, luxury, solo — your trip matches your vibe exactly. Plans adapt to who you are.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: "⚡",
    title: "Real-Time Adjustments",
    description:
      "Prices change? Plans adapt instantly. TripSage monitors and updates your itinerary automatically.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-4 bg-accent-muted px-4 py-2 rounded-full border border-accent/20">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4">
            Everything You Need,{" "}
            <span className="text-accent">Nothing You Don&apos;t</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">
            Built around how real travelers think — not how spreadsheets work.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-200`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover arrow */}
              <div className={`mt-5 flex items-center gap-1.5 text-xs font-semibold ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                Learn more <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "< 5s", label: "Plan generation time" },
            { value: "₹0", label: "Hidden fees or charges" },
            { value: "100%", label: "Budget accuracy guarantee" },
            { value: "24/7", label: "Real-time price monitoring" },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-white rounded-2xl p-5 border border-gray-100">
              <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
