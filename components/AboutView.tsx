
import React from 'react';

interface AboutViewProps {
  onContactClick: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onContactClick }) => {
  return (
    <div className="py-20 animate-[fadeIn_0.5s_ease-out]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-5xl lg:text-7xl font-black mb-10">Nossa <span className="text-primary">História</span>.</h1>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              A <span className="text-white font-bold">Redeon.cloud</span> foi fundada por <span className="text-primary font-bold">Ygor Hernández</span>, Desenvolvedor Frontend e entusiasta em Ciência de Dados. A paixão por otimizar fluxos de trabalho e criar soluções inteligentes foi o motor central para o nascimento da nossa agência.
            </p>
            <p>
              Com uma forte base em <span className="text-white font-bold">Python, SQL, JavaScript</span> e desenvolvimento web estruturado, nossa missão é clara: aplicar princípios rigorosos de análise de dados e engenharia de software para resolver problemas reais de negócios.
            </p>
            <p>
              Hoje, combinamos o poder analítico com a flexibilidade das automações modernas para garantir que sua empresa opere com máxima eficiência, eliminando processos manuais e permitindo uma escala sem limites.
            </p>
            <div className="pt-8 flex flex-wrap gap-4">
              <button
                onClick={onContactClick}
                className="bg-accent-blue text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(79,124,255,0.3)]"
              >
                Fale Conosco
              </button>
              <a
                href="https://ygor-github.github.io/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#0B1026] border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors flex items-center gap-2"
              >
                Ver Portfólio do Fundador <span className="material-symbols-rounded text-sm">open_in_new</span>
              </a>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="bg-[#0B1026]/80 backdrop-blur-xl border border-white/5 p-8 lg:p-12 rounded-3xl space-y-8 relative z-10 shadow-2xl">
              
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/5">
                <img 
                  src="https://github.com/ygor-github.png" 
                  alt="Ygor Hernández" 
                  className="w-24 h-24 rounded-2xl border border-primary/30 object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">Ygor Hernández</h3>
                  <p className="text-primary font-medium">Fundador & Tech Lead</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue">
                    <span className="material-symbols-rounded">data_object</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Ciência de Dados</h4>
                    <p className="text-sm text-white/50">Forte base em Python, bancos de dados SQL e análise preditiva focada em resultados.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <span className="material-symbols-rounded">code_blocks</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Desenvolvimento Frontend</h4>
                    <p className="text-sm text-white/50">Criação de interfaces web interativas com tecnologias como React, Tailwind e JavaScript.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-violet/10 rounded-xl text-accent-violet">
                    <span className="material-symbols-rounded">model_training</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Formação Alura</h4>
                    <p className="text-sm text-white/50">Certificações avançadas em programação, dados e desenvolvimento pessoal.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
