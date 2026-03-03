import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Language, TranslationSchema } from '../types';

interface HeaderProps {
  onContactClick: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationSchema;
}

const Header: React.FC<HeaderProps> = ({ onContactClick, language, onLanguageChange, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LanguageSelector = () => (
    <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
      {(['pt', 'en', 'es'] as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => onLanguageChange(lang)}
          className={`px-2 py-0.5 text-[10px] font-black uppercase rounded transition-all ${language === lang ? 'bg-primary text-background-dark' : 'text-white/70 hover:text-white'
            }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );

  const handleSmoothScroll = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? 'bg-background-dark/95 border-white/10 py-0 backdrop-blur-md' : 'bg-transparent border-transparent py-2'
      }`}>
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 group">
          <div className="size-8 text-primary group-hover:scale-110 transition-transform">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-black tracking-tight uppercase">Redeon<span className="text-primary">.cloud</span></h2>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">{t.nav.home}</Link>
          <a href="#solucoes-detalhes" onClick={(e) => handleSmoothScroll('solucoes-detalhes', e)} className="text-sm font-medium text-white/70 hover:text-primary transition-colors">{t.nav.solutions}</a>
          <a href="#precos" onClick={(e) => handleSmoothScroll('precos', e)} className="text-sm font-medium text-white/70 hover:text-primary transition-colors">{t.nav.pricing}</a>

          <div className="h-4 w-px bg-white/10"></div>

          <LanguageSelector />

          <button
            onClick={onContactClick}
            className="bg-primary text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(6,249,249,0.2)]"
          >
            {t.nav.start}
          </button>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      <div className={`fixed inset-0 top-20 bg-background-dark z-40 md:hidden transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-white/70 hover:text-primary">{t.nav.home}</Link>
          <a href="#solucoes-detalhes" onClick={(e) => handleSmoothScroll('solucoes-detalhes', e)} className="text-2xl font-black text-white/70 hover:text-primary">{t.nav.solutions}</a>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-white/70 hover:text-primary">{t.nav.about}</Link>

          <div className="flex gap-4">
            {(['pt', 'en', 'es'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`text-xl font-black uppercase ${language === lang ? 'text-primary' : 'text-white/50'}`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setIsMenuOpen(false);
              onContactClick();
            }}
            className="w-full max-w-xs bg-primary text-background-dark px-6 py-4 rounded-xl text-lg font-bold shadow-lg"
          >
            {t.nav.start}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
