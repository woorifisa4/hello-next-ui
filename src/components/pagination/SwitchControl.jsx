import React from 'react';
import { Switch } from '@nextui-org/react';
import TooltipHelper from '../TooltipHelper';

const SwitchControl = ({
  label,
  tooltip,
  isSelected,
  onChange,
  isDisabled = false,
}) => (
  <div className="flex items-center gap-2">
    <Switch
      isSelected={isSelected}
      onChange={(e) => onChange(e.target.checked)}
      isDisabled={isDisabled}
    >
      {label} <TooltipHelper message={tooltip} />
    </Switch>
  </div>
);

export default SwitchControl;
