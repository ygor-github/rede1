
import React from 'react';
import { TranslationSchema } from '../types';

interface CareersViewProps {
  t: TranslationSchema;
  onOpenContact: (jobTitle: string) => void;
}

const CareersView: React.FC<CareersViewProps> = ({ t, onOpenContact }) => {
  const jobs = [
    { title: 'Engenheiro de Automação n8n', type: 'Remoto', level: 'Sênior' },
    { title: 'Desenvolvedor Backend Python', type: 'Híbrido (SP)', level: 'Pleno/Sênior' },
    { title: 'Especialista em Cloud & VPS (Linux)', type: 'Remoto', level: 'Sênior' }
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <h1 className="text-5xl font-black mb-6">Ajude-nos a <span className="text-accent-violet">Automatizar</span> o Mundo.</h1>
          <p className="text-white/50 text-xl">Procuramos mentes obcecadas por eficiência e arquitetura de sistemas limpa.</p>
        </div>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div 
              key={i} 
              onClick={() => onOpenContact(job.title)}
              className="group p-8 bg-card-dark border border-white/10 rounded-2xl flex flex-col md:flex-row md:items-center justify-between hover:border-primary/50 transition-all cursor-pointer"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h2>
                <div className="flex gap-4 text-xs font-bold text-white/70 uppercase tracking-widest">
                  <span>{job.type}</span>
                  <span className="text-white/10">•</span>
                  <span>{job.level}</span>
                </div>
              </div>
              <button className="mt-6 md:mt-0 px-6 py-3 border border-white/10 rounded-xl font-bold group-hover:bg-white group-hover:text-black transition-all">
                Candidatar-se
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-accent-violet/10 rounded-3xl border border-accent-violet/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Não encontrou sua vaga?</h2>
          <p className="text-white/60 mb-8">Envie seu currículo para nosso banco de talentos focado em IA e Automação.</p>
          <button 
            onClick={() => onOpenContact('Banco de Talentos')}
            className="text-accent-violet font-bold underline text-lg underline-offset-4 hover:text-white transition-colors"
          >
            rh@redeon.cloud
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersView;
