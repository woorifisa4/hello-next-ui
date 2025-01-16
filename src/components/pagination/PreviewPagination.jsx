import React from 'react';
import { Card, CardBody, Pagination } from '@nextui-org/react';

const PreviewPagination = (props) => {
  return (
    <Card className="flex-1">
      <CardBody>
        <h2 className="mb-6 text-2xl font-bold">Preview Pagination</h2>
        <Pagination
          total={props.total}
          initialPage={props.initialPage}
          size={props.size}
          color={props.color}
          showShadow={props.showShadow} // 수정
          loop={props.loop}
          siblings={props.siblings}
          boundaries={props.boundaries}
          isDisabled={props.isDisabled} // 수정
          isCompact={props.isCompact} // 수정
          variant={props.variant}
          onChange={(page) => console.log('Page changed to:', page)}
          showControls={props.control}
          className="flex justify-center"
        />
        <p className="mt-4 text-center text-gray-500">
          Current Page: {props.initialPage} / {props.total}
        </p>
      </CardBody>
    </Card>
  );
};

export default PreviewPagination;
