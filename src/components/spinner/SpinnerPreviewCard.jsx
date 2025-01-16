import { Spinner } from '@nextui-org/react';

const PreviewSpinner = ({ props }) => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <Spinner
          size={props.size}
          color={props.color}
          label={props.label}
          labelColor={props.labelColor}
        />
        {props.label && (
          <p className="mt-4 text-center text-gray-500">
            {props.label}
          </p>
        )}
      </div>
    </div>
  );
};

export default PreviewSpinner;
