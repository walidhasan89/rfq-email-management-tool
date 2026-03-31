import { Chrome } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { darkMode: boolean }

const problems = [
  {
    icon: '📩',
    title: 'RFQ Emails Get Buried',
    desc: 'Your inbox treats a $50,000 procurement request the same as a newsletter. By the time you find that buyer\'s email, your competitor already submitted their quote.',
  },
  {
    icon: '🔤',
    title: 'No Standardized Identification',
    desc: 'Buyers write "Pricing Request," "Tender Invitation," "Can you quote on this?" Basic filters miss 40%+ of genuine RFQs — every missed email is a missed deal.',
  },
  {
    icon: '📎',
    title: 'Critical Data Lives in Attachments',
    desc: 'Specs, quantities, tolerances, and delivery dates are locked in 15-page PDFs you have to download, read, and manually transcribe before even starting a quote.',
  },
  {
    icon: '🗂️',
    title: 'No Centralized RFQ Tracking',
    desc: 'Some RFQs in your inbox. Some in a folder. Some in a spreadsheet from last quarter. There\'s no single view of every open RFQ, its status, and its deadline.',
  },
  {
    icon: '⏱️',
    title: 'Slow Responses Kill Win Rates',
    desc: 'Harvard Business Review: companies responding within 1 hour are 7x more likely to qualify the lead. In RFQ-driven industries, the first accurate quote wins 60% of the time.',
  },
];

export default function Problem({ darkMode }: Props) {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="features" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Accent */}
      <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-red-50 text-red-600 border border-red-100'
            }`}>
              The Problem
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Why Your Inbox Is{' '}
              <span className="text-gradient">Costing You Deals</span>
              {' '}Right Now
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              The RFQ emails in your inbox are revenue waiting to be captured. But the way most teams manage them is fundamentally broken.
            </p>
          </div>

          {/* Stat callout with external authority link */}
          <div className={`mb-10 p-5 rounded-2xl border ${darkMode ? 'bg-blue-950/20 border-blue-900/40' : 'bg-blue-50 border-blue-100'}`}>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              📊 According to{' '}
              <a
                href="https://www.mckinsey.com/capabilities/operations/our-insights/procurement-2025-reimagining-the-function-for-success"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 underline underline-offset-2 font-medium"
              >
                McKinsey's 2025 Procurement Insights
              </a>
              , procurement teams that leverage intelligent automation see a{' '}
              <strong className={darkMode ? 'text-white' : 'text-slate-900'}>35–50% reduction in manual processing time</strong>{' '}
              and respond to RFQs significantly faster than teams using traditional email workflows.
              The{' '}
              <a href="https://rfqautopilot.com/ai-rfq-processing-tool" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 font-medium">
                AI RFQ processing advantage
              </a>{' '}
              is no longer optional — it's a competitive necessity.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {problems.map((p, i) => (
              <div
                key={p.title}
                className={`card-hover p-6 rounded-2xl border transition-all duration-300 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30'
                    : 'bg-slate-50 border-slate-100 hover:border-blue-200 hover:shadow-lg'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Problem {i + 1}: {p.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {p.desc}
                </p>
              </div>
            ))}

            {/* CTA Card */}
            <div className="animated-border p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-base font-bold mb-2">The Bottom Line</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Your inbox was designed for communication, not for managing a revenue pipeline. You need a tool built specifically for RFQ email management.
                </p>
              </div>
              <a
                href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors w-fit cursor-pointer"
              >
                <Chrome size={14} />
                Fix Your RFQ Inbox
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
