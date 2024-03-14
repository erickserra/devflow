import React from 'react';

type Props = {
  error: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

const FormErrorMessage = ({ error, className = '', ...props }: Props) => {
  if (!error) return null;
  return <p className={`body-regular text-red-500 ${className}`} {...props} />;
};

export default FormErrorMessage;
