import { useState } from 'react';

const useBadgeProps = () => {
  const [props, setProps] = useState({
    color: 'primary',
    content: 'default',
    size: 'md',
    variant:'solid',
    placement:'top-right',
  });

  const handlePropChange = (prop, value) => {
    setProps((prev) => ({ ...prev, [prop]: value }));
  };

  return { props, handlePropChange };
};

export default useBadgeProps;
