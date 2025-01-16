import { Card, CardBody } from '@nextui-org/react';
import TextInput from './TextInput';
import SelectControl from './pagination/SelectControl';
import SwitchControl from './pagination/SwitchControl';

const SelectControlPanel = ({ props, onPropChange, options }) => {
  return (
    <Card className="w-full md:w-96">
      <CardBody>
        <h2 className="mb-6 text-2xl font-bold">Controls</h2>
        <div className="flex flex-col gap-8">
          <TextInput
            label="Label"
            value={props.label}
            onChange={(value) => onPropChange('label', value)}
          />

          <TextInput
            label="Placeholder"
            value={props.placeholder}
            onChange={(value) => onPropChange('placeholder', value)}
          />

          {['variant', 'color', 'size', 'radius', 'labelPlacement'].map(
            (prop) => (
              <SelectControl
                key={prop}
                label={prop.charAt(0).toUpperCase() + prop.slice(1)}
                tooltip={prop}
                selectedKey={props[prop]}
                options={options[prop].map((option) => ({
                  key: option,
                  label: option,
                }))}
                onChange={(value) => onPropChange(prop, value)}
              />
            )
          )}

          <TextInput
            label="Custom className"
            value={props.className}
            onChange={(value) => onPropChange('className', value)}
          />

          <SwitchControl
            label="Disabled"
            isSelected={props.isDisabled}
            onChange={(checked) => onPropChange('isDisabled', checked)}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default SelectControlPanel;
