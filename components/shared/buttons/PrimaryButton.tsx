import { Button } from '@/components/ui/button';
import React from 'react';

type Props = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = (props: Props) => {
  return (
    <Button
      {...props}
      className={`paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4
        py-3 text-light-900 ring-primary-500 ring-offset-2 transition-all
        hover:bg-primary-500 hover:brightness-110 active:ring-2 dark:bg-primary-500
        dark:text-light-900 ${props.className} ring-none border-none shadow-none outline-none ring-primary-500 ring-offset-transparent`}
    />
  );
};

export default PrimaryButton;
