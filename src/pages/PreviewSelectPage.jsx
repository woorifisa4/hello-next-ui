import PreviewSelect from '@/components/select/PreviewSelect';
import SelectControlPanel from '@/components/select/SelectControlPanel';
import useSelectProps from '../utils/useSelectProps';

const PreviewSelectPage = () => {
  const { props, handlePropChange } = useSelectProps();

  const options = {
    variant: ['flat', 'bordered', 'faded', 'underlined'],
    color: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    size: ['sm', 'md', 'lg'],
    radius: ['none', 'sm', 'md', 'lg', 'full'],
    labelPlacement: ['inside', 'outside', 'outside-left'],
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8 md:flex-row">
      <PreviewSelect props={props} onPropChange={handlePropChange} />
      <SelectControlPanel
        props={props}
        onPropChange={handlePropChange}
        options={options}
      />
    </div>
  );
};

export default PreviewSelectPage;
