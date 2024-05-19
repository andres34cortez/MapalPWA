import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for the context
type Language = 'ESP' | 'ENG';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}

// Create the context
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Create a provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ESP');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'ESP' ? 'ENG' : 'ESP'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
