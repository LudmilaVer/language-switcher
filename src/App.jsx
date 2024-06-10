import React from 'react';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import Text from './components/Text';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LanguageSwitcher />
        <Text />
      </div>
    </LanguageProvider>
  );
}

export default App;