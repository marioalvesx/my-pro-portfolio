"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import enTranslations from "../languages/en-us.json";
import ptTranslations from "../languages/pt-br.json";
import { getLocalStorageItem } from "@/shared/local-storage";

type LanguageContextType = {
  language: string;
  translations: typeof enTranslations;
  toggleLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en-us");
  const [translations, setTranslations] = useState(enTranslations);

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    setTranslations(lang === "en-us" ? enTranslations : ptTranslations);
  };

  useEffect(() => {
    const lang = getLocalStorageItem("language");

    if (lang) {
      setLanguage(lang);
    }
  }, []);

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
