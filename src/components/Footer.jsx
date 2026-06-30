import React from 'react';
import { FiTwitter, FiLinkedin, FiYoutube, FiInstagram } from 'react-icons/fi';

const footerLinks = {
  Platform: ['Features', 'Courses', 'Mock Interview '],
  Company:  ['About Us', 'Careers', ],
  Support:  ['Help Center', 'Contact Us', 'Report a Bug', 'Community Forum'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'],
};

const socials = [
  { icon: <FiTwitter />,   label: 'Twitter',   href: '#' },
  { icon: <FiLinkedin />,  label: 'LinkedIn',  href: '#' },
  { icon: <FiYoutube />,   label: 'YouTube',   href: '#' },
  { icon: <FiInstagram />, label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-primary-900 dark:bg-black text-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-white font-extrabold text-lg mb-2">CrackTheCampus</p>
            <p className="text-sm leading-relaxed mb-4">
              India's most trusted platform for campus placement preparation.
            </p>
            <a href="mailto:support@crackthecampus.in" className="text-sm text-accent-light hover:underline">
              support@crackthecampus.in
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-2 list-none" >
                {links.map((link) => (
                  <li key={link}>
                    <a href="#!" className="text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-400">
            © {new Date().getFullYear()} CrackTheCampus. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-800 hover:bg-accent text-primary-300 hover:text-white transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}