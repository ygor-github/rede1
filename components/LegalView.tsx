
import React from 'react';

interface LegalViewProps {
  title: string;
}

const LegalView: React.FC<LegalViewProps> = ({ title }) => {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl font-black mb-12">{title}</h1>
        <div className="prose prose-invert prose-p:text-white/60 prose-headings:text-white space-y-8 text-white/60 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Introdução</h2>
            <p>
              Bem-vindo à Redeon.cloud. Esta página detalha as diretrizes e normas de segurança que regem o uso de nossa plataforma e serviços de automação. Ao utilizar nossos serviços, você concorda integralmente com estes termos.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Coleta de Dados</h2>
            <p>
              Em conformidade com a LGPD, coletamos apenas os dados estritamente necessários para a execução das automações contratadas. Dados sensíveis de seus clientes processados via n8n em nossos servidores VPS são criptografados em repouso e em trânsito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Responsabilidades</h2>
            <p>
              A Redeon.cloud responsabiliza-se pela manutenção da infraestrutura e disponibilidade do servidor. O cliente é responsável pela lógica de negócio aplicada nos workflows criados.
            </p>
          </section>

          <div className="pt-12 border-t border-white/10 text-xs">
            Última atualização: Janeiro de 2024.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalView;
