const testimonials = [
  {
    quote:
      "Saved me hours of planning. Got a perfect trip to Coorg under budget — every detail was handled. I literally just had to pack my bag.",
    name: "Priya S.",
    title: "Solo traveler · Bangalore",
    avatar: "PS",
    avatarBg: "bg-purple-100 text-purple-600",
    trip: "4 days Coorg · ₹12,000",
  },
  {
    quote:
      "Finally, one app that actually understands what I want. Told it I wanted a party trip to Goa for 5 people, and it nailed every detail — including splitting costs.",
    name: "Rahul M.",
    title: "Group traveler · Mumbai",
    avatar: "RM",
    avatarBg: "bg-blue-100 text-blue-600",
    trip: "5 friends · Goa · ₹60,000",
  },
  {
    quote:
      "I used to spend an entire weekend planning a trip. Now I do it in the time it takes to finish my chai. TripSage is genuinely a game-changer.",
    name: "Ananya K.",
    title: "Frequent traveler · Delhi",
    avatar: "AK",
    avatarBg: "bg-green-100 text-green-600",
    trip: "Himachal · ₹18,500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-4 bg-accent-muted px-4 py-2 rounded-full border border-accent/20">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4">
            Early Users{" "}
            <span className="text-accent">Love It</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">
            Real feedback from our beta travelers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-6 flex flex-col hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Trip tag */}
              <div className="mb-5">
                <span className="inline-block bg-accent-muted text-accent text-xs font-semibold px-3 py-1.5 rounded-full border border-accent/20">
                  ✈️ {t.trip}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center font-bold text-sm`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-purple-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-pink-400"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 ${color} rounded-full border-2 border-white`}
                  />
                )
              )}
            </div>
            <p className="text-sm font-semibold text-gray-700">
              500+ travelers on the waitlist
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400">★★★★★</span>
              <span className="font-semibold text-gray-700">4.9/5</span>
              <span>avg rating</span>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <span>Beta access · Invite only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
