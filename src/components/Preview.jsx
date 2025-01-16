import { Card, CardBody } from '@nextui-org/react';

const Preview = ({ title, children }) => {
  return (
    <Card className="flex-1">
      <CardBody>
        {title && <h2 className="mb-6 text-2xl font-bold">{title}</h2>}
        {children}
      </CardBody>
    </Card>
  );
};

export default Preview;
