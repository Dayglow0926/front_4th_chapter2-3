import { forwardRef } from 'react';

type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
  className?: string;
};

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className = '', ...props }, ref) => (
    <th
      ref={ref}
      className={`h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
      {...props}
    />
  ),
);
TableHead.displayName = 'TableHead';
