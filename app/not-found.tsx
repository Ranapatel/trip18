import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl font-black text-gray-100 mb-4">404</div>
        <h2 className="text-2xl font-black text-gray-900 mb-3">
          Page not found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-xl transition-colors inline-block"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
