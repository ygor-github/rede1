
import { Language, TranslationSchema } from './types';

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  pt: {
    nav: { solutions: 'Soluções', pricing: 'Planos', expertise: 'Expertise', start: 'Começar Agora', home: 'Início', about: 'Sobre Nós' },
    hero: {
      badge: 'Agência de Automação B2B',
      title: 'Pare de ser o',
      titleAccent: 'gargalo da sua própria empresa.',
      description: 'Se o seu negócio depende de copiar e colar dados em planilhas, você está perdendo dinheiro e vendas. Automatizamos sua operação para que você pare de apagar incêndios e comece a escalar de verdade.',
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
      badge: 'Compromisso com a Eficiência',
      title: 'Anos de expertise corporativa transformados em automação.',
      description: 'Não somos apenas integradores. Entendemos de processos, gargalos operacionais e a urgência do mercado atual.',
      cta: 'Conheça nossa história'
    },
    pricing: {
      title: 'Planos de Implementação',
      description: 'Soluções escaláveis para cada fase do seu negócio.',
      plans: [
        { level: 'Level 1: Essencial', title: 'R$ 800', description: '/implementação', features: ['Automação de Captura Básica', 'Integração CRM/WhatsApp', 'Setup de Fluxo Principal'], cta: 'Selecionar' },
        { level: 'Level 2: Ecossistema', title: 'Sob consulta', features: ['Ecossistema Customizado', 'Múltiplas Integrações', 'Dashboards de Dados', 'Suporte Prioritário'], cta: 'Começar Agora', featured: true },
        { level: 'Level 3: Enterprise', title: 'Escalável', features: ['Arquitetura Complexa', 'Automações Avançadas', 'SLA de Disponibilidade 99.9%'], cta: 'Consultar' }
      ]
    },
    faq: {
      title: 'Perguntas Frequentes',
      description: 'Tire suas dúvidas sobre nosso modelo de trabalho e soluções.',
      items: [
        { id: 'faq-1', question: 'Como funciona o setup inicial?', answer: 'Iniciamos com uma reunião de diagnóstico para mapear seus processos manuais. Em seguida, desenhamos o fluxo de automação e realizamos a implementação e testes antes da entrega final.' },
        { id: 'faq-2', question: 'Quais ferramentas vocês utilizam?', answer: 'Utilizamos uma variedade de ferramentas líderes de mercado e open-source dependendo do desafio, focando sempre na solução mais eficiente, segura e com melhor custo-benefício para a sua empresa.' },
        { id: 'faq-3', question: 'Meus dados estarão seguros?', answer: 'Sim. Adotamos as melhores práticas de segurança e arquitetura de dados, garantindo soberania e adequação às normativas de proteção (LGPD), utilizando ambientes isolados e seguros.' },
        { id: 'faq-4', question: 'Vocês oferecem suporte após a implementação?', answer: 'Sim, oferecemos planos de manutenção e suporte contínuo para garantir que suas automações funcionem 24/7 sem interrupções, além de realizar ajustes finos conforme seu negócio evolui.' }
      ]
    },
    footer: { description: 'Especialistas em automação de processos B2B e integração de sistemas.', company: 'Empresa', legal: 'Legal', services: 'Serviços', about: 'Sobre nós', careers: 'Carreiras', contact: 'Contato', privacy: 'Privacidade', terms: 'Termos', hosting: 'Previsualização' },
    contactModal: { title: 'Redeon.cloud', description: 'Preencha os dados abaixo e entraremos em contato.', name: 'Nome Completo', email: 'Email Corporativo', company: 'Empresa', challenge: 'Qual seu desafio?', placeholderName: 'Seu nome', placeholderEmail: 'exemplo@empresa.com', placeholderCompany: 'Nome da sua empresa', placeholderMessage: 'Descreva brevemente o que deseja automatizar...', submit: 'Enviar Solicitação', successTitle: 'Recebemos seu contato!', successDescription: 'Nossa equipe entrará em contato em até 24 horas úteis.', errorTitle: 'Erro ao enviar', errorDescription: 'Ocorreu um problema. Tente novamente ou entre em contato via WhatsApp.', close: 'Fechar' },
    whatsappMessage: 'Olá! Gostaria de saber mais sobre as soluções de automação da Redeon.',
    deploying: {
      badge: 'PREVISUALIZAÇÃO DE PROJETO',
      title: 'Bem-vindo ao ambiente de',
      description: 'Este é um espaço dedicado para acompanhamento e demonstração do seu projeto. Aqui validamos as soluções construídas antes da entrega final.',
      status: 'Status: Ambiente ativo',
      server: 'Solução',
      tech: 'Processos',
      footer: 'Você pode compartilhar este link com sua equipe para testes.',
      projectLabel: 'validação e testes'
    }
  },
  en: {
    nav: { solutions: 'Solutions', pricing: 'Pricing', expertise: 'Expertise', start: 'Start Now', home: 'Home', about: 'About Us' },
    hero: {
      badge: 'B2B Automation Agency',
      title: 'Stop being the',
      titleAccent: 'bottleneck of your own company.',
      description: 'If your business relies on copying and pasting data into spreadsheets, you are losing money and sales. We automate your operations so you can stop putting out fires and start actually scaling.',
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
      badge: 'Commitment to Efficiency',
      title: 'Years of corporate expertise transformed into automation.',
      description: 'We are not just integrators. We understand processes, operational bottlenecks, and the urgency of the current market.',
      cta: 'Learn our story'
    },
    pricing: {
      title: 'Implementation Plans',
      description: 'Scalable solutions for every stage of your business.',
      plans: [
        { level: 'Level 1: Essential', title: '$ 150', description: '/implementation', features: ['Basic Lead Automation', 'CRM/WhatsApp Integration', 'Main Flow Setup'], cta: 'Select' },
        { level: 'Level 2: Ecosystem', title: 'On request', features: ['Custom Ecosystem', 'Multiple Integrations', 'Data Dashboards', 'Priority Support'], cta: 'Start Now', featured: true },
        { level: 'Level 3: Enterprise', title: 'Scalable', features: ['Complex Architecture', 'Advanced Automations', '99.9% Uptime SLA'], cta: 'Consult' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Clear your doubts about our workflow and solutions.',
      items: [
        { id: 'faq-1', question: 'How does initial setup work?', answer: 'We start with a diagnostic meeting to map your manual processes. Then, we design the automation flow and implement it, testing everything before final delivery.' },
        { id: 'faq-2', question: 'What tools do you use?', answer: 'We use a variety of market-leading and open-source tools depending on the challenge, always focusing on the most efficient, secure, and cost-effective solution for your company.' },
        { id: 'faq-3', question: 'Will my data be secure?', answer: 'Yes. We adopt the best data security and architecture practices, ensuring sovereignty and compliance with data protection regulations, using isolated and secure environments.' },
        { id: 'faq-4', question: 'Do you offer post-implementation support?', answer: 'Yes, we offer maintenance and continuous support plans to ensure your automations run 24/7 without interruption, and we make fine adjustments as your business evolves.' }
      ]
    },
    footer: { description: 'Experts in B2B process automation and systems integration.', company: 'Company', legal: 'Legal', services: 'Services', about: 'About us', careers: 'Careers', contact: 'Contact', privacy: 'Privacy', terms: 'Terms', hosting: 'Preview' },
    contactModal: { title: 'Redeon.cloud', description: 'Fill in the details below and we will get in touch.', name: 'Full Name', email: 'Business Email', company: 'Company', challenge: 'What is your challenge?', placeholderName: 'Your name', placeholderEmail: 'example@company.com', placeholderCompany: 'Company name', placeholderMessage: 'Briefly describe what you want to automate...', submit: 'Submit Request', successTitle: 'We received your contact!', successDescription: 'Our team will reach out within 24 business hours.', errorTitle: 'Submission error', errorDescription: 'Something went wrong. Please try again or contact us via WhatsApp.', close: 'Close' },
    whatsappMessage: 'Hi! I would like to learn more about Redeon\'s automation solutions.',
    deploying: {
      badge: 'PROJECT PREVIEW',
      title: 'Welcome to the environment for',
      description: 'This is a dedicated space for monitoring and demonstrating your project. Here we validate the built solutions before final delivery.',
      status: 'Status: Active environment',
      server: 'Solution',
      tech: 'Processes',
      footer: 'You can share this link with your team for testing.',
      projectLabel: 'validation and testing'
    }
  },
  es: {
    nav: { solutions: 'Soluciones', pricing: 'Planes', expertise: 'Experticia', start: 'Empezar Ahora', home: 'Inicio', about: 'Sobre Nosotros' },
    hero: {
      badge: 'Agencia de Automatización B2B',
      title: 'Deja de ser el',
      titleAccent: 'cuello de botella de tu propia empresa.',
      description: 'Si tu negocio depende de copiar y pegar datos en hojas de cálculo, estás perdiendo dinero y ventas. Automatizamos tu operación para que dejes de apagar incendios y empieces a escalar de verdad.',
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
      badge: 'Compromiso con la Eficiencia',
      title: 'Años de experiencia corporativa transformados en automatización.',
      description: 'No somos solo integradores. Entendemos de procesos, cuellos de botella y la urgencia del mercado actual.',
      cta: 'Conozca nuestra historia'
    },
    pricing: {
      title: 'Planes de Implementación',
      description: 'Soluciones escalables para cada etapa de su negocio.',
      plans: [
        { level: 'Nivel 1: Esencial', title: '€ 140', description: '/implementación', features: ['Automatización Básica de Leads', 'Integración CRM/WhatsApp', 'Configuración de Flujo Principal'], cta: 'Seleccionar' },
        { level: 'Nivel 2: Ecosistema', title: 'Bajo consulta', features: ['Ecosistema Personalizado', 'Múltiples Integraciones', 'Paneles de Datos', 'Soporte Prioritario'], cta: 'Empezar Ahora', featured: true },
        { level: 'Nivel 3: Enterprise', title: 'Escalable', features: ['Arquitectura Compleja', 'Automatizaciones Avanzadas', 'SLA de Disponibilidad 99.9%'], cta: 'Consultar' }
      ]
    },
    faq: {
      title: 'Preguntas Frecuentes',
      description: 'Resuelva sus dudas sobre nuestro modelo de trabajo y soluciones.',
      items: [
        { id: 'faq-1', question: '¿Cómo funciona la configuración inicial?', answer: 'Comenzamos con una reunión de diagnóstico para mapear sus procesos manuales. Luego, diseñamos el flujo y realizamos la implementación, probando todo antes de la entrega final.' },
        { id: 'faq-2', question: '¿Qué herramientas utilizan?', answer: 'Utilizamos una variedad de herramientas líderes en el mercado y de código abierto según el desafío, enfocándonos siempre en la solución más eficiente, segura y rentable para su empresa.' },
        { id: 'faq-3', question: '¿Mis datos estarán seguros?', answer: 'Sí. Adoptamos las mejores prácticas de seguridad y arquitectura de datos, garantizando la soberanía y el cumplimiento normativo mediante entornos aislados y seguros.' },
        { id: 'faq-4', question: '¿Ofrecen soporte post-implementación?', answer: 'Sí, ofrecemos planes de mantenimiento y soporte continuo para asegurar que sus automatizaciones funcionen 24/7 sin interrupciones, haciendo ajustes a medida que su negocio evoluciona.' }
      ]
    },
    footer: { description: 'Expertos en automatización de procesos B2B e integración de sistemas.', company: 'Empresa', legal: 'Legal', services: 'Servicios', about: 'Sobre nosotros', careers: 'Carreras', contact: 'Contacto', privacy: 'Privacidad', terms: 'Términos', hosting: 'Previsualización' },
    contactModal: { title: 'Redeon.cloud', description: 'Complete los datos a continuación y nos pondremos en contacto.', name: 'Nombre Completo', email: 'Correo Corporativo', company: 'Empresa', challenge: '¿Cuál es su desafío?', placeholderName: 'Su nombre', placeholderEmail: 'ejemplo@empresa.com', placeholderCompany: 'Nombre de su empresa', placeholderMessage: 'Describa brevemente qué desea automatizar...', submit: 'Enviar Solicitud', successTitle: '¡Recibimos su contacto!', successDescription: 'Nuestro equipo se pondrá en contacto en menos de 24 horas hábiles.', errorTitle: 'Error al enviar', errorDescription: 'Algo salió mal. Intente de nuevo o contáctenos vía WhatsApp.', close: 'Cerrar' },
    whatsappMessage: '¡Hola! Me gustaría saber más sobre las soluciones de automatización de Redeon.',
    deploying: {
      badge: 'PREVISUALIZACIÓN DE PROYECTO',
      title: 'Bienvenido al entorno de',
      description: 'Este es un espacio dedicado para el seguimiento y demostración de su proyecto. Aquí validamos las soluciones construidas antes de la entrega final.',
      status: 'Estado: Entorno activo',
      server: 'Solución',
      tech: 'Procesos',
      footer: 'Puede compartir este enlace con su equipo para pruebas.',
      projectLabel: 'validación y pruebas'
    }
  }
};
