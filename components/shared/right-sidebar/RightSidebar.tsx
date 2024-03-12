import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Tag from '@/components/shared/tag/Tag';
import PopularQuestions from './PopularQuestions';

const hotQuestions = [
  {
    id: '1',
    title: 'How do I use express as a custom server in NextJS?',
  },
  {
    id: '2',
    title: 'How do I use express as a custom server in NextJS?',
  },
  {
    id: '3',
    title: 'How do I use express as a custom server in NextJS?',
  },
  {
    id: '4',
    title: 'How do I use express as a custom server in NextJS?',
  },
  {
    id: '5',
    title: 'How do I use express as a custom server in NextJS?',
  },
];

const popularTags = [
  {
    id: '1',
    title: 'Javascript',
    totalQuestions: 5,
  },
  {
    id: '2',
    title: 'React',
    totalQuestions: 55,
  },
  {
    id: '3',
    title: 'AngularJS',
    totalQuestions: 15,
  },
  {
    id: '4',
    title: 'Redux',
    totalQuestions: 10,
  },
  {
    id: '5',
    title: 'VueJS',
    totalQuestions: 2,
  },
];

const RightSidebar = () => {
  return (
    <aside
      className="background-light900_dark200 custom-scrollbar light-border fixed inset-y-0
    right-0 flex w-[350px] flex-col overflow-y-auto border-l p-6 pt-[130px]
    shadow-light-300 dark:shadow-none max-xl:hidden"
    >
      <section>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          <PopularQuestions questions={hotQuestions} />
        </div>
      </section>
      <section className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <Tag key={tag.id} name={tag.title} _id={tag.id} totalQuestions={tag.totalQuestions} showCount />
          ))}
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
