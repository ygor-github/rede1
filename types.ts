
export type Language = 'pt' | 'en' | 'es';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
}

export interface PricingPlan {
  level: string;
  title: string;
  price?: string;
  description?: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SolutionsCategory {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: string;
}

export interface TranslationSchema {
  nav: {
    solutions: string;
    pricing: string;
    expertise: string;
    start: string;
    home: string;
    about: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    cta: string;
  };
  services: {
    title: string;
    description: string;
    items: ServiceCard[];
  };
  solutionsPage: {
    title: string;
    subtitle: string;
    categories: SolutionsCategory[];
    ctaTitle: string;
    ctaButton: string;
  };
  expertise: {
    badge: string;
    title: string;
    description: string;
    cta: string;
  };
  pricing: {
    title: string;
    description: string;
    plans: PricingPlan[];
  };
  faq: {
    title: string;
    description: string;
    items: FAQItem[];
  };
  footer: {
    description: string;
    company: string;
    legal: string;
    services: string;
    about: string;
    careers: string;
    contact: string;
    privacy: string;
    terms: string;
    hosting: string;
  };
  contactModal: {
    title: string;
    description: string;
    name: string;
    email: string;
    company: string;
    challenge: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderCompany: string;
    placeholderMessage: string;
    submit: string;
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
    close: string;
  };
  whatsappMessage: string;
  deploying: {
    badge: string;
    title: string;
    description: string;
    status: string;
    server: string;
    tech: string;
    footer: string;
    projectLabel: string;
  };
}
