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
  const [showContactModal, setShowContactModal] = useState<string | null>(null);
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
      // Map Odoo plans to frontend schema, using defaults for missing layout fields (like CTA)
      plans: (dynamicContent.pricing?.plans && dynamicContent.pricing.plans.length > 0)
        ? dynamicContent.pricing.plans.map((p: any, index: number) => {
            const defaultPlan = TRANSLATIONS[language].pricing.plans[index] || TRANSLATIONS[language].pricing.plans[0] || {} as any;
            
            const currency = language === 'pt' ? 'R$' : language === 'en' ? '$' : '€';
            const formattedPrice = p.price 
              ? (isNaN(Number(p.price)) ? p.price : `${currency} ${p.price}`) 
              : defaultPlan.title;

            return {
              level: p.title || defaultPlan.level, // The n8n API sends the title in 'title', which should map to the frontend 'level'
              title: formattedPrice,               // The n8n API sends the price in 'price', which should map to the frontend 'title'
              description: p.description || defaultPlan.description,
              features: p.features && p.features.length > 0 ? p.features : defaultPlan.features,
              featured: p.featured !== undefined ? p.featured : defaultPlan.featured,
              cta: p.cta || defaultPlan.cta
            };
          })
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

  // Function to toggle the contact modal, optionally setting a job title
  const toggleContactModal = (jobTitle: string | null = null) => {
    setShowContactModal(jobTitle || (showContactModal ? null : 'default'));
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden selection:bg-primary/30 selection:text-white scroll-smooth">
      <Header
        onContactClick={() => toggleContactModal()}
        language={language}
        onLanguageChange={setLanguage}
        t={t}
      />
      <main className="animate-[fadeIn_0.5s_ease-out]">
        <Routes>
          <Route path="/" element={<HomeView onContactClick={() => toggleContactModal()} t={t} language={language} />} />
          <Route path="/about" element={<AboutView onContactClick={() => toggleContactModal()} />} />
          <Route path="/careers" element={<CareersView t={t} onOpenContact={(title) => toggleContactModal(title)} />} />
          <Route path="/vps" element={<VPSView onContactClick={() => toggleContactModal()} />} />
          <Route path="/privacy" element={<LegalView title={t.footer.privacy} />} />
          <Route path="/terms" element={<LegalView title={t.footer.terms} />} />
        </Routes>
      </main>
      <Footer t={t} />
      <FloatingWhatsApp t={t} />

      {showContactModal && (
        <ContactModal 
          onClose={() => setShowContactModal(null)} 
          t={t} 
          language={language} 
          jobTitle={showContactModal === 'default' ? undefined : showContactModal} 
        />
      )}
    </div>
  );
};

export default App;
