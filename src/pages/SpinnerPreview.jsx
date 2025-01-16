import { useState } from 'react';
import Preview from '@/components/Preview.jsx';
import { Input, Spinner } from '@nextui-org/react';
import ControlPanel from '@/components/ControlPanel';

const SpinnerPreview = () => {
  const [spinnerProps, setSpinnerProps] = useState({
    size: 'md',
    color: 'default',
    label: '',
    labelColor: 'foreground',
  });

  const handlePropChange = (prop, value) => {
    setSpinnerProps((prevProps) => ({
      ...prevProps,
      [prop]: value,
    }));
  };

  const options = {
    size: ['sm', 'md', 'lg'],
    color: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    labelColor: [
      'foreground',
      'primary',
      'secondary',
      'success',
      'warning',
      'danger',
    ],
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8 md:flex-row">
      <Preview title="Spinner">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Spinner
              size={spinnerProps.size}
              color={spinnerProps.color}
              label={spinnerProps.label}
              labelColor={spinnerProps.labelColor}
            />
            {spinnerProps.label && (
              <p className="mt-4 text-center text-gray-500">
                {spinnerProps.label}
              </p>
            )}
          </div>
        </div>
      </Preview>
      <ControlPanel name="Spinner Controls">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-default-700">Size</label>
            <select
              className="w-full rounded-lg border border-gray-200 p-2"
              value={spinnerProps.size}
              onChange={(e) => handlePropChange('size', e.target.value)}
            >
              {options.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-default-700">Color</label>
            <select
              className="w-full rounded-lg border border-gray-200 p-2"
              value={spinnerProps.color}
              onChange={(e) => handlePropChange('color', e.target.value)}
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
            value={spinnerProps.label}
            onChange={(e) => handlePropChange('label', e.target.value)}
          />
          <div className="flex flex-col gap-2">
            <label className="text-sm text-default-700">Label Color</label>
            <select
              className="w-full rounded-lg border border-gray-200 p-2"
              value={spinnerProps.labelColor}
              onChange={(e) => handlePropChange('labelColor', e.target.value)}
            >
              {options.labelColor.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      </ControlPanel>
    </div>
  );
};

export default SpinnerPreview;
