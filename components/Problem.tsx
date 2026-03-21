export default function Problem() {
  const problems = [
    {
      icon: "📱",
      text: "Too many apps for flights, hotels, and activities",
    },
    {
      icon: "💸",
      text: "No clear idea if your trip fits your budget",
    },
    {
      icon: "⏰",
      text: "Time wasted comparing options manually",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-red-400 uppercase tracking-widest mb-4 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Travel Planning is{" "}
            <span className="text-red-400 line-through decoration-2">Broken</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            You open 10 tabs, compare 50 options, lose track of your budget —
            and still aren&apos;t sure if you&apos;re making the right choice.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors group"
            >
              {/* Number */}
              <div className="text-8xl font-black text-white/5 absolute top-4 right-6 select-none group-hover:text-white/8 transition-colors">
                {i + 1}
              </div>
              <div className="text-3xl mb-4">{problem.icon}</div>
              <p className="text-white/80 text-base font-medium leading-relaxed relative z-10">
                {problem.text}
              </p>
              <div className="mt-4 w-8 h-0.5 bg-red-500/60 rounded-full" />
            </div>
          ))}
        </div>

        {/* Highlight punchline */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border border-accent/30 rounded-2xl px-8 py-5">
            <p className="text-lg sm:text-xl font-bold text-white">
              You don&apos;t need more options.
              <span className="text-accent"> You need the right plan.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
