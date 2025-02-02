import { forwardRef } from 'react';

type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  className?: string;
};
// 테이블 컴포넌트
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className = '', ...props }, ref) => (
    <div className='w-full overflow-auto'>
      <table
        ref={ref}
        className={`table-fixed w-full caption-bottom text-sm ${className}`}
        {...props}
      />
    </div>
  ),
);
Table.displayName = 'Table';
