import { BarChart3, Bell, Search, Tag, Chrome } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { darkMode: boolean }

const dashboardFeatures = [
  {
    icon: <BarChart3 size={20} />,
    title: 'Organized View of All Active RFQs',
    desc: 'Every detected RFQ in a clean, sortable list. Sender, subject, deadline, status, priority, and attachment count — all visible at a glance.',
  },
  {
    icon: <Tag size={20} />,
    title: 'Smart Labels & Categories',
    desc: 'Auto-categorized by industry, product type, buyer type, and urgency. Create custom tags for your internal workflows.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Status Tracking & Pipeline View',
    desc: 'Drag-and-drop pipeline: New → Reviewing → Quote Drafted → Sent → Won/Lost. Your entire team sees the same status in real time.',
  },
  {
    icon: <Bell size={20} />,
    title: 'Deadline Alerts & Follow-Up Reminders',
    desc: '48-hour warnings, same-day alerts, follow-up reminders for sent quotes, and missed deadline notifications — automated.',
  },
  {
    icon: <Search size={20} />,
    title: 'Powerful Search & Filters',
    desc: 'Search by buyer name, product keyword, date range, status, or tag. Find any RFQ from any point in history in seconds.',
  },
];

export default function Dashboard({ darkMode }: Props) {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 ${
                darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'
              }`}>
                RFQ Dashboard
              </div>

              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Your Complete{' '}
                <span className="text-gradient">RFQ Command Center</span>
                {' '}— Built Right Inside Gmail
              </h2>
              <p className={`text-lg mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Everything you need to track, prioritize, and respond to RFQs — in the place you already spend your day. No separate app. No switching tabs.
              </p>

              <div className="space-y-4">
                {dashboardFeatures.map((feature) => (
                  <div key={feature.title} className={`flex gap-4 p-4 rounded-xl border transition-all duration-200 cursor-default ${
                    darkMode
                      ? 'border-slate-800 hover:border-blue-500/30 hover:bg-slate-900'
                      : 'border-slate-100 hover:border-blue-100 hover:bg-blue-50/30'
                  }`}>
                    <div className="flex-shrink-0 p-2 rounded-lg h-fit" style={{ background: 'var(--gradient-brand)' }}>
                      <span className="text-white">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 btn-primary text-white px-6 py-3 rounded-full font-semibold glow-blue-sm cursor-pointer"
              >
                <span className="flex items-center gap-2"><Chrome size={16} />See the Dashboard → Install Free</span>
              </a>
            </div>

            {/* Right: Visual Pipeline */}
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-800/20 blur-3xl rounded-3xl" />

              <div className={`relative rounded-2xl border overflow-hidden ${
                darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-2xl'
              }`}>
                {/* Header */}
                <div className={`px-5 py-4 border-b flex items-center justify-between ${
                  darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'
                }`}>
                  <div className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>RFQ Pipeline</div>
                  <div className="flex gap-2">
                    {['All', 'Mine', 'Urgent'].map((f) => (
                      <button key={f} className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                        f === 'All'
                          ? 'bg-blue-500 text-white'
                          : darkMode ? 'text-slate-400 hover:bg-white/10' : 'text-slate-500 hover:bg-slate-100'
                      }`}>{f}</button>
                    ))}
                  </div>
                </div>

                {/* Pipeline Stages */}
                <div className="p-5">
                  {[
                    { stage: 'New', count: 12, color: 'blue', items: ['Acme Manufacturing — Steel RFQ', 'Pacific Builders — MEP Quote'] },
                    { stage: 'In Progress', count: 8, color: 'yellow', items: ['Global Electronics — PCB Assembly'] },
                    { stage: 'Quoted', count: 18, color: 'purple', items: ['Euro Textiles — Fabric Pricing', 'Dubai Imports Ltd — Bulk Order'] },
                    { stage: 'Won', count: 7, color: 'green', items: ['TechCorp Taiwan — $48,500'] },
                  ].map((stage) => (
                    <div key={stage.stage} className="mb-4 last:mb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-2 h-2 rounded-full ${
                          stage.color === 'blue' ? 'bg-blue-400'
                          : stage.color === 'yellow' ? 'bg-yellow-400'
                          : stage.color === 'purple' ? 'bg-purple-400'
                          : 'bg-green-400'
                        }`} />
                        <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {stage.stage}
                        </span>
                        <span className={`px-1.5 py-0.5 rounded text-xs font-bold ml-auto ${
                          darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                        }`}>{stage.count}</span>
                      </div>
                      <div className="space-y-1.5 pl-4">
                        {stage.items.map((item) => (
                          <div key={item} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs cursor-pointer transition-colors ${
                            darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              stage.color === 'blue' ? 'bg-blue-400'
                              : stage.color === 'yellow' ? 'bg-yellow-400'
                              : stage.color === 'purple' ? 'bg-purple-400'
                              : 'bg-green-400'
                            }`} />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Alert */}
                  <div className={`mt-4 flex items-center gap-2 p-3 rounded-xl border ${
                    darkMode ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-red-50 border-red-100 text-red-600'
                  }`}>
                    <Bell size={14} />
                    <span className="text-xs font-medium">2 RFQs expire in 24 hours — deadline alert sent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
