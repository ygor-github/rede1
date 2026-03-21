import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TranslationSchema } from '../types';

interface DeployingViewProps {
    t: TranslationSchema;
}

const DeployingView: React.FC<DeployingViewProps> = ({ t }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const projectName = searchParams.get('project') || t.deploying.projectLabel;

    useEffect(() => {
        // Limpiar metadatos de Mercado Pago de la URL para mantenerla limpia
        if (searchParams.has('collection_id') || searchParams.has('preference_id')) {
            setSearchParams({ project: projectName }, { replace: true });
        }
    }, [searchParams, setSearchParams, projectName]);

    return (
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container max-w-2xl text-center z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 animate-pulse">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    {t.deploying.badge}
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                    {t.deploying.title} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
                        {projectName}
                    </span>
                </h2>

                <p className="text-text-dim text-lg mb-12 max-w-lg mx-auto leading-relaxed">
                    {t.deploying.description}
                </p>

                {/* Progress Bar Container */}
                <div className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-sm shadow-2xl">
                    <div className="flex justify-between items-center mb-4 text-sm font-medium">
                        <span className="text-text-dim">{t.deploying.status}</span>
                        <span className="text-primary">45%</span>
                    </div>
                    
                    <div className="h-2 w-full bg-background-dark rounded-full overflow-hidden border border-white/5 relative">
                        <div className="h-full bg-gradient-to-r from-primary/50 to-primary w-full animate-[progress_3s_infinite_ease-in-out]">
                            <div className="absolute inset-0 bg-white/20 blur shadow-[0_0_15px_rgba(193,255,0,0.5)]"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="bg-background-dark/50 p-4 rounded-xl border border-white/5 text-left">
                            <p className="text-xs text-text-dim uppercase tracking-wider mb-1">{t.deploying.server}</p>
                            <p className="text-sm font-bold">Hostinger VPS Premium</p>
                        </div>
                        <div className="bg-background-dark/50 p-4 rounded-xl border border-white/5 text-left">
                            <p className="text-xs text-text-dim uppercase tracking-wider mb-1">{t.deploying.tech}</p>
                            <p className="text-sm font-bold">Docker & Traefik</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-sm text-text-dim flex flex-col items-center gap-4">
                    <p>{t.deploying.footer}</p>
                </div>
            </div>
            
            <style>{`
                @keyframes progress {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    );
};

export default DeployingView;
