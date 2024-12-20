import { cn } from '@/lib/utils';
import React from 'react';

const DividerLine = ({className}: {className?: string}) => {
  return (
    <svg
      className={cn('mt-4',className)}
      width="100%"
      height="2" // Adjust the height as needed
      viewBox="0 0 100 2"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="1"
        x2="100"
        y2="1"
        stroke="currentColor" // Use currentColor to inherit text color
        strokeWidth="2"
      />
    </svg>
  );
};

export default DividerLine;
