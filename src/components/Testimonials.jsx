import React from 'react';

const testimonials = [
  {
    name: 'Ganavi Prabhu',
    college: 'Global academy of technology',
    company: 'Placed at Jiraaf',
    avatar: 'GP',
    color: 'bg-purple-100 text-purple-700',
    quote:
      'CrackTheCampus gave me structured mock tests that matched exactly what Microsoft asked. I cleared all 4 rounds on my first attempt.',
  },
  {
    name: 'Utham',
    college: 'Rv college of engineering',
    company: 'Placed at Sonata',
    avatar: 'UM',
    color: 'bg-green-100 text-green-700',
    quote:
      'The aptitude section is unbeatable. I went from 40% accuracy to 90% in 3 weeks just by practising the timed test sets here.',
  },
  {
    name: 'Nikitha',
    college: 'BMS college of engineering',
    company: 'Placed at Amazon',
    avatar: 'NI',
    color: 'bg-amber-100 text-amber-700',
    quote:
      'The AI mock interviews gave me very honest feedback on my communication gaps. That prep made all the difference in the HR round.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold uppercase tracking-widest">
            Student Stories
          </span>
          <h2
            id="testimonials-heading"
            className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            Real students. Real placements.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="text-amber-400 text-sm" aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              {/* Quote text */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                {/* Avatar with initials */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.college}</p>
                  <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                    {t.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}