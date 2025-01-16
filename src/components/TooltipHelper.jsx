import React from 'react';
import { Tooltip } from '@nextui-org/react';

const CustomTooltipContent = ({ message }) => {
  // \n을 <br />로 변환
  const formattedMessage = message.split('\\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
      {formattedMessage}
    </div>
  );
};

const TooltipHelper = ({ message }) => {
  return (
    <Tooltip
      content={<CustomTooltipContent message={message} />}
      placement="right"
    >
      <span className="cursor-pointer text-gray-500">ⓘ</span>
    </Tooltip>
  );
};

export default TooltipHelper;
