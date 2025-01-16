import React from 'react';
import TooltipHelper from './TooltipHelper';

const TextInput = ({ label, value, onChange, tooltip }) => (
  <div className="flex flex-col gap-1">
    <label className="pb-1 text-xl text-default-700">
      {label}
      {tooltip && <TooltipHelper message={tooltip} />}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 w-full rounded-lg border-2 border-default-200 bg-default-100 px-3 text-xl focus:border-primary focus:outline-none"
    />
  </div>
);

export default TextInput;
