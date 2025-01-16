import { Card, CardBody } from '@nextui-org/react';
import { Checkbox } from '@nextui-org/react';

const PreviewCheckbox = ({ props, onPropChange }) => {
  return (
    <Card className="flex-1">
      <CardBody>
        <h2 className="mb-6 text-2xl font-bold">Preview</h2>
        <div
          className="flex items-center justify-center rounded-xl"
          style={{ transform: `scale(${props.scale})` }}
        >
          <Checkbox
            isSelected={props.isSelected}
            onChange={(e) => onPropChange('isSelected', e.target.checked)}
            color={props.color}
            size={props.size}
            radius={props.radius}
            isDisabled={props.isDisabled}
            lineThrough={props.lineThrough}
            className={props.className}
          >
            {props.label}
          </Checkbox>
        </div>
        <p className="mt-4 text-center text-gray-500">Scale: {props.scale}x</p>
      </CardBody>
    </Card>
  );
};

export default PreviewCheckbox;
