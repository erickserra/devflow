import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  isAuthor?: boolean;
  textStyles?: string;
  href?: string;
};

const Metric = ({ imgUrl, alt, value, title, textStyles, isAuthor, href }: Props) => {
  const Element = href ? Link : 'div';

  return (
    <div className="flex-center flex-wrap gap-1">
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`size-[16px] object-cover ${href ? 'rounded-full' : ' '}`}
      />

      <Element href={href || ''} className={`body-medium flex items-center gap-1 ${textStyles}`}>
        <span>{value}</span>
        <span className={`small-regular line-clamp-1 ${isAuthor ? 'max-sm:hidden' : ''}`}>{title}</span>
      </Element>
    </div>
  );
};

export default Metric;
