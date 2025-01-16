import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const ComponentsDropdownMenu = () => {
  const navigate = useNavigate();

  const components = [
    { key: 'select', label: 'Select', path: '/components/select' },
    { key: 'spinner', label: 'Spinner', path: '/components/spinner' },
    { key: 'checkbox', label: 'Checkbox', path: '/components/checkbox' },
    { key: 'badge', label: 'Badge', path: '/components/badge' },
  ];

  const handleSelect = (path) => {
    navigate(path);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <span className="cursor-pointer text-gray-600 hover:text-gray-900">
          Components
        </span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Components navigation" className="w-[200px]">
        {components.map((item) => (
          <DropdownItem
            key={item.key}
            className="py-2"
            onClick={() => handleSelect(item.path)}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ComponentsDropdownMenu;
