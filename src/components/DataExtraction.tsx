import { FileText, CheckCircle2, Chrome } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { darkMode: boolean }

const docTypes = [
  { format: 'PDF (text-based)', support: 'Full extraction', full: true },
  { format: 'PDF (scanned / image-based)', support: 'OCR extraction', full: true },
  { format: 'Microsoft Excel (.xlsx, .csv)', support: 'Full extraction', full: true },
  { format: 'Microsoft Word (.docx)', support: 'Full extraction', full: true },
  { format: 'Scanned images (.jpg, .png)', support: 'OCR extraction', full: true },
  { format: 'CAD file references (.dwg)', support: 'Metadata extraction', full: false },
  { format: 'Multi-page documents (50+ pages)', support: 'Full extraction', full: true },
];

const beforeAfter = [
  { without: 'Download PDF attachment', with: 'Auto-processed on arrival' },
  { without: 'Open in PDF reader', with: 'Data preview in email sidebar' },
  { without: 'Read through 5–30 pages', with: 'Key fields extracted instantly' },
  { without: 'Manually type data into spreadsheet', with: 'Structured data ready to use' },
  { without: 'Cross-reference part numbers in catalog', with: 'Auto-linked to product catalog' },
  { without: 'Time: 15–45 minutes per RFQ', with: 'Time: 10–30 seconds per RFQ' },
  { without: 'Error rate: 5–12%', with: 'Error rate: under 2%' },
];

