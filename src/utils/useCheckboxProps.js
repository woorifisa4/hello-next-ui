import { useState } from 'react';

const useCheckboxProps = () => {
  const [props, setProps] = useState({
    label: 'Checkbox label',
    isSelected: false,
    isDisabled: false,
    color: 'primary',
    radius: 'sm',
    size: 'md',
    lineThrough: false,
    className: '',
    scale: 1,
  });

  const handlePropChange = (prop, value) => {
    setProps((prev) => ({ ...prev, [prop]: value }));
  };

  return { props, handlePropChange };
};

export default useCheckboxProps;
