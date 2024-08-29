"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import enTranslations from "../languages/en-us.json";
import ptTranslations from "../languages/pt-br.json";

type LanguageContextType = {
  language: string;
  translations: typeof enTranslations;
  toggleLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(enTranslations);

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    setTranslations(lang === "en" ? enTranslations : ptTranslations);
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
