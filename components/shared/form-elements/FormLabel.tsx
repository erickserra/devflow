import React from 'react';

type Props = {
  required?: boolean;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const FormLabel = ({ required = false, className = '', children, ...props }: Props) => {
  const renderRequiredLabel = () => {
    if (!required) return null;
    return <span className="small-medium ml-1 text-red-400">*</span>;
  };

  return (
    <label className={`paragraph-semibold text-dark400_light800 block ${className}`}>
      {children}
      {renderRequiredLabel()}
    </label>
  );
};

export default FormLabel;
