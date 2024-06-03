import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const CnComponent = ({ className, additionalClasses, children }) => {
  const combinedClasses = cn(className, additionalClasses);

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default CnComponent;
