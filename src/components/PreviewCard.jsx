import { Card, CardBody } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";

const PreviewCard = ({ props, onPropChange }) => {
  return (
    <Card className="flex-1">
      <CardBody>
        <h2 className="text-2xl font-bold mb-6">Preview</h2>
        <div
          className="rounded-xl flex items-center justify-center"
          style={{ transform: `scale(${props.scale})` }}
        >
          <Checkbox
            isSelected={props.isSelected}
            onChange={(e) => onPropChange("isSelected", e.target.checked)}
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
        <p className="text-gray-500 text-center mt-4">Scale: {props.scale}x</p>
      </CardBody>
    </Card>
  );
};

export default PreviewCard;
