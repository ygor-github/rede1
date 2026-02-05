
import React from 'react';
import { TranslationSchema } from '../types';

interface ExpertiseProps {
  t: TranslationSchema;
}

const Expertise: React.FC<ExpertiseProps> = ({ t }) => {
  return (
    <section className="py-24 lg:py-32" id="expertise">
      <div className="max-w-[960px] mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 mb-8 border border-white/10 rounded-full text-[10px] lg:text-xs text-white/40 font-bold uppercase tracking-[0.2em]">
          {t.expertise.badge}
        </div>
        
        <h2 className="text-4xl lg:text-6xl font-black mb-10 leading-[1.2] tracking-tight">
          {t.expertise.title}
        </h2>
        
        <p className="text-lg lg:text-xl text-white/50 mb-14 leading-relaxed max-w-3xl mx-auto">
          {t.expertise.description}
        </p>
        
        <button className="bg-primary/10 text-primary border border-primary/20 px-10 py-5 rounded-lg font-bold text-lg hover:bg-primary/20 active:scale-95 transition-all">
          {t.expertise.cta}
        </button>
      </div>
    </section>
  );
};

export default Expertise;
