
import React, { useState } from 'react';
import { TranslationSchema } from '../types';

interface FAQProps {
  t: TranslationSchema;
}

const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-background-dark">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.faq.title}</h2>
          <p className="text-white/50 text-lg">{t.faq.description}</p>
        </div>
        
        <div className="space-y-4">
          {t.faq.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className={`group bg-card-dark border transition-all duration-300 rounded-xl overflow-hidden
                  ${isOpen ? 'border-accent-violet/50 shadow-[0_0_15px_rgba(139,92,246,0.1)]' : 'border-white/5'}`}
              >
                <button 
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 cursor-pointer text-left"
                >
                  <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                    {item.question}
                  </span>
                  <span className={`material-symbols-rounded text-white/30 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-violet' : ''}`}>
                    expand_more
                  </span>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out px-8 lg:px-8 overflow-hidden 
                  ${isOpen ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white/60 leading-relaxed text-base border-t border-white/5 pt-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
