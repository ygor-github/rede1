
import React from 'react';
import { Language, TranslationSchema } from '../types';

interface PricingProps {
  onContactClick: () => void;
  t: TranslationSchema;
  language: Language;
}

const Pricing: React.FC<PricingProps> = ({ onContactClick, t, language }) => {
  const featuredLabel: Record<Language, string> = { pt: 'Destaque', en: 'Featured', es: 'Destacado' };
  return (
    <section className="py-24 bg-white/[0.02]" id="precos">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="text-white/50 text-lg">{t.pricing.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {t.pricing.plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-10 bg-card-dark border rounded-2xl flex flex-col relative transition-all duration-500 h-full
                ${plan.featured
                  ? 'border-2 border-accent-violet neon-glow-violet md:scale-105 z-10 shadow-2xl'
                  : 'border-white/10 hover:border-white/20'}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-violet text-white text-[10px] font-black uppercase px-6 py-1.5 rounded-full tracking-widest">
                  {featuredLabel[language]}
                </div>
              )}

              <div className="mb-10">
                <h3 className={`text-lg font-bold ${plan.featured ? 'text-white' : 'text-white/70'}`}>
                  {plan.level}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className={`text-4xl font-black ${plan.featured ? 'text-accent-violet' : 'text-white'}`}>
                    {plan.title}
                  </span>
                  {plan.description && (
                    <span className="ml-2 text-white/70 font-medium">{plan.description}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4 text-sm text-white/70 leading-relaxed">
                    <span className={`material-symbols-outlined text-sm mt-0.5 ${plan.featured ? 'text-accent-violet' : 'text-primary'}`}>
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={onContactClick}
                className={`w-full py-4 rounded-xl text-base font-bold transition-all active:scale-95
                ${plan.featured
                    ? 'bg-accent-violet text-white hover:brightness-110'
                    : 'border border-white/10 hover:bg-white/5'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
