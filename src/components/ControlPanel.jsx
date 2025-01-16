import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import CopyButton from './CopyButton'; // 기존 CopyButton 컴포넌트 재사용

const ControlPanel = ({ children, generatedCode }) => {
  return (
    <Card className="w-full md:w-96">
      <CardBody>
        <h2 className="mb-6 text-2xl font-bold">Control Panel</h2>
        {children}

        {/* Code Copy Section */}
        {generatedCode && <CopyButton textToCopy={generatedCode} />}
      </CardBody>
    </Card>
  );
};

export default ControlPanel;
