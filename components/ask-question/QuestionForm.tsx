'use client';
import React, { useCallback } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormItem from '../shared/form-elements/FormItem';
import FormLabel from '../shared/form-elements/FormLabel';
import { QuestionFormSchema } from '@/lib/validations';
import FormDescription from '../shared/form-elements/FormDescription';
import FormErrorMessage from '../shared/form-elements/FormErrorMessage';
import FormTinyMceEditor from '../shared/form-elements/FormTinyMceEditor';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import { createQuestion } from '@/lib/actions/question.action';
import { useRouter } from 'next/navigation';

type Schema = z.infer<typeof QuestionFormSchema>;

type Props = {
  isEdit?: boolean;
  mongoUserId: string;
};

const QuestionForm = ({ isEdit, mongoUserId }: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    setError,
    getValues,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({
    resolver: zodResolver(QuestionFormSchema),
    defaultValues: {
      title: '',
      explanation: '',
      tags: [],
    },
  });

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const tagsMaxLength = 15;
    const maxTagsAllowed = 3;

    if (e.key === 'Enter') {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tag = tagInput.value.trim();
      const hookFormTagsValue = getValues('tags');

      if (!tag) {
        return clearErrors('tags');
      }

      if (tag.length > tagsMaxLength) {
        return setError('tags', { type: 'required', message: 'A tag must have a maximum of 15 characters' });
      }

      if (hookFormTagsValue.length >= maxTagsAllowed) {
        return setError('tags', { type: 'required', message: 'Maximum tags amount exceeded' });
      }

      if (hookFormTagsValue.includes(tag)) {
        return setError('tags', {
          type: 'required',
          message: 'You already gave this tag, please choose a different name',
        });
      }

      setValue('tags', [...hookFormTagsValue, tag], { shouldValidate: true });
      tagInput.value = '';
      clearErrors('tags');
    }
  };

  const handleTagRemove = (tag: string) => {
    const newTags = getValues('tags').filter((t) => t !== tag);
    setValue('tags', newTags, { shouldValidate: true });
  };

  const renderSubmitButtonText = useCallback(() => {
    if (isSubmitting) {
      return isEdit ? 'Editing...' : 'Posting...';
    }
    return isEdit ? 'Edit Question' : 'Post Question';
  }, [isEdit, isSubmitting]);

  const onSubmit = async (data: Schema) => {
    try {
      await createQuestion({
        title: data.title,
        content: data.explanation,
        tags: data.tags,
        author: JSON.parse(mongoUserId),
        path: '/',
      });
      router.push('/');
    } catch (e) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-10">
      <FormItem>
        <FormLabel required htmlFor="title">
          Question Title
        </FormLabel>
        <Input {...register('title')} className="text-input" />
        <FormDescription>Be specific and imagine you are asking a question to another person.</FormDescription>
        <FormErrorMessage error={!!errors.title?.message}>{errors.title?.message}</FormErrorMessage>
      </FormItem>

      <FormItem className="gap-3">
        <FormLabel required htmlFor="explanation">
          Detail explanation of your problem
        </FormLabel>

        <Controller
          name="explanation"
          control={control}
          render={({ field }) => <FormTinyMceEditor onChange={field.onChange} onBlur={field.onBlur} id="explanation" />}
        />

        <FormDescription>
          Introduce the problem and expand on what you put in the title. Minimum 20 characters.
        </FormDescription>
        <FormErrorMessage error={!!errors.explanation?.message}>{errors.explanation?.message}</FormErrorMessage>
      </FormItem>

      <FormItem>
        <FormLabel required htmlFor="tags">
          Tags
        </FormLabel>
        <Input onKeyDown={handleInputKeyDown} className="text-input" />
        <FormDescription>
          Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.
        </FormDescription>
        <FormErrorMessage error={!!errors.tags?.message}>{errors.tags?.message}</FormErrorMessage>

        {getValues('tags').length ? (
          <div className="flex-start mt-2.5 gap-2.5">
            {getValues('tags').map((tag: string, key) => (
              <Badge
                key={`${tag}-element-${key}`}
                onClick={() => handleTagRemove(tag)}
                className="subtle-medium background-light800_dark300 text-light400_light500 flex cursor-pointer items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
              >
                {tag}
                <Image src="/assets/icons/close.svg" alt="Close icon" width={12} height={12} className="dark:invert" />
              </Badge>
            ))}
          </div>
        ) : null}
      </FormItem>

      <PrimaryButton type="submit" className="primary-gradient mt-0 min-h-[56px] sm:w-[200px]" disabled={isSubmitting}>
        {renderSubmitButtonText()}
      </PrimaryButton>
    </form>
  );
};

export default QuestionForm;
