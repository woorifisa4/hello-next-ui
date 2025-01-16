import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { NextUIProvider } from '@nextui-org/react';
import LandingPage from '@/pages/LandingPage';
import PreviewCheckboxPage from '@/pages/PreviewCheckboxPage';
import PreviewBadgePage from '@/pages/PreviewBadgePage';
import PreviewSpinnerPage from '@/pages/PreviewSpinnerPage.jsx';
import PreviewSelectPage from '@/pages/PreviewSelectPage';

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/components/checkbox" element={<PreviewCheckboxPage />} />
            <Route path="/badge" element={<PreviewBadgePage />} />
            <Route path="/spinner" element={<PreviewSpinnerPage />} />
            <Route path="/select" element={<PreviewSelectPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NextUIProvider>
  );
};

export default App;