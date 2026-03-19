import React, { createContext, useContext, useState } from 'react';

const PlannerContext = createContext();

export const PlannerProvider = ({ children }) => {
  const [generatedPlanner, setGeneratedPlanner] = useState(null);
  const [language, setLanguage] = useState('es');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <PlannerContext.Provider value={{
      generatedPlanner,
      setGeneratedPlanner,
      language,
      setLanguage,
      darkMode,
      toggleDarkMode
    }}>
      {children}
    </PlannerContext.Provider>
  );
};

export const usePlanner = () => {
  const context = useContext(PlannerContext);
  if (!context) {
    throw new Error('usePlanner must be used within PlannerProvider');
  }
  return context;
};
