
import React from 'react';
import { TranslationSchema } from '../types';

interface FooterProps {
  onNavigate: (view: any) => void;
  t: TranslationSchema;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, t }) => {
  const handleSmoothScroll = (id: string) => {
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="border-t border-white/10 py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="space-y-8 max-w-sm">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
              <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-xl font-black tracking-tight uppercase">Redeon<span className="text-primary">.cloud</span></h2>
            </button>
            <p className="text-sm text-white/40 leading-relaxed font-medium">
              {t.footer.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
            <div>
              <h4 className="text-sm font-bold mb-8 uppercase tracking-widest text-white/90">{t.footer.company}</h4>
              <ul className="space-y-4 text-sm text-white/40 font-medium">
                <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors">{t.footer.about}</button></li>
                <li><button onClick={() => onNavigate('careers')} className="hover:text-primary transition-colors">{t.footer.careers}</button></li>
                <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors">{t.footer.contact}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-8 uppercase tracking-widest text-white/90">{t.footer.legal}</h4>
              <ul className="space-y-4 text-sm text-white/40 font-medium">
                <li><button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors">{t.footer.privacy}</button></li>
                <li><button onClick={() => onNavigate('terms')} className="hover:text-primary transition-colors">{t.footer.terms}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-8 uppercase tracking-widest text-white/90">{t.footer.services}</h4>
              <ul className="space-y-4 text-sm text-white/40 font-medium">
                <li><button onClick={() => handleSmoothScroll('solucoes-detalhes')} className="hover:text-primary transition-colors">{t.nav.solutions}</button></li>
                <li><button onClick={() => onNavigate('vps')} className="hover:text-primary transition-colors font-bold text-primary">{t.footer.hosting}</button></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30 font-medium">© 2024 Redeon.cloud.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
