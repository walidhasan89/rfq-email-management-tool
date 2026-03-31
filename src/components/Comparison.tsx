import { CheckCircle2, X, Chrome } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { darkMode: boolean }

const rows = [
  { capability: 'Finding RFQ emails', manual: 'Search inbox manually, check folders, ask colleagues', auto: 'AI detects and labels every RFQ automatically upon arrival' },
  { capability: 'Identifying non-obvious RFQs', manual: 'Rely on subject keywords — miss 40%+ of requests', auto: 'Multi-signal AI catches RFQs in any phrasing or language' },
  { capability: 'Tracking RFQ deadlines', manual: 'Check each email manually, add to calendar by hand', auto: 'Auto-detected deadlines with smart alerts at 48h and same-day' },
  { capability: 'Reading PDF attachments', manual: 'Download → Open → Read → Take notes', auto: 'Auto-extracted data preview in sidebar — no download needed' },
  { capability: 'Data entry into spreadsheets', manual: 'Manual copy-paste, 15–45 minutes per RFQ', auto: 'One-click export of structured data, under 30 seconds' },
  { capability: 'Knowing RFQ status', manual: 'Ask your colleague, check sent folder, hope for the best', auto: 'Real-time pipeline: New → Reviewing → Quoted → Won/Lost' },
  { capability: 'Drafting quotation response', manual: 'Start from blank email or hunt for old template', auto: 'AI generates complete quote from template in seconds' },
  { capability: 'Following up on sent quotes', manual: 'Remember to follow up (most don\'t)', auto: 'Automated follow-up reminders after 3, 5, and 7 days' },
  { capability: 'Team collaboration', manual: 'Forward emails, CC colleagues, duplicate effort', auto: 'Shared dashboard with assigned ownership per RFQ' },
];

const metrics = [
  { label: 'Avg. Response Time', manual: '4–8 hours', auto: 'Under 1 hour' },
  { label: 'RFQs Missed/Month', manual: '5–15 (estimated)', auto: 'Near zero' },
  { label: 'Quotation Errors', manual: '5–12%', auto: 'Under 2%' },
];

export default function Comparison({ darkMode }: Props) {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${
      darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-white'
    }`}>
      <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'
            }`}>
              Comparison
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              RFQ AutoPilot vs.{' '}
              <span className="text-gradient">Manual Email Management</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Still managing RFQ emails with folders, filters, and spreadsheets? Whether you're a solopreneur looking for{' '}
              <a href="https://rfqautopilot.com/rfq-software-small-business" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">
                RFQ software for small business
              </a>
              {' '}or a team needing a full{' '}
              <a href="https://rfqautopilot.com/procurement-chrome-extension" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">
                procurement Chrome extension
              </a>
              {' '}— here's exactly what you're losing without automation.
            </p>
          </div>

          {/* Main Table */}
          <div className={`rounded-2xl border overflow-hidden mb-10 ${
            darkMode ? 'border-slate-700' : 'border-slate-200 shadow-xl'
          }`}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className={`text-left px-6 py-4 font-semibold border-b ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                      Capability
                    </th>
                    <th className={`px-6 py-4 border-b border-r font-semibold text-center ${darkMode ? 'bg-red-950/30 border-slate-700 text-red-400' : 'bg-red-50 border-slate-200 text-red-600'}`}>
                      <div className="flex items-center justify-center gap-1.5"><X size={14} />Manual Management</div>
                    </th>
                    <th className={`px-6 py-4 border-b font-semibold text-center ${darkMode ? 'bg-green-950/20 border-slate-700 text-green-400' : 'bg-green-50 border-slate-200 text-green-700'}`}>
                      <div className="flex items-center justify-center gap-1.5"><CheckCircle2 size={14} />RFQ AutoPilot</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className={`border-b transition-colors ${darkMode ? 'border-slate-700/50 hover:bg-slate-800/30' : 'border-slate-100 hover:bg-blue-50/20'}`}>
                      <td className={`px-6 py-3.5 font-medium text-xs ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{row.capability}</td>
                      <td className={`px-6 py-3.5 text-xs border-r ${darkMode ? 'border-slate-700 text-red-300/80' : 'border-slate-100 text-red-700/80'}`}>
                        <div className="flex items-start gap-1.5">
                          <X size={12} className="text-red-400 flex-shrink-0 mt-0.5" />
                          {row.manual}
                        </div>
                      </td>
                      <td className={`px-6 py-3.5 text-xs ${darkMode ? 'text-green-300/90' : 'text-green-700/90'}`}>
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 size={12} className="text-green-400 flex-shrink-0 mt-0.5" />
                          {row.auto}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Metrics Footer */}
            <div className={`grid grid-cols-3 border-t ${darkMode ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-slate-50'}`}>
              {metrics.map((m) => (
                <div key={m.label} className={`p-4 text-center ${darkMode ? 'border-r border-slate-700 last:border-r-0' : 'border-r border-slate-200 last:border-r-0'}`}>
                  <div className={`text-xs uppercase tracking-wider font-semibold mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{m.label}</div>
                  <div className="flex items-center justify-center gap-3">
                    <span className={`text-xs font-bold ${darkMode ? 'text-red-400' : 'text-red-500'}`}>{m.manual}</span>
                    <span className={`text-xs ${darkMode ? 'text-slate-600' : 'text-slate-300'}`}>→</span>
                    <span className={`text-xs font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{m.auto}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Box */}
          <div className={`p-8 rounded-2xl border mb-8 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-lg'
          }`}>
            <h3 className={`text-lg font-bold mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              💰 What This Means Financially (50 RFQs/week)
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Time saved per week', value: '33 hours', sub: '50 RFQs × 40 min saved' },
                { label: 'Recovered pipeline/month', value: '$40,000', sub: '8 missed RFQs × $5K avg' },
                { label: 'Faster response win boost', value: '+15–20%', sub: 'More deals won' },
                { label: 'RFQ AutoPilot Pro cost', value: '$29.99/mo', sub: 'ROI: within first week' },
              ].map((item) => (
                <div key={item.label} className={`p-4 rounded-xl border text-center ${
                  darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'
                }`}>
                  <div className="text-2xl font-black text-gradient mb-1">{item.value}</div>
                  <div className={`text-xs font-semibold mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{item.label}</div>
                  <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary text-white px-8 py-4 rounded-full text-base font-bold glow-blue cursor-pointer"
            >
              <span className="flex items-center gap-2"><Chrome size={18} />Make the Switch → Install Free Today</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
