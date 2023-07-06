import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import {
    StyleFiGlobe,
    LanguageTitle,
    LanguageItem,
    LanguageName,
} from './LanguageSelection.styled';
import styles from './LanguageSelection.module.css';

const URL = `https://api.themoviedb.org/3/`;
const KEY = '4d8a40deb29f91051ef07c892ab10f05';

const LanguageSelection = () => {
    const [isListOpen, setIsListOpen] = useState(false);
    const [languages, setLanguages] = useState([]);
    const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

    const handleToggleList = () => {
        setIsListOpen(!isListOpen);
    };

    const handleLanguageItemClick = language => {
        setSelectedLanguage(language);
        setIsListOpen(false);
        localStorage.setItem('selectedLanguage', JSON.stringify(language));
    };

    useEffect(() => {
        const fetchAllLanguages = () => {
            axios
                .get(`${URL}/configuration/languages?api_key=${KEY}`)
                .then(response => {
                    const allLanguages = response.data;
                    const languagesToDisplay = [
                        'ru',
                        'uk',
                        'en',
                        'de',
                        'fr',
                        'no',
                        'fi',
                        'pl',
                        'cs',
                        'es',
                        'ja',
                        'pt',
                        'zh',
                        'he',
                        'ar',
                        'bg',
                        'tr',
                        'ko',
                        'it',
                    ];
                    const filteredLanguages = allLanguages.filter(lang =>
                        languagesToDisplay.includes(lang.iso_639_1)
                    );
                    setLanguages(filteredLanguages);
                    const savedLanguage = JSON.parse(
                        localStorage.getItem('selectedLanguage')
                    );
                    setSelectedLanguage(
                        savedLanguage ||
                        filteredLanguages.find(lang => lang.iso_639_1 === 'en')
                    );
                })
                .catch(error => console.log(error));
        };
        fetchAllLanguages();
    }, [setSelectedLanguage]);

    return (
        <>
            <StyleFiGlobe onClick={handleToggleList} size={20} />
            <ul className={isListOpen ? [styles.list, styles.active].join(' ') : [styles.list]}>
                <LanguageTitle>Language</LanguageTitle>
                {languages.map(language => (
                    <LanguageItem
                        key={language.iso_639_1}
                        onClick={() => handleLanguageItemClick(language)}
                        active={language.iso_639_1 === selectedLanguage.iso_639_1}
                    >
                        <LanguageName>{language.english_name}</LanguageName>
                    </LanguageItem>
                ))}
            </ul>
        </>
    );
};

export default LanguageSelection;