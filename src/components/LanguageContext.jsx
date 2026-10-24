"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { getLanguage, setLanguage } from "@/app/lib/localStorage";

const LanguageContext = createContext(null);

const subscribe = (callback) => {
  window.addEventListener("storage", callback);
  window.addEventListener("languageChange", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("languageChange", callback);
  };
};

export const LanguageProvider = ({ children }) => {
  const language = useSyncExternalStore(subscribe, getLanguage, () => "en");

  const setLang = (newLang) => {
    setLanguage(newLang);
    window.dispatchEvent(new Event("languageChange"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