export default function DataExtraction({ darkMode }: Props) {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${
      darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-white'
    }`}>
      <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-purple-50 text-purple-600 border border-purple-100'
            }`}>
              Data Extraction
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              See What's Inside RFQ Attachments —{' '}
              <span className="text-gradient">Before You Even Open Them</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Our{' '}
              <a href="https://rfqautopilot.com/rfq-data-extraction-from-pdf" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">
                RFQ data extraction from PDF
              </a>{' '}
              engine processes attachments in seconds — achieving 94–98% accuracy on standard procurement documents.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Extraction Preview Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-3xl" />
              <div className={`relative rounded-2xl border overflow-hidden ${
                darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-xl'
              }`}>
                <div className={`px-5 py-3.5 border-b flex items-center gap-3 ${
                  darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'
                }`}>
                  <FileText size={16} className="text-blue-500" />
                  <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    RFQ_Specs_AcmeMfg.pdf — AI Extracted
                  </span>
                  <span className="ml-auto px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400 font-semibold">97% accuracy</span>
                </div>

                <div className="p-5 space-y-4">
                  {/* Product Section */}
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>📋 Product & Part Information</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { l: 'Product', v: 'CNC Machined Bracket' },
                        { l: 'Part #', v: 'ACM-B-0042' },
                        { l: 'Material', v: '304 Stainless Steel' },
                        { l: 'Tolerance', v: '±0.05mm' },
                      ].map((f) => (
                        <div key={f.l} className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
                          <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{f.l}</div>
                          <div className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{f.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>📦 Quantity & Order</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { l: 'Quantity', v: '500 pieces' },
                        { l: 'Unit', v: 'pcs' },
                        { l: 'Sample Qty', v: '5 pcs' },
                        { l: 'Packaging', v: 'Individual bags' },
                      ].map((f) => (
                        <div key={f.l} className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
                          <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{f.l}</div>
                          <div className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{f.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>📅 Timeline & Logistics</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { l: 'Quote Deadline', v: 'Dec 15, 2025', urgent: true },
                        { l: 'Delivery Date', v: 'Jan 30, 2026' },
                        { l: 'Incoterm', v: 'FOB Shanghai' },
                        { l: 'Currency', v: 'USD' },
                      ].map((f) => (
                        <div key={f.l} className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
                          <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{f.l}</div>
                          <div className={`text-xs font-semibold ${(f as any).urgent ? 'text-orange-400' : darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{f.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 btn-primary text-white py-2 rounded-lg text-xs font-semibold cursor-pointer">
                      <span>Generate Quote</span>
                    </button>
                    <button className={`flex-1 py-2 rounded-lg text-xs font-semibold border cursor-pointer transition-colors ${
                      darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}>Export CSV</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Before/After + Formats */}
            <div className="space-y-8">
              {/* Before/After */}
              <div>
                <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>The Before & After of Data Extraction</h3>
                <div className={`rounded-2xl border overflow-hidden ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                  <div className="grid grid-cols-2">
                    <div className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider text-center ${darkMode ? 'bg-red-900/20 text-red-400 border-b border-r border-slate-700' : 'bg-red-50 text-red-600 border-b border-r border-slate-200'}`}>
                      ❌ Without RFQ AutoPilot
                    </div>
                    <div className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider text-center ${darkMode ? 'bg-green-900/20 text-green-400 border-b border-slate-700' : 'bg-green-50 text-green-600 border-b border-slate-200'}`}>
                      ✅ With RFQ AutoPilot
                    </div>
                  </div>
                  {beforeAfter.map((row, i) => (
                    <div key={i} className={`grid grid-cols-2 ${i < beforeAfter.length - 1 ? `border-b ${darkMode ? 'border-slate-700/50' : 'border-slate-100'}` : ''}`}>
                      <div className={`px-4 py-2.5 text-xs border-r ${darkMode ? 'text-red-300 border-slate-700 bg-red-900/5' : 'text-red-700 border-slate-100 bg-red-50/30'}`}>
                        {row.without}
                      </div>
                      <div className={`px-4 py-2.5 text-xs ${darkMode ? 'text-green-300 bg-green-900/5' : 'text-green-700 bg-green-50/30'}`}>
                        {row.with}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supported Formats */}
              <div>
                <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Supported Document Types</h3>
                <div className="space-y-2">
                  {docTypes.map((doc) => (
                    <div key={doc.format} className={`flex items-center justify-between px-4 py-2.5 rounded-xl border ${
                      darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'
                    }`}>
                      <div className="flex items-center gap-2.5">
                        <FileText size={14} className={doc.full ? 'text-blue-400' : 'text-yellow-400'} />
                        <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{doc.format}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {doc.full ? <CheckCircle2 size={14} className="text-green-500" /> : <span className="text-yellow-400 text-sm">🔶</span>}
                        <span className={`text-xs font-medium ${doc.full ? 'text-green-500' : 'text-yellow-400'}`}>{doc.support}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accuracy Badge */}
              <div className={`p-5 rounded-2xl border text-center ${
                darkMode ? 'bg-blue-950/40 border-blue-800/40' : 'bg-blue-50 border-blue-100'
              }`}>
                <div className="text-4xl font-black text-gradient mb-1">94–98%</div>
                <div className={`text-sm font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Extraction Accuracy</div>
                <div className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>On standard procurement PDFs</div>
              </div>

              <a
                href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary text-white px-6 py-3 rounded-full font-semibold glow-blue-sm cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Chrome size={16} />
                  Extract RFQ Data Automatically → Install Free
                </span>
              </a>
            </div>
          </div>

          {/* Time savings stat */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Time saved per RFQ', value: '40 min', sub: 'reduced to 30 sec' },
              { label: 'Extraction accuracy', value: '94–98%', sub: 'on standard PDFs' },
              { label: 'Error reduction', value: '87%', sub: 'fewer quote errors' },
              { label: 'More RFQs caught', value: '40–65%', sub: 'vs. email filters' },
            ].map((stat) => (
              <div key={stat.label} className={`p-5 rounded-2xl border text-center ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100 shadow-sm'
              }`}>
                <div className="text-2xl sm:text-3xl font-black text-gradient mb-1">{stat.value}</div>
                <div className={`text-xs font-semibold mb-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{stat.label}</div>
                <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
