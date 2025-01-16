import React from 'react';
import { Input } from '@nextui-org/react';
import TooltipHelper from '@/components/TooltipHelper';

const InputControl = ({ label, tooltip, type, value, minValue, onChange }) => {
  const handleChange = (e) => {
    const newValue = Math.max(minValue, parseInt(e.target.value) || minValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        label={label}
        type={type}
        value={value.toString()}
        onChange={handleChange}
      />
      <TooltipHelper message={tooltip} />
    </div>
  );
};

export default InputControl;
