import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage && i18n.language !== storedLanguage) {
            i18n.changeLanguage(storedLanguage);
        }
    }, []); 

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        localStorage.setItem('language', langCode); 
    };

    const renderLanguageLink = (langCode, label) => (
        <a
            key={langCode}
            className={`cursor-pointer ${i18n.language === langCode ? 'text-slate-800 font-bold' : 'text-gray-500'}`}
            onClick={() => changeLanguage(langCode)}
            style={{
                pointerEvents: i18n.language === langCode ? 'none' : 'auto',
            }}
        >
            {label}
        </a>
    );

    return (
        <div className="font-light px-4 text-center">
            {renderLanguageLink('id', 'ID')}
            {' | '}
            {renderLanguageLink('en', 'EN')}
        </div>
    );
};

export default LanguageSwitcher;
