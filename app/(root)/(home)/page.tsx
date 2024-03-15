import SearchFilters from '@/components/home/SearchFilters';
import PrimaryButton from '@/components/shared/buttons/PrimaryButton';
import QuestionCard from '@/components/shared/cards/QuestionCard';
import SelectFilter from '@/components/shared/filters/SelectFilter';
import { NoResults } from '@/components/shared/no-results/NoResults';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { HomePageFilters } from '@/constants/filters';
import { getQuestions } from '@/lib/actions/question.action';
import Link from 'next/link';

export default async function Home() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fodase');
    }, 3000);
  });
  const questionsResponse = await getQuestions({});

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <PrimaryButton className="primary-gradient bg-none px-4 py-3 !text-light-900">Ask a Question</PrimaryButton>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <SelectFilter
          filters={HomePageFilters}
          classes="min-h-[66px] w-full sm:min-w-[170px] rounded-[10px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <div>
        <SearchFilters />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {questionsResponse?.questions?.length ? (
          questionsResponse.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResults
            title="There is no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. Your query could be the next big thing others learn from. Get involved! 💡"
            link="/"
            linkText="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
