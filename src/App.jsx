// src/App.jsx

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { NextUIProvider } from '@nextui-org/react';
import LandingPage from '@/pages/LandingPage';
import CheckboxPreview from '@/pages/CheckboxPreview';
import SelectPreview from '@/pages/SelectPreview';

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/components/checkbox" element={<CheckboxPreview />} />
            <Route path="/components/select" element={<SelectPreview />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NextUIProvider>
  );
};

export default App;
