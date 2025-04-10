import React, { useContext, useEffect } from "react";
import enUS from "../../languages/en-us.json";
import ptBR from "../../languages/pt-br.json";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  "en-us": enUS,
  "pt-br": ptBR,
};

const LanguageTranslation = ({ id }) => {
  const { language } = useLanguage();
  let currentLanguage = language || "en-us";
  console.log(currentLanguage);

  const translation = translations[currentLanguage][id];

  return <>{translation || id}</>;
};

export default LanguageTranslation;
