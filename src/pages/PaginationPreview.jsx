import React from 'react';
import ControlPanel from '@/components/ControlPanel';
import InputControl from '@/components/InputControl';
import SelectControl from '@/components/SelectControl';
import SwitchControl from '@/components/SwitchControl';
import { usePaginationProps } from '@/utils/usePaginationProps';
import Preview from '@/components/Preview';
import { Pagination } from '@nextui-org/react';

const PaginationPreview = () => {
  const { props, handlePropChange } = usePaginationProps();

  const generatedCode = `import { Pagination } from '@nextui-org/react';

const CustomPagination = () => (
  <Pagination
    total={${props.total}}
    initialPage={${props.initialPage}}
    size="${props.size}"
    color="${props.color}"
    showShadow={${props.showShadow}}
    loop={${props.loop}}
    siblings={${props.siblings}}
    boundaries={${props.boundaries}}
    isDisabled={${props.isDisabled}}
    isCompact={${props.isCompact}}
    variant="${props.variant}"
    showControls={${props.control}}
    onChange={(page) => console.log('Page changed to:', page)}
    className="flex justify-center"
  />
);`;

  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-center gap-8 p-8 md:flex-row">
      <Preview title="Preview Pagination">
        <Pagination
          total={props.total}
          initialPage={props.initialPage}
          size={props.size}
          color={props.color}
          showShadow={props.showShadow}
          loop={props.loop}
          siblings={props.siblings}
          boundaries={props.boundaries}
          isDisabled={props.isDisabled}
          isCompact={props.isCompact}
          variant={props.variant}
          onChange={(page) => console.log('Page changed to:', page)}
          showControls={props.control}
          className="flex justify-center"
        />
        <p className="mt-4 text-center text-gray-500">
          Current Page: {props.initialPage} / {props.total}
        </p>
      </Preview>
      <ControlPanel name="Pagination" generatedCode={generatedCode}>
        <div className="flex flex-col gap-4">
          <InputControl
            label="Total Pages"
            tooltip="Total number of pages in the pagination.\nDefault: 1.\nAllowed values: 1 or more."
            type="number"
            value={props.total}
            minValue={1}
            onChange={(value) => handlePropChange('total', value)}
          />
          <InputControl
            label="Initial Page"
            tooltip="The page to be displayed first.\nDefault: 1.\nAllowed values: 1 or more."
            type="number"
            value={props.initialPage}
            minValue={1}
            onChange={(value) => handlePropChange('initialPage', value)}
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
            onChange={(value) => handlePropChange('size', value)}
          />
          <SwitchControl
            label="Compact Mode"
            tooltip="Enables compact mode for pagination.\nDefault: false.\nAllowed values: true or false."
            isSelected={props.isCompact}
            onChange={(checked) => handlePropChange('isCompact', checked)}
          />
          <SwitchControl
            label="Shadow"
            tooltip="Enables shadow effect for pagination.\nDefault: false.\nAllowed values: true or false."
            isSelected={props.showShadow}
            onChange={(checked) => handlePropChange('showShadow', checked)}
          />
          <SwitchControl
            label="Loop"
            tooltip="Enables looping of pages in pagination.\nDefault: false.\nAllowed values: true or false."
            isSelected={props.loop}
            onChange={(checked) => handlePropChange('loop', checked)}
          />
          <SwitchControl
            label="Control"
            tooltip="Enables looping of pages in pagination.\nDefault: false.\nAllowed values: true or false."
            isSelected={props.control}
            onChange={(checked) => handlePropChange('control', checked)}
          />
          <SwitchControl
            label="Disabled"
            tooltip="Disables the pagination component.\nDefault: false.\nAllowed values: true or false."
            isSelected={props.isDisabled}
            onChange={(checked) => handlePropChange('isDisabled', checked)}
          />
          <InputControl
            label="Siblings"
            tooltip="Number of sibling pages to show on each side of the current page.\nDefault: 1.\nAllowed values: 0 or more."
            type="number"
            value={props.siblings}
            minValue={0}
            onChange={(value) => handlePropChange('siblings', value)}
          />
          <InputControl
            label="Boundaries"
            tooltip="Number of boundary pages to show at the beginning and end.\nDefault: 1.\nAllowed values: 0 or more."
            type="number"
            value={props.boundaries}
            minValue={0}
            onChange={(value) => handlePropChange('boundaries', value)}
          />
        </div>
      </ControlPanel>
    </div>
  );
};

export default PaginationPreview;
