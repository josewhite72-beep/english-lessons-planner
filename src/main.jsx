import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { PlannerProvider } from './context/PlannerContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlannerProvider>
        <App />
        <Toaster position="top-right" />
      </PlannerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
