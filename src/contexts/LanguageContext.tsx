'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.contact': 'Contact',
    
    // Home page
    'home.hero.title': 'Financial Advisory & Data Analytics',
    'home.hero.description': 'Financial Advisory Analyst specializing in M&A, Risk Modeling, and Data Analytics. Experience in Deloitte, Rothschild & Co, and more.',
    'home.hero.viewCV': 'View CV',
    'home.hero.contactMe': 'Contact Me',
    'home.featured.experience': 'Featured Experience',
    'home.featured.projects': 'Featured Projects',
    'home.cta.title': 'Let\'s Work Together',
    'home.cta.description': 'I\'m always interested in hearing about new opportunities and challenges.',
    'home.cta.button': 'Get in Touch',
    
    // About page
    'about.title': 'About Me',
    'about.intro': 'Hello! I\'m Alvaro Garris, a Financial Advisory Analyst passionate about data-driven decision making and strategic analysis.',
    'about.background': 'With experience at leading firms like Deloitte Monitor, Rothschild & Co, and Arcano Partners, I specialize in M&A transactions, risk modeling, and financial analytics. My work combines rigorous quantitative analysis with strategic thinking to deliver actionable insights.',
    'about.approach': 'I believe in leveraging technology and data to solve complex business problems. Whether it\'s building financial models, analyzing market trends, or developing data visualization tools, I\'m committed to excellence in every project.',
    'about.education': 'Education',
    'about.languages': 'Languages',
    'about.interests': 'Interests & Hobbies',
    
    // Experience page
    'experience.title': 'Professional Experience',
    'experience.description': 'My professional journey across leading financial advisory and consulting firms.',
    'experience.filter.all': 'All',
    'experience.filter.advisory': 'Advisory',
    'experience.filter.research': 'Research',
    'experience.filter.risk': 'Risk',
    'experience.filter.training': 'Training',
    'experience.card.present': 'Present',
    'experience.card.readMore': 'Read More',
    
    // Projects page
    'projects.title': 'Projects',
    'projects.description': 'A collection of my personal and professional projects showcasing my technical skills.',
    'projects.filter.all': 'All',
    'projects.filter.finance': 'Finance',
    'projects.filter.dataViz': 'Data Viz',
    'projects.filter.research': 'Research',
    'projects.card.viewDetails': 'View Details',
    'projects.card.viewGithub': 'View on GitHub',
    'projects.card.viewDemo': 'Live Demo',
    
    // Certificates page
    'certificates.title': 'Certificates & Credentials',
    'certificates.description': 'Professional certifications and credentials demonstrating my commitment to continuous learning.',
    'certificates.card.view': 'View Certificate',
    'certificates.card.download': 'Download PDF',
    
    // Contact page
    'contact.title': 'Get in Touch',
    'contact.description': 'Feel free to reach out for opportunities, collaborations, or just to connect.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.phone': 'Phone',
    'contact.availability': 'Availability',
    'contact.availability.status': 'Open to opportunities',
    'contact.social': 'Connect with me',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.built': 'Built with',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error loading content',
    'common.notFound': 'Content not found',
    'common.backHome': 'Back to Home',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.certificates': 'Certificados',
    'nav.contact': 'Contacto',
    
    // Home page
    'home.hero.title': 'Asesoramiento Financiero y Análisis de Datos',
    'home.hero.description': 'Analista de Asesoramiento Financiero especializado en M&A, Modelización de Riesgos y Análisis de Datos. Experiencia en Deloitte, Rothschild & Co y más.',
    'home.hero.viewCV': 'Ver CV',
    'home.hero.contactMe': 'Contáctame',
    'home.featured.experience': 'Experiencia Destacada',
    'home.featured.projects': 'Proyectos Destacados',
    'home.cta.title': 'Trabajemos Juntos',
    'home.cta.description': 'Siempre estoy interesado en conocer nuevas oportunidades y desafíos.',
    'home.cta.button': 'Contactar',
    
    // About page
    'about.title': 'Sobre Mí',
    'about.intro': '¡Hola! Soy Alvaro Garris, un Analista de Asesoramiento Financiero apasionado por la toma de decisiones basada en datos y el análisis estratégico.',
    'about.background': 'Con experiencia en firmas líderes como Deloitte Monitor, Rothschild & Co y Arcano Partners, me especializo en transacciones de M&A, modelización de riesgos y análisis financiero. Mi trabajo combina análisis cuantitativo riguroso con pensamiento estratégico para ofrecer insights accionables.',
    'about.approach': 'Creo en aprovechar la tecnología y los datos para resolver problemas empresariales complejos. Ya sea construyendo modelos financieros, analizando tendencias de mercado o desarrollando herramientas de visualización de datos, estoy comprometido con la excelencia en cada proyecto.',
    'about.education': 'Educación',
    'about.languages': 'Idiomas',
    'about.interests': 'Intereses y Hobbies',
    
    // Experience page
    'experience.title': 'Experiencia Profesional',
    'experience.description': 'Mi trayectoria profesional en firmas líderes de asesoramiento financiero y consultoría.',
    'experience.filter.all': 'Todas',
    'experience.filter.advisory': 'Asesoría',
    'experience.filter.research': 'Investigación',
    'experience.filter.risk': 'Riesgo',
    'experience.filter.training': 'Formación',
    'experience.card.present': 'Actualidad',
    'experience.card.readMore': 'Leer Más',
    
    // Projects page
    'projects.title': 'Proyectos',
    'projects.description': 'Una colección de mis proyectos personales y profesionales que muestran mis habilidades técnicas.',
    'projects.filter.all': 'Todos',
    'projects.filter.finance': 'Finanzas',
    'projects.filter.dataViz': 'Visualización',
    'projects.filter.research': 'Investigación',
    'projects.card.viewDetails': 'Ver Detalles',
    'projects.card.viewGithub': 'Ver en GitHub',
    'projects.card.viewDemo': 'Demo en Vivo',
    
    // Certificates page
    'certificates.title': 'Certificados y Credenciales',
    'certificates.description': 'Certificaciones profesionales y credenciales que demuestran mi compromiso con el aprendizaje continuo.',
    'certificates.card.view': 'Ver Certificado',
    'certificates.card.download': 'Descargar PDF',
    
    // Contact page
    'contact.title': 'Contacto',
    'contact.description': 'No dudes en contactarme para oportunidades, colaboraciones o simplemente para conectar.',
    'contact.email': 'Email',
    'contact.location': 'Ubicación',
    'contact.phone': 'Teléfono',
    'contact.availability': 'Disponibilidad',
    'contact.availability.status': 'Abierto a oportunidades',
    'contact.social': 'Conéctate conmigo',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.built': 'Creado con',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error al cargar contenido',
    'common.notFound': 'Contenido no encontrado',
    'common.backHome': 'Volver al Inicio',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
