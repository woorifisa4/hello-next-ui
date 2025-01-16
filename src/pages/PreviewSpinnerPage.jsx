import { useState } from 'react';
import SpinnerControlPanel from '@/components/spinner/SpinnerControlPanel.jsx';
import PreviewSpinner from '@/components/spinner/PreviewSpinner.jsx';

const PreviewSpinnerPage = () => {
  const [spinnerProps, setSpinnerProps] = useState({
    size: 'md',
    color: 'default',
    label: '',
    labelColor: 'foreground',
  });

  const handlePropChange = (prop, value) => {
    setSpinnerProps(prevProps => ({
      ...prevProps,
      [prop]: value,
    }));
  };

  const options = {
    size: ['sm', 'md', 'lg'],
    color: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    labelColor: ['foreground', 'primary', 'secondary', 'success', 'warning', 'danger'],
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8 md:flex-row">
      <PreviewSpinner props={spinnerProps} />
      <SpinnerControlPanel
        props={spinnerProps}
        onPropChange={handlePropChange}
        options={options}
      />
    </div>
  );
};

export default PreviewSpinnerPage;
