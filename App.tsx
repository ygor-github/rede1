
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Pricing from './components/Pricing';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ContactModal from './components/ContactModal';
import AboutView from './components/AboutView';
import CareersView from './components/CareersView';
import LegalView from './components/LegalView';
import VPSView from './components/VPSView';
import SolutionsView from './components/SolutionsView';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

type ViewType = 'home' | 'about' | 'careers' | 'privacy' | 'terms' | 'vps';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [language, setLanguage] = useState<Language>('pt');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const t = TRANSLATIONS[language];

  const navigateTo = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const renderContent = () => {
    switch (currentView) {
      case 'about': return <AboutView onContactClick={openContactModal} />;
      case 'careers': return <CareersView />;
      case 'vps': return <VPSView onContactClick={openContactModal} />;
      case 'privacy': return <LegalView title={t.footer.privacy} />;
      case 'terms': return <LegalView title={t.footer.terms} />;
      default:
        return (
          <>
            <Hero onContactClick={openContactModal} t={t} />
            <Services t={t} />
            <SolutionsView onContactClick={openContactModal} t={t} isSection={true} />
            <Expertise t={t} />
            <Pricing onContactClick={openContactModal} t={t} />
            <TechStack />
            <FAQ t={t} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden selection:bg-primary/30 selection:text-white scroll-smooth">
      <Header 
        onContactClick={openContactModal} 
        onNavigate={navigateTo} 
        language={language} 
        onLanguageChange={setLanguage}
        t={t}
      />
      <main className="animate-[fadeIn_0.5s_ease-out]">
        {renderContent()}
      </main>
      <Footer onNavigate={navigateTo} t={t} />
      <FloatingWhatsApp />
      
      {isContactModalOpen && (
        <ContactModal onClose={closeContactModal} t={t} />
      )}
    </div>
  );
};

export default App;
