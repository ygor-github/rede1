
import React from 'react';
import { TranslationSchema } from '../types';

interface ServicesProps {
  t: TranslationSchema;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section className="py-24 bg-white/[0.02]" id="solucoes">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-white/50 max-w-2xl text-lg">
            {t.services.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {t.services.items.map((service, idx) => (
            <div 
              key={idx}
              className={`p-8 bg-card-dark border border-white/5 rounded-xl transition-all duration-300 group ${service.borderColor}`}
            >
              <div className={`size-14 rounded-xl ${service.iconBg} flex items-center justify-center ${service.iconColor} mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
