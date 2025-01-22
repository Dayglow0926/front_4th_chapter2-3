import { forwardRef, HTMLAttributes } from 'react';

type CardHeaderProps = HTMLAttributes<HTMLElement> & {
  className?: string;
};

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
  ),
);

CardHeader.displayName = 'CardHeader';