import { Card, CardBody } from '@nextui-org/react';
import { Input, Switch } from '@nextui-org/react';

const ControlPanel = ({ props, onPropChange, options }) => {
  return (
    <Card className="w-full md:w-96">
      <CardBody>
        <h2 className="mb-6 text-2xl font-bold">Controls</h2>
        <div className="flex flex-col gap-4">
          <Input
            label="Label"
            value={props.label}
            onChange={(e) => onPropChange('label', e.target.value)}
          />

          <div className="flex flex-col gap-2">
            <p className="text-default-700 text-sm">Color</p>
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

          <div className="flex flex-col gap-2">
            <p className="text-default-700 text-sm">Size</p>
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
            <p className="text-default-700 text-sm">Radius</p>
            <select
              className="w-full rounded-lg border border-gray-200 p-2"
              value={props.radius}
              onChange={(e) => onPropChange('radius', e.target.value)}
            >
              {options.radius.map((radius) => (
                <option key={radius} value={radius}>
                  {radius}
                </option>
              ))}
            </select>
          </div>

          <Input
            label="Custom className"
            value={props.className}
            onChange={(e) => onPropChange('className', e.target.value)}
          />

          <Switch
            isSelected={props.isDisabled}
            onChange={(e) => onPropChange('isDisabled', e.target.checked)}
          >
            Disabled
          </Switch>

          <Switch
            isSelected={props.lineThrough}
            onChange={(e) => onPropChange('lineThrough', e.target.checked)}
          >
            Line Through
          </Switch>

          <div className="flex flex-col gap-2">
            <p className="text-default-700 text-sm">Scale</p>
            <input
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={props.scale}
              onChange={(e) =>
                onPropChange('scale', parseFloat(e.target.value))
              }
              className="w-full"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ControlPanel;
