import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import TooltipHelper from '@/components/TooltipHelper';

const SelectControl = ({ label, tooltip, options, selectedKey, onChange }) => (
  <div className="flex items-center gap-2">
    <Select
      label={label}
      selectedKeys={[selectedKey]}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
    <TooltipHelper message={tooltip} />
  </div>
);

export default SelectControl;
