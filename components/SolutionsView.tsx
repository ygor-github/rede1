
import React from 'react';
import { TranslationSchema } from '../types';

interface SolutionsViewProps {
  onContactClick: () => void;
  t: TranslationSchema;
  isSection?: boolean;
}

const SolutionsView: React.FC<SolutionsViewProps> = ({ onContactClick, t, isSection }) => {
  return (
    <div id="solucoes-detalhes" className={`${isSection ? 'py-24 bg-white/[0.01]' : 'py-20 lg:py-32'}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <div className="inline-block px-4 py-1 mb-6 border border-primary/20 bg-primary/5 rounded-full text-[10px] text-primary font-black uppercase tracking-widest">
            Expertise Técnica
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-[1.1]">
            {t.solutionsPage.title}
          </h2>
          <p className="text-xl text-white/50 leading-relaxed font-medium">
            {t.solutionsPage.subtitle}
          </p>
        </div>

        <div className="space-y-32">
          {t.solutionsPage.categories.map((category, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-4xl">{category.icon}</span>
                  <span className="text-xs font-black uppercase tracking-[0.3em]">{category.subtitle}</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-black tracking-tight">{category.title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">{category.description}</p>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/80 font-medium">
                      <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_#06f9f9]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20"></div>
                <div className="relative bg-card-dark border border-white/10 rounded-3xl p-8 aspect-video flex items-center justify-center overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="grid grid-cols-6 h-full w-full">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="border-r border-b border-white/20"></div>
                      ))}
                    </div>
                  </div>
                  <div className="z-10 text-center group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-8xl text-white/20">{category.icon}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isSection && (
          <div className="mt-40 p-12 lg:p-24 bg-primary text-background-dark rounded-[40px] text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform">
               <span className="material-symbols-outlined text-[200px]">rocket_launch</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-10 relative z-10">
              {t.solutionsPage.ctaTitle}
            </h2>
            <button 
              onClick={onContactClick}
              className="bg-background-dark text-primary px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all relative z-10"
            >
              {t.solutionsPage.ctaButton}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionsView;
