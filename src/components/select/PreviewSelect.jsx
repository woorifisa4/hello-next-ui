import { Card, CardBody } from '@nextui-org/react';
import { Select, SelectItem } from '@nextui-org/react';

const PreviewSelect = ({ props, onPropChange }) => {
  return (
    <Card className="flex-1">
      <CardBody>
        <h2 className="mb-6 text-2xl font-bold">Preview</h2>
        <div className="flex items-center justify-center rounded-xl bg-gray-400 p-8">
          <div className="w-[320px]">
            <Select
              items={props.items}
              variant={props.variant}
              label={props.label}
              placeholder={props.placeholder}
              selectionMode="single"
              className={`max-w-xs ${props.className}`}
              selectedKeys={props.selectedKeys}
              onSelectionChange={(keys) => onPropChange('selectedKeys', keys)}
              color={props.color}
              size={props.size}
              radius={props.radius}
              labelPlacement={props.labelPlacement}
              isDisabled={props.isDisabled}
              isRequired={props.isRequired}
              isInvalid={props.isInvalid}
              disableAnimation={false}
              classNames={{
                base: 'w-full',
                trigger: `h-unit-14 min-h-unit-14 ${props.color === 'default' ? '' : 'text-' + props.color}`,
                value: `${props.color === 'default' ? '' : 'text-' + props.color}-600`,
                innerWrapper: 'p-2',
                listbox: 'p-0',
              }}
              itemHeight={40}
              maxListboxHeight={200}
              fullWidth
            >
              {(item) => (
                <SelectItem key={item.value} className="h-unit-12">
                  {item.label}
                </SelectItem>
              )}
            </Select>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PreviewSelect;
