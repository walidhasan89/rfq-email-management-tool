import { Chrome, CheckCircle2, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const { ref, revealed } = useScrollReveal();

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ${
        darkMode
          ? 'bg-slate-950'
          : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-white'
      }`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 hero-grid-bg" />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, #1d4ed8 50%, transparent 100%)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #1e40af 0%, #1e3a8a 50%, transparent 100%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div ref={ref} className={`text-center transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border ${
              darkMode
                ? 'bg-blue-950/60 border-blue-800/50 text-blue-300'
                : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <Zap size={13} className="text-blue-400" />
              AI-Powered RFQ Email Management
              <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${
                darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'
              }`}>Chrome Extension</span>
            </div>
          </div>

          {/* H1 — reduced font size */}
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Never Miss an{' '}
            <span className="text-gradient">RFQ Email</span>{' '}
            Again —<br className="hidden sm:block" />
            <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>
              Smart Detection &amp; Management Inside Your Inbox
            </span>
          </h1>

          {/* Subheadline — reduced font size */}
          <p className={`text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-8 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            The intelligent{' '}
            <a href="https://rfqautopilot.com/rfq-email-management-tool" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              RFQ email management tool
            </a>{' '}
            that automatically detects Request for Quotation emails, organizes them into a clean dashboard,
            extracts line-item data from attachments, and helps you generate quote replies — all without leaving Gmail or Outlook.
          </p>

          {/* CTA Buttons — only primary + ghost scroll */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2.5 text-white px-8 py-4 rounded-full text-base font-bold shadow-xl glow-blue cursor-pointer"
              style={{ minWidth: 260 }}
            >
              <span className="flex items-center gap-2.5">
                <Chrome size={20} />
                Install Free — Chrome Extension
              </span>
            </a>
          </div>

          {/* Trust Bar */}
          <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm ${
            darkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {[
              'Free forever plan',
              'Gmail & Outlook compatible',
              'No email data stored',
              '2,000+ teams trust RFQ AutoPilot',
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Visual */}
        <div className={`mt-16 lg:mt-20 transition-all duration-1000 delay-300 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="relative max-w-5xl mx-auto">
            {/* Main Card */}
            <div className={`relative rounded-2xl overflow-hidden border shadow-2xl ${
              darkMode
                ? 'bg-slate-900 border-slate-700/60'
                : 'bg-white border-slate-200'
            }`}>
              {/* Fake Browser Bar */}
              <div className={`flex items-center gap-2 px-4 py-3 border-b ${
                darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className={`flex-1 mx-4 px-3 py-1 rounded-md text-xs ${
                  darkMode ? 'bg-slate-700 text-slate-400' : 'bg-white text-slate-400 border border-slate-200'
                }`}>
                  mail.google.com
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="flex min-h-[340px]">
                {/* Sidebar */}
                <div className={`w-48 flex-shrink-0 border-r p-3 hidden sm:block ${
                  darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-100'
                }`}>
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>RFQ Pipeline</div>
                  {[
                    { label: 'All RFQs', count: 47, active: true },
                    { label: 'New', count: 12, color: 'blue' },
                    { label: 'In Progress', count: 8, color: 'yellow' },
                    { label: 'Quoted', count: 18, color: 'green' },
                    { label: 'Won', count: 7, color: 'emerald' },
                    { label: 'Expired', count: 2, color: 'red' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between px-2 py-1.5 rounded-lg mb-1 text-xs cursor-pointer ${
                        item.active
                          ? 'bg-blue-500/20 text-blue-400 font-semibold'
                          : darkMode ? 'text-slate-400 hover:bg-white/5' : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${
                        item.active
                          ? 'bg-blue-500 text-white'
                          : darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'
                      }`}>{item.count}</span>
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: 'RFQs Today', value: '12', change: '+3', up: true },
                      { label: 'Avg Response', value: '47min', change: '-82%', up: true },
                      { label: 'Win Rate', value: '68%', change: '+19%', up: true },
                    ].map((stat) => (
                      <div key={stat.label} className={`rounded-xl p-3 ${
                        darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100 shadow-sm'
                      }`}>
                        <div className={`text-xs mb-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</div>
                        <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
                        <div className="text-xs text-green-400 font-medium">{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* RFQ List */}
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Recent RFQs</div>
                  {[
                    { company: 'Acme Manufacturing', subject: 'RFQ #4521 — Steel Components', time: '2m ago', status: 'New', urgent: true },
                    { company: 'Global Trade Corp', subject: 'Q3 Pricing Request — Electronics', time: '18m ago', status: 'In Progress', urgent: false },
                    { company: 'Pacific Builders', subject: 'Tender Invitation — Municipal Project', time: '1h ago', status: 'Quoted', urgent: false },
                  ].map((rfq) => (
                    <div key={rfq.company} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl mb-2 cursor-pointer ${
                      darkMode ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-slate-50 hover:bg-slate-100'
                    } transition-colors`}>
                      <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                        darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {rfq.company[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs font-semibold truncate ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{rfq.company}</div>
                        <div className={`text-xs truncate ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{rfq.subject}</div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {rfq.urgent && <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />}
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          rfq.status === 'New' ? 'bg-blue-500/20 text-blue-400'
                          : rfq.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-green-500/20 text-green-400'
                        }`}>{rfq.status}</span>
                        <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{rfq.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Panel - AI Extraction Preview */}
                <div className={`w-56 flex-shrink-0 border-l p-3 hidden lg:block ${
                  darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-100'
                }`}>
                  <div className={`flex items-center gap-1.5 text-xs font-semibold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Zap size={12} className="text-blue-400" />
                    AI Extracted Data
                  </div>
                  {[
                    { label: 'Part #', value: 'SS-304-2024' },
                    { label: 'Qty', value: '500 pcs' },
                    { label: 'Material', value: '304 Stainless' },
                    { label: 'Deadline', value: 'Dec 15, 2025' },
                    { label: 'Incoterm', value: 'FOB Shanghai' },
                    { label: 'Currency', value: 'USD' },
                  ].map((field) => (
                    <div key={field.label} className={`flex justify-between mb-1.5 text-xs p-1.5 rounded-lg ${
                      darkMode ? 'bg-slate-800' : 'bg-slate-50'
                    }`}>
                      <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>{field.label}</span>
                      <span className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{field.value}</span>
                    </div>
                  ))}
                  <button className="w-full mt-2 py-1.5 rounded-lg btn-primary text-white text-xs font-semibold">
                    <span>Generate Quote →</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className={`absolute -top-4 -left-4 sm:flex hidden items-center gap-2 px-3 py-2 rounded-xl shadow-xl float-anim ${
              darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100'
            }`}>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>AI Detection Active</span>
            </div>

            <div
              className={`absolute -bottom-4 -right-4 sm:flex hidden items-center gap-2 px-3 py-2 rounded-xl shadow-xl float-anim ${
                darkMode ? 'bg-blue-900/80 border border-blue-700' : 'bg-blue-600 border border-blue-500'
              }`}
              style={{ animationDelay: '2s' }}
            >
              <span className="text-white text-xs font-bold">+63% more RFQs caught</span>
            </div>
          </div>
        </div>

        {/* Hero Body Description — moved below visual for natural flow */}
        <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`rounded-2xl border p-8 lg:p-10 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-lg'
          }`}>
            <p className={`text-base leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Here's a number that should worry you: the average B2B sales professional receives{' '}
              <strong className={darkMode ? 'text-white' : 'text-slate-900'}>121 emails per day</strong>.
              Buried somewhere in that flood are the RFQ emails that directly drive your revenue — pricing requests
              from buyers ready to place orders, procurement inquiries with specific quantities and deadlines,
              bid invitations that expire in 48 hours.
            </p>
            <p className={`text-base leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              And you're finding them... how? Scrolling. Searching. Hoping you didn't miss one three days ago
              that's now sitting unanswered at the bottom of page two.{' '}
              <strong className={darkMode ? 'text-white' : 'text-slate-900'}>The cost of a missed RFQ isn't just one lost deal — it's a lost customer relationship.</strong>
            </p>
            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              RFQ AutoPilot transforms your inbox from a chaotic email graveyard into an organized{' '}
              <a href="https://rfqautopilot.com/rfq-automation-software" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
                RFQ command center
              </a>. Every Request for Quotation is automatically detected, labeled, parsed, and queued for response —
              the moment it arrives. No manual sorting. No keyword searches. No missed opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
