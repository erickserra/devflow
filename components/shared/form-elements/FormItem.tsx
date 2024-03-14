import React from 'react';

const FormItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={`flex w-full flex-col gap-2.5 ${className}`} {...props} />;
};

export default FormItem;
