import React from 'react';
import InputControl from '@/components/InputControl';
import SelectControl from '@/components/SelectControl';
import SwitchControl from '@/components/SwitchControl';

const PaginationControls = ({ props, onPropChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <InputControl
        label="Total Pages"
        tooltip="Total number of pages in the pagination.\nDefault: 1.\nAllowed values: 1 or more."
        type="number"
        value={props.total}
        minValue={1}
        onChange={(value) => onPropChange('total', value)}
      />
      <InputControl
        label="Initial Page"
        tooltip="The page to be displayed first.\nDefault: 1.\nAllowed values: 1 or more."
        type="number"
        value={props.initialPage}
        minValue={1}
        onChange={(value) => onPropChange('initialPage', value)}
      />
      <SelectControl
        label="Size"
        tooltip="Size of the pagination.\nDefault: 'md'.\nAllowed values: 'sm' (Small), 'md' (Medium), 'lg' (Large)."
        options={[
          { key: 'sm', label: 'Small' },
          { key: 'md', label: 'Medium' },
          { key: 'lg', label: 'Large' },
        ]}
        selectedKey={props.size}
        onChange={(value) => onPropChange('size', value)}
      />
      <SwitchControl
        label="Compact Mode"
        tooltip="Enables compact mode for pagination.\nDefault: false.\nAllowed values: true or false."
        isSelected={props.isCompact}
        onChange={(checked) => onPropChange('isCompact', checked)}
      />
      <SwitchControl
        label="Shadow"
        tooltip="Enables shadow effect for pagination.\nDefault: false.\nAllowed values: true or false."
        isSelected={props.showShadow}
        onChange={(checked) => onPropChange('showShadow', checked)}
      />
      <SwitchControl
        label="Loop"
        tooltip="Enables looping of pages in pagination.\nDefault: false.\nAllowed values: true or false."
        isSelected={props.loop}
        onChange={(checked) => onPropChange('loop', checked)}
      />
      <SwitchControl
        label="Control"
        tooltip="Enables looping of pages in pagination.\nDefault: false.\nAllowed values: true or false."
        isSelected={props.control}
        onChange={(checked) => onPropChange('control', checked)}
      />
      <SwitchControl
        label="Disabled"
        tooltip="Disables the pagination component.\nDefault: false.\nAllowed values: true or false."
        isSelected={props.isDisabled}
        onChange={(checked) => onPropChange('isDisabled', checked)}
      />
      <InputControl
        label="Siblings"
        tooltip="Number of sibling pages to show on each side of the current page.\nDefault: 1.\nAllowed values: 0 or more."
        type="number"
        value={props.siblings}
        minValue={0}
        onChange={(value) => onPropChange('siblings', value)}
      />
      <InputControl
        label="Boundaries"
        tooltip="Number of boundary pages to show at the beginning and end.\nDefault: 1.\nAllowed values: 0 or more."
        type="number"
        value={props.boundaries}
        minValue={0}
        onChange={(value) => onPropChange('boundaries', value)}
      />
    </div>
  );
};

export default PaginationControls;
