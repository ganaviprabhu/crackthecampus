import React from 'react';

const stats = [
  { number: '10,000+', label: 'Students Placed', sublabel: 'across 100+ colleges' },
  { number: '20,000+',   label: 'Practice Questions', sublabel: 'aptitude + coding' },
  { number: '100+',      label: 'Hiring Companies', sublabel: 'TCS, Wipro, Infosys & more' },
  { number: '4.9 / 5',  label: 'Average Rating', sublabel: 'from 9,000+ reviews' },
];

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="py-20 bg-primary-600 dark:bg-primary-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">Platform statistics</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              {/* Big number */}
              <p className="text-4xl sm:text-5xl font-extrabold text-white">
                {s.number}
              </p>
              <p className="mt-1 text-base font-semibold text-primary-100">
                {s.label}
              </p>
              <p className="mt-0.5 text-xs text-primary-200">{s.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}