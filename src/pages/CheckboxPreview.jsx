import PreviewCard from '@/components/checkbox/PreviewCard';
import ControlPanel from '@/components/checkbox/ControlPanel';
import useCheckboxProps from '../utils/useCheckboxProps';

const CheckboxPreview = () => {
  const { props, handlePropChange } = useCheckboxProps();

  const options = {
    color: ['primary', 'secondary', 'success', 'warning', 'danger'],
    size: ['sm', 'md', 'lg'],
    radius: ['none', 'sm', 'md', 'lg', 'full'],
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8 md:flex-row">
      <PreviewCard props={props} onPropChange={handlePropChange} />
      <ControlPanel
        props={props}
        onPropChange={handlePropChange}
        options={options}
      />
    </div>
  );
};

export default CheckboxPreview;
