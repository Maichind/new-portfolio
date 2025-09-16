"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "es";

interface LangContextProps {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LangContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");

    useEffect(() => {
        // Detecta idioma del navegador la primera vez
        const userLang = navigator.language.slice(0, 2);
        if (userLang === "es") setLang("es");
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
    return context;
}
