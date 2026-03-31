import { useState } from 'react';
import { CheckCircle2, Chrome, Zap, Shield, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { darkMode: boolean }

const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals getting started with RFQ management.',
    features: [
      '30 RFQs per month',
      '10 AI Credits',
      'Basic email detection',
      'Standard templates',
      'Analytics dashboard',
    ],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Solo',
    monthlyPrice: 14.99,
    yearlyPrice: 149,
    description: 'For individual professionals managing a growing RFQ pipeline.',
    features: [
      '300 RFQs per month',
      '100 AI Credits',
      '200 exports',
      'Email & chat support',
      'Custom templates',
      '5 quote templates',
    ],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29.99,
    yearlyPrice: 299,
    description: 'For teams that need unlimited scale and priority support.',
    features: [
      'Unlimited RFQs',
      '300 AI Credits',
      'Unlimited exports',
      'Priority support',
      'Unlimited quote templates',
      'Analytics dashboard',
      'Team collaboration',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlight: true,
    badge: 'Most Popular',
  },
];

export default function Pricing({ darkMode }: Props) {
  const [yearly, setYearly] = useState(false);
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="pricing" className={`py-24 lg:py-32 relative overflow-hidden ${
      darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-blue-50/30 via-white to-slate-50'
    }`}>
      <div className={`absolute top-0 left-0 right-0 h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent'}`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'
            }`}>
              Pricing
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Transparent Pricing —{' '}
              <span className="text-gradient">Start Free, Upgrade When Ready</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Every plan includes AI-powered RFQ email detection and our{' '}
              <a href="https://rfqautopilot.com/ai-rfq-generator" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">
                AI RFQ generator
              </a>
              . No contracts, no hidden fees, cancel anytime.
            </p>

            {/* Toggle */}
            <div className={`inline-flex items-center gap-3 p-1 rounded-full border ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <button
                onClick={() => setYearly(false)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  !yearly
                    ? 'btn-primary text-white'
                    : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {!yearly ? <span>Monthly</span> : 'Monthly'}
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  yearly
                    ? 'btn-primary text-white'
                    : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {yearly ? <span className="flex items-center gap-1.5">Yearly <span className="text-xs bg-green-400/20 text-green-300 px-1.5 rounded">Save ~17%</span></span> : <span>Yearly <span className={`text-xs px-1.5 rounded ml-1 ${darkMode ? 'bg-green-900/40 text-green-400' : 'bg-green-100 text-green-600'}`}>Save ~17%</span></span>}
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border overflow-hidden card-hover transition-all duration-300 ${
                  plan.highlight
                    ? 'border-blue-500 shadow-2xl glow-blue'
                    : darkMode
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1" style={{ background: 'var(--gradient-brand)' }} />
                )}

                {plan.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: 'var(--gradient-brand)', color: 'white' }}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`p-6 ${plan.highlight ? darkMode ? 'bg-slate-900' : 'bg-white' : ''}`}>
                  <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                  <p className={`text-xs mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>

                  <div className="mb-6">
                    {plan.monthlyPrice === 0 ? (
                      <div>
                        <span className={`text-4xl font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>$0</span>
                        <span className={`text-sm ml-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
                      </div>
                    ) : (
                      <div>
                        <span className={`text-4xl font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          ${yearly ? Math.round((plan.yearlyPrice / 12) * 10) / 10 : plan.monthlyPrice}
                        </span>
                        <span className={`text-sm ml-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
                        {yearly && (
                          <div className={`text-xs mt-0.5 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                            Billed ${plan.yearlyPrice}/year
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <a
                    href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold mb-6 cursor-pointer transition-all ${
                      plan.highlight
                        ? 'btn-primary text-white glow-blue-sm'
                        : darkMode
                          ? 'border border-slate-700 text-slate-200 hover:bg-white/10'
                          : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {plan.highlight ? <span className="flex items-center gap-2"><Chrome size={15} />{plan.cta}</span> : plan.cta}
                  </a>

                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Trial Banner */}
          <div className={`p-6 rounded-2xl border text-center ${
            darkMode ? 'bg-blue-950/30 border-blue-800/30' : 'bg-blue-50 border-blue-100'
          }`}>
            <p className={`text-sm font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              All paid plans include <strong>14-day free trial</strong> — No credit card required
            </p>
            <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <span className="flex items-center gap-1.5"><Shield size={12} className="text-blue-400" />Encrypted & GDPR compliant</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-blue-400" />No contracts — cancel anytime</span>
              <span className="flex items-center gap-1.5"><Zap size={12} className="text-blue-400" />Secure payments via Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
