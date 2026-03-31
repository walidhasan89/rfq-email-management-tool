import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard';
import DataExtraction from './components/DataExtraction';
import QuoteGeneration from './components/QuoteGeneration';
import Comparison from './components/Comparison';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rfq-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('rfq-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [darkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('rfq-theme')) {
        setDarkMode(e.matches);
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleDark = () => setDarkMode((prev) => !prev);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <main>
        <Hero darkMode={darkMode} />
        <Problem darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <Dashboard darkMode={darkMode} />
        <DataExtraction darkMode={darkMode} />
        <QuoteGeneration darkMode={darkMode} />
        <Comparison darkMode={darkMode} />
        <UseCases darkMode={darkMode} />
        <Pricing darkMode={darkMode} />
        <FAQ darkMode={darkMode} />
        <FinalCTA />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
