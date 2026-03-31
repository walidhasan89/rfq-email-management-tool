import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Chrome } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
}

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ darkMode, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{ border: 'none', outline: 'none', boxShadow: scrolled ? (darkMode ? '0 4px 24px rgba(0,0,0,0.18)' : '0 4px 24px rgba(59,130,246,0.08)') : 'none' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-0 outline-none ${
          scrolled
            ? darkMode
              ? 'glass-dark'
              : 'glass-light'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="https://rfqautopilot.com/" className="flex items-center gap-2.5 group flex-shrink-0">
              <img
                src="https://rfqautopilot.com/asset/logo.png"
                alt="RFQ AutoPilot Logo"
                className="h-8 w-auto"
                loading="eager"
              />
              <span className={`font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                RFQ <span className="text-gradient">AutoPilot</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer outline-none focus:outline-none ${
                    darkMode
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDark}
                className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                  darkMode
                    ? 'text-yellow-400 hover:bg-white/10'
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* CTA */}
              <a
                href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 btn-primary text-white px-4 py-2 rounded-full text-sm font-semibold glow-blue-sm cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Chrome size={15} />
                  Add to Chrome — It's Free
                </span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                  darkMode ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          } ${darkMode ? 'bg-slate-900 border-l border-slate-800' : 'bg-white border-l border-slate-100'}`}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className={`text-left px-4 py-3 text-base font-medium transition-all cursor-pointer outline-none focus:outline-none ${
                    darkMode
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-auto">
              <a
                href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 btn-primary text-white w-full py-3 rounded-full font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Chrome size={16} />
                  Add to Chrome — It's Free
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
