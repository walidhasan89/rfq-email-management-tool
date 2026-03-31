import { Mail, ExternalLink } from 'lucide-react';

interface Props { darkMode: boolean }

const productLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Blog', href: 'https://rfqautopilot.com/blog', external: true },
  { label: 'Contact', href: 'mailto:support@rfqautopilot.com' },
];

const ourProducts = [
  {
    name: 'ReplyChief',
    desc: 'LinkedIn AI Copilot',
    href: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
    icon: '💼',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'AdminPalette',
    desc: 'Shopify Admin Tool',
    href: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf',
    icon: '🎨',
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'RFQ AutoPilot',
    desc: 'RFQ Email Manager',
    href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
    icon: '🤖',
    color: 'from-blue-500 to-blue-700',
    current: true,
  },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export default function Footer({ darkMode }: Props) {
  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(href, href.startsWith('mailto') ? '_self' : '_blank', 'noopener noreferrer');
    }
  };

  return (
    <footer className={`relative border-t ${
      darkMode
        ? 'bg-slate-950 border-slate-800'
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="https://rfqautopilot.com/" className="flex items-center gap-2 mb-4">
              <img src="https://rfqautopilot.com/asset/logo.png" alt="RFQ AutoPilot" className="h-8 w-auto" />
              <span className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                RFQ <span className="text-gradient">AutoPilot</span>
              </span>
            </a>
            <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              AI-powered RFQ email management for Gmail & Outlook. Never miss a Request for Quotation again.{' '}
              <a
                href="https://www.ivalua.com/blog/procurement-trends-2025-3-key-insights-predictions-shaping-the-future/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 underline underline-offset-1 text-xs"
              >
                See 2025 procurement trends →
              </a>
            </p>
            <a
              href="mailto:support@rfqautopilot.com"
              className={`flex items-center gap-2 text-sm hover:text-blue-500 transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
            >
              <Mail size={14} />
              support@rfqautopilot.com
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Product</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`flex items-center gap-1 text-sm transition-colors text-left cursor-pointer ${
                      darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    {link.external && <ExternalLink size={11} />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Our Products</h3>
            <div className="space-y-3">
              {ourProducts.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 group ${
                    product.current
                      ? darkMode
                        ? 'border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20'
                        : 'border-blue-200 bg-blue-50 hover:bg-blue-100'
                      : darkMode
                        ? 'border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                        : 'border-slate-100 hover:border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base bg-gradient-to-br ${product.color} flex-shrink-0`}>
                    {product.icon}
                  </div>
                  <div>
                    <div className={`text-sm font-semibold flex items-center gap-1.5 ${
                      product.current
                        ? 'text-blue-500'
                        : darkMode ? 'text-slate-200 group-hover:text-white' : 'text-slate-800'
                    }`}>
                      {product.name}
                      {product.current && (
                        <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-blue-500/20 text-blue-400">Current</span>
                      )}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{product.desc}</div>
                  </div>
                  <ExternalLink size={12} className={`ml-auto flex-shrink-0 ${darkMode ? 'text-slate-600 group-hover:text-slate-400' : 'text-slate-300 group-hover:text-slate-500'}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Legal</h3>
            <ul className="space-y-2.5 mb-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Support</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:support@rfqautopilot.com"
                  className={`text-sm transition-colors ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a
                  href="https://inoviqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 text-sm transition-colors ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  About Inoviqa
                  <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            © 2026 RFQ AutoPilot. A Product of{' '}
            <a
              href="https://inoviqa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 font-medium"
            >
              Inoviqa
            </a>
          </p>

          <div className={`flex items-center gap-4 text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
              All Systems Operational
            </span>
            <span>·</span>
            <span>⚡ 60s Setup</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
