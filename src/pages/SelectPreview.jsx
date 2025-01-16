import useSelectProps from '@/utils/useSelectProps';
import Preview from '@/components/Preview';
import ControlPanel from '@/components/ControlPanel';
import { Select, SelectItem } from '@nextui-org/react';
import TextInput from '@/components/TextInput';
import SelectControl from '@/components/SelectControl';
import SwitchControl from '@/components/SwitchControl';

const SelectPreview = () => {
  const { props, handlePropChange } = useSelectProps();

  const options = {
    variant: ['flat', 'bordered', 'faded', 'underlined'],
    color: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    size: ['sm', 'md', 'lg'],
    radius: ['none', 'sm', 'md', 'lg', 'full'],
    labelPlacement: ['inside', 'outside', 'outside-left'],
  };

  const generatedCode = `import { Select, SelectItem } from '@nextui-org/react';

const CustomSelect = () => {
  return (
    <Select
      items={[
        ${props.items
          .map((item) => `{ value: "${item.value}", label: "${item.label}" }`)
          .join(',\n        ')}
      ]}
      variant="${props.variant}"
      label="${props.label}"
      placeholder="${props.placeholder}"
      selectionMode="single"
      className="max-w-xs ${props.className}"
      selectedKeys={${JSON.stringify(props.selectedKeys)}}
      onSelectionChange={(keys) => console.log('Selected keys:', keys)}
      color="${props.color}"
      size="${props.size}"
      radius="${props.radius}"
      labelPlacement="${props.labelPlacement}"
      isDisabled={${props.isDisabled}}
      isRequired={${props.isRequired}}
      isInvalid={${props.isInvalid}}
      itemHeight={40}
      maxListboxHeight={200}
      fullWidth
    >
      {[
        ${props.items
          .map(
            (item) =>
              `<SelectItem key="${item.value}">${item.label}</SelectItem>`
          )
          .join(',\n        ')}
      ]}
    </Select>
  );
};
`;

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8 md:flex-row">
      <Preview>
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
              onSelectionChange={(keys) =>
                handlePropChange('selectedKeys', keys)
              }
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
      </Preview>
      <ControlPanel name="Select" generatedCode={generatedCode}>
        <div className="flex flex-col gap-8">
          <TextInput
            label="Label"
            value={props.label}
            onChange={(value) => handlePropChange('label', value)}
          />

          <TextInput
            label="Placeholder"
            value={props.placeholder}
            onChange={(value) => handlePropChange('placeholder', value)}
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
                onChange={(value) => handlePropChange(prop, value)}
              />
            )
          )}

          <TextInput
            label="Custom className"
            value={props.className}
            onChange={(value) => handlePropChange('className', value)}
          />

          <SwitchControl
            label="Disabled"
            isSelected={props.isDisabled}
            onChange={(checked) => handlePropChange('isDisabled', checked)}
          />
        </div>
      </ControlPanel>
    </div>
  );
};

export default SelectPreview;
