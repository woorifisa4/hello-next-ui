import { useState } from 'react';

export const usePaginationProps = () => {
  const [props, setProps] = useState({
    total: 1,
    initialPage: 1,
    size: 'md',
    color: 'default',
    variant: 'flat',
    isCompact: false,
    loop: false,
    showShadow: false,
    isDisabled: false,
    control: false,
    siblings: 1,
    boundaries: 1,
  });

  const handlePropChange = (key, value) => {
    setProps((prevProps) => ({
      ...prevProps,
      [key]: value,
    }));
  };

  return { props, handlePropChange };
};
