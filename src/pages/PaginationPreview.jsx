import React from 'react';
import ControlPanel from '@/components/ControlPanel';
import PaginationControls from '@/components/pagination/PaginationControls';
import { usePaginationProps } from '@/utils/usePaginationProps';
import Preview from '@/components/Preview';
import { Pagination } from '@nextui-org/react';

const PaginationPreview = () => {
  const { props, handlePropChange } = usePaginationProps();

  const generatedCode = `import { Pagination } from '@nextui-org/react';

    const CustomPagination = () => (
      <Pagination total={${props.total}} initialPage={${props.initialPage}} />
);`;

  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-center gap-8 p-8 md:flex-row">
      <Preview title="Preview Pagination">
        <Pagination
          total={props.total}
          initialPage={props.initialPage}
          size={props.size}
          color={props.color}
          showShadow={props.showShadow}
          loop={props.loop}
          siblings={props.siblings}
          boundaries={props.boundaries}
          isDisabled={props.isDisabled}
          isCompact={props.isCompact}
          variant={props.variant}
          onChange={(page) => console.log('Page changed to:', page)}
          showControls={props.control}
          className="flex justify-center"
        />
        <p className="mt-4 text-center text-gray-500">
          Current Page: {props.initialPage} / {props.total}
        </p>
      </Preview>
      <ControlPanel name="Pagination" generatedCode={generatedCode}>
        <PaginationControls props={props} onPropChange={handlePropChange} />
      </ControlPanel>
    </div>
  );
};

export default PaginationPreview;
