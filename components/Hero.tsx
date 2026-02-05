
import React from 'react';
import { TranslationSchema } from '../types';

interface HeroProps {
  onContactClick: () => void;
  t: TranslationSchema;
}

const Hero: React.FC<HeroProps> = ({ onContactClick, t }) => {
  return (
    <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.hero.badge}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            {t.hero.title} <span className="text-primary">{t.hero.titleAccent}</span>
          </h1>
          
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onContactClick}
              className="bg-primary text-background-dark px-8 py-4 rounded-lg text-base font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(6,249,249,0.2)]"
            >
              {t.hero.cta}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative w-full max-w-[500px] group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent-violet/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] bg-card-dark border border-white/10 rounded-2xl p-8 flex flex-col gap-8 overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center opacity-40">
              <div className="h-2 w-24 bg-white/20 rounded-full"></div>
              <div className="flex gap-2">
                <div className="size-2 rounded-full bg-red-500/50"></div>
                <div className="size-2 rounded-full bg-yellow-500/50"></div>
                <div className="size-2 rounded-full bg-green-500/50"></div>
              </div>
            </div>
            
            <div className="self-start flex items-center gap-3 bg-white/5 border border-white/10 p-3 lg:p-4 rounded-lg workflow-dot animate-[pulse_3s_infinite]">
              <div className="size-10 bg-primary/20 rounded flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">webhook</span>
              </div>
              <div className="text-xs">
                <p className="font-bold">Webhook Trigger</p>
                <p className="text-white/40">Incoming Lead</p>
              </div>
            </div>
            
            <div className="ml-8 w-px h-12 lg:h-16 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
            
            <div className="self-center flex items-center gap-3 bg-white/5 border border-white/10 p-3 lg:p-4 rounded-lg workflow-dot translate-x-4 animate-[pulse_4s_infinite]">
              <div className="size-10 bg-accent-violet/20 rounded flex items-center justify-center text-accent-violet">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div className="text-xs">
                <p className="font-bold">AI Processing</p>
                <p className="text-white/40">Intent Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
