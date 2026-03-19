import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PreviewPage from './pages/PreviewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreviewPage />} />
      <Route path="/preview" element={<PreviewPage />} />
    </Routes>
  );
}

export default App;
