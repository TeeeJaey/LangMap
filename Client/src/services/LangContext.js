import React, { useContext, useState, useEffect } from "react";
import Constants from "../Utils/Constants";

const LangContext = React.createContext();

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }) {
    const [languageMap, setLanguageMap] = useState({});

    const value = {
        languageMap
    };

    return (
        <LangContext.Provider value={value}>
        {children}
        </LangContext.Provider>
    );
}
