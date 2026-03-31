import { Wand2, Globe, BarChart3, Chrome } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { darkMode: boolean }

const steps = [
  { num: '01', title: 'Review Extracted Data', desc: 'See a complete summary of products requested, quantities, specifications, and delivery requirements. Review and confirm — or edit any field.' },
  { num: '02', title: 'Select Your Quote Template', desc: 'Choose from saved templates or let AI select the best one based on RFQ type, industry, and product category — with your branding pre-filled.' },
  { num: '03', title: 'AI Fills In Your Quote', desc: 'Line items, pricing suggestions, delivery timeline, professional cover email, and auto-generated PDF — all ready in seconds.' },
  { num: '04', title: 'Review, Customize & Send', desc: 'Make final adjustments and hit send. Your quotation goes out as a professional email reply with a formatted PDF attachment — directly from your inbox.' },
];

const aiFeatures = [
  {
    icon: <Wand2 size={18} />,
    title: 'Smart Pricing Suggestions',
    desc: 'AI analyzes historical quotation data to suggest pricing. Flags anomalies above or below your averages to prevent costly errors.',
  },
  {
    icon: <Globe size={18} />,
    title: 'Multi-Currency & International Trade',
    desc: 'Generate quotes in USD, EUR, GBP, CNY, AED, and 40+ currencies. Full Incoterms support: FOB, CIF, DDP, EXW, DAP.',
  },
  {
    icon: <BarChart3 size={18} />,
    title: 'Quote Version Control',
    desc: 'Track multiple versions per RFQ — revised pricing, updated specs, counter-offers. Every version saved and accessible.',
  },
];

export default function QuoteGeneration({ darkMode }: Props) {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-green-50 text-green-600 border border-green-100'
            }`}>
              One-Click Quote Reply
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Generate Professional Quotation Replies{' '}
              <span className="text-gradient">in One Click</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Our{' '}
              <a href="https://rfqautopilot.com/quotation-email-automation" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">
                quotation email automation
              </a>{' '}
              reduces time from RFQ received to quote sent to just{' '}
              <strong className={darkMode ? 'text-white' : 'text-slate-900'}>5–12 minutes</strong>. AI-powered. Professional. Sent directly from your inbox.
            </p>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`p-6 rounded-2xl border relative card-hover ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30'
                    : 'bg-slate-50 border-slate-100 hover:shadow-lg hover:border-blue-100'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black" style={{ background: 'var(--gradient-brand)' }}>
                    {step.num}
                  </div>
                </div>
                <h3 className={`text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{step.desc}</p>

                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-8 items-center">
                    <div className={`w-6 h-0.5 ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`} />
                    <div className={`w-0 h-0 border-l-4 border-y-[3px] border-y-transparent ${darkMode ? 'border-l-slate-600' : 'border-l-slate-300'}`} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* AI Features + Demo Quote */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: AI Features */}
            <div>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>AI Quotation Intelligence Features</h3>
              <div className="space-y-4">
                {aiFeatures.map((f) => (
                  <div key={f.title} className={`flex gap-4 p-5 rounded-xl border ${
                    darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-sm'
                  }`}>
                    <div className="p-2.5 rounded-lg h-fit flex-shrink-0" style={{ background: 'var(--gradient-brand)' }}>
                      <span className="text-white">{f.icon}</span>
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{f.title}</h4>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-6 p-5 rounded-2xl border ${
                darkMode ? 'bg-green-950/20 border-green-800/30' : 'bg-green-50 border-green-100'
              }`}>
                <div className="text-4xl font-black text-gradient mb-1">5–12 min</div>
                <div className={`text-sm font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Average time from RFQ received to quote sent</div>
                <div className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>vs. 2–4 hours with manual workflow</div>
              </div>

              <a
                href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 btn-primary text-white px-6 py-3 rounded-full font-semibold glow-blue-sm cursor-pointer"
              >
                <span className="flex items-center gap-2"><Chrome size={16} />Send Your First AI-Generated Quote → Install Free</span>
              </a>
            </div>

            {/* Right: Quote Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 blur-3xl rounded-3xl" />
              <div className={`relative rounded-2xl border overflow-hidden ${
                darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-xl'
              }`}>
                {/* Email Header */}
                <div className={`px-5 py-4 border-b ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                  <div className={`text-xs font-semibold mb-3 flex items-center justify-between ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    <span>AI-Generated Quotation Email</span>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">Ready to Send</span>
                  </div>
                  <div className={`text-xs space-y-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div><span className="font-medium">To:</span> procurement@acmemanufacturing.com</div>
                    <div><span className="font-medium">Re:</span> Quotation — RFQ #4521 Steel Components</div>
                  </div>
                </div>

                <div className="p-5">
                  {/* Quote Body Preview */}
                  <div className={`text-xs leading-relaxed space-y-2 mb-5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <p>Dear John,</p>
                    <p>Thank you for your RFQ #4521. Please find our quotation for the requested steel components below.</p>
                  </div>

                  {/* Line Items Table */}
                  <div className={`rounded-xl overflow-hidden border text-xs mb-4 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                    <div className={`grid grid-cols-4 px-3 py-2 font-semibold ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-50 text-slate-600'}`}>
                      <span>Part #</span><span>Description</span><span>Qty</span><span className="text-right">Unit Price</span>
                    </div>
                    {[
                      { part: 'ACM-B-0042', desc: 'SS Bracket', qty: '500', price: '$12.50' },
                      { part: 'ACM-B-0043', desc: 'SS Fastener Kit', qty: '500', price: '$3.80' },
                      { part: 'ACM-B-0044', desc: 'Mounting Plate', qty: '250', price: '$22.00' },
                    ].map((item, i) => (
                      <div key={i} className={`grid grid-cols-4 px-3 py-2 ${darkMode ? 'text-slate-300 border-t border-slate-700' : 'text-slate-700 border-t border-slate-100'}`}>
                        <span className="font-mono text-blue-400">{item.part}</span>
                        <span>{item.desc}</span>
                        <span>{item.qty}</span>
                        <span className="text-right font-semibold">{item.price}</span>
                      </div>
                    ))}
                    <div className={`grid grid-cols-4 px-3 py-2 font-bold border-t ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}>
                      <div className="col-span-3 text-xs">Total (FOB Shanghai, USD)</div>
                      <div className="text-right text-blue-400 text-xs">$14,200</div>
                    </div>
                  </div>

                  <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    <div>Validity: 30 days · Lead time: 21 days · Incoterm: FOB Shanghai</div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 btn-primary text-white py-2.5 rounded-xl text-xs font-bold cursor-pointer">
                      <span>Send Quote →</span>
                    </button>
                    <button className={`px-3 py-2.5 rounded-xl text-xs font-semibold border cursor-pointer ${
                      darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}>Edit</button>
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
