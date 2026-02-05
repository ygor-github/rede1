
import React from 'react';

interface AboutViewProps {
  onContactClick: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onContactClick }) => {
  return (
    <div className="py-20 animate-[fadeIn_0.5s_ease-out]">
      <div className="max-w-[1000px] mx-auto px-6">
        <h1 className="text-5xl lg:text-7xl font-black mb-10">Código que <span className="text-primary">Escala</span>.</h1>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-white/60 text-lg leading-relaxed">
            <p>
              A <span className="text-white font-bold">Redeon.cloud</span> nasceu da necessidade de transformar processos arcaicos em fluxos digitais fluidos. Com mais de uma década de experiência em sistemas críticos do setor financeiro, nossa equipe entende que automação não é apenas sobre "economizar tempo", mas sobre <span className="text-white font-bold">eliminar o erro humano</span>.
            </p>
            <p>
              Nossa abordagem é puramente técnica. Não vendemos promessas, entregamos infraestrutura robusta. Cada linha de código Python ou workflow n8n que desenhamos é focado em resiliência e segurança de dados.
            </p>
            <div className="pt-8">
              <button 
                onClick={onContactClick}
                className="bg-primary text-background-dark px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Trabalhe Conosco
              </button>
            </div>
          </div>
          <div className="bg-card-dark border border-white/10 p-8 rounded-3xl space-y-8">
            <div className="space-y-2">
              <h3 className="text-primary font-black text-4xl">10+</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40">Anos de Experiência</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-accent-violet font-black text-4xl">500k+</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40">Tarefas Automatizadas/Mês</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-black text-4xl">99.9%</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40">Uptime em Infra VPS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
