import QuestionForm from '@/components/ask-question/QuestionForm';
import React from 'react';

const AskQuestionPage = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
};

export default AskQuestionPage;
