import React from 'react';
import {
  FiCode, FiBarChart2, FiUsers, FiBook,
  FiAward, FiClock
} from 'react-icons/fi';

// All feature data lives here — easy to update content without touching JSX
const features = [
  {
    icon: <FiCode size={24} />,
    title: 'Coding Practice',
    desc: '500+ curated DSA problems with company-wise filters for TCS, Infosys, Wipro, and more.',
    color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    icon: <FiBarChart2 size={24} />,
    title: 'Aptitude Tests',
    desc: 'Quantitative, verbal, and logical reasoning tests modelled exactly on real placement patterns.',
    color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  },
  {
    icon: <FiUsers size={24} />,
    title: 'Mock Interviews',
    desc: 'Simulate real HR and technical interviews with AI feedback and scoring rubrics.',
    color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  },
  {
    icon: <FiBook size={24} />,
    title: 'Video Lectures',
    desc: 'Concept-first video modules covering OS, DBMS, CN, and core CS fundamentals.',
    color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  },
  {
    icon: <FiAward size={24} />,
    title: 'Company Contests',
    desc: 'Live contests that mirror actual company-specific recruitment drives and hackathons.',
    color: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
  },
  {
    icon: <FiClock size={24} />,
    title: 'Progress Tracking',
    desc: 'Weekly reports, streak calendars, and performance analytics to keep you on track.',
    color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold uppercase tracking-widest">
            Platform Features
          </span>
          <h2
            id="features-heading"
            className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            Everything you need to get placed
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A single platform covering every round — aptitude, coding, GD, and HR — so
            you never need to switch tools mid-prep.
          </p>
        </div>

        {/* 3-column responsive card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon badge */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}