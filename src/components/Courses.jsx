import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const courses = [
  {
    badge: 'Most Popular',
    badgeColor: 'bg-amber-100 text-amber-700',
    title: 'Complete Placement Prep',
    desc: 'End-to-end program: aptitude, coding, GD, and HR — from zero to offer letter.',
    price: 'Free',
    topics: ['100 Aptitude Tests', '200 Coding Problems', '10 Mock Interviews'],
    cta: 'Enrol Now',
    highlight: true,
  },
  {
    badge: 'Aptitude',
    badgeColor: 'bg-blue-100 text-blue-700',
    title: 'Quantitative & Logical',
    desc: 'Master QA and LR with 3,000+ questions across 40+ chapters with video solutions.',
    price: '299',
    topics: ['3000+ Questions', 'Chapter-wise Tests', 'Video Solutions'],
    cta: 'View Course',
    highlight: false,
  },
  {
    badge: 'Coding',
    badgeColor: 'bg-green-100 text-green-700',
    title: 'DSA for Placements',
    desc: 'Company-tagged DSA problems with hints. Optimised for TCS NQT, Infosys, Amazon.',
    price: '999',
    topics: ['500+ Problems', 'Company Tags', 'Editorial Hints'],
    cta: 'View Course',
    highlight: false,
  },
];

function CourseCard({ c }) {
  const cardClass = c.highlight
    ? 'rounded-2xl p-6 border flex flex-col gap-4 transition-all hover:shadow-xl hover:-translate-y-1 border-indigo-400 bg-indigo-50 dark:bg-indigo-950 dark:border-indigo-600'
    : 'rounded-2xl p-6 border flex flex-col gap-4 transition-all hover:shadow-xl hover:-translate-y-1 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900';

  const ctaClass = c.highlight
    ? 'flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-lg transition-colors bg-indigo-600 text-white hover:bg-indigo-700'
    : 'flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-lg transition-colors bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200';

  return (
    <div className={cardClass}>
      <span className={'text-xs font-semibold px-3 py-1 rounded-full w-fit ' + c.badgeColor}>
        {c.badge}
      </span>

      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {c.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {c.desc}
        </p>
      </div>

      <ul className="space-y-1" >
        {c.topics.map((t) => (
          <li key={t} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span> {t}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
        <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
          {c.price === 'Free' ? 'Free' : '\u20B9' + c.price}
        </span>
        <a href="#!" className={ctaClass}>
          {c.cta} <FiArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <section id="courses" aria-labelledby="courses-heading" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Courses and Test Series
          </span>
          <h2 id="courses-heading" className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Pick your preparation path
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Structured tracks for every stage of your campus placement journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {courses.map((c) => (
            <CourseCard key={c.title} c={c} />
          ))}
        </div>

      </div>
    </section>
  );
}