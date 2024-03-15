import QuestionForm from '@/components/ask-question/QuestionForm';
import { getUserById } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const AskQuestionPage = async () => {
  const { userId } = auth();
  if (!userId) redirect('/sign-in');

  const mongoUser = await getUserById({ userId });
  if (!mongoUser) redirect('/sign-in');

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <QuestionForm mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default AskQuestionPage;
