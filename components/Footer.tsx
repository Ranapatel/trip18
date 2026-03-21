export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/tripsage_?igsh=MWVnYWVsaG1nbGs4cw==",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ranadheer-patel-7a7353391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      hoverColor: "hover:text-blue-500",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/SageTrip8016",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      hoverColor: "hover:text-gray-100",
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
                TS
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Trip<span className="text-accent">Sage</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              AI-powered travel planning that bundles flights, hotels, transport,
              and events into one smart plan — instantly.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.hoverColor} hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links column */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Product
            </p>
            <ul className="space-y-3">
              {["Features", "Example Plan", "Pricing", "Waitlist"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {["About", "Privacy Policy", "Terms of Use", "Contact Us"].map((item) => (
                <li key={item}>
                  <a
                    href="/privacy-policy"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} TripSage. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>Follow us</span>
            <span>·</span>
            {socialLinks.map((social, i) => (
              <span key={social.name} className="flex items-center gap-2">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 ${social.hoverColor} transition-colors`}
                >
                  {social.name}
                </a>
                {i < socialLinks.length - 1 && <span>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
