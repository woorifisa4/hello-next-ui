import { Input, Switch, Select } from '@nextui-org/react';

const SpinnerControlPanel = ({ props, onPropChange, options }) => {
  return (
    <div className="w-full md:w-96">
      <h2 className="mb-6 text-2xl font-bold">Spinner Controls</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-default-700 text-sm">Size</label>
          <select
            className="w-full rounded-lg border border-gray-200 p-2"
            value={props.size}
            onChange={(e) => onPropChange('size', e.target.value)}
          >
            {options.size.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-default-700 text-sm">Color</label>
          <select
            className="w-full rounded-lg border border-gray-200 p-2"
            value={props.color}
            onChange={(e) => onPropChange('color', e.target.value)}
          >
            {options.color.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Label"
          value={props.label}
          onChange={(e) => onPropChange('label', e.target.value)}
        />

        <div className="flex flex-col gap-2">
          <label className="text-default-700 text-sm">Label Color</label>
          <select
            className="w-full rounded-lg border border-gray-200 p-2"
            value={props.labelColor}
            onChange={(e) => onPropChange('labelColor', e.target.value)}
          >
            {options.labelColor.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SpinnerControlPanel;
