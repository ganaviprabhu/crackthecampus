import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Companies from './components/Companies';
import Courses from './components/Courses';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(false);

  return (
    // When dark=true, the 'dark' class is added to root div
    // Tailwind dark: variants then activate throughout the whole page
    <div className={dark ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen font-sans">
        <Navbar dark={dark} setDark={setDark} />
        <main>
          <Hero />
          <Features />
          <Stats />
          <Testimonials />
          <Companies />
          <Courses />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;