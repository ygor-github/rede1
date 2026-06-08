import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TranslationSchema } from '../types';

interface HeroProps {
  onContactClick: () => void;
  t: TranslationSchema;
}

const Hero: React.FC<HeroProps> = ({ onContactClick, t }) => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-aurora">
      <div className="absolute inset-0 bg-background-dark/40"></div>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 relative z-10">
        
        <motion.div 
          className="flex-1 space-y-8 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
            </span>
            {t.hero.badge}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
            {t.hero.title} <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-primary to-accent-violet">{t.hero.titleAccent}</span>
          </h1>
          
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(79, 124, 255, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/about')}
              className="bg-accent-blue text-white px-8 py-4 rounded-xl text-base font-bold flex items-center gap-2 transition-all"
            >
              {t.hero.cta}
              <span className="material-symbols-rounded">arrow_forward</span>
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 relative w-full max-w-[500px] group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent-violet/30 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
          
          <div className="glass-card relative w-full aspect-square lg:aspect-auto lg:h-[500px] p-6 lg:p-10 flex flex-col justify-center items-center gap-8 overflow-hidden z-10 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Animación Abstracta de Automatización */}
            <div className="relative w-full h-full flex flex-col justify-between">
              
              {/* Caos (Entradas) */}
              <div className="flex justify-around items-center w-full h-1/3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`in-${i}`}
                    className="size-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white/50"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="material-symbols-rounded text-sm">description</span>
                  </motion.div>
                ))}
              </div>

              {/* El Motor (Procesamiento) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div 
                  className="size-20 rounded-2xl bg-gradient-to-br from-primary to-accent-violet p-[2px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full bg-card-dark rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-rounded text-3xl text-primary neon-glow-primary">hub</span>
                  </div>
                </motion.div>
              </div>

              {/* Partículas de flujo conectando */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute left-1/2 top-1/3 size-2 bg-primary rounded-full workflow-dot"
                  initial={{ x: -100 + (Math.random() * 200), y: -50, opacity: 0 }}
                  animate={{
                    x: 0,
                    y: 40,
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeIn"
                  }}
                />
              ))}

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`dot-out-${i}`}
                  className="absolute left-1/2 top-1/2 size-2 bg-accent-violet rounded-full neon-glow-violet"
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{
                    x: -80 + (Math.random() * 160),
                    y: 100,
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Orden (Salidas) */}
              <div className="flex justify-center items-center gap-4 w-full h-1/3 mt-auto">
                {[0, 1].map((i) => (
                  <motion.div
                    key={`out-${i}`}
                    className="flex-1 max-w-[120px] h-12 rounded-xl bg-accent-violet/20 border border-accent-violet/30 flex items-center px-4 gap-2 text-accent-violet"
                    animate={{
                      boxShadow: ["0 0 0px rgba(139,92,246,0)", "0 0 15px rgba(139,92,246,0.4)", "0 0 0px rgba(139,92,246,0)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="material-symbols-rounded text-lg">check_circle</span>
                    <div className="h-2 w-12 bg-accent-violet/40 rounded-full"></div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
