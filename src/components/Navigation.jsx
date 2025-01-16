import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { ChevronDown } from 'lucide-react';

export const Navigation = () => {
  const components = [
    { name: 'Pagination', path: '/pagination' },
    { name: 'Badge', path: '/badge' },
    { name: 'Spinner', path: '/spinner' },
    { name: 'Select', path: '/select' },
  ];

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between border-b p-6">
      <Link to="/" className="text-2xl font-bold text-gray-900">
        NextUI Practice
      </Link>

      <div className="flex items-center gap-6">
        {/* pc 화면면 */}
        <div className="hidden items-center gap-4 md:flex">
          {components.map((component) => (
            <Link
              key={component.path}
              to={component.path}
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              {component.name}
            </Link>
          ))}
        </div>

        {/* 모바일 화면 */}
        <div className="md:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                endContent={<ChevronDown className="h-4 w-4" />}
              >
                Components
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Component navigation">
              {components.map((component) => (
                <DropdownItem key={component.path}>
                  <Link
                    to={component.path}
                    className="block w-full text-gray-600"
                  >
                    {component.name}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
