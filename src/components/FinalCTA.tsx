import { CheckCircle2, Chrome } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const points = [
  'Every RFQ email detected automatically — nothing slips through the cracks',
  'Every attachment parsed and data extracted — no more manual copy-paste from PDFs',
  'Every quotation drafted by AI — professional, accurate, and sent in minutes',
  'Every deadline tracked — no more expired submissions',
  'Every response measured — analytics show your speed, volume, and win rate',
];

export default function FinalCTA() {
  const { ref, revealed } = useScrollReveal();

  const scrollToHowItWorks = () => {
    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Full gradient background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 40%, #3b82f6 80%, #1e40af 100%)' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #93c5fd, transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref} className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Your Inbox Has Revenue Hiding in It —{' '}
            <span className="text-blue-200">Let RFQ AutoPilot Find It</span>
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Right now, somewhere in your inbox, there's an RFQ email you haven't seen yet. It arrived while you were in a meeting,
            or buried beneath a chain of reply-alls, or the subject line didn't say "RFQ" so you scrolled right past it.
            <br /><br />
            <strong className="text-white">That email represents revenue.</strong> A buyer who needs your product, at your price,
            delivered on their timeline. And every minute it sits unanswered is a minute your competitor gets closer to winning that deal.
          </p>

          {/* Checkpoints */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 max-w-3xl mx-auto">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-2.5 text-left bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <CheckCircle2 size={16} className="text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-blue-100 leading-snug">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-white text-blue-700 px-8 py-4 rounded-full text-base font-bold hover:bg-blue-50 transition-colors shadow-2xl cursor-pointer"
              style={{ minWidth: 280 }}
            >
              <Chrome size={20} />
              Install RFQ AutoPilot Free — Chrome Extension
            </a>

            <button
              onClick={scrollToHowItWorks}
              className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-7 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-colors cursor-pointer"
            >
              How It Works →
            </button>
          </div>

          {/* Internal link mention */}
          <p className="text-blue-200/70 text-xs mb-5 max-w-lg mx-auto">
            Trusted by{' '}
            <a href="https://rfqautopilot.com/rfq-management-for-export-companies" className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors">
              export companies
            </a>
            ,{' '}
            <a href="https://rfqautopilot.com/rfq-software-for-manufacturers" className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors">
              manufacturers
            </a>
            , and{' '}
            <a href="https://rfqautopilot.com/rfq-software-small-business" className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors">
              small businesses
            </a>{' '}
            worldwide.
          </p>

          {/* Trust micro-copy */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-blue-200">
            <span>🆓 Free plan: 30 RFQs/month</span>
            <span>·</span>
            <span>No credit card required</span>
            <span>·</span>
            <span>Gmail &amp; Outlook compatible</span>
            <span>·</span>
            <span>⚡ 60-second setup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
