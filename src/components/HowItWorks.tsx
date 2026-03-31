import { Brain, Zap, Target, TrendingUp, Chrome, CheckCircle2, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { darkMode: boolean }

const steps = [
  {
    icon: <Zap size={22} />,
    step: '01',
    title: 'Real-Time Email Scanning',
    desc: 'The moment a new email arrives, RFQ AutoPilot\'s detection engine analyzes it instantly — no delay, no batch processing, no scheduled scans.',
  },
  {
    icon: <Brain size={22} />,
    step: '02',
    title: 'Multi-Signal Analysis',
    desc: 'Examines subject lines, full body content, sender reputation, attachment metadata, and thread context simultaneously — far beyond basic keyword filters.',
  },
  {
    icon: <Target size={22} />,
    step: '03',
    title: 'Confidence Scoring',
    desc: 'Each email receives a confidence score. High-confidence RFQs are auto-labeled. Borderline emails are flagged as "Possible RFQ" — nothing slips through.',
  },
  {
    icon: <TrendingUp size={22} />,
    step: '04',
    title: 'Continuous Learning',
    desc: 'Every confirmation or dismissal trains the AI. Over time, RFQ AutoPilot becomes increasingly accurate for your specific inbox, industry, and buyer patterns.',
  },
];

const comparisonData = [
  { subject: '"RFQ #4521 — Steel Components"', gmail: true, rfq: true },
  { subject: '"Pricing request for Q3 order"', gmail: false, rfq: true },
  { subject: '"Can you quote on the attached specs?"', gmail: false, rfq: true },
  { subject: '"Invitation to Bid — Municipal Project"', gmail: false, rfq: true },
  { subject: '"Please send your best rates"', gmail: false, rfq: true },
  { subject: '"RE: Updated specifications (see attached)"', gmail: false, rfq: true },
  { subject: '"供应商报价邀请" (Chinese)', gmail: false, rfq: true },
  { subject: '"Solicitud de cotización" (Spanish)', gmail: false, rfq: true },
];

export default function HowItWorks({ darkMode }: Props) {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="how-it-works" className={`py-24 lg:py-32 relative overflow-hidden ${
      darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-blue-50/50 via-white to-slate-50'
    }`}>
      <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'
            }`}>
              How It Works
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              How RFQ AutoPilot Detects{' '}
              <span className="text-gradient">RFQ Emails Automatically</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Forget building Gmail filters or Outlook rules.{' '}
              <a href="https://rfqautopilot.com/gmail-chrome-extension-for-sales" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">
                Our Gmail Chrome extension for sales teams
              </a>{' '}
              uses AI-powered classification that understands procurement language — across industries, writing styles, and languages.
            </p>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className={`relative p-6 rounded-2xl border card-hover ${
                  darkMode
                    ? 'bg-slate-800 border-slate-700 hover:border-blue-500/40'
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step number */}
                <div className={`text-5xl font-black mb-4 leading-none ${
                  darkMode ? 'text-slate-800' : 'text-slate-100'
                }`}>{step.step}</div>

                {/* Icon */}
                <div className="inline-flex p-2.5 rounded-xl mb-3" style={{ background: 'var(--gradient-brand)' }}>
                  <span className="text-white">{step.icon}</span>
                </div>

                <h3 className={`text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{step.desc}</p>

                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className={`absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 hidden lg:block ${
                    darkMode ? 'bg-slate-700' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className={`rounded-2xl border overflow-hidden ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            <div className={`px-6 py-4 border-b ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-100 bg-slate-50'}`}>
              <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                What RFQ AutoPilot Catches That Gmail Filters Miss
              </h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Users report catching 40–65% more RFQ emails than their existing filter setups.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className={`border-b ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
                    <th className={`text-left px-6 py-3 font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email Subject Line</th>
                    <th className="px-6 py-3 text-center">
                      <span className={`text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Gmail Filter</span>
                    </th>
                    <th className="px-6 py-3 text-center">
                      <span className="text-xs font-semibold text-blue-500">RFQ AutoPilot</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b transition-colors ${
                        darkMode
                          ? 'border-slate-700/50 hover:bg-slate-700/30'
                          : 'border-slate-50 hover:bg-blue-50/30'
                      }`}
                    >
                      <td className={`px-6 py-3 font-mono text-xs ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {row.subject}
                      </td>
                      <td className="px-6 py-3 text-center">
                        {row.gmail
                          ? <CheckCircle2 size={16} className="text-green-500 mx-auto" />
                          : <X size={16} className="text-red-400 mx-auto" />}
                      </td>
                      <td className="px-6 py-3 text-center">
                        <CheckCircle2 size={16} className="text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={`px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 ${darkMode ? 'bg-slate-800/50' : 'bg-blue-50/50'}`}>
              <a
                href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
              >
                <span className="flex items-center gap-2"><Chrome size={15} />Detect Every RFQ in Your Inbox → Install Free</span>
              </a>
              <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                Available on the{' '}
                <a
                  href="https://developer.chrome.com/docs/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 underline underline-offset-2"
                >
                  Chrome Web Store
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
