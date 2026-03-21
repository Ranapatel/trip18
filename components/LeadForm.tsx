"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type FormState = "idle" | "loading" | "success" | "error";

const TRAVEL_PREFERENCES = [
  { value: "", label: "Select your travel style (optional)" },
  { value: "budget", label: "🪙 Budget Backpacker" },
  { value: "chill", label: "🌅 Chill & Relax" },
  { value: "party", label: "🎉 Party & Nightlife" },
  { value: "adventure", label: "🏔️ Adventure & Trekking" },
  { value: "luxury", label: "💎 Luxury & Comfort" },
  { value: "solo", label: "🎒 Solo Explorer" },
  { value: "family", label: "👨‍👩‍👧 Family Trip" },
  { value: "couple", label: "💑 Couples Getaway" },
];

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [preference, setPreference] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const isSupabaseConfigured =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      setEmailError("Email is required.");
      return false;
    }
    if (!emailRegex.test(value.trim())) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) return;

    setFormState("loading");
    setErrorMessage("");

    // If Supabase isn't configured, simulate success gracefully
    if (!isSupabaseConfigured) {
      await new Promise((r) => setTimeout(r, 800));
      setFormState("success");
      setEmail("");
      setPreference("");
      return;
    }

    try {
      const { error } = await supabase.from("leads").insert([
        {
          email: email.trim().toLowerCase(),
          preference: preference || null,
        },
      ]);

      if (error) {
        if (error.code === "23505") {
          setFormState("error");
          setErrorMessage(
            "This email is already on the waitlist. We'll be in touch soon! 🎉"
          );
        } else {
          throw error;
        }
        return;
      }

      setFormState("success");
      setEmail("");
      setPreference("");
    } catch (err) {
      console.error("Supabase error:", err);
      setFormState("error");
      setErrorMessage("Something went wrong. Please try again in a moment.");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) validateEmail(e.target.value);
  };

  return (
    <section id="waitlist" className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-4 bg-accent-muted px-4 py-2 rounded-full border border-accent/20">
            Get Early Access
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4">
            Join the Waitlist
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Be first in line. Early users get free access to premium features.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 p-8">
          {formState === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                You&apos;re on the list!
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Thanks for joining! We&apos;ll send you early access details
                very soon. Get ready to plan smarter. ✈️
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="text-sm text-accent hover:text-accent-dark font-semibold transition-colors"
              >
                Add another email →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => validateEmail(email)}
                  placeholder="you@example.com"
                  disabled={formState === "loading"}
                  className={`w-full px-4 py-3.5 rounded-xl border text-gray-900 placeholder:text-gray-400 text-base transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60 disabled:cursor-not-allowed ${
                    emailError
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : "border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-accent focus:bg-white"
                  }`}
                  aria-describedby={emailError ? "email-error" : undefined}
                  aria-invalid={!!emailError}
                />
                {emailError && (
                  <p
                    id="email-error"
                    className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
                  >
                    <span>⚠</span> {emailError}
                  </p>
                )}
              </div>

              <div className="mb-7">
                <label
                  htmlFor="preference"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Travel style{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <select
                  id="preference"
                  value={preference}
                  onChange={(e) => setPreference(e.target.value)}
                  disabled={formState === "loading"}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 text-gray-900 text-base transition-all duration-200 outline-none disabled:opacity-60 disabled:cursor-not-allowed appearance-none cursor-pointer"
                >
                  {TRAVEL_PREFERENCES.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {formState === "error" && (
                <div className="mb-5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">⚠</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark disabled:bg-accent/60 text-white font-bold text-base py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {formState === "loading" ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Joining waitlist...
                  </>
                ) : (
                  "🚀 Join Waitlist"
                )}
              </button>

              <p className="mt-4 text-center text-xs text-gray-400">
                No spam, ever. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <span className="text-green-500 font-bold">500+</span> already joined
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>Free early access</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>Launch perks included</span>
        </div>
      </div>
    </section>
  );
}
