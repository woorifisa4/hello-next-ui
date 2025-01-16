// src/components/Navigation.jsx

import { Link } from 'react-router-dom';
import ComponentsDropdownMenu from './ComponentsDropdownMenu';

export const Navigation = () => {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
      <Link to="/" className="text-2xl font-bold text-gray-900">
        Brand
      </Link>
      <div className="me-8 ml-auto flex items-center gap-8">
        <ComponentsDropdownMenu />
      </div>
    </nav>
  );
};
