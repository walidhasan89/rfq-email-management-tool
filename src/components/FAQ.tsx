import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { darkMode: boolean }

interface FaqItem {
  q: string;
  a: string;
  links?: { text: string; href: string }[];
}

const faqs: FaqItem[] = [
  {
    q: 'What is an RFQ email management tool?',
    a: 'An RFQ email management tool is specialized software designed to help businesses detect, organize, track, and respond to Request for Quotation (RFQ) emails more efficiently. Unlike generic email clients, it automatically identifies RFQ emails, extracts product data from attached documents, organizes active RFQs into a trackable pipeline, and helps generate professional quotation responses. RFQ AutoPilot is an AI-powered RFQ email management tool that works as a Chrome Extension inside Gmail and Outlook — no separate software installation required.',
  },
  {
    q: 'How is RFQ AutoPilot different from Gmail filters or Outlook rules?',
    a: 'Gmail filters rely on exact keyword matching — they only catch emails containing specific words like "RFQ." Buyers use dozens of different phrases: "pricing request," "please quote," "bid invitation," "tender inquiry," or industry-specific terminology. These variations — plus RFQs in other languages — slip through basic filters entirely. RFQ AutoPilot uses AI-based multi-signal analysis examining subject lines, body content, sender patterns, and attachment types simultaneously. It catches 40–65% more RFQs than keyword-based filters, and it also extracts data, tracks deadlines, manages pipeline status, and generates quotation replies.',
  },
  {
    q: 'Can RFQ AutoPilot parse and extract data from PDF attachments?',
    a: 'Yes. RFQ AutoPilot\'s extraction engine automatically processes PDF attachments the moment an RFQ email is detected. It extracts product names, part numbers, quantities, specifications, delivery dates, buyer contact information, and commercial terms — from text-based PDFs and scanned documents (using OCR). It also supports Microsoft Excel, Word, CSV files, and image-based attachments. Extracted data is presented in a structured, editable format within your email interface. Extraction accuracy ranges from 94–98% on standard procurement documents.',
  },
  {
    q: 'Does RFQ AutoPilot store or read my email content?',
    a: 'RFQ AutoPilot processes your email content in real time to detect RFQs and extract data. However, your email content is never permanently stored on our servers. All processing happens through encrypted channels (TLS 1.3 in transit, AES-256 at rest for temporary cache), and we are fully GDPR compliant and SOC 2 Type II certified. We never share, sell, or provide access to your email data to any third party. We follow cybersecurity best practices aligned with SBA guidelines and full GDPR regulation compliance.',
    links: [
      { text: 'SBA Cybersecurity Guidelines', href: 'https://www.sba.gov/business-guide/manage-your-business/strengthen-your-cybersecurity' },
      { text: 'GDPR Compliance', href: 'https://gdpr.eu/' },
    ],
  },
  {
    q: 'How does the RFQ dashboard work inside Gmail and Outlook?',
    a: 'When you install the RFQ AutoPilot Chrome Extension, a sidebar panel is added to your Gmail or Outlook web interface. This panel contains your RFQ dashboard — a sortable, filterable list of all detected RFQ emails with key information at a glance: sender, subject, deadline, status, and priority. You can click into any RFQ to see extracted data, update status, assign to a team member, or generate a quote reply. The dashboard includes pipeline view, analytics charts, and search functionality — all within your existing email tab.',
  },
  {
    q: 'Can my whole sales team use RFQ AutoPilot together?',
    a: 'Yes. On the Pro plan, you can connect multiple Gmail and Outlook accounts to a shared RFQ AutoPilot environment. Team features include: shared RFQ pipeline visibility, RFQ assignment and ownership, shared quotation templates, team analytics and performance reporting, and collaborative notes on individual RFQs. For teams of 10+ users, enterprise plans with SSO, admin controls, and custom onboarding are available through our sales team.',
  },
  {
    q: 'What happens if RFQ AutoPilot misclassifies an email?',
    a: 'If RFQ AutoPilot labels a non-RFQ email as an RFQ (false positive), you can dismiss it with one click. If it misses a genuine RFQ (false negative), you can manually tag it. Both actions feed back into the AI learning system, improving detection accuracy over time. Users typically report false positive rates below 3% and false negative rates below 5% within the first two weeks of use. After a month of continuous learning, accuracy improves further based on your email patterns.',
  },
  {
    q: 'Can I export extracted RFQ data to my CRM or ERP?',
    a: 'Absolutely. RFQ AutoPilot supports one-click data export to CSV and Excel formats, which can be imported into virtually any CRM (Salesforce, HubSpot, Zoho, Pipedrive) or ERP system (SAP, Oracle, NetSuite, QuickBooks). The Pro plan also includes API access for building direct integrations with your existing systems, enabling automated data flow from RFQ detection to your CRM pipeline without manual exports.',
  },
  {
    q: 'How quickly can I get started?',
    a: 'Installation takes under 60 seconds. Visit the Chrome Web Store, click "Add to Chrome," and grant access to your Gmail or Outlook account. There is no onboarding required for basic use — RFQ AutoPilot begins scanning and detecting RFQ emails immediately. Most users see their first auto-detected RFQ within minutes of installation. Setting up custom templates and team configurations takes an additional 10–15 minutes.',
  },
  {
    q: 'What industries benefit most from RFQ email management?',
    a: 'Any industry where businesses receive Requests for Quotation via email benefits from RFQ email management automation. The most active industries include manufacturing (CNC machining, sheet metal fabrication, injection molding, electronics assembly), international trade and export (agricultural commodities, textiles, chemicals, raw materials), wholesale distribution (industrial supplies, fasteners, electrical components), construction and engineering (building materials, MEP contractors), and B2B technology (enterprise software, IT procurement, SaaS licensing). If your revenue depends on responding to emailed pricing requests, RFQ AutoPilot is built for you.',
  },
  {
    q: 'Does RFQ AutoPilot work with non-English languages?',
    a: 'Yes. RFQ AutoPilot\'s detection and extraction engines support multiple languages including English, Spanish, French, German, Portuguese, Chinese (Simplified and Traditional), Arabic, Hindi, Japanese, Korean, Italian, Dutch, Turkish, and Russian. The AI model is trained on procurement language patterns across these languages, enabling accurate detection regardless of the language used by the buyer. AI-generated quotation replies are currently available in English, with additional language support being rolled out based on user demand.',
  },
  {
    q: 'Does RFQ AutoPilot work with shared team inboxes?',
    a: 'Yes. RFQ AutoPilot works with shared Gmail accounts (via Google Groups or delegated access), shared Outlook mailboxes (Microsoft 365 shared mailboxes), and alias-based inboxes. This is especially useful for teams that receive RFQs through addresses like sales@, quotes@, or procurement@. All RFQs arriving in the shared inbox are detected and visible to authorized team members.',
  },
];

export default function FAQ({ darkMode }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="faq" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent'}`} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="text-center mb-14">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'
            }`}>
              FAQ
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Frequently Asked Questions About{' '}
              <span className="text-gradient">RFQ Email Management</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  openIndex === i
                    ? darkMode
                      ? 'border-blue-500/40 bg-slate-900'
                      : 'border-blue-200 bg-blue-50/30 shadow-sm'
                    : darkMode
                      ? 'border-slate-800 bg-slate-900 hover:border-slate-700'
                      : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span itemProp="name" className={`text-sm font-semibold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180 text-blue-500' : darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  />
                </button>

                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p
                      itemProp="text"
                      className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'} ${faq.links ? 'mb-3' : ''}`}
                    >
                      {faq.a}
                    </p>
                    {faq.links && (
                      <div className="flex flex-wrap gap-2">
                        {faq.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border transition-colors ${
                              darkMode
                                ? 'border-blue-800/50 text-blue-400 hover:bg-blue-900/30'
                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'
                            }`}
                          >
                            🔗 {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
