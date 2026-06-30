import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative overflow-hidden"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-20"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        aria-hidden="true"
      />

      {/* Actual content, sits above the background image */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col-reverse lg:flex-row items-center gap-12">

        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            #1 Campus Placement Platform
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Crack Every{' '}
            <span className="text-primary-600 dark:text-primary-400">Campus Interview</span>
            {' '}with Confidence
          </h1>

          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Practice aptitude tests, mock interviews, and coding challenges built specifically for Indian campus placements. Join 2 lakh+ students already placed in top companies.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#courses" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg">
              Start Practicing Free
            </a>
            <a href="#features" className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-400">
            <span>✅ Free to start</span>
            <span>✅ No credit card</span>
            <span>✅ 2L+ students</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center" aria-hidden="true">
          <svg viewBox="0 0 480 400" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="400" height="320" rx="24" fill="#ecfdf5" />
            <rect x="100" y="80" width="280" height="180" rx="12" fill="#059669" />
            <rect x="116" y="96" width="248" height="148" rx="8" fill="#064e3b" />
            <rect x="130" y="114" width="120" height="8" rx="4" fill="#6ee7b7" />
            <rect x="130" y="130" width="80" height="8" rx="4" fill="#34d399" opacity="0.7" />
            <rect x="130" y="146" width="140" height="8" rx="4" fill="#a7f3d0" opacity="0.5" />
            <rect x="130" y="162" width="60" height="8" rx="4" fill="#6ee7b7" />
            <rect x="130" y="178" width="100" height="8" rx="4" fill="#34d399" opacity="0.7" />
            <rect x="130" y="194" width="90" height="8" rx="4" fill="#a7f3d0" opacity="0.5" />
            <rect x="130" y="210" width="70" height="8" rx="4" fill="#6ee7b7" />
            <circle cx="340" cy="115" r="22" fill="#6366f1" />
            <text x="340" y="122" textAnchor="middle" fontSize="20" fill="white">✓</text>
            <rect x="216" y="260" width="48" height="20" rx="4" fill="#a7f3d0" />
            <rect x="196" y="278" width="88" height="10" rx="4" fill="#6ee7b7" />
            <rect x="55" y="295" width="130" height="52" rx="10" fill="white" />
            <text x="70" y="317" fontSize="11" fill="#6b7280">Students Placed</text>
            <text x="70" y="336" fontSize="18" fontWeight="800" fill="#059669">2,10,000+</text>
            <rect x="295" y="295" width="130" height="52" rx="10" fill="white" />
            <text x="310" y="317" fontSize="11" fill="#6b7280">Mock Tests</text>
            <text x="310" y="336" fontSize="18" fontWeight="800" fill="#6366f1">50,000+</text>
            <text x="190" y="380" fontSize="14" fill="#f59e0b">★★★★★</text>
            <text x="258" y="380" fontSize="11" fill="#9ca3af">4.9 / 5</text>
          </svg>
        </div>

      </div>
    </section>
  );
}