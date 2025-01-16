import PreviewCheckbox from '@/components/checkbox/PreviewCheckbox';
import CheckboxControlPanel from '@/components/checkbox/CheckboxControlPanel';
import useCheckboxProps from '../utils/useCheckboxProps';

const PreviewCheckboxPage = () => {
  const { props, handlePropChange } = useCheckboxProps();

  const options = {
    color: ['primary', 'secondary', 'success', 'warning', 'danger'],
    size: ['sm', 'md', 'lg'],
    radius: ['none', 'sm', 'md', 'lg', 'full'],
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8 md:flex-row">
      <PreviewCheckbox props={props} onPropChange={handlePropChange} />
      <CheckboxControlPanel
        props={props}
        onPropChange={handlePropChange}
        options={options}
      />
    </div>
  );
};

export default PreviewCheckboxPage;
