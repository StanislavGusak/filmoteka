import { createContext, useState } from "react";

const LanguageContext = createContext({
    selectedLanguage: 'en',
    setSelectedLanguage: () => {},
});

const LanguageProvider = ({children}) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={{selectedLanguage, setSelectedLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };