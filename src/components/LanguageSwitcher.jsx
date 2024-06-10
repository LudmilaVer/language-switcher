import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const languages = [
  { code: 'english', label: 'English' },
  { code: 'spanish', label: 'Spanish' },
  { code: 'french', label: 'French' },
  { code: 'german', label: 'German' },
  { code: 'chinese', label: 'Chinese' }
];

const LanguageSwitcher = () => {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
