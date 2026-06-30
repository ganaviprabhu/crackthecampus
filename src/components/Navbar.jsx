import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Courses', href: '#courses' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Companies', href: '#companies' },
];

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header role="banner" className={`sticky top-0 z-50 w-full bg-white dark:bg-gray-950 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        <a href="/" className="flex items-center gap-2 font-extrabold text-xl text-primary-600 dark:text-primary-400">
          <span className="bg-primary-600 text-white rounded-lg px-2 py-0.5 text-sm font-bold">CTC</span>
          CrackTheCampus
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none" role="list">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href="#courses" className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Get Started Free
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 pb-4">
          <ul className="flex flex-col gap-2 mt-2 list-none" role="list">
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#courses" className="mt-3 block text-center bg-primary-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">
            Get Started Free
          </a>
        </div>
      )}
    </header>
  );
}