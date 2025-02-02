import { forwardRef } from 'react';

type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  className?: string;
};

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className = '', ...props }, ref) => (
    <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} {...props} />
  ),
);
TableBody.displayName = 'TableBody';
