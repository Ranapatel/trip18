"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-6">⚠️</div>
        <h2 className="text-2xl font-black text-gray-900 mb-3">
          Something went wrong
        </h2>
        <p className="text-gray-500 mb-8">
          We hit an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
