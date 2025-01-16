import { Card, CardBody, Switch } from '@nextui-org/react'; // Input 제거

const SelectControlPanel = ({ props, onPropChange, options }) => {
  return (
    <Card className="w-full md:w-96">
      <CardBody>
        <h2 className="mb-6 text-2xl font-bold">Controls</h2>
        <div className="flex flex-col gap-8">
          {/* Label Input */}
          <div className="flex flex-col gap-1">
            <label className="text-default-700 pb-1 text-xl">Label</label>
            <input
              type="text"
              value={props.label}
              onChange={(e) => onPropChange('label', e.target.value)}
              className="bg-default-100 border-default-200 focus:border-primary h-12 w-full rounded-lg border-2 px-3 text-xl focus:outline-none"
            />
          </div>

          {/* Placeholder Input */}
          <div className="flex flex-col gap-1">
            <label className="text-default-700 pb-1 text-xl">Placeholder</label>
            <input
              type="text"
              value={props.placeholder}
              onChange={(e) => onPropChange('placeholder', e.target.value)}
              className="bg-default-100 border-default-200 focus:border-primary h-12 w-full rounded-lg border-2 px-3 text-xl focus:outline-none"
            />
          </div>

          {['variant', 'color', 'size', 'radius', 'labelPlacement'].map(
            (prop) => (
              <div key={prop} className="flex flex-col gap-1">
                <label className="text-default-700 pb-1 text-xl">
                  {prop.charAt(0).toUpperCase() + prop.slice(1)}
                </label>
                <select
                  value={props[prop]}
                  onChange={(e) => onPropChange(prop, e.target.value)}
                  className="bg-default-100 border-default-200 focus:border-primary h-12 w-full rounded-lg border-2 px-3 text-xl focus:outline-none"
                >
                  {options[prop].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )
          )}

          {/* Custom className Input */}
          <div className="flex flex-col gap-1">
            <label className="text-default-700 pb-1 text-xl">
              Custom className
            </label>
            <input
              type="text"
              value={props.className}
              onChange={(e) => onPropChange('className', e.target.value)}
              className="bg-default-100 border-default-200 focus:border-primary h-12 w-full rounded-lg border-2 px-3 text-xl focus:outline-none"
            />
          </div>

          <Switch
            isSelected={props.isDisabled}
            onChange={(e) => onPropChange('isDisabled', e.target.checked)}
            className="text-xl"
          >
            Disabled
          </Switch>
        </div>
      </CardBody>
    </Card>
  );
};

export default SelectControlPanel;
