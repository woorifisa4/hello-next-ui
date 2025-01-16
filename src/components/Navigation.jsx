// src/components/Navigation.jsx

import { Link } from 'react-router-dom';
import ComponentsDropdownMenu from './ComponentsDropdownMenu';

export const Navigation = () => {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
      <Link to="/" className="text-2xl font-bold text-gray-900">
        Brand
      </Link>
      <div className="flex items-center gap-8">
        <ComponentsDropdownMenu />
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Pricing
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          About
        </a>
      </div>
    </nav>
  );
};
