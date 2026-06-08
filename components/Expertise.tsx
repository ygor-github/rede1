import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TranslationSchema } from '../types';

interface ExpertiseProps {
  t: TranslationSchema;
}

const Expertise: React.FC<ExpertiseProps> = ({ t }) => {
  const navigate = useNavigate();
  return (
    <section className="py-24 lg:py-32" id="expertise">
      <div className="max-w-[960px] mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 mb-8 border border-white/10 rounded-full text-[10px] lg:text-xs text-white/80 font-bold uppercase tracking-[0.2em]">
          {t.expertise.badge}
        </div>

        <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight tracking-tight">
          {t.expertise.title}
        </h2>

        <p className="text-lg lg:text-xl text-white/70 mb-14 leading-relaxed max-w-3xl mx-auto">
          {t.expertise.description}
        </p>

        <button 
          onClick={() => navigate('/about')}
          className="bg-primary/10 text-primary border border-primary/20 px-10 py-5 rounded-lg font-bold text-lg hover:bg-primary/20 active:scale-95 transition-all"
        >
          {t.expertise.cta}
        </button>
      </div>
    </section>
  );
};

export default Expertise;
