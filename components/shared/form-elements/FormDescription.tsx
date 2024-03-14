import React from 'react';

const FormDescription = ({ className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={'body-regular text-light-500' + className} {...props} />;
};

export default FormDescription;
