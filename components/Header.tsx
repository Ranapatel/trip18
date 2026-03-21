"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
              TS
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Trip<span className="text-accent">Sage</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Features", id: "features" },
              { label: "Example", id: "example" },
              { label: "Pricing", id: "comparison" },
              { label: "Testimonials", id: "testimonials" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("waitlist")}
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign in
            </button>
            <button
              onClick={() => scrollTo("waitlist")}
              className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Plan My Trip
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
