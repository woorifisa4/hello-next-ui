import { useState } from 'react';
import Preview from '@/components/Preview.jsx';
import { Spinner } from '@nextui-org/react';
import ControlPanel from '@/components/ControlPanel';
import SelectControl from '@/components/SelectControl';
import TextInput from '@/components/TextInput';

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

  const generatedCode = `import { Spinner } from '@nextui-org/react';

const CustomSpinner = () => (
  <Spinner
    size="${spinnerProps.size}"
    color="${spinnerProps.color}"
    label="${spinnerProps.label}"
    labelColor="${spinnerProps.labelColor}"
  />
);`;

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
      <ControlPanel name="Spinner Controls" generatedCode={generatedCode}>
        <div className="flex flex-col gap-4">
          <SelectControl
            label="Size"
            tooltip="Select the size of the spinner"
            options={options.size.map((size) => ({ key: size, label: size }))}
            selectedKey={spinnerProps.size}
            onChange={(value) => handlePropChange('size', value)}
          />
          <SelectControl
            label="Color"
            tooltip="Select the color of the spinner"
            options={options.color.map((color) => ({
              key: color,
              label: color,
            }))}
            selectedKey={spinnerProps.color}
            onChange={(value) => handlePropChange('color', value)}
          />
          <TextInput
            label="Label"
            tooltip="Set a label for the spinner"
            value={spinnerProps.label}
            onChange={(value) => handlePropChange('label', value)}
          />
          <SelectControl
            label="Label Color"
            tooltip="Select the color of the label"
            options={options.labelColor.map((color) => ({
              key: color,
              label: color,
            }))}
            selectedKey={spinnerProps.labelColor}
            onChange={(value) => handlePropChange('labelColor', value)}
          />
        </div>
      </ControlPanel>
    </div>
  );
};

export default SpinnerPreview;
