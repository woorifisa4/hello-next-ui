import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { NextUIProvider } from '@nextui-org/react';
import LandingPage from '@/pages/LandingPage';
import PaginationPreview from '@/pages/PaginationPreview';
import BadgePreview from '@/pages/BadgePreview';
import SpinnerPreview from '@/pages/SpinnerPreview.jsx';
import SelectPreview from '@/pages/SelectPreview.jsx';

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/pagination" element={<PaginationPreview />} />
            <Route path="/badge" element={<BadgePreview />} />
            <Route path="/spinner" element={<SpinnerPreview />} />
            <Route path="/select" element={<SelectPreview />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NextUIProvider>
  );
};

export default App;
