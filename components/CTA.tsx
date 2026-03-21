"use client";

export default function CTA() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-light text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-accent/20">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Limited Early Access
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Ready to Plan{" "}
          <span className="text-accent">Smarter?</span>
        </h2>

        <p className="text-gray-400 text-xl mb-10 font-light max-w-xl mx-auto leading-relaxed">
          Stop searching. Start traveling. Join thousands of smart travelers
          who plan complete trips in seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollTo("waitlist")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-1 active:translate-y-0"
          >
            🚀 Plan My Trip Now
          </button>
          <button
            onClick={() => scrollTo("example")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-lg px-10 py-5 rounded-2xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            See example plan
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          {["✓ Free to join waitlist", "✓ No credit card needed", "✓ Early bird perks"].map(
            (item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-gray-400">
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}