import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ContactModal from './components/ContactModal';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import CareersView from './components/CareersView';
import LegalView from './components/LegalView';
import VPSView from './components/VPSView';
import { Language, TranslationSchema } from './types';
import { TRANSLATIONS } from './constants';
import { fetchLandingData } from './services/api';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('pt');
  const [dynamicContent, setDynamicContent] = useState<Partial<TranslationSchema>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  // Load dynamic content from Odoo via n8n
  useEffect(() => {
    const loadDynamicData = async () => {
      setIsLoading(true);
      setDynamicContent({}); // Reset to ensure loading indicator/state triggers
      const data = await fetchLandingData(language);
      if (data && data.pricing) {
        setDynamicContent(prev => ({ ...prev, ...data }));
      }
      setIsLoading(false);
    };
    loadDynamicData();
  }, [language]);

  // Merge hardcoded translations with dynamic content from Odoo
  const t: TranslationSchema = {
    ...TRANSLATIONS[language],
    ...dynamicContent,
    pricing: {
      ...TRANSLATIONS[language].pricing,
      // Use Odoo plans if they are present (even if empty, they officially replace defaults)
      plans: (dynamicContent.pricing?.plans)
        ? dynamicContent.pricing.plans
        : (isLoading ? [] : TRANSLATIONS[language].pricing.plans)
    },
    solutionsPage: {
      ...TRANSLATIONS[language].solutionsPage,
      ...(dynamicContent.solutionsPage || {})
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden selection:bg-primary/30 selection:text-white scroll-smooth">
      <Header
        onContactClick={openContactModal}
        language={language}
        onLanguageChange={setLanguage}
        t={t}
      />
      <main className="animate-[fadeIn_0.5s_ease-out]">
        <Routes>
          <Route path="/" element={<HomeView onContactClick={openContactModal} t={t} language={language} />} />
          <Route path="/about" element={<AboutView onContactClick={openContactModal} />} />
          <Route path="/careers" element={<CareersView />} />
          <Route path="/vps" element={<VPSView onContactClick={openContactModal} />} />
          <Route path="/privacy" element={<LegalView title={t.footer.privacy} />} />
          <Route path="/terms" element={<LegalView title={t.footer.terms} />} />
        </Routes>
      </main>
      <Footer t={t} />
      <FloatingWhatsApp t={t} />

      {isContactModalOpen && (
        <ContactModal onClose={closeContactModal} t={t} language={language} />
      )}
    </div>
  );
};

export default App;
