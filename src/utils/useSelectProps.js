import { useState } from 'react';

const useSelectProps = () => {
  const [props, setProps] = useState({
    label: 'Select an animal',
    variant: 'flat',
    color: 'default',
    size: 'md',
    radius: 'md',
    labelPlacement: 'inside',
    placeholder: 'Select an option',
    className: '',
    isDisabled: false,
    isRequired: false,
    isInvalid: false,
    fullWidth: true,
    items: [
      { label: 'Cat', value: 'cat' },
      { label: 'Dog', value: 'dog' },
      { label: 'Bird', value: 'bird' },
    ],
    selectedKeys: new Set([]),
  });

  const handlePropChange = (prop, value) => {
    setProps((prev) => ({ ...prev, [prop]: value }));
  };

  return { props, handlePropChange };
};

export default useSelectProps;
