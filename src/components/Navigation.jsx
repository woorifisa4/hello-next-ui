// src/components/Navigation.jsx

import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
      <Link to="/" className="text-2xl font-bold text-gray-900">
        Brand
      </Link>
      <div className="flex gap-8">
        <Link to="/components/checkbox" className="text-gray-600 hover:text-gray-900">
          Components
        </Link>
        <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
      </div>
    </nav>
  );
};