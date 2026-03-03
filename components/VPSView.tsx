
import React from 'react';

interface VPSViewProps {
  onContactClick: () => void;
}

const VPSView: React.FC<VPSViewProps> = ({ onContactClick }) => {
  return (
    <div className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="flex-1 space-y-8">
            <div className="text-primary text-xs font-black uppercase tracking-[0.3em]">Infraestrutura de Elite</div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">Sua automação merece <span className="text-primary">potência</span> dedicada.</h1>
            <p className="text-lg text-white/50 leading-relaxed">
              Não rode seus workflows em ambientes compartilhados e lentos. Oferecemos servidores VPS otimizados especificamente para instâncias n8n e scripts Python intensivos.
            </p>
            <div className="flex gap-4">
              <button onClick={onContactClick} className="bg-primary text-background-dark px-10 py-5 rounded-xl font-black text-lg">Ver Planos de Hosting</button>
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            {[
              { label: 'Processadores', val: 'AMD EPYC™', icon: 'memory' },
              { label: 'Armazenamento', val: 'NVMe Gen4', icon: 'storage' },
              { label: 'Rede', val: '10 Gbps', icon: 'speed' },
              { label: 'Segurança', val: 'DDoS Protect', icon: 'shield' },
            ].map((spec, i) => (
              <div key={i} className="bg-card-dark border border-white/5 p-6 rounded-2xl">
                <span className="material-symbols-outlined text-primary mb-4">{spec.icon}</span>
                <p className="text-xs text-white/60 font-bold uppercase mb-1">{spec.label}</p>
                <p className="text-lg font-black">{spec.val}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-12 lg:p-20 text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-8">Deploy em <span className="text-primary">60 segundos</span>.</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg">
            Nossos servidores já vêm pré-configurados com Docker, n8n (versão estável) e ambiente Python 3.11 pronto para uso.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-10">
            <div className="flex items-center gap-3 text-sm font-bold"><span className="size-2 rounded-full bg-primary shadow-[0_0_10px_#06f9f9]"></span> Backup Diário</div>
            <div className="flex items-center gap-3 text-sm font-bold"><span className="size-2 rounded-full bg-primary shadow-[0_0_10px_#06f9f9]"></span> Snapshot On-demand</div>
            <div className="flex items-center gap-3 text-sm font-bold"><span className="size-2 rounded-full bg-primary shadow-[0_0_10px_#06f9f9]"></span> ISO Própria</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPSView;
