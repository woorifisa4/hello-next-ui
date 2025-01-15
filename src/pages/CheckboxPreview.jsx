import PreviewCard from "@/components/PreviewCard";
import ControlPanel from "@/components/ControlPanel";
import useCheckboxProps from "../utils/useCheckboxProps";

const CheckboxPreview = () => {
  const { props, handlePropChange } = useCheckboxProps();

  const options = {
    color: ["primary", "secondary", "success", "warning", "danger"],
    size: ["sm", "md", "lg"],
    radius: ["none", "sm", "md", "lg", "full"],
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-7xl mx-auto">
      <PreviewCard props={props} onPropChange={handlePropChange} />
      <ControlPanel props={props} onPropChange={handlePropChange} options={options} />
    </div>
  );
};

export default CheckboxPreview;
