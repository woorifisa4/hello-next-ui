import React from 'react';
import PreviewPagination from '@/components/pagination/PreviewPagination';
import ControlPanel from '@/components/ControlPanel';
import PaginationControls from '@/components/pagination/PaginationControls';
import { usePaginationProps } from '@/utils/usePaginationProps';

const PaginationPreview = () => {
  const { props, handlePropChange } = usePaginationProps();

  const generatedCode = `import { Pagination } from '@nextui-org/react';

    const CustomPagination = () => (
      <Pagination total={${props.total}} initialPage={${props.initialPage}} />
);`;

  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-center gap-8 p-8 md:flex-row">
      <PreviewPagination {...props} />
      <ControlPanel generatedCode={generatedCode}>
        <PaginationControls props={props} onPropChange={handlePropChange} />
      </ControlPanel>
    </div>
  );
};

export default PaginationPreview;
