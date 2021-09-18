import React, { useContext, useState, useEffect } from "react";
import Constants from "../Utils/Constants";

const LangContext = React.createContext();

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }) {
    const [selectedLang, setSelectedLang] = useState({});
    const [languageMap, setLanguageMap] = useState({});



    const value = {
        selectedLang,
        languageMap
    };

    return (
        <LangContext.Provider value={value}>
        {children}
        </LangContext.Provider>
    );
}
