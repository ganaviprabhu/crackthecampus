import React from 'react';

const companies = [
  { name: 'TCS',        logo: '/images/tcs.png' },
  { name: 'Infosys',    logo: '/images/infosys.png' },
  { name: 'Wipro',      logo: '/images/wipro.png' },
  { name: 'Accenture',  logo: '/images/accenture.png' },
  { name: 'Cognizant',  logo: '/images/cognizant.png' },
  { name: 'HCL',        logo: '/images/hcl.png' },
  { name: 'Amazon',     logo: '/images/amazon.png' },
  { name: 'Microsoft',  logo: '/images/microsoft.png' },
  { name: 'Deloitte',   logo: '/images/deloitte.png' },
  { name: 'Capgemini',  logo: '/images/capgemini.png' },
  { name: 'IBM',        logo: '/images/ibm.png' },
  { name: 'Google',     logo: '/images/google.png' },
  { name: 'Sonata',     logo: '/images/sonata.png' },
];

export default function Companies() {
  return (
    <section
      id="companies"
      aria-labelledby="companies-heading"
      className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          id="companies-heading"
          className="text-center text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-8"
        >
          Students placed at top companies
        </p>

        {/* Scrolling marquee strip */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2 justify-center flex-wrap">
            {companies.map((c) => (
              <div
                key={c.name}
                className="flex-shrink-0 flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-3 font-bold text-gray-600 dark:text-gray-300 text-sm hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {c.logo && (
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="h-5 w-5 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}