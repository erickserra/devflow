import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  questions: Array<{
    id: string;
    title: string;
  }>;
};

const PopularQuestions = ({ questions }: Props) => {
  if (!questions.length) return null;

  return questions.map((question) => (
    <Link
      key={question.title}
      href={`/questions/${question.id}`}
      className="group flex cursor-pointer items-center justify-between gap-7"
    >
      <p className="body-medium text-dark-500 transition-all group-hover:text-light-500 dark:text-light-700 group-hover:dark:text-primary-500">
        {question.title}
      </p>

      <Image
        src="/assets/icons/chevron-right.svg"
        alt="chevron right"
        width={20}
        height={20}
        className="invert-colors"
      />
    </Link>
  ));
};

export default PopularQuestions;
