import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import './Text.css';

const phrases = {
  english: 'Hello',
  spanish: 'Hola',
  french: 'Bonjour',
  german: 'Hallo',
  chinese: '你好'
};

const Text = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="text">
      {phrases[language]}
    </div>
  );
};

export default Text;