
import { Language, TranslationSchema } from './types';

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  pt: {
    nav: { solutions: 'Soluções', pricing: 'Preços', expertise: 'Expertise', start: 'Começar Agora', home: 'Início', about: 'Sobre Nós' },
    hero: {
      badge: 'Agência de Automação B2B',
      title: 'Recupere as',
      titleAccent: '10 horas semanais que a burocracia te rouba.',
      description: 'Transformamos sua operação manual em sistemas de alta performance com n8n, Python e infraestrutura cloud escalável.',
      cta: 'Agendar Consultoria Grátis'
    },
    services: {
      title: 'Dores que resolvemos',
      description: 'Identificamos os gargalos que impedem seu crescimento e aplicamos soluções de engenharia para eliminá-los.',
      items: [
        { title: 'Perde leads por demora?', description: 'O tempo de resposta é o fator #1 para conversão. Automatizamos o primeiro contato em milissegundos.', icon: 'timer', borderColor: 'hover:border-primary/30', iconBg: 'bg-primary/10', iconColor: 'text-primary' },
        { title: 'Copia dados manuais?', description: 'Elimine o erro humano. Integramos suas planilhas, ERPs e CRMs em um fluxo de dados contínuo e seguro.', icon: 'content_copy', borderColor: 'hover:border-accent-violet/30', iconBg: 'bg-accent-violet/10', iconColor: 'text-accent-violet' },
        { title: 'Seu site atual é inútil?', description: 'Transformamos sua página estática em uma ferramenta ativa de vendas que qualifica e encaminha leads sozinho.', icon: 'language', borderColor: 'hover:border-primary/30', iconBg: 'bg-primary/10', iconColor: 'text-primary' }
      ]
    },
    solutionsPage: {
      title: 'Nossas Soluções',
      subtitle: 'Arquitetura de dados e automação inteligente para empresas que não aceitam o "manual".',
      categories: [
        {
          title: 'Vendas & Growth',
          subtitle: 'Máquina de Aquisição',
          description: 'Elimine o gap entre o lead e o vendedor.',
          items: ['Qualificação automática de leads', 'Distribuição inteligente (Round Robin)', 'Follow-up personalizado via WhatsApp/Email', 'Sync automático com CRM'],
          icon: 'trending_up'
        },
        {
          title: 'Operações & Dados',
          subtitle: 'Eficiência Operacional',
          description: 'Conecte sistemas que não conversam.',
          items: ['Integração ERP <-> E-commerce', 'Extração de dados via OCR/IA', 'Relatórios automatizados', 'Sincronização multi-cloud'],
          icon: 'hub'
        },
        {
          title: 'Customer Experience',
          subtitle: 'Suporte 24/7',
          description: 'Respostas instantâneas com contexto.',
          items: ['Agentes de IA (LLMs) personalizados', 'Automação de tickets críticos', 'NPS e Pesquisa automatizada', 'Portal do cliente inteligente'],
          icon: 'support_agent'
        }
      ],
      ctaTitle: 'Sua empresa precisa de uma solução sob medida?',
      ctaButton: 'Desenhar meu Projeto'
    },
    expertise: {
      badge: 'Compromisso com a Excelência',
      title: '10 anos de expertise no setor financeiro transformados em código e automação.',
      description: 'Não somos apenas desenvolvedores. Entendemos de compliance, segurança de dados e a urgência do mercado corporativo.',
      cta: 'Conheça nossa história'
    },
    pricing: {
      title: 'Planos de Implementação',
      description: 'Soluções escaláveis para cada fase do seu negócio.',
      plans: [
        { level: 'Level 1: MVP', title: 'R$ 800', description: '/implementação', features: ['Automação de Lead Básico', 'Integração Typeform/WhatsApp', 'Setup de 1 Workflow n8n'], cta: 'Selecionar' },
        { level: 'Level 2: Ecosystem', title: 'Sob consulta', features: ['Ecossistema Customizado', 'Integração com CRMs (Salesforce/Odoo)', 'Dashboards em Tempo Real', 'Suporte Prioritário'], cta: 'Começar Agora', featured: true },
        { level: 'Level 3: Enterprise', title: 'Escalável', features: ['Infraestrutura VPS Dedicada', 'Desenvolvimento em Python/Linux', 'SLA de Disponibilidade 99.9%'], cta: 'Consultar' }
      ]
    },
    faq: {
      title: 'Perguntas Frequentes',
      description: 'Tire suas dúvidas sobre nosso modelo de trabalho e tecnologia.',
      items: [
        { id: 'faq-1', question: 'Como funciona o setup inicial?', answer: 'Iniciamos com uma reunião de diagnóstico para mapear seus processos manuais. Em seguida, desenhamos o fluxo de automação e realizamos a implementação em ambiente de homologação antes do deploy final.' },
        { id: 'faq-2', question: 'O que é n8n e por que vocês usam?', answer: 'O n8n é uma poderosa ferramenta de workflow automation open-source que permite conectar milhares de aplicativos. Escolhemos o n8n pela flexibilidade técnica, segurança (pode ser auto-hospedado) e por não cobrar por execução de tarefa, reduzindo seu custo operacional.' },
        { id: 'faq-3', question: 'Meus dados estarão seguros em um servidor próprio?', answer: 'Sim. Diferente de plataformas SaaS tradicionais, nós instalamos sua infraestrutura em um servidor privado (VPS). Isso garante que você tenha total soberania sobre seus dados, atendendo a requisitos rigorosos de LGPD e segurança corporativa.' },
        { id: 'faq-4', question: 'Vocês oferecem suporte após a implementação?', answer: 'Sim, oferecemos planos de manutenção e suporte contínuo para garantir que suas automações funcionem 24/7 sem interrupções, além de realizar ajustes finos conforme seu negócio evolui.' }
      ]
    },
    footer: { description: 'Especialistas em automação de processos B2B e hospedagem VPS de alta performance.', company: 'Empresa', legal: 'Legal', services: 'Serviços', about: 'Sobre nós', careers: 'Carreiras', contact: 'Contato', privacy: 'Privacidade', terms: 'Termos', hosting: 'VPS Hosting' },
    contactModal: { title: 'Redeon.cloud', description: 'Preencha os dados abaixo e entraremos em contato.', name: 'Nome Completo', email: 'Email Corporativo', company: 'Empresa', challenge: 'Qual seu desafio?', placeholderName: 'Seu nome', placeholderEmail: 'exemplo@empresa.com', placeholderCompany: 'Nome da sua empresa', placeholderMessage: 'Descreva brevemente o que deseja automatizar...', submit: 'Enviar Solicitação', successTitle: 'Recebemos seu contato!', successDescription: 'Nossa equipe entrará em contato em até 24 horas úteis.', errorTitle: 'Erro ao enviar', errorDescription: 'Ocorreu um problema. Tente novamente ou entre em contato via WhatsApp.', close: 'Fechar' },
    whatsappMessage: 'Olá! Gostaria de saber mais sobre as soluções de automação da Redeon.',
    deploying: {
      badge: 'IMPLANTAÇÃO EM CURSO',
      title: 'Preparando o espaço digital para',
      description: 'Estamos configurando um ambiente demonstrativo e orientativo que servirá como base para criar seu projeto sob medida. Em instantes, seu novo ambiente estará pronto para decolar.',
      status: 'Estado: Orquestrando ambiente',
      server: 'Servidor',
      tech: 'Tecnologia',
      footer: 'Você receberá uma notificação por WhatsApp e Email com sua URL final.',
      projectLabel: 'sua nova experiência web'
    }
  },
  en: {
    nav: { solutions: 'Solutions', pricing: 'Pricing', expertise: 'Expertise', start: 'Start Now', home: 'Home', about: 'About Us' },
    hero: {
      badge: 'B2B Automation Agency',
      title: 'Recover the',
      titleAccent: '10 weekly hours that bureaucracy steals from you.',
      description: 'We transform your manual operations into high-performance systems with n8n, Python, and scalable cloud infrastructure.',
      cta: 'Book Free Consultancy'
    },
    services: {
      title: 'Problems We Solve',
      description: 'We identify bottlenecks hindering your growth and apply engineering solutions to eliminate them.',
      items: [
        { title: 'Losing leads due to delay?', description: 'Response time is the #1 factor for conversion. We automate the first contact in milliseconds.', icon: 'timer', borderColor: 'hover:border-primary/30', iconBg: 'bg-primary/10', iconColor: 'text-primary' },
        { title: 'Manual data entry?', description: 'Eliminate human error. We integrate your spreadsheets, ERPs, and CRMs into a seamless data flow.', icon: 'content_copy', borderColor: 'hover:border-accent-violet/30', iconBg: 'bg-accent-violet/10', iconColor: 'text-accent-violet' },
        { title: 'Useless website?', description: 'We turn your static page into an active sales tool that qualifies and routes leads automatically.', icon: 'language', borderColor: 'hover:border-primary/30', iconBg: 'bg-primary/10', iconColor: 'text-primary' }
      ]
    },
    solutionsPage: {
      title: 'Our Solutions',
      subtitle: 'Data architecture and intelligent automation for companies that do not accept "manual".',
      categories: [
        {
          title: 'Sales & Growth',
          subtitle: 'Acquisition Machine',
          description: 'Eliminate the gap between the lead and the salesperson.',
          items: ['Auto lead qualification', 'Intelligent distribution (Round Robin)', 'Personalized WhatsApp/Email follow-up', 'Automatic CRM Sync'],
          icon: 'trending_up'
        },
        {
          title: 'Ops & Data',
          subtitle: 'Operational Efficiency',
          description: 'Connect systems that do not talk to each other.',
          items: ['ERP <-> E-commerce Integration', 'OCR/AI Data Extraction', 'Automated reporting', 'Multi-cloud synchronization'],
          icon: 'hub'
        },
        {
          title: 'Customer Experience',
          subtitle: '24/7 Support',
          description: 'Instant responses with context.',
          items: ['Custom AI Agents (LLMs)', 'Critical ticket automation', 'Automated NPS & Surveys', 'Intelligent customer portal'],
          icon: 'support_agent'
        }
      ],
      ctaTitle: 'Does your company need a custom solution?',
      ctaButton: 'Design my Project'
    },
    expertise: {
      badge: 'Commitment to Excellence',
      title: '10 years of financial sector expertise transformed into code and automation.',
      description: 'We are not just developers. We understand compliance, data security, and corporate urgency.',
      cta: 'Learn our story'
    },
    pricing: {
      title: 'Implementation Plans',
      description: 'Scalable solutions for every stage of your business.',
      plans: [
        { level: 'Level 1: MVP', title: '$ 150', description: '/implementation', features: ['Basic Lead Automation', 'Typeform/WhatsApp Integration', '1 n8n Workflow Setup'], cta: 'Select' },
        { level: 'Level 2: Ecosystem', title: 'On request', features: ['Custom Ecosystem', 'CRM Integration (Salesforce/Odoo)', 'Real-time Dashboards', 'Priority Support'], cta: 'Start Now', featured: true },
        { level: 'Level 3: Enterprise', title: 'Scalable', features: ['Dedicated VPS Infrastructure', 'Python/Linux Development', '99.9% Uptime SLA'], cta: 'Consult' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Clear your doubts about our workflow and technology.',
      items: [
        { id: 'faq-1', question: 'How does initial setup work?', answer: 'We start with a diagnostic meeting to map your manual processes. Then, we design the automation flow and implement it in a sandbox before final deployment.' },
        { id: 'faq-2', question: 'What is n8n and why do you use it?', answer: 'n8n is a powerful open-source workflow automation tool. We chose it for technical flexibility, security, and because it does not charge per task execution.' },
        { id: 'faq-3', question: 'Will my data be secure on my own server?', answer: 'Yes. Unlike traditional SaaS platforms, we install your infrastructure on a private server (VPS), ensuring full data sovereignty.' },
        { id: 'faq-4', question: 'Do you offer post-implementation support?', answer: 'Yes, we offer maintenance and support plans to ensure your automations run 24/7 without interruption.' }
      ]
    },
    footer: { description: 'Experts in B2B process automation and high-performance VPS hosting.', company: 'Company', legal: 'Legal', services: 'Services', about: 'About us', careers: 'Careers', contact: 'Contact', privacy: 'Privacy', terms: 'Terms', hosting: 'VPS Hosting' },
    contactModal: { title: 'Redeon.cloud', description: 'Fill in the details below and we will get in touch.', name: 'Full Name', email: 'Business Email', company: 'Company', challenge: 'What is your challenge?', placeholderName: 'Your name', placeholderEmail: 'example@company.com', placeholderCompany: 'Company name', placeholderMessage: 'Briefly describe what you want to automate...', submit: 'Submit Request', successTitle: 'We received your contact!', successDescription: 'Our team will reach out within 24 business hours.', errorTitle: 'Submission error', errorDescription: 'Something went wrong. Please try again or contact us via WhatsApp.', close: 'Close' },
    whatsappMessage: 'Hi! I would like to learn more about Redeon\'s automation solutions.',
    deploying: {
      badge: 'DEPLOYMENT IN PROGRESS',
      title: 'Preparing the digital space for',
      description: 'We are setting up a guiding and demonstrative environment that will serve as a basis for creating your custom project. In a few moments, your new environment will be ready to take off.',
      status: 'Status: Orchestrating environment',
      server: 'Server',
      tech: 'Technology',
      footer: 'You will receive a notification via WhatsApp and Email with your final URL.',
      projectLabel: 'your new web experience'
    }
  },
  es: {
    nav: { solutions: 'Soluciones', pricing: 'Precios', expertise: 'Experticia', start: 'Empezar Ahora', home: 'Inicio', about: 'Sobre Nosotros' },
    hero: {
      badge: 'Agencia de Automatización B2B',
      title: 'Recupera las',
      titleAccent: '10 horas semanales que la burocracia te roba.',
      description: 'Transformamos su operación manual en sistemas de alto rendimiento con n8n, Python e infraestructura cloud escalable.',
      cta: 'Agendar Consultoría Gratis'
    },
    services: {
      title: 'Problemas que Resolvemos',
      description: 'Identificamos los cuellos de botella que frenan su crecimiento y aplicamos soluciones de ingeniería para eliminarlos.',
      items: [
        { title: '¿Pierde leads por demora?', description: 'El tiempo de respuesta es el factor #1 para la conversión. Automatizamos el primer contacto en milisegundos.', icon: 'timer', borderColor: 'hover:border-primary/30', iconBg: 'bg-primary/10', iconColor: 'text-primary' },
        { title: '¿Copia datos manuales?', description: 'Elimine el error humano. Integramos sus hojas de cálculo, ERP y CRM en un flujo de datos continuo.', icon: 'content_copy', borderColor: 'hover:border-accent-violet/30', iconBg: 'bg-accent-violet/10', iconColor: 'text-accent-violet' },
        { title: '¿Su sitio actual es inútil?', description: 'Convertimos su página estática en una herramienta activa de ventas que califica leads automáticamente.', icon: 'language', borderColor: 'hover:border-primary/30', iconBg: 'bg-primary/10', iconColor: 'text-primary' }
      ]
    },
    solutionsPage: {
      title: 'Nuestras Soluciones',
      subtitle: 'Arquitectura de datos y automatización inteligente para empresas que no aceptan lo "manual".',
      categories: [
        {
          title: 'Ventas & Growth',
          subtitle: 'Máquina de Adquisición',
          description: 'Elimine la brecha entre el lead y el vendedor.',
          items: ['Calificación automática de leads', 'Distribución inteligente (Round Robin)', 'Follow-up personalizado via WhatsApp/Email', 'Sincronización automática con CRM'],
          icon: 'trending_up'
        },
        {
          title: 'Ops & Datos',
          subtitle: 'Eficiencia Operativa',
          description: 'Conecte sistemas que no se hablan.',
          items: ['Integración ERP <-> E-commerce', 'Extracción de datos vía OCR/IA', 'Informes automatizados', 'Sincronización multi-cloud'],
          icon: 'hub'
        },
        {
          title: 'Customer Experience',
          subtitle: 'Soporte 24/7',
          description: 'Respuestas instantâneas con contexto.',
          items: ['Agentes de IA (LLMs) personalizados', 'Automatización de tickets críticos', 'NPS y encuestas automatizadas', 'Portal del cliente inteligente'],
          icon: 'support_agent'
        }
      ],
      ctaTitle: '¿Su empresa necesita una solución a medida?',
      ctaButton: 'Diseñar mi Proyecto'
    },
    expertise: {
      badge: 'Compromiso con la Excelencia',
      title: '10 años de experiencia en el sector financiero transformados en código y automatización.',
      description: 'No somos solo desarrolladores. Entendemos de cumplimiento, seguridad de datos y urgencia corporativa.',
      cta: 'Conozca nuestra historia'
    },
    pricing: {
      title: 'Planes de Implementación',
      description: 'Soluciones escalables para cada etapa de su negocio.',
      plans: [
        { level: 'Nivel 1: MVP', title: '€ 140', description: '/implementación', features: ['Automatización Básica de Leads', 'Integración Typeform/WhatsApp', 'Configuración de 1 Workflow n8n'], cta: 'Seleccionar' },
        { level: 'Nivel 2: Ecosystem', title: 'Bajo consulta', features: ['Ecosistema Personalizado', 'Integración con CRM (Salesforce/Odoo)', 'Paneles en Tiempo Real', 'Soporte Prioritario'], cta: 'Empezar Ahora', featured: true },
        { level: 'Nivel 3: Enterprise', title: 'Escalable', features: ['Infraestructura VPS Dedicada', 'Desarrollo en Python/Linux', 'SLA de Disponibilidad 99.9%'], cta: 'Consultar' }
      ]
    },
    faq: {
      title: 'Preguntas Frequentes',
      description: 'Resuelva sus dudas sobre nuestro modelo de trabajo y tecnología.',
      items: [
        { id: 'faq-1', question: '¿Cómo funciona la configuración inicial?', answer: 'Comenzamos con una reunión de diagnóstico para mapear sus procesos manuales. Luego, diseñamos el flujo e implementamos en un entorno de pruebas.' },
        { id: 'faq-2', question: '¿Qué es n8n y por qué lo usan?', answer: 'n8n es una potente herramienta de automatización open-source. La elegimos por su flexibilidad técnica, seguridad y porque no cobra por ejecución de tareas.' },
        { id: 'faq-3', question: '¿Mis datos estarán seguros en mi propio servidor?', answer: 'Sí. A diferencia de las plataformas SaaS tradicionales, instalamos su infraestructura en un servidor privado (VPS), garantizando soberanía sobre los datos.' },
        { id: 'faq-4', question: '¿Ofrecen soporte post-implementación?', answer: 'Sí, ofrecemos planes de mantenimiento para asegurar que sus automatizações funcionen 24/7.' }
      ]
    },
    footer: { description: 'Expertos en automatización de procesos B2B y hosting VPS de alto rendimiento.', company: 'Empresa', legal: 'Legal', services: 'Servicios', about: 'Sobre nosotros', careers: 'Carreras', contact: 'Contacto', privacy: 'Privacidad', terms: 'Términos', hosting: 'VPS Hosting' },
    contactModal: { title: 'Redeon.cloud', description: 'Complete los datos a continuación y nos pondremos en contacto.', name: 'Nombre Completo', email: 'Correo Corporativo', company: 'Empresa', challenge: '¿Cuál es su desafío?', placeholderName: 'Su nombre', placeholderEmail: 'ejemplo@empresa.com', placeholderCompany: 'Nombre de su empresa', placeholderMessage: 'Describa brevemente qué desea automatizar...', submit: 'Enviar Solicitud', successTitle: '¡Recibimos su contacto!', successDescription: 'Nuestro equipo se pondrá en contacto en menos de 24 horas hábiles.', errorTitle: 'Error al enviar', errorDescription: 'Algo salió mal. Intente de nuevo o contáctenos vía WhatsApp.', close: 'Cerrar' },
    whatsappMessage: '¡Hola! Me gustaría saber más sobre las soluciones de automatización de Redeon.',
    deploying: {
      badge: 'DESPLIEGUE EN CURSO',
      title: 'Preparando el espacio digital para',
      description: 'Estamos configurando un entorno demostrativo y orientativo que servirá como base para crear tu proyecto a medida. En unos instantes, tu nuevo entorno estará listo para despegar.',
      status: 'Estado: Orquestando entorno',
      server: 'Server',
      tech: 'Tecnología',
      footer: 'Recibirás una notificación por WhatsApp e Email con tu URL final.',
      projectLabel: 'tu nueva experiencia web'
    }
  }
};
