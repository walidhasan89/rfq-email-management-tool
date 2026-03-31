import { User, Globe2, Building2, BarChart3, Briefcase, Chrome } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { darkMode: boolean }

const useCases = [
  {
    icon: <User size={22} />,
    role: 'Sales Representatives',
    emoji: '👤',
    pain: 'You manage 80+ daily emails. RFQs from prospects mix with meeting invites, newsletters, and LinkedIn notifications. By the time you start quoting, your competitor already responded.',
    benefits: [
      'Auto-labels every RFQ the moment it arrives',
      'Start quoting within minutes, not hours',
      'AI-generated replies let you respond 5x faster',
      'Follow-up reminders ensure no quote goes unanswered',
    ],
    result: 'More quotes sent, faster responses, higher close rates — without working longer hours.',
  },
  {
    icon: <Globe2 size={22} />,
    role: 'Export Managers',
    emoji: '👤',
    pain: 'You receive RFQs from buyers across multiple countries, in multiple languages, with different trade terms. Managing this across time zones in a shared inbox is a nightmare.',
    benefits: [
      'Multi-language detection: English, Spanish, Chinese, Arabic, Hindi, and 10+ more',
      'Auto-extraction handles international procurement templates',
      'Quote templates support 40+ currencies and all Incoterms',
      'Buyer profiling identifies returning international customers',
    ],
    result: 'Respond to global RFQs as efficiently as domestic ones.',
  },
  {
    icon: <Building2 size={22} />,
    role: 'Procurement Officers',
    emoji: '👤',
    pain: 'You send RFQs to multiple suppliers and need to track responses, compare quotes, and manage evaluations. Your inbox becomes a mess of supplier replies for the same RFQ.',
    benefits: [
      'Organizes all supplier responses to a single RFQ in one view',
      'Extracts pricing data for easy side-by-side comparison',
      'Tracks which suppliers replied, which didn\'t, which are late',
      'Exports comparison data for evaluation committees',
    ],
    result: 'Faster supplier evaluation, cleaner documentation, better procurement decisions.',
  },
  {
    icon: <BarChart3 size={22} />,
    role: 'Sales Ops & RevOps Managers',
    emoji: '👤',
    pain: 'You need visibility into your team\'s RFQ pipeline but have no centralized data. How many RFQs came in this month? What\'s the average response time? You\'re flying blind.',
    benefits: [
      'Analytics dashboard: team-wide RFQ volume, response times, conversion rates',
      'Pipeline view shows every active RFQ and its current status',
      'Custom reports exportable to CSV for forecasting',
      'Identifies bottlenecks — who\'s slow, which RFQ types take longest',
    ],
    result: 'Data-driven sales operations with full visibility into the RFQ-to-revenue pipeline.',
  },
  {
    icon: <Briefcase size={22} />,
    role: 'Business Owners & Solopreneurs',
    emoji: '👤',
    pain: 'You\'re the entire sales department. RFQs arrive while you\'re on a factory floor call. By the time you check email, three RFQs are 24 hours old and one deadline has passed.',
    benefits: [
      'Push notifications for high-priority RFQs',
      'AI handles extraction and quote drafting — 5 minutes instead of 50',
      'Templates maintain professional quotations even when you\'re rushed',
      'Free plan covers up to 30 RFQs/month',
    ],
    result: 'Professional, timely RFQ responses without hiring additional staff.',
  },
];

export default function UseCases({ darkMode }: Props) {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="use-cases" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'
            }`}>
              Use Cases
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              How Every Role Benefits from{' '}
              <span className="text-gradient">Smarter RFQ Management</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Whether you need{' '}
              <a href="https://rfqautopilot.com/rfq-software-for-manufacturers" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">
                RFQ software for manufacturers
              </a>
              ,{' '}
              <a href="https://rfqautopilot.com/rfq-software-for-distributors" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">
                distributors
              </a>
              , or an{' '}
              <a href="https://rfqautopilot.com/outlook-add-in-for-rfq" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">
                Outlook add-in for RFQ
              </a>{' '}
              — RFQ AutoPilot solves specific, daily pain points for every person in the RFQ-to-quote workflow.
            </p>
          </div>

          <div className="space-y-5">
          {useCases.map((uc) => (
            <div
              key={uc.role}
              className={`rounded-2xl border p-6 lg:p-8 transition-all duration-200 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30'
                    : 'bg-slate-50 border-slate-100 hover:border-blue-200 hover:shadow-lg'
                }`}
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Role */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl" style={{ background: 'var(--gradient-brand)' }}>
                        <span className="text-white">{uc.icon}</span>
                      </div>
                      <div>
                        <div className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          For
                        </div>
                        <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{uc.role}</h3>
                      </div>
                    </div>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <strong className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Your pain:</strong> {uc.pain}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      How RFQ AutoPilot helps
                    </div>
                    <ul className="space-y-2">
                      {uc.benefits.map((b) => (
                        <li key={b} className={`flex items-start gap-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div className={`lg:flex lg:flex-col lg:justify-between p-5 rounded-xl ${
                    darkMode ? 'bg-blue-950/30 border border-blue-800/30' : 'bg-blue-50 border border-blue-100'
                  }`}>
                    <div>
                      <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Result</div>
                      <p className={`text-sm leading-relaxed font-medium ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>{uc.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary text-white px-8 py-4 rounded-full text-base font-bold glow-blue cursor-pointer"
            >
              <span className="flex items-center gap-2"><Chrome size={18} />Built for Your Role → Install Free</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
