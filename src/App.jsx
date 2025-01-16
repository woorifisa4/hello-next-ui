// src/App.jsx

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import LandingPage from '@/pages/LandingPage';
import CheckboxPreview from '@/pages/CheckboxPreview';
import SelectPreview from '@/pages/SelectPreview';

const App = () => {
  return (
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
  );
};

export default App;
